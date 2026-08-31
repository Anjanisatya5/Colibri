import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button · v5
 *
 * Three variants only:
 *   • primary   — steel fill (system actions, main CTAs)
 *   • secondary — ghost with --c-border-interactive (supporting actions)
 *   • rubi      — terracotta ghost (Rubi-authored actions)
 *
 * Steel = system. Terracotta = coach. Focus outline is inherited from
 * :focus-visible in compass.css.
 */

export type ButtonVariant = 'primary' | 'secondary' | 'rubi';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  children?: ReactNode;
}

export function Button({
  variant = 'primary',
  leadingIcon,
  trailingIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={['btn', variant, className].filter(Boolean).join(' ')} {...rest}>
      {leadingIcon}
      <span>{children}</span>
      {trailingIcon}
    </button>
  );
}

/**
 * TextLink · v5 — inline underlined-on-hover text link (.textlink).
 * Use for "Skip for now"-style tertiary actions inside a footer row.
 */
export function TextLink({ className, children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={['textlink', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </button>
  );
}
