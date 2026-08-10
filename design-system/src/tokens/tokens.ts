/**
 * Design tokens for Compass, mirrored from styles/compass.css.
 *
 * The CSS custom properties in that file are the runtime source of truth;
 * these TS constants exist for two reasons:
 *   1. Documentation — Storybook Foundation pages read from here.
 *   2. Inline use — when a component genuinely can't use a class (e.g. an
 *      inline SVG stroke passed as a JS value).
 *
 * If you change a color here, change it in compass.css too — or vice versa.
 */

export const color = {
  paper:       '#FAF9F5',
  canvas:      '#ECEAE1',
  warm100:     '#EFECE3',
  warm200:     '#E7E3D8',
  hairline:    '#EDE9DE',
  line:        '#E4E0D5',

  ink:         '#1A1A16',
  ink80:       '#3B3A34',
  ink70:       '#57574F',
  ink60:       '#66635B',
  ink50:       '#6E6A60',
  ink40:       '#8A867B',
  ink30:       '#A8A399',

  blue:        '#1E2761',
  blueHover:   '#151B45',
  violet:      '#5B3E8E',
  violetTint:  '#F3EEF7',
  violetChip:  '#EEE6F5',
  violetLine:  '#E4D8EE',
  teal:        '#0E6E76',

  green:       '#1B8A5A',
  greenTint:   '#D7EBE0',
  amber:       '#B26414',
  amberBright: '#E8873A',
  rubiRed:     '#C4122E',
} as const;

export type ColorToken = keyof typeof color;

export const font = {
  serif: `'Source Serif 4', Georgia, serif`,
  sans:  `'Inter', system-ui, -apple-system, sans-serif`,
} as const;

export const radius = {
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  pill: '999px',
} as const;

export const shadow = {
  sm:    '0 1px 2px rgba(26,26,22,.05)',
  md:    '0 8px 30px rgba(26,26,22,.07), 0 2px 8px rgba(26,26,22,.04)',
  frame: '0 1px 3px rgba(30,25,15,0.04), 0 12px 40px rgba(30,25,15,0.05)',
} as const;

/**
 * CSS variable name for a given token. Prefer `var(--paper)` in stylesheets;
 * this helper is here for parity when writing inline styles from JS.
 *
 *   cssVar('paper')     // 'var(--paper)'
 *   cssVar('violet')    // 'var(--violet)'
 */
export function cssVar(token: ColorToken): string {
  const kebab = token.replace(/([A-Z0-9]+)/g, '-$1').toLowerCase();
  // Special-case the numeric ink scale: ink80 -> --ink-80
  const varName = kebab.replace(/^ink-?(\d+)/, 'ink-$1').replace(/^warm-?(\d+)/, 'warm-$1');
  return `var(--${varName})`;
}
