/**
 * Avatar · v5 — the initial disc used in the sidebar footer. Backs onto
 * `.avatar` / `.sb-user .avatar` in compass.css.
 */
export interface AvatarProps {
  initials: string;
  size?: number;
  /** Background color; defaults to --c-emphasis-fill. */
  background?: string;
  /** Text color; defaults to --c-slate. */
  color?: string;
  className?: string;
}

export function Avatar({
  initials,
  size = 24,
  background = 'var(--c-emphasis-fill)',
  color = 'var(--c-slate)',
  className,
}: AvatarProps) {
  return (
    <span
      className={['avatar', className].filter(Boolean).join(' ')}
      style={{
        width: size, height: size, borderRadius: '50%',
        background, color,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        fontSize: Math.max(9, Math.round(size * 0.42)),
        fontWeight: 600,
        flex: 'none',
      }}
    >
      {initials.slice(0, 2).toUpperCase()}
    </span>
  );
}
