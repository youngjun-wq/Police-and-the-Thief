import React, { useState } from 'react';
import { X, Download, Copy, Check, FileCode, ExternalLink, Sparkles } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/generateStandaloneHtml.ts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const standaloneCode = generateStandaloneHtml();

  if (!isOpen) return null;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(standaloneCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-zinc-900 border border-zinc-700 w-full max-w-2xl rounded-3xl p-6 shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-400/20 text-amber-400">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                GitHub Pages 단일 HTML (index.html) 배포 코드
              </h3>
              <p className="text-xs text-zinc-400">
                외부 빌드 과정 없이 파일 하나로 즉시 구동되는 완전체 HTML 파일입니다
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="py-4 flex flex-wrap gap-2.5">
          <button
            onClick={handleDownload}
            className="flex-1 min-h-[44px] px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md shadow-amber-400/20"
          >
            <Download className="w-4 h-4" />
            <span>📥 index.html 파일 다운로드</span>
          </button>

          <button
            onClick={handleCopy}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-zinc-700 active:scale-95 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '복사 완료!' : '📋 HTML 전체 복사'}</span>
          </button>
        </div>

        {/* GitHub Pages 1-Minute Guide */}
        <div className="p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 space-y-2 mb-4">
          <div className="font-bold text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>GitHub Pages 1분 무료 배포 방법:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-zinc-400">
            <li>GitHub에서 새 Repository(저장소)를 Public으로 생성합니다.</li>
            <li>
              위에서 다운로드한 <strong className="text-white">index.html</strong> 파일을 저장소 루트에 업로드(Commit)합니다.
            </li>
            <li>
              저장소 <strong className="text-white">Settings &gt; Pages &gt; Branch: main (/root)</strong> 선택 후 Save를 클릭하면 1분 후 참가자들이 접속할 수 있는 모바일 웹 사이트 URL이 생성됩니다!
            </li>
          </ol>
        </div>

        {/* Code Preview */}
        <div className="flex-1 overflow-hidden flex flex-col rounded-xl bg-zinc-950 border border-zinc-800">
          <div className="px-3 py-2 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-400 font-mono flex items-center justify-between">
            <span>index.html (Tailwind CDN, Audio Fx, Timer, Roster, Quiz All-in-One)</span>
            <span className="text-[11px] text-zinc-500">{standaloneCode.length.toLocaleString()} characters</span>
          </div>
          <pre className="p-3 text-[11px] font-mono text-zinc-300 overflow-auto flex-1 select-all">
            {standaloneCode.slice(0, 1500)}...
            {'\n/* [전체 코드는 위 다운로드 또는 복사 버튼을 눌러주세요] */'}
          </pre>
        </div>

        {/* Close */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
