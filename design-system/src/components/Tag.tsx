import type { HTMLAttributes } from 'react';

/**
 * Tag — a small badge, distinct from Chip. Used for readiness levels
 * ("Developing"), the Rubi tag on the WeakSpotsCard, and section labels
 * inside cards.
 */
export type TagVariant = 'outline' | 'rubi' | 'teal';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
}

const STYLE: Record<TagVariant, React.CSSProperties> = {
  outline: {
    display: 'inline-flex', alignItems: 'center', height: 24, padding: '0 12px',
    borderRadius: 20, border: '1px solid var(--line)', color: 'var(--teal)',
    fontSize: 12.5, fontWeight: 500,
  },
  rubi: {
    display: 'inline-flex', alignItems: 'center', height: 22, padding: '0 8px',
    borderRadius: 5, background: 'var(--violet-chip)', color: 'var(--violet)',
    fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
  },
  teal: {
    display: 'inline-flex', alignItems: 'center', height: 24, padding: '0 12px',
    borderRadius: 20, background: 'var(--green-tint)', color: 'var(--teal)',
    fontSize: 12.5, fontWeight: 500,
  },
};

export function Tag({ variant = 'outline', style, children, ...rest }: TagProps) {
  return <span style={{ ...STYLE[variant], ...style }} {...rest}>{children}</span>;
}
