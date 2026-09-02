import type { SVGProps } from 'react';

/**
 * Icon — a thin wrapper around a 24×24 stroked SVG.
 *
 * The line style (stroke width 1.8, round caps/joins, currentColor) matches
 * the `.i` utility class in compass.css so icons pair correctly with any
 * text or button color.
 *
 * Pick a preset:   <Icon name="arrow-right" size={16} />
 * Or pass paths:   <Icon paths={<path d="M5 12h14"/>} />
 */

export type IconName =
  | 'arrow-right' | 'arrow-left' | 'chevron-down' | 'chevron-right'
  | 'check' | 'check-circle' | 'circle' | 'circle-empty'
  | 'plus' | 'mic' | 'send' | 'exit'
  | 'calendar' | 'clock' | 'globe' | 'bell' | 'layers'
  | 'video' | 'audio' | 'book' | 'flashcards'
  | 'lock' | 'info' | 'shield' | 'sparkle' | 'target'
  | 'seed' | 'trend' | 'retry' | 'flag'
  | 'home' | 'dashboard';

const PATHS: Record<IconName, JSX.Element> = {
  'arrow-right':   (<><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></>),
  'arrow-left':    (<><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></>),
  'chevron-down':  (<polyline points="6 9 12 15 18 9"/>),
  'chevron-right': (<path d="M9 18l6-6-6-6"/>),
  check:           (<polyline points="20 6 9 17 4 12"/>),
  'check-circle':  (<><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></>),
  circle:          (<circle cx="12" cy="12" r="10"/>),
  'circle-empty':  (<circle cx="12" cy="12" r="9" strokeDasharray="3 3"/>),
  plus:            (<><path d="M12 5v14"/><path d="M5 12h14"/></>),
  mic:             (<><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></>),
  send:            (<><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></>),
  exit:            (<><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>),
  calendar:        (<><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>),
  clock:           (<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>),
  globe:           (<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/></>),
  bell:            (<><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></>),
  layers:          (<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/></>),
  video:           (<polygon points="5 3 19 12 5 21 5 3"/>),
  audio:           (<><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/></>),
  book:            (<><path d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z"/></>),
  flashcards:      (<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 12h10"/></>),
  lock:            (<><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>),
  info:            (<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></>),
  shield:          (<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"/>),
  sparkle:         (<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>),
  target:          (<><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.2"/></>),
  seed:            (<><path d="M12 2v8"/><path d="M12 10c-3 0-5 2-5 5v5h10v-5c0-3-2-5-5-5z"/></>),
  trend:           (<><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></>),
  retry:           (<><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></>),
  flag:            (<><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></>),
  home:            (<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>),
  dashboard:       (<><rect x="3" y="3" width="8" height="10" rx="1.5"/><rect x="13" y="3" width="8" height="6" rx="1.5"/><rect x="13" y="11" width="8" height="10" rx="1.5"/><rect x="3" y="15" width="8" height="6" rx="1.5"/></>),
};

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  /** Preset icon name. */
  name?: IconName;
  /** Or supply your own SVG children. */
  paths?: React.ReactNode;
  /** Rendered width/height in px. Defaults to 18. */
  size?: number;
}

export function Icon({ name, paths, size = 18, className, style, ...rest }: IconProps) {
  return (
    <svg
      className={['i', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
      {...rest}
    >
      {name ? PATHS[name] : paths}
    </svg>
  );
}
