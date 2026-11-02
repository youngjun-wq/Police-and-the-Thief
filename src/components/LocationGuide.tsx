import React from 'react';
import { MapPin, Navigation, ExternalLink, CheckSquare, Sparkles, AlertCircle } from 'lucide-react';

export const LocationGuide: React.FC = () => {
  return (
    <section id="location" className="max-w-4xl mx-auto px-4 py-4">
      <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        {/* Title */}
        <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-zinc-800">
          <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-impact tracking-wide text-white">
              집결 장소 & 찾아오시는 길
            </h2>
            <p className="text-xs text-zinc-400">대현산 배수지공원 (서울특별시 성동구 독서당로43길 45)</p>
          </div>
        </div>

        {/* Map Links Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base mb-1">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>대현산 배수지공원 광장</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                관리사무소 앞 넓은 보행 광장에서 <strong>16:00 정각</strong>에 집결합니다.
                공원이 넓으므로 여유 있게 10분 전 도착을 권장합니다!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="https://map.kakao.com/link/search/대현산배수지공원"
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] px-3 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-sm"
              >
                <span>🟡 카카오맵 열기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://map.naver.com/p/search/대현산배수지공원"
                target="_blank"
                rel="noreferrer"
                className="min-h-[44px] px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-sm"
              >
                <span>🟢 네이버지도 열기</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs space-y-2.5">
            <div className="font-bold text-white text-sm">🚇 대중교통 이용 안내</div>
            <div className="text-zinc-300 leading-relaxed space-y-1.5">
              <p>
                • <strong>지하철 5호선 신금호역:</strong> 3번 또는 4번 출구에서 도보 약 10분 (약간의 오르막 산책로)
              </p>
              <p>
                • <strong>지하철 3호선 / 경의중앙선 옥수역:</strong> 마을버스(성동01, 성동09 등) 환승 후 극동아파트/배수지공원 하차
              </p>
              <p>
                • <strong>주차:</strong> 공원 내 주차 공간이 협소하므로 가급적 편안한 복장으로 대중교통 이용을 적극 권장합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Packing Checklist & Tips */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-950 to-zinc-900 border border-zinc-800">
          <div className="font-bold text-sm text-amber-400 mb-3 flex items-center gap-2">
            <CheckSquare className="w-4 h-4" />
            <span>정모 필수 준비물 & 당일 꿀팁 체크리스트</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-start gap-2.5">
              <span className="text-amber-400 font-bold">✓</span>
              <div>
                <strong className="text-white">편안한 운동화 & 활동복:</strong>
                <p className="text-zinc-400 mt-0.5">야외 50분 추격전이므로 편하게 달릴 수 있는 운동화 필수! 11월 해질녘 쌀쌀함에 대비해 가벼운 겉옷을 챙겨주세요.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-start gap-2.5">
              <span className="text-amber-400 font-bold">✓</span>
              <div>
                <strong className="text-white">참가비 (인당 10,000원):</strong>
                <p className="text-zinc-400 mt-0.5">방장이 직접 준비해 장착해 주는 실물 만보기 기기, 경찰 손가락 지휘봉, 게임 소모품 비용입니다. (뒤풀이 치맥은 별도 자율 참석)</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex items-start gap-2.5 sm:col-span-2">
              <span className="text-amber-400 font-bold">✓</span>
              <div>
                <strong className="text-white">안전 매너 & 즐거운 열정:</strong>
                <p className="text-zinc-400 mt-0.5">승부보다 안전과 친목이 최우선입니다! "중지!" 구호 준수와 서로 배려하는 보드방정 매너를 지켜주세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
