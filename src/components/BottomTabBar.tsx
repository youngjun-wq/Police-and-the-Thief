import React from 'react';
import { BookOpen, Clock, Timer, Users, MapPin } from 'lucide-react';

interface Props {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const BottomTabBar: React.FC<Props> = ({ activeSection, onNavigate }) => {
  const tabs = [
    { id: 'rules', label: '룰북', icon: BookOpen },
    { id: 'timetable', label: '식순', icon: Clock },
    { id: 'timer', label: '타이머', icon: Timer, highlight: true },
    { id: 'teams', label: '팀추첨', icon: Users },
    { id: 'location', label: '오시는길', icon: MapPin },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/90 shadow-2xl safe-area-inset-bottom">
      <div className="max-w-md mx-auto grid grid-cols-5 items-center h-14 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-all relative ${
                isActive
                  ? 'text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab.highlight && (
                <span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] tracking-tight mt-0.5 leading-none">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
