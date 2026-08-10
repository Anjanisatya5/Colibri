import type { HTMLAttributes } from 'react';

/**
 * SectionLabel — the tiny uppercase eyebrow used above sections
 * ("TONIGHT", "YOUR ASSIGNMENTS", "WHERE YOU ARE"). Matches `.wlabel` and
 * the inline pattern reused throughout the dashboard.
 */
export interface SectionLabelProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tone controls the color: 'muted' is ink-60 (default), 'rubi' is violet, 'attention' is amber. */
  tone?: 'muted' | 'rubi' | 'attention';
}

const COLOR: Record<Required<SectionLabelProps>['tone'], string> = {
  muted:     'var(--ink-50)',
  rubi:      'var(--violet)',
  attention: 'var(--amber)',
};

export function SectionLabel({ tone = 'muted', style, children, ...rest }: SectionLabelProps) {
  return (
    <span
      style={{
        fontSize: 11,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        fontWeight: 600,
        color: COLOR[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
