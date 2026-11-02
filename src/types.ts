export interface Member {
  id: string;
  name: string;
  title: string; // 방장, 부방장, 실장, 고문, 작가, 영양사, 비서, 게스트 등
  mbti: string;
  role: 'police' | 'thief' | 'warden' | 'unassigned';
  description: string;
  isFixedWarden?: boolean;
}

export interface TimelineItem {
  time: string;
  duration: string;
  title: string;
  description: string;
  highlight?: boolean;
  iconName: string;
}

export interface RuleCategory {
  id: string;
  title: string;
  badge: string;
  summary: string;
  details: string[];
  tips?: string[];
  importantNotice?: string;
}

export interface QuizItem {
  id: number;
  question: string;
  answer: string;
  hint?: string;
  category: 'nonsense' | 'general' | 'speed';
}
