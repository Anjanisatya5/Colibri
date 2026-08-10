import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '../icons/Icon';

/**
 * Button — the shared CTA in Compass. Backs onto `.cta` in compass.css.
 *
 * Variants:
 *   primary    Rubi Violet pill · default action (`.cta`)
 *   ghost      Outline pill, ink-60 text (`.cta.ghost`)
 *   signin     Full-width 54px slab used on the login screen (`.signin-btn`)
 *   use        Small white pill used inside a `.rubi-suggest` card (`.use-btn`)
 *   text       Underlined violet text link (`.textlink`)
 */

export type ButtonVariant = 'primary' | 'ghost' | 'signin' | 'use' | 'text';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** Shortcut: render an arrow-right icon after the label. */
  trailingArrow?: boolean;
  /** Arbitrary icon before the label. */
  leadingIcon?: ReactNode;
  children?: ReactNode;
}

const CLASS: Record<ButtonVariant, string> = {
  primary: 'cta',
  ghost:   'cta ghost',
  signin:  'signin-btn',
  use:     'use-btn',
  text:    'textlink',
};

export function Button({
  variant = 'primary',
  trailingArrow,
  leadingIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={[CLASS[variant], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingArrow && <Icon name="arrow-right" size={16} />}
    </button>
  );
}
