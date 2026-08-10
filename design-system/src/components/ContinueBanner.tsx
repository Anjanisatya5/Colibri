import type { ReactNode } from 'react';
import { ProgressBar } from './ProgressBar';
import { SerifHeadline } from './SerifHeadline';

/**
 * ContinueBanner — the violet-tinted "Continue your course" banner that
 * sits at the top of the Course screen.
 */
export interface ContinueBannerProps {
  eyebrow: string;
  title: ReactNode;
  progress: number;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  /** Thumbnail JSX (usually a dark tile with a play glyph). */
  thumbnail?: ReactNode;
}

export function ContinueBanner({
  eyebrow, title, progress,
  primaryLabel = 'Learn with Rubi', secondaryLabel = 'Resume lesson',
  onPrimary, onSecondary,
  thumbnail,
}: ContinueBannerProps) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 22,
      padding: '20px 22px',
      background: 'var(--violet-tint)',
      border: '1px solid var(--violet-line)',
      borderRadius: 12,
    }}>
      {thumbnail && <div style={{ flex: 'none' }}>{thumbnail}</div>}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.11em', textTransform: 'uppercase', color: 'var(--violet)' }}>
          {eyebrow}
        </span>
        <SerifHeadline size="h3">{title}</SerifHeadline>
        <ProgressBar
          value={progress}
          tone="violet"
          trackColor="var(--violet-line)"
          width={360}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, flex: 'none' }}>
        <button
          onClick={onPrimary}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: 38, padding: '0 18px', borderRadius: 8,
            background: 'var(--violet)', color: '#fff',
            fontSize: 13, fontWeight: 600, border: 'none',
          }}
        >
          {primaryLabel}
        </button>
        <button
          onClick={onSecondary}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: 36, padding: '0 18px', borderRadius: 8,
            background: 'transparent', color: 'var(--violet)',
            border: '1px solid var(--violet-line)',
            fontSize: 13, fontWeight: 500,
          }}
        >
          {secondaryLabel}
        </button>
      </div>
    </div>
  );
}

/** A default dark thumbnail with a play glyph, matching the Course banner. */
export function ContinueBannerThumbnail() {
  return (
    <div style={{
      width: 104, height: 66,
      borderRadius: 8,
      background: 'linear-gradient(150deg,#242A52,#171B36)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={11} height={11} viewBox="0 0 24 24" fill="#1E2761"><polygon points="6 4 20 12 6 20" /></svg>
      </span>
    </div>
  );
}
