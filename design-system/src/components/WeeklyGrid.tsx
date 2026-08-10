/**
 * WeeklyGrid — the row of colored squares that visualizes the current week
 * on the dashboard ("2 done · 2 planned · 2 rest days"). Each square is 15px.
 */
export type WeekDayState = 'done' | 'planned' | 'rest';

export interface WeeklyGridProps {
  days: WeekDayState[];
  size?: number;
}

const COLOR: Record<WeekDayState, string> = {
  done:    'var(--ink)',
  planned: 'var(--violet)',
  rest:    'var(--warm-200)',
};

export function WeeklyGrid({ days, size = 15 }: WeeklyGridProps) {
  return (
    <div style={{ display: 'flex', gap: 5, flex: 'none' }}>
      {days.map((d, i) => (
        <span
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: 4,
            background: COLOR[d],
          }}
          aria-label={d}
        />
      ))}
    </div>
  );
}
