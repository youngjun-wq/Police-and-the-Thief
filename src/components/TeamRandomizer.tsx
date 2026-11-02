import React, { useState } from 'react';
import { Users, Shuffle, UserPlus, Shield, UserX, Key, Check } from 'lucide-react';
import { Member } from '../types.ts';
import { INITIAL_MEMBERS } from '../data/defaultMembers.ts';
import { soundFx } from '../utils/soundEffects.ts';

export const TeamRandomizer: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(INITIAL_MEMBERS);
  const [isShuffling, setIsShuffling] = useState(false);
  const [newGuestName, setNewGuestName] = useState('');

  const wardenCount = members.filter((m) => m.role === 'warden').length;
  const policeCount = members.filter((m) => m.role === 'police').length;
  const thiefCount = members.filter((m) => m.role === 'thief').length;

  const handleRandomize = () => {
    setIsShuffling(true);
    soundFx.playPoliceSiren(1.5);

    setTimeout(() => {
      // Keep warden fixed (Shim Wan-ki or custom warden)
      const nonWardens = members.filter((m) => !m.isFixedWarden);

      // Shuffle array
      const shuffled = [...nonWardens];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      // Assign first 4 as police, rest as thieves
      const policeIds = new Set(shuffled.slice(0, 4).map((m) => m.id));

      const updated = members.map((m) => {
        if (m.isFixedWarden) {
          return { ...m, role: 'warden' as const };
        }
        return {
          ...m,
          role: (policeIds.has(m.id) ? 'police' : 'thief') as 'police' | 'thief',
        };
      });

      setMembers(updated);
      setIsShuffling(false);
      soundFx.playWhistle();
    }, 600);
  };

  const handleCycleRole = (id: string) => {
    setMembers((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          if (m.isFixedWarden) return m; // Warden is fixed
          const nextRole = m.role === 'police' ? 'thief' : m.role === 'thief' ? 'unassigned' : 'police';
          return { ...m, role: nextRole };
        }
        return m;
      })
    );
  };

  const handleUpdateName = (id: string, name: string) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, name } : m))
    );
  };

  const handleAddGuest = () => {
    if (!newGuestName.trim() || members.length >= 16) return;
    const newGuest: Member = {
      id: `guest_${Date.now()}`,
      name: newGuestName.trim(),
      title: '게스트',
      mbti: '???',
      role: 'unassigned',
      description: '정모 특별 초청 게스트',
    };
    setMembers((prev) => [...prev, newGuest]);
    setNewGuestName('');
  };

  const handleRemoveMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <section id="teams" className="max-w-4xl mx-auto px-4 py-4">
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        {/* Title */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-impact tracking-wide text-white">
                참가자 명단 & 스마트 팀 추첨기
              </h2>
              <p className="text-xs text-zinc-400">
                심완기 고문(감옥지기 고정) 외 인원을 경찰 4명 vs 도둑 10명으로 자동 셔플
              </p>
            </div>
          </div>

          <button
            onClick={handleRandomize}
            disabled={isShuffling}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shadow-amber-400/20 active:scale-95"
          >
            <Shuffle className={`w-4 h-4 ${isShuffling ? 'animate-spin' : ''}`} />
            <span>{isShuffling ? '추첨 셔플 중...' : '🎲 원클릭 팀 추첨'}</span>
          </button>
        </div>

        {/* Team Balance Summary Strip */}
        <div className="grid grid-cols-3 gap-2.5 mb-5 text-center text-xs">
          <div className="p-3 rounded-2xl bg-blue-950/40 border border-blue-800/60">
            <div className="text-blue-400 font-bold flex items-center justify-center gap-1 mb-0.5">
              <Shield className="w-3.5 h-3.5" />
              <span>경찰 팀</span>
            </div>
            <div className="text-xl font-impact text-white tabular-nums">
              {policeCount} <span className="text-xs font-sans text-zinc-400">/ 4명 목표</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-800/60">
            <div className="text-amber-400 font-bold flex items-center justify-center gap-1 mb-0.5">
              <span>🦹‍♂️ 도둑 팀</span>
            </div>
            <div className="text-xl font-impact text-white tabular-nums">
              {thiefCount} <span className="text-xs font-sans text-zinc-400">/ 10명 목표</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-800/60">
            <div className="text-purple-400 font-bold flex items-center justify-center gap-1 mb-0.5">
              <Key className="w-3.5 h-3.5" />
              <span>감옥지기</span>
            </div>
            <div className="text-xl font-impact text-white tabular-nums">
              심완기 <span className="text-xs font-sans text-purple-300 font-bold">(고정)</span>
            </div>
          </div>
        </div>

        {/* Member Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-5">
          {members.map((m) => {
            const isPolice = m.role === 'police';
            const isThief = m.role === 'thief';
            const isWarden = m.role === 'warden';

            return (
              <div
                key={m.id}
                className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isWarden
                    ? 'bg-purple-950/30 border-purple-500/50'
                    : isPolice
                    ? 'bg-blue-950/30 border-blue-500/50'
                    : isThief
                    ? 'bg-amber-950/30 border-amber-500/50'
                    : 'bg-zinc-950/70 border-zinc-800'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-white text-sm">
                        {m.name}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-zinc-800 text-zinc-300">
                        {m.title}
                      </span>
                      {m.mbti && m.mbti !== '???' && (
                        <span className="text-[10px] font-mono text-amber-400 font-semibold">
                          {m.mbti}
                        </span>
                      )}
                    </div>

                    {/* Role Tag button */}
                    <button
                      onClick={() => handleCycleRole(m.id)}
                      disabled={m.isFixedWarden}
                      className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all active:scale-95 ${
                        isWarden
                          ? 'bg-purple-500 text-white cursor-default'
                          : isPolice
                          ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                          : isThief
                          ? 'bg-amber-500 text-black shadow-sm shadow-amber-500/30'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                      title={m.isFixedWarden ? '감옥지기 고정' : '클릭하여 역할 변경 (경찰 ↔ 도둑)'}
                    >
                      {isWarden ? '🗝️ 감옥지기' : isPolice ? '👮 경찰' : isThief ? '🦹 도둑' : '미배정'}
                    </button>
                  </div>

                  <p className="text-[11px] text-zinc-400 leading-tight line-clamp-2">
                    {m.description}
                  </p>
                </div>

                {/* Edit guest name if guest */}
                {m.title === '스페셜 게스트' && (
                  <div className="mt-2 pt-2 border-t border-zinc-800/80 flex items-center justify-between gap-1 text-[11px]">
                    <input
                      type="text"
                      value={m.name}
                      onChange={(e) => handleUpdateName(m.id, e.target.value)}
                      placeholder="게스트 이름"
                      className="px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs w-28 focus:outline-none focus:border-amber-400"
                    />
                    <button
                      onClick={() => handleRemoveMember(m.id)}
                      className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                      title="게스트 삭제"
                    >
                      <UserX className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Add Guest Form */}
        <div className="p-3 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex items-center gap-2">
          <input
            type="text"
            value={newGuestName}
            onChange={(e) => setNewGuestName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddGuest()}
            placeholder="추가 게스트 이름 입력 (예: 홍길동)"
            className="flex-1 px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
          />
          <button
            onClick={handleAddGuest}
            disabled={!newGuestName.trim() || members.length >= 16}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shrink-0"
          >
            <UserPlus className="w-3.5 h-3.5 text-amber-400" />
            <span>게스트 추가</span>
          </button>
        </div>
      </div>
    </section>
  );
};
