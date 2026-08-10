import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * ModeCard — the fork buttons on the onboarding chat hero:
 * "Talk it through" (primary) vs. "Fill out a quick form".
 */
export interface ModeCardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  tag: string;
  title: ReactNode;
  desc: ReactNode;
  primary?: boolean;
}

export function ModeCard({ tag, title, desc, primary, className, ...rest }: ModeCardProps) {
  return (
    <button
      className={['mode', primary ? 'primary' : '', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="m-tag">{tag}</span>
      <span className="m-title">{title}</span>
      <span className="m-desc">{desc}</span>
    </button>
  );
}
