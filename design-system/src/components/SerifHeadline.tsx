import type { HTMLAttributes, ElementType } from 'react';

/**
 * SerifHeadline — a Source Serif headline at one of the design system's
 * canonical sizes. Composes over any heading level.
 */
export type HeadlineSize = 'display' | 'h1' | 'h2' | 'h3' | 'card' | 'row';

interface SerifHeadlineProps extends HTMLAttributes<HTMLElement> {
  size?: HeadlineSize;
  as?: ElementType;
}

const STYLE: Record<HeadlineSize, React.CSSProperties> = {
  display: { fontSize: 40,        fontWeight: 500, lineHeight: 1.08, letterSpacing: '-0.02em' },
  h1:      { fontSize: 'clamp(34px,4.4vw,44px)', fontWeight: 600, lineHeight: 1.04 },
  h2:      { fontSize: 25,        fontWeight: 600, letterSpacing: '-0.02em' },
  h3:      { fontSize: 22,        fontWeight: 500 },
  card:    { fontSize: 19,        fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.25 },
  row:     { fontSize: 17,        fontWeight: 500 },
};

export function SerifHeadline({
  size = 'h2',
  as: Tag = 'h2',
  style,
  children,
  ...rest
}: SerifHeadlineProps) {
  return (
    <Tag style={{ fontFamily: 'var(--serif)', color: 'var(--ink)', margin: 0, ...STYLE[size], ...style }} {...rest}>
      {children}
    </Tag>
  );
}
