import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

/**
 * Chip — a compact rounded label.
 *
 * Variants:
 *   topic      neutral outlined pill used in topic rails (Learn with Rubi)
 *   topic-on   filled violet variant, marking the current topic
 *   learner    blue-filled bubble used to show learner messages in chat
 *   status     small colored dot + text (used in assignment rows)
 *   chip-btn   button-shaped chip (used as a quick-reply)
 */

export type ChipVariant = 'topic' | 'topic-on' | 'learner' | 'status' | 'chip-btn';

interface BaseChipProps {
  variant?: ChipVariant;
  children?: ReactNode;
  className?: string;
}

interface StaticChipProps extends BaseChipProps, HTMLAttributes<HTMLSpanElement> {
  variant?: Exclude<ChipVariant, 'chip-btn'>;
  /** For status: color of the leading dot. */
  dotColor?: string;
}

interface ButtonChipProps extends BaseChipProps, ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'chip-btn';
}

export type ChipProps = StaticChipProps | ButtonChipProps;

const STYLES: Record<ChipVariant, React.CSSProperties> = {
  topic: {
    display: 'inline-flex', alignItems: 'center', height: 32, padding: '0 14px',
    borderRadius: 20, border: '1px solid var(--line)', fontSize: 12.5, color: 'var(--ink-60)',
  },
  'topic-on': {
    display: 'inline-flex', alignItems: 'center', height: 32, padding: '0 14px',
    borderRadius: 20, background: 'var(--violet)', color: '#fff', fontSize: 12.5, fontWeight: 500,
  },
  learner: {
    background: 'var(--blue)', color: '#fff', fontSize: 14.5, fontWeight: 500,
    padding: '11px 18px', borderRadius: '16px 16px 4px 16px', maxWidth: '82%',
    display: 'inline-block',
  },
  status: {
    display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 500,
  },
  'chip-btn': {},
};

export function Chip(props: ChipProps) {
  if (props.variant === 'chip-btn') {
    const { children, className, variant: _v, ...rest } = props;
    void _v;
    return (
      <button className={['chip-btn', className].filter(Boolean).join(' ')} {...rest}>
        {children}
      </button>
    );
  }

  const { variant = 'topic', children, className, dotColor, style, ...rest } = props;
  if (variant === 'status') {
    return (
      <span
        className={className}
        style={{ ...STYLES.status, color: dotColor ?? 'var(--ink-60)', ...style }}
        {...rest}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: dotColor ?? 'var(--ink-40)' }} />
        {children}
      </span>
    );
  }
  return (
    <span className={className} style={{ ...STYLES[variant], ...style }} {...rest}>
      {children}
    </span>
  );
}
