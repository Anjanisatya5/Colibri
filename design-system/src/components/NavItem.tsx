import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

/**
 * NavItem — a sidebar link. Backs onto `.nav-item` in compass.css.
 * `disabled` renders as a `<span>` with `.is-disabled`.
 */

interface CommonProps {
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type SpanProps = CommonProps & HTMLAttributes<HTMLSpanElement>;

export function NavItem(props: AnchorProps | SpanProps) {
  const { active, disabled, className, children, ...rest } = props as AnchorProps;
  const classes = [
    'nav-item',
    active ? 'active' : '',
    disabled ? 'is-disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  if (disabled) {
    return <span className={classes} {...(rest as HTMLAttributes<HTMLSpanElement>)}>{children}</span>;
  }
  return (
    <a href="#" className={classes} onClick={(e) => e.preventDefault()} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}
