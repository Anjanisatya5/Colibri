/**
 * ProgressBar — a linear track used for module & lesson progress.
 *
 * The prototype uses several color combinations for the fill; we expose the
 * common ones as named tones and let callers pass a raw color if needed.
 */

export type ProgressTone = 'violet' | 'green' | 'amber' | 'ink' | 'teal';

export interface ProgressBarProps {
  /** 0–100. */
  value: number;
  tone?: ProgressTone;
  /** Overrides `tone` — any CSS color string. */
  color?: string;
  height?: number;
  /** Track color. Defaults to `--warm-200`. */
  trackColor?: string;
  /** Width of the bar (any CSS length). */
  width?: number | string;
  className?: string;
}

const TONE_COLOR: Record<ProgressTone, string> = {
  violet: 'var(--violet)',
  green:  'var(--green)',
  amber:  'var(--amber-bright)',
  ink:    'var(--ink)',
  teal:   'var(--teal)',
};

export function ProgressBar({
  value,
  tone = 'violet',
  color,
  height = 4,
  trackColor = 'var(--warm-200)',
  width = '100%',
  className,
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <span
      className={className}
      style={{
        position: 'relative', display: 'block',
        width, height, borderRadius: Math.max(2, height / 2),
        background: trackColor, overflow: 'hidden',
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
    >
      <span
        style={{
          position: 'absolute', inset: 0,
          width: `${clamped}%`,
          background: color ?? TONE_COLOR[tone],
          borderRadius: Math.max(2, height / 2),
        }}
      />
    </span>
  );
}
