import type { ButtonHTMLAttributes } from 'react';

/**
 * OptionButton — a pill or square selector used in the onboarding widgets.
 * Backs onto `.opt` (pill) and `.opt.sq` (square) in compass.css.
 */
export interface OptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** `pill` (default) or `square`. */
  shape?: 'pill' | 'square';
  selected?: boolean;
}

export function OptionButton({
  shape = 'pill',
  selected,
  className,
  ...rest
}: OptionButtonProps) {
  return (
    <button
      className={['opt', shape === 'square' ? 'sq' : '', selected ? 'sel' : '', className].filter(Boolean).join(' ')}
      aria-pressed={selected}
      {...rest}
    />
  );
}
