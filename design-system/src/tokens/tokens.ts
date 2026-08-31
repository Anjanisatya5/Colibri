/**
 * Design tokens for Compass · v5
 *
 * The CSS custom properties in styles/compass.css are the runtime source of
 * truth; these TS constants exist for documentation (Foundation stories) and
 * for the rare component that needs a token as a JS value (e.g. an inline SVG
 * stroke). If you change a color here, change it in compass.css too.
 *
 * Contrast grades (surface · emphasis-fill) come from the v5 style guide.
 */

export const color = {
  /* Surface (one) */
  surface:  '#FFFFFF',
  hairline: '#E0DBCD',

  /* Emphasis role */
  emphasisFill:     '#ECEEF0',
  emphasisHairline: '#D8DEE4',

  /* Interactive edges */
  borderInteractive: '#67727D',

  /* Brand */
  steel: '#3D5A73',
  slate: '#263D50',

  /* Text */
  ink:   '#1F1D18',
  muted: '#5B5560',
  faint: '#706B63',

  /* Accent — Rubi */
  terracotta:     '#B4552F',
  terracottaSoft: 'rgba(180,85,47,0.08)',

  /* Signals */
  pass:       '#2F7A5A',
  review:     '#C08A2E',
  reviewText: '#835B16',
  error:      '#B23B2E',

  /* Ring */
  ringTrack: '#C3BBA5',

  /* Focus */
  focus: '#263D50',
} as const;

export type ColorToken = keyof typeof color;

/** Contrast ratios, from the v5 style guide */
export const contrast: Record<
  string,
  { hex: string; surface: number | null; emphasis: number | null; grade: 'AAA' | 'AA' | '3:1' | 'decor' | '-' }
> = {
  steel:             { hex: '#3D5A73', surface: 6.9,  emphasis: 6.2,  grade: 'AA'  },
  slate:             { hex: '#263D50', surface: 10.7, emphasis: 9.7,  grade: 'AAA' },
  ink:               { hex: '#1F1D18', surface: 16.0, emphasis: 14.5, grade: 'AAA' },
  muted:             { hex: '#5B5560', surface: 6.8,  emphasis: 6.2,  grade: 'AA'  },
  faint:             { hex: '#706B63', surface: 5.0,  emphasis: 4.6,  grade: 'AA'  },
  surface:           { hex: '#FFFFFF', surface: null, emphasis: null, grade: '-'   },
  hairline:          { hex: '#E0DBCD', surface: 1.3,  emphasis: 1.3,  grade: 'decor' },
  emphasisFill:      { hex: '#ECEEF0', surface: null, emphasis: null, grade: '-'   },
  emphasisHairline:  { hex: '#D8DEE4', surface: 1.3,  emphasis: 1.3,  grade: 'decor' },
  borderInteractive: { hex: '#67727D', surface: 4.7,  emphasis: 4.3,  grade: '3:1' },
  terracotta:        { hex: '#B4552F', surface: 4.7,  emphasis: 4.2,  grade: 'AA'  },
  pass:              { hex: '#2F7A5A', surface: 4.9,  emphasis: 4.5,  grade: 'AA'  },
  review:            { hex: '#C08A2E', surface: 2.9,  emphasis: 2.6,  grade: '-'   },
  reviewText:        { hex: '#835B16', surface: 5.7,  emphasis: 5.2,  grade: 'AA'  },
  error:             { hex: '#B23B2E', surface: 5.6,  emphasis: 5.1,  grade: 'AA'  },
  ringTrack:         { hex: '#C3BBA5', surface: 3.8,  emphasis: null, grade: '3:1' },
  focus:             { hex: '#263D50', surface: 10.7, emphasis: null, grade: 'AAA' },
};

/* ─── Type ─────────────────────────────────────────── */
export const font = {
  sans:  `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  serif: `'Source Serif 4', 'Iowan Old Style', Palatino, Georgia, serif`,
  mono:  `'JetBrains Mono', ui-monospace, SFMono-Regular, Consolas, monospace`,
} as const;

/** v5 type scale — token, family, size, weight, notes. */
export const type = [
  { token: '--text-display', family: 'serif', px: 34, weight: 500, note: 'Page display · line-height 1.2 · -0.02em' },
  { token: '--text-h1',      family: 'serif', px: 28, weight: 500, note: 'Section heading' },
  { token: '--text-h2',      family: 'serif', px: 20, weight: 600, note: 'Card title' },
  { token: '--text-body',    family: 'sans',  px: 15, weight: 400, note: 'Body copy · line-height 1.55' },
  { token: '--text-sm',      family: 'sans',  px: 13, weight: 400, note: 'Supporting detail, captions' },
  { token: '--text-eyebrow', family: 'sans',  px: 11, weight: 600, note: 'Eyebrow · 0.14em · uppercase' },
] as const;

/* ─── Radius ───────────────────────────────────────── */
export const radius = {
  sm:   '8px',
  md:   '9px',
  lg:  '14px',
  pill:'20px',
} as const;

/* ─── Spacing (4px base) ───────────────────────────── */
export const spacing = {
  s1: '4px',
  s2: '8px',
  s3: '16px',
  s4: '24px',
  s5: '32px',
  s6: '48px',
} as const;

/* ─── Elevation ────────────────────────────────────── */
export const shadow = {
  sm: '0 1px 2px rgba(31,29,24,.05)',
  md: '0 1px 2px rgba(31,29,24,.05), 0 8px 24px rgba(31,29,24,.06)',
  lg: '0 12px 40px rgba(20,22,30,.16)',
} as const;
