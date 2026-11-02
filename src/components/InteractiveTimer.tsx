import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Siren, Volume2, BellRing, Flag } from 'lucide-react';
import { soundFx } from '../utils/soundEffects.ts';

export const InteractiveTimer: React.FC = () => {
  const [totalSeconds, setTotalSeconds] = useState(50 * 60);
  const [remainingSeconds, setRemainingSeconds] = useState(50 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Time remaining formatted
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const progressPercent = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            soundFx.playFanfare();
            soundFx.playPoliceSiren(3);
            return 0;
          }

          // Sound alerts on critical milestones
          if (prev === 10 * 60 || prev === 5 * 60 || prev === 60) {
            soundFx.playBleep(true);
          } else if (prev <= 5 && prev > 1) {
            soundFx.playBleep(false);
          }

          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, totalSeconds]);

  const handleStart = () => {
    if (remainingSeconds === 0) {
      setRemainingSeconds(totalSeconds);
    }
    soundFx.playWhistle();
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = (mins = 50) => {
    setIsRunning(false);
    const sec = mins * 60;
    setTotalSeconds(sec);
    setRemainingSeconds(sec);
  };

  const handleEmergencyStop = () => {
    setIsRunning(false);
    soundFx.playWhistle();
    soundFx.playPoliceSiren(2);
  };

  return (
    <section id="timer" className="max-w-4xl mx-auto px-4 py-4">
      <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Glow if running */}
        {isRunning && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-blue-500 animate-pulse" />
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-xl">⏱️</span>
            <div>
              <h2 className="text-xl font-impact tracking-wide text-white">
                추격전 공식 50분 타이머
              </h2>
              <p className="text-xs text-zinc-400">현장에서 스마트폰으로 띄워놓고 쓰는 경기 타이머</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => soundFx.playWhistle()}
              className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold flex items-center gap-1.5 border border-zinc-700 active:scale-95 transition-all"
              title="심판 호각 소리 울리기"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>호각 불기</span>
            </button>

            <button
              onClick={handleEmergencyStop}
              className="px-3 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-500 text-white text-xs font-black flex items-center gap-1.5 active:scale-95 transition-all shadow-md shadow-red-950"
              title="비상 상황 시 외치는 '중지!' 사운드"
            >
              <Siren className="w-3.5 h-3.5 animate-spin" />
              <span>🚨 "중지!" 비상정지</span>
            </button>
          </div>
        </div>

        {/* Big Display Box */}
        <div className="py-7 px-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 text-center relative overflow-hidden shadow-inner mb-5">
          {/* Progress bar background */}
          <div
            className="absolute bottom-0 left-0 top-0 bg-amber-400/5 transition-all duration-500 pointer-events-none"
            style={{ width: `${progressPercent}%` }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2 bg-zinc-900 border border-zinc-800">
              <span
                className={`w-2 h-2 rounded-full ${
                  isRunning ? 'bg-emerald-400 animate-ping' : 'bg-zinc-500'
                }`}
              />
              <span className={isRunning ? 'text-emerald-400' : 'text-zinc-400'}>
                {isRunning ? '추격전 진행 중' : remainingSeconds === 0 ? '경기 종료' : '대기 중'}
              </span>
            </div>

            <div
              className={`font-impact tracking-wider select-none text-6xl sm:text-7xl md:text-8xl ${
                remainingSeconds <= 300 && isRunning ? 'text-red-500 animate-pulse' : 'text-amber-400'
              }`}
            >
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>

            <div className="text-xs text-zinc-400 mt-2 font-medium">
              남은 시간 / 총 {Math.floor(totalSeconds / 60)}분 기준 (10분·5분·1분 전 자동 알림)
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className="min-h-[48px] py-3 px-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-impact text-lg flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-95 transition-all"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{remainingSeconds < totalSeconds && remainingSeconds > 0 ? '추격전 재개' : '추격전 시작 (50분)'}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="min-h-[48px] py-3 px-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-impact text-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <Pause className="w-5 h-5 fill-current" />
              <span>일시 정지</span>
            </button>
          )}

          <button
            onClick={() => handleReset(50)}
            className="min-h-[48px] py-3 px-4 rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-zinc-300 font-bold text-sm flex items-center justify-center gap-2 border border-zinc-800 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>50분 처음으로 리셋</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleReset(60)}
              className="flex-1 min-h-[48px] rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold border border-zinc-800 active:scale-95 transition-all"
            >
              60분
            </button>
            <button
              onClick={() => handleReset(30)}
              className="flex-1 min-h-[48px] rounded-2xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-bold border border-zinc-800 active:scale-95 transition-all"
            >
              30분 (속성)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
