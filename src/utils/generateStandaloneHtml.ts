// Function that generates a standalone single HTML file ready for GitHub Pages deployment

export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="ko" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <title>제 8회 보드방정 정모 - 대현산 추격전 (경찰과 도둑)</title>
  <meta name="description" content="대현산 배수지공원에서 펼쳐지는 제 8회 보드방정 정모 '대현산 추격전' 모바일 룰북 및 현장 유틸리티" />
  <!-- Tailwind CSS Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            police: {
              yellow: '#FACC15',
              dark: '#09090B',
              surface: '#18181B',
              red: '#EF4444',
              blue: '#3B82F6'
            }
          }
        }
      }
    }
  </script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@400;500;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Noto Sans KR', system-ui, -apple-system, sans-serif;
      background-color: #09090b;
      color: #f4f4f5;
    }
    .font-impact {
      font-family: 'Black Han Sans', sans-serif;
    }
    .police-tape-bar {
      background: repeating-linear-gradient(
        -45deg,
        #facc15,
        #facc15 14px,
        #18181b 14px,
        #18181b 28px
      );
    }
  </style>
</head>
<body class="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-400 selection:text-black pb-24">

  <!-- TOP POLICE TAPE BANNER -->
  <div class="police-tape-bar h-7 w-full flex items-center justify-center overflow-hidden shadow-md">
    <div class="bg-black/90 px-4 py-0.5 text-xs font-black tracking-widest text-yellow-400 uppercase flex items-center gap-2">
      <span>🚨 POLICE LINE DO NOT CROSS</span>
      <span>•</span>
      <span>제 8회 보드방정 정모</span>
      <span>•</span>
      <span>대현산 추격전 🚨</span>
    </div>
  </div>

  <div class="max-w-2xl mx-auto px-4 py-6 space-y-6">

    <!-- HERO SECTION -->
    <header class="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-2xl">
      <div class="absolute -top-12 -right-12 w-44 h-44 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="flex items-center justify-between gap-2 mb-3">
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-black shadow-sm">
            <span>🚨</span> 제 8회 정모
          </span>
          <span class="text-xs text-zinc-400 font-medium">보드방정 야외 추격전</span>
        </div>
        <button onclick="playPoliceSiren()" class="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1 transition-all active:scale-95 shadow-md shadow-red-900/40">
          <span>🚨 사이렌 울리기</span>
        </button>
      </div>

      <h1 class="text-3xl md:text-4xl font-impact tracking-tight text-white mb-2">
        대현산 <span class="text-amber-400 underline decoration-yellow-400/50 underline-offset-4">추격전</span>
      </h1>
      <p class="text-sm text-zinc-300 leading-relaxed mb-5">
        대현산 배수지공원 한복판에서 벌어지는 숨막히는 경찰과 도둑의 50분 심리·추격전!
      </p>

      <!-- KEY METRICS GRID -->
      <div class="grid grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
          <div class="text-zinc-400 mb-1 flex items-center gap-1">📅 일시</div>
          <div class="font-bold text-white text-sm">11월 14일 (토) 16:00</div>
          <div class="text-[11px] text-amber-400/90 mt-0.5">16시 정각 집결 및 답사</div>
        </div>
        <div class="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
          <div class="text-zinc-400 mb-1 flex items-center gap-1">📍 장소</div>
          <div class="font-bold text-white text-sm">대현산 배수지공원</div>
          <div class="text-[11px] text-zinc-400 mt-0.5">신금호역 / 옥수동 인근</div>
        </div>
        <div class="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
          <div class="text-zinc-400 mb-1 flex items-center gap-1">💰 참가비</div>
          <div class="font-bold text-amber-400 text-sm">인당 10,000원</div>
          <div class="text-[11px] text-zinc-400 mt-0.5">만보기/소모품 (치맥 뒤풀이 자율)</div>
        </div>
        <div class="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
          <div class="text-zinc-400 mb-1 flex items-center gap-1">👥 인원 규모</div>
          <div class="font-bold text-white text-sm">기본 7인 + 게스트 8인</div>
          <div class="text-[11px] text-emerald-400 mt-0.5">최대 15인 규모 진행</div>
        </div>
      </div>
    </header>

    <!-- SECTION 2: TIMETABLE -->
    <section class="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
      <div class="flex items-center gap-2 mb-4">
        <span class="text-xl">⏱️</span>
        <h2 class="text-lg font-bold text-white">행사 식순 (Time Table)</h2>
      </div>

      <div class="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-zinc-700">
        <!-- Step 1 -->
        <div class="relative">
          <div class="absolute -left-[19px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 ring-4 ring-zinc-900"></div>
          <div class="text-xs font-bold text-amber-400">16:00 ~ 17:00 (60분)</div>
          <div class="text-sm font-bold text-white mt-0.5">공원 집결 및 지형 답사 & 룰 브리핑</div>
          <p class="text-xs text-zinc-400 mt-1">
            대현산 배수지공원 현장 집결 후 활동 가능 구역 둘러보기, 가벼운 자기소개, 안전수칙 & 허용 범위 안내, 실물 만보기 장착 및 경찰/도둑 팀 편성!
          </p>
        </div>

        <!-- Step 2 -->
        <div class="relative">
          <div class="absolute -left-[19px] top-1 w-3.5 h-3.5 rounded-full bg-red-500 ring-4 ring-zinc-900 animate-pulse"></div>
          <div class="text-xs font-bold text-red-400">17:00 ~ 17:50 (50분) ★ 메인 이벤트</div>
          <div class="text-sm font-bold text-white mt-0.5">🚨 제 8회 대현산 추격전 (경찰과 도둑)</div>
          <p class="text-xs text-zinc-400 mt-1">
            손가락 막대기를 든 경찰 vs 평균 3,500보 제한 미션의 도둑! 동료 구출 퀴즈와 심리전이 오가는 숨막히는 50분 실전 추격전!
          </p>
        </div>

        <!-- Step 3 -->
        <div class="relative">
          <div class="absolute -left-[19px] top-1 w-3.5 h-3.5 rounded-full bg-blue-400 ring-4 ring-zinc-900"></div>
          <div class="text-xs font-bold text-blue-400">17:50 ~ 18:00 (10분)</div>
          <div class="text-sm font-bold text-white mt-0.5">실물 만보기 걸음수 정산 & 결과 발표 & 단체 기념사진</div>
          <p class="text-xs text-zinc-400 mt-1">
            도둑 팀 실물 만보기 걸음수 최종 평균 집계(3,500보 이하 달성 여부 확인), 최종 승리팀 발표, 현장 기념촬영.
          </p>
        </div>

        <!-- Step 4 -->
        <div class="relative">
          <div class="absolute -left-[19px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-zinc-900"></div>
          <div class="text-xs font-bold text-amber-300">18:00 ~ (자율)</div>
          <div class="text-sm font-bold text-white mt-0.5">🍗 인근 치맥집 이동 후 뒤풀이</div>
          <p class="text-xs text-zinc-400 mt-1">
            치킨과 맥주/음료와 함께하는 훈훈한 뒤풀이 토크 (희망자 자율 참석).
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: GAME RULES ACCORDION -->
    <section class="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="text-xl">📜</span>
          <h2 class="text-lg font-bold text-white">게임 공식 룰북</h2>
        </div>
        <span class="text-xs text-amber-400 font-medium">탭하여 펼치기</span>
      </div>

      <div class="space-y-3" id="accordion-container">
        <!-- Accordion 1: Role Overview -->
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
          <button onclick="toggleAccordion('rule-1')" class="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400/20 text-amber-400 border border-amber-400/30">역할</span>
              <span class="text-sm font-bold text-white">1. 게임 개요 및 역할별 규칙</span>
            </div>
            <span id="icon-rule-1" class="text-zinc-400 text-sm">▼</span>
          </button>
          <div id="rule-1" class="hidden px-4 pb-4 text-xs text-zinc-300 space-y-2 border-t border-zinc-800/60 pt-3">
            <p><strong>진행 시간:</strong> 17:00 ~ 17:50 (총 50분 진행)</p>
            <p><strong>인원 구성:</strong> 총 15명 내외 (경찰 4명 / 도둑 10명 / 감옥지기 심완기 1명)</p>
            <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1.5 mt-2">
              <p><span class="text-blue-400 font-bold">👮‍♂️ 경찰 (4명):</span> '손가락 막대기'로 도둑의 신체를 꾹 찔러 검거! 과도한 신체 접촉, 밀치기, 옷 잡기, 진로 막기는 엄격히 금지됩니다.</p>
              <p><span class="text-amber-400 font-bold">🦹‍♂️ 도둑 (10명):</span> 경찰을 피해 도망치며, <strong>평균 걸음 수 3,500보 제한</strong> 미션을 수행합니다! 감옥에 갇힌 동료들을 구출할 수 있습니다.</p>
              <p><span class="text-purple-400 font-bold">🗝️ 감옥지기 (심완기 고문):</span> 감옥 존을 총괄 관리합니다. 체포된 도둑 수감 확인, 동료 구출 시도 시 퀴즈 출제 및 판정. 직접 추격전에 뛰어들지 않습니다.</p>
            </div>
          </div>
        </div>

        <!-- Accordion 2: Arrest & Prison -->
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
          <button onclick="toggleAccordion('rule-2')" class="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-red-400/20 text-red-400 border border-red-400/30">체포</span>
              <span class="text-sm font-bold text-white">2. 체포 및 감옥 수감 규칙</span>
            </div>
            <span id="icon-rule-2" class="text-zinc-400 text-sm">▼</span>
          </button>
          <div id="rule-2" class="hidden px-4 pb-4 text-xs text-zinc-300 space-y-2 border-t border-zinc-800/60 pt-3">
            <p>• 경찰의 <strong>손가락 막대기</strong>로 신체(옷 포함)를 찔리면 즉시 체포로 판정됩니다.</p>
            <p>• 체포된 도둑은 저항하거나 도망치지 않고, 두 손을 들고 감옥 구역으로 신속히 이동합니다.</p>
            <p>• 감옥에 도착하면 감옥지기(심완기)에게 본인의 체포를 신고하고 수감 라인 안에서 대기합니다.</p>
            <p class="text-amber-300">※ 감옥 내부(세이프 존)에 대기 중인 도둑은 경찰이 추가로 터치할 수 없습니다.</p>
          </div>
        </div>

        <!-- Accordion 3: Rescue & Quiz (UPDATED: ALL PRISONERS RESCUED) -->
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
          <button onclick="toggleAccordion('rule-3')" class="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-green-400/20 text-green-400 border border-green-400/30">구출</span>
              <span class="text-sm font-bold text-white">3. 동료 구출 및 감옥지기 퀴즈 규칙</span>
            </div>
            <span id="icon-rule-3" class="text-zinc-400 text-sm">▼</span>
          </button>
          <div id="rule-3" class="hidden px-4 pb-4 text-xs text-zinc-300 space-y-2 border-t border-zinc-800/60 pt-3">
            <p>• 살아있는 도둑이 감옥 구역에 안전하게 도착하여 감옥지기에게 <strong>"구출 신청!"</strong>을 외칩니다.</p>
            <p>• 감옥지기(심완기)가 퀴즈(상식, 넌센스, 스피드 등)를 1문제 출제합니다.</p>
            <p class="text-emerald-400 font-bold">★ 정답을 맞힐 시: 현재 감옥에 갇혀 있는 도둑 동료 전원 즉시 구출(대탈출)! 모두 다 함께 감옥 밖으로 탈출합니다!</p>
            <p>• <strong>오답 시:</strong> 즉시 탈출 불가! 다른 문제로 재도전해야 합니다.</p>
            <p class="text-red-400">⚠️ <strong>주의:</strong> 감옥지기 문제를 푸는 도중 경찰에게 막대기로 찔리면 구출 시도자도 즉시 체포되어 함께 감옥에 갇힙니다!</p>
          </div>
        </div>

        <!-- Accordion 4: Pedometer 3500 Steps (UPDATED: HOST ATTACHED PHYSICAL PEDOMETER) -->
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
          <button onclick="toggleAccordion('rule-4')" class="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">만보기</span>
              <span class="text-sm font-bold text-white">4. 도둑 만보기 평균 3,500보 제한 미션</span>
            </div>
            <span id="icon-rule-4" class="text-zinc-400 text-sm">▼</span>
          </button>
          <div id="rule-4" class="hidden px-4 pb-4 text-xs text-zinc-300 space-y-2 border-t border-zinc-800/60 pt-3">
            <p class="font-bold text-amber-300">※ 스마트폰 만보기가 아닙니다! 게임 시작 전 방장이 신체에 직접 실물 만보기 기기를 장착해 드립니다.</p>
            <p>• 도둑은 무작정 뛰어다니기만 하면 패배합니다! 전략적인 은신과 에너지 안배가 필수입니다.</p>
            <p>• <strong>감옥 탈출 시 만보기 규칙:</strong> 감옥에서 탈출한 도둑은 착용한 실물 만보기의 리셋 버튼을 눌러 <strong>0보로 즉시 재초기화(리셋)</strong>하고, 탈출 이후의 걸음 수만 최종 정산에 반영합니다.</p>
            <p>• <strong>최종 판정:</strong> 게임 종료 후 도둑 10명의 걸음수를 모두 합산하여 10으로 나눈 <strong>평균이 3,500보를 초과하면 도둑 미션 실패(패널티/경찰 승리)</strong>가 됩니다.</p>
          </div>
        </div>

        <!-- Accordion 5: Victory Condition -->
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
          <button onclick="toggleAccordion('rule-5')" class="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-400/20 text-blue-400 border border-blue-400/30">승리</span>
              <span class="text-sm font-bold text-white">5. 최종 승리 조건</span>
            </div>
            <span id="icon-rule-5" class="text-zinc-400 text-sm">▼</span>
          </button>
          <div id="rule-5" class="hidden px-4 pb-4 text-xs text-zinc-300 space-y-2 border-t border-zinc-800/60 pt-3">
            <div class="p-2.5 rounded-lg bg-blue-950/40 border border-blue-800/50">
              <div class="font-bold text-blue-400 mb-1">🚨 경찰 팀 승리 조건 (둘 중 하나 만족 시)</div>
              <p>① 50분 제한 시간 내에 도둑 전원을 체포하여 감옥에 가두었을 때</p>
              <p>② 게임 종료 시 도둑 팀 전체의 평균 걸음 수가 3,500보를 초과했을 때</p>
            </div>
            <div class="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/50 mt-2">
              <div class="font-bold text-amber-400 mb-1">🦹 도둑 팀 승리 조건 (모두 만족 시)</div>
              <p>① 50분이 종료되었을 때 체포되지 않은 도주 중인 도둑이 1명 이상 살아남아 있을 것</p>
              <p>② 도둑 팀 전체의 평균 걸음 수가 3,500보 이하일 것</p>
            </div>
          </div>
        </div>

        <!-- Accordion 6: Safety Rules -->
        <div class="rounded-xl border border-zinc-800 bg-zinc-950/80 overflow-hidden">
          <button onclick="toggleAccordion('rule-6')" class="w-full p-4 flex items-center justify-between text-left hover:bg-zinc-800/40 transition-colors">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">안전</span>
              <span class="text-sm font-bold text-white">6. 절대 안전 수칙 (필독!)</span>
            </div>
            <span id="icon-rule-6" class="text-zinc-400 text-sm">▼</span>
          </button>
          <div id="rule-6" class="hidden px-4 pb-4 text-xs text-zinc-300 space-y-2 border-t border-zinc-800/60 pt-3">
            <p>1. <strong>신체 접촉 절대 금지:</strong> 손으로 잡기, 밀치기, 옷 당기기 등 격한 몸싸움은 엄격히 금지됩니다. (오직 손가락 막대기 터치만 허용)</p>
            <p>2. <strong>위험 구역 진입 금지:</strong> 공원 비탈길, 절벽, 차도, 화단 훼손 등 다칠 위험이 있는 장소로는 절대 도망치거나 추격하지 않습니다.</p>
            <p>3. <strong>일반 시민 배려:</strong> 산책하시는 주민 분들과 어린이, 반려동물과 부딪히지 않도록 항상 전방을 주시합니다.</p>
            <p class="text-red-400 font-bold">4. 긴급 정지 구호: 누군가 넘어지거나 위험할 땐 누구든지 크게 "중지!" 혹은 "타임!"을 외칩니다. 구호를 들은 즉시 주변 전원은 그 자리에서 멈춰 안전을 확인합니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: 50-MIN COUNTDOWN TIMER -->
    <section class="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">⏱️</span>
          <h2 class="text-lg font-bold text-white">추격전 공식 50분 타이머</h2>
        </div>
        <button onclick="playWhistle()" class="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[11px] text-zinc-300 flex items-center gap-1">
          📢 호각 소리
        </button>
      </div>

      <div class="text-center py-4 bg-zinc-950 rounded-xl border border-zinc-800 mb-4">
        <div id="timer-display" class="font-impact text-5xl md:text-6xl text-amber-400 tracking-wider">
          50:00
        </div>
        <div id="timer-status" class="text-xs text-zinc-400 mt-1">대기 중 (시작 버튼을 누르면 카운트다운)</div>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <button id="btn-start" onclick="toggleTimer()" class="py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-sm active:scale-95 transition-all shadow-md">
          ▶ 시작
        </button>
        <button onclick="pauseTimer()" class="py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-sm active:scale-95 transition-all">
          ⏸ 일시정지
        </button>
        <button onclick="resetTimer(50)" class="py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-sm active:scale-95 transition-all">
          ↺ 50분 리셋
        </button>
      </div>
    </section>

    <!-- SECTION 5: ROSTER & TEAM RANDOMIZER -->
    <section class="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <span class="text-xl">🎲</span>
          <h2 class="text-lg font-bold text-white">팀 랜덤 추첨기</h2>
        </div>
        <button onclick="randomizeTeams()" class="px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold flex items-center gap-1 active:scale-95 transition-all">
          🎲 원클릭 팀 편성
        </button>
      </div>
      <p class="text-xs text-zinc-400 mb-4">
        심완기 고문님(감옥지기 고정) 외에 나머지 인원을 <strong>경찰 4명 vs 도둑 10명</strong>으로 공정하게 랜덤 셔플합니다.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs" id="roster-grid">
        <!-- Roster dynamically filled by JS -->
      </div>
    </section>

    <!-- SECTION 6: LOCATION & PREPARATION (UPDATED CHECKLIST) -->
    <section class="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xl">🗺️</span>
        <h2 class="text-lg font-bold text-white">오시는 길 & 준비물</h2>
      </div>
      
      <div class="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 space-y-2 mb-4">
        <div><strong>📍 집결 장소:</strong> 서울 성동구 독서당로43길 45 (대현산 배수지공원 관리사무소 앞 광장)</div>
        <div><strong>🚇 지하철:</strong> 5호선 신금호역 3번/4번 출구 도보 10분, 또는 3호선/경의중앙선 옥수역 버스 환승</div>
        <div><strong>💡 안내:</strong> 16:00 정각에 답사와 룰 설명이 시작되니 5~10분 전 여유 있게 도착해 주세요!</div>
      </div>

      <div class="grid grid-cols-2 gap-2 text-xs mb-4">
        <a href="https://map.kakao.com/link/search/대현산배수지공원" target="_blank" rel="noreferrer" class="p-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-center block transition-transform active:scale-95">
          🟡 카카오맵 길찾기
        </a>
        <a href="https://map.naver.com/p/search/대현산배수지공원" target="_blank" rel="noreferrer" class="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center block transition-transform active:scale-95">
          🟢 네이버 지도 길찾기
        </a>
      </div>

      <div class="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 text-xs space-y-2">
        <div class="font-bold text-amber-400 mb-1">🎒 추천 준비물 체크리스트</div>
        <div class="space-y-1.5 text-zinc-300">
          <p>• <strong>편안한 운동화 & 활동복:</strong> 야외 50분 추격전이므로 달리기 편한 운동화 필수! 11월 해질녘 쌀쌀함 대비 겉옷 지참.</p>
          <p>• <strong>참가비 10,000원:</strong> 방장이 직접 준비해 장착해 주는 실물 만보기 기기, 손가락 막대기 등 게임 소모품 준비 비용입니다. (뒤풀이 치맥비는 별도 자율 참석)</p>
          <p>• <strong>안전 매너 & 즐거운 열정:</strong> 다치지 않고 재미있게 즐기는 보드방정 매너 준수!</p>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="text-center text-xs text-zinc-500 pt-4 pb-12">
      <p class="font-medium">제 8회 보드방정 정모 '대현산 추격전'</p>
      <p class="text-[11px] text-zinc-600 mt-1">2026.11.14 (토) 대현산 배수지공원 • 보드방정 일동</p>
    </footer>

  </div>

  <script>
    // WEB AUDIO API SYNTHESIZER
    let audioCtx = null;
    function getAudioCtx() {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function playPoliceSiren() {
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        for (let i = 0; i <= 6; i++) {
          const t = now + (i * 0.4);
          osc.frequency.setValueAtTime(650, t);
          osc.frequency.linearRampToValueAtTime(950, t + 0.2);
          osc.frequency.linearRampToValueAtTime(650, t + 0.4);
        }
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
        gain.gain.setValueAtTime(0.2, now + 2.3);
        gain.gain.linearRampToValueAtTime(0.001, now + 2.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 2.5);
        if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 300]);
      } catch (e) {
        console.log(e);
      }
    }

    function playWhistle() {
      try {
        const ctx = getAudioCtx();
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(2400, now);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.6);
        if (navigator.vibrate) navigator.vibrate([300]);
      } catch (e) {}
    }

    // ACCORDION TOGGLE
    function toggleAccordion(id) {
      const el = document.getElementById(id);
      const icon = document.getElementById('icon-' + id);
      if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        if (icon) icon.innerText = '▲';
      } else {
        el.classList.add('hidden');
        if (icon) icon.innerText = '▼';
      }
    }

    // TIMER STATE
    let timerTotalSeconds = 50 * 60;
    let timerRemaining = timerTotalSeconds;
    let timerInterval = null;

    function updateTimerDisplay() {
      const mins = Math.floor(timerRemaining / 60);
      const secs = timerRemaining % 60;
      document.getElementById('timer-display').innerText = 
        String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
    }

    function toggleTimer() {
      const btn = document.getElementById('btn-start');
      if (timerInterval) {
        pauseTimer();
      } else {
        document.getElementById('timer-status').innerText = '🚨 추격전 진행 중!';
        btn.innerText = '⏸ 정지';
        btn.classList.replace('bg-amber-400', 'bg-red-500');
        playPoliceSiren();
        timerInterval = setInterval(() => {
          if (timerRemaining > 0) {
            timerRemaining--;
            updateTimerDisplay();
          } else {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById('timer-status').innerText = '🏁 50분 경기 종료!';
            playWhistle();
            alert('게임이 종료되었습니다! 만보기 걸음수를 정산해 주세요.');
          }
        }, 1000);
      }
    }

    function pauseTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      const btn = document.getElementById('btn-start');
      btn.innerText = '▶ 재개';
      btn.classList.replace('bg-red-500', 'bg-amber-400');
      document.getElementById('timer-status').innerText = '일시 정지됨';
    }

    function resetTimer(mins) {
      pauseTimer();
      timerTotalSeconds = mins * 60;
      timerRemaining = timerTotalSeconds;
      updateTimerDisplay();
      document.getElementById('timer-status').innerText = '대기 중 (시작 버튼을 누르면 카운트다운)';
      const btn = document.getElementById('btn-start');
      btn.innerText = '▶ 시작';
    }

    // ROSTER & TEAM RANDOMIZER
    const members = [
      { name: '정영준', title: '방장', mbti: 'ENFJ', role: '도둑' },
      { name: '김준형', title: '부방장', mbti: 'ENFP', role: '도둑' },
      { name: '기명찬', title: '실장', mbti: 'ISTJ', role: '경찰' },
      { name: '심완기', title: '고문', mbti: 'ISFJ', role: '감옥지기' },
      { name: '권성환', title: '작가', mbti: 'ISFP', role: '경찰' },
      { name: '최은혜', title: '영양사', mbti: 'INTP', role: '도둑' },
      { name: '이준수', title: '비서', mbti: 'ISFP', role: '경찰' },
      { name: '게스트 1', title: '게스트', mbti: '???', role: '경찰' },
      { name: '게스트 2', title: '게스트', mbti: '???', role: '도둑' },
      { name: '게스트 3', title: '게스트', mbti: '???', role: '도둑' },
      { name: '게스트 4', title: '게스트', mbti: '???', role: '도둑' },
      { name: '게스트 5', title: '게스트', mbti: '???', role: '도둑' },
      { name: '게스트 6', title: '게스트', mbti: '???', role: '도둑' },
      { name: '게스트 7', title: '게스트', mbti: '???', role: '도둑' },
      { name: '게스트 8', title: '게스트', mbti: '???', role: '도둑' }
    ];

    function renderRoster() {
      const container = document.getElementById('roster-grid');
      container.innerHTML = '';
      members.forEach(m => {
        const div = document.createElement('div');
        div.className = 'p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between';
        
        let roleBadge = '';
        if (m.role === '감옥지기') {
          roleBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">🗝️ 감옥지기</span>';
        } else if (m.role === '경찰') {
          roleBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">👮 경찰</span>';
        } else {
          roleBadge = '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">🦹 도둑</span>';
        }

        div.innerHTML = \`
          <div>
            <span class="font-bold text-white">\${m.name}</span>
            <span class="text-[11px] text-zinc-400 ml-1">(\${m.title} / \${m.mbti})</span>
          </div>
          <div>\${roleBadge}</div>
        \`;
        container.appendChild(div);
      });
    }

    function randomizeTeams() {
      const pool = members.filter(m => m.name !== '심완기');
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      pool.forEach((m, idx) => {
        m.role = idx < 4 ? '경찰' : '도둑';
      });
      renderRoster();
      playPoliceSiren();
    }

    // INITIAL LOAD
    renderRoster();
  </script>
</body>
</html>`;
}
