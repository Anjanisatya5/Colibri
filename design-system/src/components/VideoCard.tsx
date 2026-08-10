import type { ReactNode } from 'react';

/**
 * VideoCard — the presentation card Rubi drops into a lesson (video poster,
 * duration chip, description, and an optional transcript block).
 */
export interface VideoCardProps {
  eyebrow?: string;
  duration?: string;
  description?: ReactNode;
  transcript?: { time: string; text: ReactNode }[];
  onPlay?: () => void;
}

export function VideoCard({ eyebrow, duration, description, transcript, onPlay }: VideoCardProps) {
  return (
    <div style={{
      marginLeft: 38,
      maxWidth: 600,
      border: '1px solid var(--line)',
      borderRadius: 14,
      overflow: 'hidden',
      background: '#fff',
    }}>
      <div style={{
        position: 'relative',
        aspectRatio: '16/8',
        background: 'linear-gradient(150deg,#242A52,#141830)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {eyebrow && (
          <span style={{
            position: 'absolute', top: 16, left: 18,
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
          }}>{eyebrow}</span>
        )}
        <button
          onClick={onPlay}
          style={{
            width: 46, height: 46, borderRadius: '50%',
            background: 'rgba(255,255,255,0.94)',
            border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          aria-label="Play"
        >
          <svg width={15} height={15} viewBox="0 0 24 24" fill="var(--blue)"><polygon points="6 4 20 12 6 20" /></svg>
        </button>
        {duration && (
          <span style={{
            position: 'absolute', bottom: 14, right: 16,
            fontSize: 11, fontWeight: 600, color: '#fff',
            background: 'rgba(0,0,0,0.4)', padding: '2px 7px', borderRadius: 5,
          }}>{duration}</span>
        )}
      </div>
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {description && <span style={{ fontSize: 13.5, color: 'var(--ink-70)', lineHeight: 1.5 }}>{description}</span>}
        {transcript && transcript.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, paddingTop: 14, borderTop: '1px solid var(--hairline)' }}>
            <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-40)' }}>Transcript</span>
            {transcript.map((t) => (
              <div key={t.time} style={{ display: 'flex', gap: 12, fontSize: 13 }}>
                <span style={{ color: 'var(--violet)', fontWeight: 600, width: 34, flex: 'none' }}>{t.time}</span>
                <span style={{ color: 'var(--ink-70)' }}>{t.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
