/**
 * RubiMark — the Rubi companion sigil. A red pentagon with a white star.
 * Sizes: `md` = 34px (rail / turn), `sm` = 26px (intro line).
 */
export interface RubiMarkProps {
  size?: 'sm' | 'md' | number;
  className?: string;
}

export function RubiMark({ size = 'md', className }: RubiMarkProps) {
  const px = typeof size === 'number' ? size : size === 'sm' ? 26 : 34;
  return (
    <span
      className={['rubi-mark', size === 'sm' ? 'sm' : '', className].filter(Boolean).join(' ')}
      style={{ width: px, height: px, flex: `0 0 ${px}px` }}
    >
      <svg viewBox="0 0 40 40" width="100%" height="100%" aria-label="Rubi">
        <path d="M20 2.5 L34 10 L34 30 L20 37.5 L6 30 L6 10 Z" fill="#C4122E" />
        <path d="M20 12.5 l2.4 4.9 5.4 .8 -3.9 3.8 .9 5.4 -4.8-2.5 -4.8 2.5 .9-5.4 -3.9-3.8 5.4-.8 Z" fill="#fff" />
      </svg>
    </span>
  );
}
