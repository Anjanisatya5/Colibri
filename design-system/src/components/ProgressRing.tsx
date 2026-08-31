/**
 * ProgressRing (Readiness ring) · v5
 *
 * Steel fill on --c-ring-track (3.8:1 contrast). Value always shown as text
 * inside the ring — never derive meaning from color alone.
 *
 *   <ProgressRing value={62} label="ready" />
 */

export interface ProgressRingProps {
  /** 0–100. */
  value: number;
  /** Diameter in px. */
  size?: number;
  /** Filled arc color. */
  fill?: string;
  /** Empty track color. */
  track?: string;
  /** Optional caption below the percentage. */
  label?: string;
  /** Font size for the value. Defaults to a size proportional to `size`. */
  valueFontSize?: number;
}

export function ProgressRing({
  value,
  size = 66,
  fill = 'var(--c-steel)',
  track = 'var(--c-ring-track)',
  label,
  valueFontSize,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const px = valueFontSize ?? Math.round(size * 0.23);
  return (
    <div
      className="ring"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(clamped)}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `conic-gradient(${fill} ${clamped}%, ${track} 0)`,
      }}
    >
      <span
        style={{
          position: 'absolute',
          inset: Math.max(6, Math.round(size * 0.12)),
          background: 'var(--c-surface)',
          borderRadius: '50%',
          zIndex: 1,
        }}
      />
      <span
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: px,
            fontWeight: 600,
            color: 'var(--c-ink)',
            lineHeight: 1,
          }}
        >
          {Math.round(clamped)}
          <span style={{ fontSize: Math.round(px * 0.5), verticalAlign: 'super', fontWeight: 500 }}>%</span>
        </span>
        {label && (
          <span
            style={{
              fontSize: Math.max(9, Math.round(size * 0.075)),
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--c-muted)',
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        )}
      </span>
    </div>
  );
}
