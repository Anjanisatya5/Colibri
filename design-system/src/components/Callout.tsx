import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Callout · v5 — emphasis-fill block (Tonight, badges).
 *
 * Emphasis is a role, not a second surface. The callout supports the page
 * rather than dominating it — softer B tint (#ECEEF0) with an emphasis-hairline
 * edge (#D8DEE4).
 *
 * Composition:
 *   .callout { .eyebrow on-emphasis }
 *              { .callout-title (serif 18 / 600) }
 *              { .callout-meta  (13 / muted) }
 *              [optional trailing actions on the right]
 */

export interface CalloutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: ReactNode;
  title?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
}

export function Callout({
  eyebrow, title, meta, actions, className, children, ...rest
}: CalloutProps) {
  return (
    <div className={['callout', className].filter(Boolean).join(' ')} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ flex: 1 }}>
          {eyebrow && <span className="eyebrow on-emphasis">{eyebrow}</span>}
          {title && <div className="callout-title">{title}</div>}
          {meta && <div className="callout-meta">{meta}</div>}
          {children}
        </div>
        {actions && <div style={{ display: 'flex', gap: 10, alignItems: 'center', flex: 'none' }}>{actions}</div>}
      </div>
    </div>
  );
}
