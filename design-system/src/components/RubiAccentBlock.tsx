import type { HTMLAttributes, ReactNode } from 'react';

/**
 * RubiAccentBlock · v5 — the Rubi-authored container.
 *
 * Composition: 2px terracotta border-left + 20px padding-left, no box.
 * Inside: terracotta uppercase eyebrow, serif h3, muted paragraph, .btn.rubi.
 *
 * The left rule IS the entire container. No background fill, no top/right/
 * bottom border. This keeps Rubi content visually distinct from steel/system
 * content without adding weight to the page.
 */

export interface RubiAccentBlockProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  action?: ReactNode;
}

export function RubiAccentBlock({
  eyebrow = 'Rubi · next step',
  title,
  body,
  action,
  className,
  ...rest
}: RubiAccentBlockProps) {
  return (
    <div className={['rubi-block', className].filter(Boolean).join(' ')} {...rest}>
      {eyebrow && <span className="eyebrow rubi" style={{ display: 'block', marginBottom: 7 }}>{eyebrow}</span>}
      <div style={{
        fontFamily: 'var(--font-serif)',
        fontSize: 19,
        fontWeight: 500,
        lineHeight: 1.25,
        color: 'var(--c-ink)',
        marginBottom: 8,
      }}>{title}</div>
      {body && (
        <div style={{
          color: 'var(--c-muted)',
          fontSize: 13.5,
          lineHeight: 1.55,
          marginBottom: 14,
          maxWidth: '52ch',
        }}>{body}</div>
      )}
      {action}
    </div>
  );
}
