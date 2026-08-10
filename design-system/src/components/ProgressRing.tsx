import type { ReactNode } from 'react';

/**
 * ProgressRing — the "Exam readiness" ring on the dashboard.
 *
 * Rendered as a `conic-gradient`, since the design pairs the ring with a
 * centered paper-colored disc that carries the percentage label.
 */

export interface ProgressRingProps {
  /** 0–100. */
  value: number;
  size?: number;
  /** Thickness of the ring in px. */
  thickness?: number;
  /** Filled ring color. */
  color?: string;
  /** Track (unfilled) ring color. */
  trackColor?: string;
  /** Inner disc color; the ring's hole. */
  centerColor?: string;
  /** Rendered inside the ring. */
  children?: ReactNode;
}

export function ProgressRing({
  value,
  size = 158,
  thickness = 19,
  color = 'var(--teal)',
  trackColor = 'var(--warm-200)',
  centerColor = 'var(--paper)',
  children,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const inner = size - thickness * 2;
  return (
    <div
      style={{
        flex: 'none', width: size, height: size, borderRadius: '50%',
        background: `conic-gradient(${color} 0% ${clamped}%, ${trackColor} ${clamped}% 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
    >
      <div
        style={{
          width: inner, height: inner, borderRadius: '50%', background: centerColor,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 1,
        }}
      >
        {children ?? (
          <>
            <span style={{ fontSize: Math.round(size * 0.253), fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1, color: 'var(--ink)', fontFamily: 'var(--serif)' }}>
              {Math.round(clamped)}<span style={{ fontSize: '0.42em', verticalAlign: 'super' }}>%</span>
            </span>
            <span style={{ fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-50)' }}>
              Ready
            </span>
          </>
        )}
      </div>
    </div>
  );
}
