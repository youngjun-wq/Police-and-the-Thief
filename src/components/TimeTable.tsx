import React from 'react';
import { Clock, Map, Users, ShieldAlert, Award, Beer } from 'lucide-react';
import { TimelineItem } from '../types.ts';

const TIMELINE_DATA: TimelineItem[] = [
  {
    time: '16:00 ~ 17:00',
    duration: '60분',
    title: '집결 & 공원 답사 & 팀 편성',
    description:
      '대현산 배수지공원 집결! 다 함께 게임 가능 구역과 위험 구역을 현장 답사하고, 가벼운 자기소개 및 룰·안전수칙을 상세 브리핑합니다. (경찰 4 vs 도둑 10 vs 감옥지기 (심완기) 1 팀 편성)',
    iconName: 'map',
  },
  {
    time: '17:00 ~ 17:50',
    duration: '50분',
    title: '🚨 경찰과 도둑 메인 게임 (대현산 추격전)',
    description:
      '손가락 막대기로 무장한 경찰과 평균 3,500보 제한 미션을 받은 도둑의 치열한 두뇌·추격전! 감옥지기 (심완기)의 수감 관리 및 동료 구출 퀴즈 풀기.',
    highlight: true,
    iconName: 'shield',
  },
  {
    time: '17:50 ~ 18:00',
    duration: '10분',
    title: '만보기 걸음수 정산 & 결과 발표 & 단체사진',
    description:
      '도둑 팀 전체의 실물 만보기 걸음수를 합산하여 평균 3,500보 초과 여부 확인! 생존 도둑 유무와 합산하여 최종 승리팀 판정 및 단체 기념사진 촬영.',
    iconName: 'award',
  },
  {
    time: '18:00 ~',
    duration: '자율',
    title: '🍗 인근 치맥집 이동 & 뒤풀이',
    description:
      '대현산 공원 인근 치킨집으로 이동하여 시원한 맥주/음료와 함께 추격전 무용담을 나누는 훈훈한 뒤풀이 (원하는 인원 자율 참석, 뒤풀이 비용 별도).',
    iconName: 'beer',
  },
];

export const TimeTable: React.FC = () => {
  return (
    <section id="timetable" className="max-w-4xl mx-auto px-4 py-4">
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-impact tracking-wide text-white">
                행사 식순 <span className="text-amber-400 text-lg font-sans font-bold">(Time Table)</span>
              </h2>
              <p className="text-xs text-zinc-400">11월 14일(토) 오후 4시부터 총 4개 단계로 진행됩니다</p>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
            총 소요 약 2시간 + 뒤풀이
          </span>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 space-y-7 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:via-red-500 before:to-zinc-700">
          {TIMELINE_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative group transition-all ${
                  item.highlight ? 'scale-[1.01]' : ''
                }`}
              >
                {/* Node Dot on line */}
                <div
                  className={`absolute -left-[23px] sm:-left-[27px] top-1 w-5 h-5 rounded-full flex items-center justify-center ring-4 ring-zinc-900 ${
                    item.highlight
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/50 animate-pulse'
                      : index === 0
                      ? 'bg-amber-400 text-black'
                      : 'bg-zinc-700 text-zinc-300'
                  }`}
                >
                  <span className="text-[10px] font-black">{index + 1}</span>
                </div>

                {/* Card Container */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    item.highlight
                      ? 'bg-gradient-to-r from-red-950/40 via-zinc-900 to-zinc-900 border-red-500/40 shadow-lg shadow-red-950/40'
                      : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs sm:text-sm font-black px-2.5 py-0.5 rounded-lg ${
                          item.highlight
                            ? 'bg-red-500 text-white'
                            : 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                        }`}
                      >
                        {item.time}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">({item.duration})</span>
                    </div>

                    {item.highlight && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-600 text-white uppercase tracking-wider animate-pulse">
                        MAIN EVENT
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-1.5 flex items-center gap-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal break-keep">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
