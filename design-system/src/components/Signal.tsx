import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Signal · v5 — dot + label.
 *
 * Color is never the sole cue. Every signal ships as a colored dot
 * plus a text label (WCAG 1.4.1).
 *
 * Variants:
 *   • pass    — on-track / mastery / proven      (--c-pass)
 *   • review  — needs-review                     (dot: --c-review · text: --c-review-text)
 *   • error   — genuine error                    (--c-error)
 */

export type SignalVariant = 'pass' | 'review' | 'error';

export interface SignalProps extends HTMLAttributes<HTMLSpanElement> {
  variant: SignalVariant;
  children: ReactNode;
}

export function Signal({ variant, className, children, ...rest }: SignalProps) {
  return (
    <span className={['signal', variant, className].filter(Boolean).join(' ')} {...rest}>
      <span className="dot" />
      {children}
    </span>
  );
}
