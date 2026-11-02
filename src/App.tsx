/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PoliceHeader } from './components/PoliceHeader.tsx';
import { TimeTable } from './components/TimeTable.tsx';
import { RulesAccordion } from './components/RulesAccordion.tsx';
import { InteractiveTimer } from './components/InteractiveTimer.tsx';
import { TeamRandomizer } from './components/TeamRandomizer.tsx';
import { LocationGuide } from './components/LocationGuide.tsx';
import { StandaloneExportModal } from './components/StandaloneExportModal.tsx';
import { BottomTabBar } from './components/BottomTabBar.tsx';
import { Shield, Sparkles, Download, Siren } from 'lucide-react';
import { soundFx } from './utils/soundEffects.ts';

export default function App() {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('rules');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col antialiased selection:bg-amber-400 selection:text-black pb-24">
      {/* 1. HERO & TOP POLICE LINE */}
      <PoliceHeader
        onOpenExport={() => setIsExportOpen(true)}
        onOpenTimer={() => scrollToSection('timer')}
      />

      {/* QUICK JUMP PILLS ON MOBILE */}
      <div className="max-w-4xl mx-auto px-4 py-2 w-full">
        <div className="p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none text-xs">
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-bold text-amber-400">현장 바로가기:</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => scrollToSection('rules')}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium active:scale-95"
            >
              📜 룰북
            </button>
            <button
              onClick={() => scrollToSection('timetable')}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium active:scale-95"
            >
              ⏱️ 식순
            </button>
            <button
              onClick={() => scrollToSection('timer')}
              className="px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 active:scale-95"
            >
              ⏱️ 50분 타이머
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium active:scale-95"
            >
              🎲 팀추첨
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium active:scale-95"
            >
              🗺️ 오시는 길
            </button>
          </div>
        </div>
      </div>

      {/* 2. TIME TABLE */}
      <TimeTable />

      {/* 3. OFFICIAL RULES ACCORDION */}
      <RulesAccordion />

      {/* 4. FIELD UTILITY: 50-MIN COUNTDOWN TIMER */}
      <InteractiveTimer />

      {/* 5. PARTICIPANT ROSTER & SMART TEAM RANDOMIZER */}
      <TeamRandomizer />

      {/* 6. LOCATION GUIDE & PREP CHECKLIST */}
      <LocationGuide />

      {/* BOTTOM POLICE CAUTION TAPE STRIP */}
      <div className="max-w-4xl mx-auto px-4 mt-8 w-full">
        <div className="police-tape-bar h-6 w-full rounded-xl overflow-hidden shadow-md flex items-center justify-center">
          <div className="bg-black/90 px-4 py-0.5 text-[10px] font-black tracking-widest text-yellow-400 uppercase">
            POLICE LINE • PROCEED WITH CAUTION • 2026.11.14
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-4 pt-6 pb-6 text-center text-xs text-zinc-500 space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-zinc-300">
            제 8회 보드방정 정모 '대현산 추격전'
          </span>
        </div>
        <p className="text-[11px] text-zinc-400">
          정영준(방장) · 김준형(부방장) · 기명찬(실장) · 심완기(고문/감옥지기) · 권성환(작가) · 최은혜(영양사) · 이준수(비서) & 스페셜 게스트
        </p>
        <div className="pt-2">
          <button
            onClick={() => setIsExportOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-amber-400 text-xs font-semibold border border-zinc-800"
          >
            <Download className="w-3.5 h-3.5" />
            <span>GitHub Pages 배포용 단일 index.html 파일 다운로드</span>
          </button>
        </div>
      </footer>

      {/* STANDALONE EXPORT MODAL */}
      <StandaloneExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      {/* MOBILE THUMB NAVIGATION BAR */}
      <BottomTabBar
        activeSection={activeTab}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
