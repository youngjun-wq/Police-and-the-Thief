import React, { useState } from 'react';
import { soundFx } from '../utils/soundEffects.ts';
import { Siren, Volume2, ShieldAlert, MapPin, Calendar, Users, DollarSign, Download, Share2, Check } from 'lucide-react';

interface Props {
  onOpenExport: () => void;
  onOpenTimer: () => void;
}

export const PoliceHeader: React.FC<Props> = ({ onOpenExport, onOpenTimer }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSirenPlaying, setIsSirenPlaying] = useState(false);

  const handleSiren = () => {
    setIsSirenPlaying(true);
    soundFx.playPoliceSiren(2.8);
    setTimeout(() => setIsSirenPlaying(false), 2800);
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <header className="relative w-full">
      {/* POLICE CAUTION TAPE TOP STRIP */}
      <div className="police-tape-bar h-8 w-full flex items-center justify-center overflow-hidden shadow-lg border-b border-amber-500/40">
        <div className="bg-black/95 px-6 py-1 text-xs font-black tracking-widest text-yellow-400 uppercase flex items-center gap-3 animate-pulse">
          <span className="text-sm">🚨</span>
          <span>POLICE LINE DO NOT CROSS</span>
          <span className="text-zinc-600">///</span>
          <span>제 8회 보드방정 정모</span>
          <span className="text-zinc-600">///</span>
          <span>대현산 추격전</span>
          <span className="text-sm">🚨</span>
        </div>
      </div>

      {/* HERO BANNER CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 pt-6 pb-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800/90 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Row: Meta badges and Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-black shadow-md shadow-amber-400/20">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>제 8회 정모</span>
              </span>
              <span className="text-xs font-semibold text-zinc-400">
                보드방정 야외 추격전
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSiren}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-md ${
                  isSirenPlaying
                    ? 'bg-red-500 text-white animate-bounce shadow-red-500/50'
                    : 'bg-red-600/90 hover:bg-red-500 text-white shadow-red-950/60'
                }`}
                title="사이렌 경보음 울리기"
              >
                <Siren className={`w-3.5 h-3.5 ${isSirenPlaying ? 'animate-spin' : ''}`} />
                <span>{isSirenPlaying ? '경보 작동 중!' : '🚨 사이렌'}</span>
              </button>

              <button
                onClick={onOpenExport}
                className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-all border border-zinc-700/80 active:scale-95"
                title="GitHub Pages 배포용 단일 HTML 다운로드 및 복사"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">단일 HTML</span>
                <span>배포 파일</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="min-h-[40px] min-w-[40px] p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition-all border border-zinc-700/80"
                title="참가자 공유 링크 복사"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-5xl font-impact tracking-tight text-white mb-2 leading-tight">
              대현산 <span className="text-amber-400 drop-shadow-[0_2px_12px_rgba(250,204,21,0.3)]">추격전</span>
              <span className="text-2xl sm:text-3xl text-zinc-400 font-sans font-bold ml-2">
                (경찰과 도둑)
              </span>
            </h1>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed break-keep">
              대현산 배수지공원 한복판에서 펼쳐지는 50분의 숨막히는 심리·추격전!
              손가락 지휘봉의 경찰 5명과 3,500보 제한 미션의 도둑 10명, 그리고 감옥지기 (심완기)의 정모 공식 모바일 가이드.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>일시</span>
              </div>
              <div>
                <div className="font-extrabold text-sm sm:text-base text-white">11월 14일 (토)</div>
                <div className="text-[11px] text-amber-400 font-semibold">16:00 정각 집결</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>장소</span>
              </div>
              <div>
                <div className="font-extrabold text-sm sm:text-base text-white truncate">대현산 배수지공원</div>
                <div className="text-[11px] text-zinc-400 font-medium">관리사무소 앞 광장</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                <span>참가비</span>
              </div>
              <div>
                <div className="font-extrabold text-sm sm:text-base text-amber-400">인당 10,000원</div>
                <div className="text-[11px] text-zinc-400 font-medium">소모품 (치맥 뒤풀이 자율)</div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/90 shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>참가 인원</span>
              </div>
              <div>
                <div className="font-extrabold text-sm sm:text-base text-white">7인 + 게스트 9인</div>
                <div className="text-[11px] text-emerald-400 font-semibold">총 16인 (경찰 5 / 도둑 10)</div>
              </div>
            </div>
          </div>

          {/* Quick Launch Button strip */}
          <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs text-zinc-400 flex items-center gap-1">
              <span>⚠️</span>
              <span>현장 스마트폰 전용 다크모드 가이드</span>
            </div>
            <button
              onClick={onOpenTimer}
              className="px-3.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs flex items-center gap-1.5 transition-transform active:scale-95 shadow-md shadow-amber-400/20"
            >
              <span>⏱️ 50분 공식 타이머 열기</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
