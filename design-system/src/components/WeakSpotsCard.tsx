import type { ReactNode } from 'react';
import { Icon } from '../icons/Icon';
import { SerifHeadline } from './SerifHeadline';
import { Tag } from './Tag';

/**
 * WeakSpotsCard — the "Your weak spots" feature on the Flashcards screen.
 * Violet-tinted card with a target glyph and a violet CTA.
 */
export interface WeakSpotsCardProps {
  title?: string;
  body: ReactNode;
  actionLabel: ReactNode;
  onAction?: () => void;
}

export function WeakSpotsCard({
  title = 'Your weak spots',
  body,
  actionLabel,
  onAction,
}: WeakSpotsCardProps) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 18,
      padding: '22px 24px',
      background: 'var(--violet-tint)',
      border: '1px solid var(--violet-line)',
      borderRadius: 12,
    }}>
      <span style={{
        width: 40, height: 40, flex: 'none', borderRadius: '50%',
        background: 'var(--violet)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff',
      }}>
        <Icon name="target" size={18} />
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <SerifHeadline size="row" as="span" style={{ fontSize: 20, fontWeight: 600 }}>{title}</SerifHeadline>
          <Tag variant="rubi">Rubi</Tag>
        </div>
        <span style={{ fontSize: 14, color: '#5B5560', lineHeight: 1.5 }}>{body}</span>
      </div>
      <button
        onClick={onAction}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          height: 40, padding: '0 20px', borderRadius: 8,
          background: 'var(--violet)', color: '#fff',
          fontSize: 13.5, fontWeight: 600, border: 'none', flex: 'none',
        }}
      >
        {actionLabel}
      </button>
    </div>
  );
}
