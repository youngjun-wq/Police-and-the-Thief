import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '10mb' }));

  // Enable CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // Persistent in-memory & file storage for chase roster
  const DATA_FILE = path.join(process.cwd(), 'roster_state.json');
  let currentMembers: any[] = [];

  try {
    if (fs.existsSync(DATA_FILE)) {
      currentMembers = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('Error reading roster_state.json', e);
  }

  // Active SSE connections
  let sseClients: express.Response[] = [];

  // SSE Realtime Sync Endpoint
  app.get('/api/sync/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders();

    if (currentMembers && currentMembers.length > 0) {
      res.write(`data: ${JSON.stringify({ type: 'init', members: currentMembers })}\n\n`);
    }

    sseClients.push(res);

    req.on('close', () => {
      sseClients = sseClients.filter(c => c !== res);
    });
  });

  // GET current roster
  app.get('/api/sync', (req, res) => {
    res.json({
      success: true,
      members: currentMembers,
      timestamp: Date.now()
    });
  });

  // POST update roster
  app.post('/api/sync', (req, res) => {
    const { members, senderId } = req.body;
    if (Array.isArray(members) && members.length >= 16) {
      currentMembers = members;
      try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(members, null, 2), 'utf-8');
      } catch (err) {
        console.error('Error writing roster_state.json', err);
      }

      // Broadcast to all active clients
      const message = JSON.stringify({
        type: 'update',
        members: currentMembers,
        senderId,
        timestamp: Date.now()
      });

      sseClients.forEach(client => {
        try {
          client.write(`data: ${message}\n\n`);
        } catch (e) {}
      });
    }
    res.json({ success: true, timestamp: Date.now() });
  });

  // Vite integration
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
