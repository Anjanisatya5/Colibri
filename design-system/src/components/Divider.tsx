/**
 * Divider — a hairline break between page sections. Matches the
 * `background:#EDE9DE; margin:44px 0` pattern the dashboard uses.
 */
export interface DividerProps {
  spacing?: number;
  color?: string;
}

export function Divider({ spacing = 44, color = 'var(--hairline)' }: DividerProps) {
  return <div style={{ height: 1, background: color, margin: `${spacing}px 0` }} />;
}
