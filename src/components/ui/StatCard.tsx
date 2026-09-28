import { cn } from '@/lib/cn';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendLabel,
  color = 'primary',
  to,
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  trendLabel?: string;
  color?: 'primary' | 'accent' | 'success' | 'warning' | 'error';
  to?: string;
}) {
  const colorMap = {
    primary: { bg: 'stat-icon-primary', text: 'text-primary-600', ring: 'ring-primary-100' },
    accent: { bg: 'stat-icon-accent', text: 'text-accent-600', ring: 'ring-accent-100' },
    success: { bg: 'stat-icon-success', text: 'text-success-600', ring: 'ring-success-100' },
    warning: { bg: 'stat-icon-warning', text: 'text-warning-600', ring: 'ring-warning-100' },
    error: { bg: 'stat-icon-error', text: 'text-error-600', ring: 'ring-error-100' },
  };
  const c = colorMap[color];

  const content = (
    <div className={cn("card p-5 lg:p-6 h-full", to && "card-hover transition cursor-pointer")}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.08em] text-ink-500 font-semibold">{label}</p>
          <p data-kpi-value className="text-2xl font-bold font-display text-ink-950 mt-1.5 leading-none tabular-nums">{value}</p>
        </div>
        <div className={cn('rounded-xl p-2.5 ring-1 ring-inset', c.bg, c.ring)}>
          <Icon className={cn('w-5 h-5', c.text)} />
        </div>
      </div>
      {(trend !== undefined || trendLabel) && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          {trend !== undefined && (
            <span className={cn('font-semibold px-1.5 py-0.5 rounded-md', trend >= 0 ? 'text-success-700 bg-success-50' : 'text-error-700 bg-error-50')}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
          {trendLabel && <span className="text-ink-400">{trendLabel}</span>}
        </div>
      )}
    </div>
  );

  return to ? <Link to={to} className="block h-full">{content}</Link> : content;
}
