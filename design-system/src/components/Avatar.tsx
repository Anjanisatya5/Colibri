/**
 * Avatar — the initial disc used in the sidebar footer. Backs onto `.avatar` /
 * `.sb-user .avatar`.
 */
export interface AvatarProps {
  initials: string;
  size?: number;
  /** Background color; defaults to `--warm-200`. */
  background?: string;
  /** Text color; defaults to a warm gray. */
  color?: string;
  className?: string;
}

export function Avatar({
  initials,
  size = 24,
  background = 'var(--warm-200)',
  color = '#6A675E',
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
        fontWeight: 500,
      }}
    >
      {initials.slice(0, 2).toUpperCase()}
    </span>
  );
}
