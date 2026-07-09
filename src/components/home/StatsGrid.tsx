import {
  MessageSquare,
  Building2,
  BookOpen,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

/**
 * Homepage stats data - centralized for easy updates
 */
export const homeStats: Stat[] = [
  {
    label: 'Interview Experiences',
    value: '15+',
    icon: MessageSquare,
    color: 'from-purple-500 to-pink-500',
  },
  {
    label: 'Top Companies',
    value: '10+',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Career Resources',
    value: '97+',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
  },
  {
    label: 'Free Tools',
    value: '18+',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
  },
];

/**
 * Stats grid component for homepage hero section
 */
export function StatsGrid() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 delay-700 duration-1000 animate-in fade-in slide-in-from-bottom-4 md:grid-cols-4">
      {homeStats.map((stat, index) => (
        <div
          key={stat.label}
          className="glass-strong glow-hover shadow-premium group relative overflow-hidden rounded-2xl p-6 text-center"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
          />
          <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
          <div className="text-gradient mb-2 text-4xl font-black md:text-5xl">
            {stat.value}
          </div>
          <div className="text-sm font-semibold text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
