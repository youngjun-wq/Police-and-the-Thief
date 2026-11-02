import React, { useState } from 'react';
import { ChevronDown, BookOpen, AlertTriangle, Trophy, Footprints, Shield, UserCheck, Key, CheckCircle2 } from 'lucide-react';
import { RuleCategory } from '../types.ts';

const RULES_DATA: RuleCategory[] = [
  {
    id: 'overview',
    title: '1. 게임 개요 및 역할별 핵심 규칙',
    badge: '인원 & 역할',
    summary: '경찰 4명 vs 도둑 10명 vs 감옥지기 심완기 1명 (총 15명 / 50분 경기)',
    details: [
      '경기 시간: 17:00 ~ 17:50 (정규 추격전 50분간 가동)',
      '활동 반경: 16시 사전 답사 시 정해진 대현산 배수지공원 지정 안전 구역 내',
      '👮‍♂️ 경찰 (4명): 손가락 막대기(포인터봉)를 휴대하며, 도둑의 신체를 꾹 찔러 검거합니다. 과도한 신체 접촉, 옷 잡기, 밀치기, 태클, 진로 막기는 절대 금지됩니다.',
      '🦹‍♂️ 도둑 (10명): 경찰을 피해 도망치며 생존하고, 감옥에 갇힌 동료를 구출합니다. 가장 중요한 미션은 팀 전체의 평균 걸음 수 3,500보 이하를 유지하는 것입니다!',
      '🗝️ 감옥지기 심완기 (1명): 공원 내 지정된 감옥(Prison Safe Zone)을 상주하며 체포된 도둑 수감을 관리하고, 동료 구출 도전 시 퀴즈(상식/넌센스)를 출제·판정합니다. 직접 도둑을 추격하지 않습니다.',
    ],
    tips: [
      '경찰은 포인터봉으로 정확히 신체를 찌를 때 "체포!"라고 크게 외치면 판정이 깔끔합니다.',
      '도둑은 무조건 전력질주하면 3,500보가 금방 초과되므로 공원 벤치나 지형지물을 활용한 은신이 유리합니다.',
    ],
  },
  {
    id: 'arrest',
    title: '2. 체포 및 감옥(Prison) 수감 규칙',
    badge: '체포/수감',
    summary: '막대기에 신체 찔리면 즉시 양손 들고 감옥으로 평화롭게 이동',
    details: [
      '경찰의 손가락 막대기 끝이 도둑의 신체(옷이나 가방 포함)에 명확히 닿으면 그 즉시 체포 완료로 판정됩니다.',
      '체포된 도둑은 저항하거나 도망칠 수 없으며, 양손을 들고 주변에 체포되었음을 알리며 감옥 구역으로 신속하고 평화롭게 걸어서 이동합니다.',
      '감옥 구역에 도착하면 감옥지기(심완기)에게 본인의 이름을 확인받고 감옥 라인 안에서 대기합니다.',
      '감옥 라인 내부(세이프 존)에 머무는 도둑은 경찰이 추가로 터치하거나 위해를 가할 수 없습니다.',
    ],
    tips: [
      '체포된 후 감옥으로 이동하는 도중에는 다른 도둑과 작전 정보를 교환하거나 길을 막지 않습니다.',
    ],
  },
  {
    id: 'rescue',
    title: '3. 동료 구출 및 감옥지기(심완기) 퀴즈 규칙',
    badge: '구출 & 퀴즈',
    summary: '감옥 세이프라인 도착 후 심완기 고문의 퀴즈 정답 시 갇힌 도둑 전원 즉시 석방!',
    details: [
      '아직 체포되지 않은 살아있는 도둑이 감옥 구역(구출 라인)에 도착하여 감옥지기에게 "구출 도전!"을 신청합니다.',
      '감옥지기(심완기)는 즉석에서 준비된 퀴즈(상식, 넌센스, 스피드 퀴즈 등)를 1문제 냅니다.',
      '★ 정답 판정 시: 현재 감옥에 갇혀 있는 도둑 동료 전원 즉시 구출(대탈출)! 모두 다 함께 감옥 밖으로 탈출합니다!',
      '오답 판정 시: 구출 실패! 즉시 탈출할 수 없으며, 다음 기회나 다른 문제로 재도전해야 합니다.',
      '★ 경찰 역습 위험: 도둑이 감옥 구역 밖에서 문제를 풀거나 접근하는 도중에 경찰의 손가락 막대기에 찔리면 구출 시도자도 그 자리에서 즉시 체포되어 함께 감옥에 갇힙니다!',
    ],
    importantNotice:
      '감옥지기(심완기)의 정답/오답 판정은 절대적이며, 참가자는 감옥지기의 판정에 무조건 승복합니다.',
  },
  {
    id: 'pedometer',
    title: '4. 만보기 (걸음 수) 3,500보 제한 미션',
    badge: '만보기 미션',
    summary: '방장이 장착해 준 실물 만보기 기준! 도둑 10명 최종 평균 3,500보 초과 시 패배',
    details: [
      '스마트폰 만보기가 아닙니다! 경기 시작 전(16:30~17:00 팀 편성 시) 방장이 각 참가자의 신체에 실물 만보기 기기를 직접 장착해 드립니다.',
      '★ 탈출 시 만보기 초기화 규칙: 감옥에 갇혔다가 동료의 퀴즈 정답으로 구출된 도둑은 감옥 문을 나설 때 착용한 만보기의 리셋 버튼을 눌러 0보로 즉시 재초기화(리셋)합니다. 즉, 탈출 이후의 걸음 수만 최종 정산에 반영됩니다!',
      '경기 종료 후 도둑 10명의 실물 만보기 최종 걸음수를 모두 합산한 뒤, 총 도둑 수(10명)로 나눈 평균값을 산출합니다.',
      '계산된 평균 걸음 수가 3,500보를 초과하면 도둑 팀의 만보기 미션 실패가 선언되며, 경찰 승리 요건이 됩니다.',
    ],
    tips: [
      '도둑은 무조건 전력질주하기보다 공원 벤치나 지형지물을 활용해 조용히 은신하는 것이 걸음 수 방어에 유리합니다.',
    ],
  },
  {
    id: 'victory',
    title: '5. 최종 승리 조건 (Victory Conditions)',
    badge: '승패 판정',
    summary: '경찰: 전원 체포 OR 3500보 초과 유도 / 도둑: 생존자 존재 AND 3500보 이하',
    details: [
      '🚨 경찰 승리 조건 (아래 둘 중 하나라도 달성 시 승리):',
      '① 50분 제한 시간 종료 전까지 도둑 10명 전원을 체포하여 감옥에 가두었을 때',
      '② 도둑이 살아남았더라도, 도둑 팀 전체의 최종 평균 걸음 수가 3,500보를 초과했을 때 (경찰의 압박 승리)',
      '🦹 도둑 승리 조건 (반드시 둘 다 동시 만족해야 승리):',
      '① 50분 경기 종료 휘슬이 울렸을 때, 체포되지 않고 도주 중인 생존 도둑이 1명 이상 남아 있을 것',
      '② 도둑 팀 전체의 최종 평균 걸음 수가 3,500보 이하를 철저히 지켰을 것',
    ],
  },
  {
    id: 'safety',
    title: '6. 절대 안전 수칙 (Safety First)',
    badge: '⚠️ 절대 준수',
    summary: '신체접촉 금지, 위험구역 추격 금지, 시민 배려, "중지!" 긴급 구호',
    details: [
      '1. 신체 접촉 일체 금지: 손으로 사람을 잡거나, 옷을 낚아채거나, 밀치거나, 몸으로 길을 막는 행위는 엄격히 금지됩니다. (오직 손가락 막대기 끝 터치만 인정)',
      '2. 위험 지형 진입 금지: 공원 내 가파른 흙비탈, 바위 절벽, 차도 인접 구역, 화단 등 미끄러지거나 다칠 수 있는 곳은 도주 및 추격 금지 구역입니다.',
      '3. 일반 시민 안전 최우선: 대현산 배수지공원은 일반 주민들의 쉼터입니다. 산책객, 노약자, 어린이, 반려견과의 충돌이 없도록 항상 시야를 확보하고 안전 거리를 유지합니다.',
      '4. 🚨 긴급 정지 구호 ("중지!" / "타임!"): 경기 중 누군가 넘어지거나 다칠 위험이 있을 때는 누구든지 큰 소리로 "중지!" 또는 "타임!"을 외칩니다. 이 소리를 들은 모든 사람은 즉시 그 자리에서 이동을 멈추고 상황을 수습합니다.',
    ],
    importantNotice:
      '승부보다 안전과 친목이 1순위입니다. 다치지 않고 즐겁게 완주하는 것이 제 8회 정모의 최고 목표입니다!',
  },
];

export const RulesAccordion: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['overview', 'arrest']);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (openIds.length === RULES_DATA.length) {
      setOpenIds([]);
    } else {
      setOpenIds(RULES_DATA.map((r) => r.id));
    }
  };

  const filteredRules = RULES_DATA.filter((rule) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'police') return rule.id === 'overview' || rule.id === 'arrest' || rule.id === 'victory';
    if (activeCategory === 'thief') return rule.id === 'overview' || rule.id === 'rescue' || rule.id === 'pedometer' || rule.id === 'victory';
    if (activeCategory === 'warden') return rule.id === 'overview' || rule.id === 'rescue';
    if (activeCategory === 'safety') return rule.id === 'safety';
    return true;
  });

  return (
    <section id="rules" className="max-w-4xl mx-auto px-4 py-4">
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-impact tracking-wide text-white">
                게임 공식 룰북 <span className="text-amber-400 text-lg font-sans font-bold">(Official Rules)</span>
              </h2>
              <p className="text-xs text-zinc-400">야외 공원에서 스마트폰으로 빠르게 확인하는 아코디언 가이드</p>
            </div>
          </div>

          <button
            onClick={handleExpandAll}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-bold transition-all border border-zinc-700/80 active:scale-95"
          >
            {openIds.length === RULES_DATA.length ? '전체 접기' : '전체 펼치기'}
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-none text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`min-h-[36px] px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-400 text-black shadow-sm'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            전체 룰보기
          </button>
          <button
            onClick={() => setActiveCategory('police')}
            className={`min-h-[36px] px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeCategory === 'police'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <span>👮‍♂️ 경찰 규칙</span>
          </button>
          <button
            onClick={() => setActiveCategory('thief')}
            className={`min-h-[36px] px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeCategory === 'thief'
                ? 'bg-amber-500 text-black shadow-sm'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <span>🦹‍♂️ 도둑 규칙</span>
          </button>
          <button
            onClick={() => setActiveCategory('warden')}
            className={`min-h-[36px] px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeCategory === 'warden'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <span>🗝️ 감옥지기 심완기</span>
          </button>
          <button
            onClick={() => setActiveCategory('safety')}
            className={`min-h-[36px] px-3.5 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeCategory === 'safety'
                ? 'bg-red-600 text-white shadow-sm'
                : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            <span>⚠️ 절대 안전수칙</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredRules.map((rule) => {
            const isOpen = openIds.includes(rule.id);
            const isSafety = rule.id === 'safety';

            return (
              <div
                key={rule.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isSafety
                    ? 'border-red-500/50 bg-gradient-to-r from-red-950/20 via-zinc-950 to-zinc-950'
                    : isOpen
                    ? 'border-amber-400/40 bg-zinc-950 shadow-md'
                    : 'border-zinc-800 bg-zinc-950/70 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(rule.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 transition-colors select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-black shrink-0 ${
                        isSafety
                          ? 'bg-red-500 text-white'
                          : rule.id === 'overview'
                          ? 'bg-amber-400 text-black'
                          : rule.id === 'arrest'
                          ? 'bg-blue-600 text-white'
                          : rule.id === 'rescue'
                          ? 'bg-emerald-600 text-white'
                          : rule.id === 'pedometer'
                          ? 'bg-yellow-400 text-black'
                          : 'bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {rule.badge}
                    </span>
                    <div>
                      <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                        {rule.title}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5 font-normal line-clamp-1">
                        {rule.summary}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-400 bg-amber-400/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/80 space-y-3">
                    <ul className="space-y-2 mt-2">
                      {rule.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {rule.tips && (
                      <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs space-y-1">
                        <div className="font-bold text-amber-300 flex items-center gap-1">
                          <span>💡 팁 & 전략</span>
                        </div>
                        {rule.tips.map((t, idx) => (
                          <p key={idx} className="text-zinc-400">
                            • {t}
                          </p>
                        ))}
                      </div>
                    )}

                    {rule.importantNotice && (
                      <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-red-200 text-xs font-semibold flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{rule.importantNotice}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
