import type { Meta, StoryObj } from '@storybook/react';
import { color, contrast } from '../tokens/tokens';

/**
 * Foundations · Colors · v5
 *
 * Every swatch is a CSS custom property in styles/compass.css.
 * Ratios are from the v5 style guide: normal text needs 4.5 (AA) / 7 (AAA);
 * large or bold needs 3 / 4.5; non-text UI needs 3.
 */

type Group = {
  title: string;
  blurb: string;
  swatches: {
    name: string;
    cssVar: string;
    hex: string;
    role?: string;
  }[];
};

const GROUPS: Group[] = [
  {
    title: 'Surface & emphasis',
    blurb: 'ONE surface. Emphasis is a role (Tonight callouts, badges), never a second surface.',
    swatches: [
      { name: 'surface',           cssVar: '--c-surface',           hex: color.surface,          role: 'App, cards, panels, inputs all sit here.' },
      { name: 'hairline',          cssVar: '--c-hairline',          hex: color.hairline,         role: 'Decorative dividers only (below 3:1, never a control edge).' },
      { name: 'emphasis-fill',     cssVar: '--c-emphasis-fill',     hex: color.emphasisFill,     role: 'Callout tint — not a surface.' },
      { name: 'emphasis-hairline', cssVar: '--c-emphasis-hairline', hex: color.emphasisHairline, role: 'Decorative edge inside emphasis blocks.' },
      { name: 'border-interactive',cssVar: '--c-border-interactive',hex: color.borderInteractive,role: 'Real edges — every button, input, focusable control.' },
    ],
  },
  {
    title: 'Brand',
    blurb: 'Steel = system (primary CTA, nav, links, ring fill). Slate = hover / pressed / focus outline.',
    swatches: [
      { name: 'steel', cssVar: '--c-steel', hex: color.steel, role: 'PRIMARY — nav, links, buttons, ring fill.' },
      { name: 'slate', cssVar: '--c-slate', hex: color.slate, role: 'Hover / pressed / focus outline.' },
    ],
  },
  {
    title: 'Accent — Rubi',
    blurb: 'Terracotta = Rubi. Any content authored by Rubi (next-step, insights) uses the terracotta rule + eyebrow + ghost button. Steel = system; terracotta = coach.',
    swatches: [
      { name: 'terracotta',      cssVar: '--c-terracotta',      hex: color.terracotta,     role: 'ACCENT — rule, eyebrow, ghost button. AA on surface.' },
      { name: 'terracotta-soft', cssVar: '--c-terracotta-soft', hex: '#F7EDE7',            role: 'Hover bg for terracotta buttons (rgba 0.08).' },
    ],
  },
  {
    title: 'Text tiers',
    blurb: 'ink → muted → faint. All AA on both fills.',
    swatches: [
      { name: 'ink',   cssVar: '--c-ink',   hex: color.ink,   role: 'Headings & body (AAA).' },
      { name: 'muted', cssVar: '--c-muted', hex: color.muted, role: 'Secondary text, captions, eyebrows.' },
      { name: 'faint', cssVar: '--c-faint', hex: color.faint, role: 'Third-tier meta (weights, timings, sub-labels).' },
    ],
  },
  {
    title: 'Signals — functional, never decorative',
    blurb: 'Color is never the sole cue — ship dot + label. --c-review is a FILL; for amber TEXT use --c-review-text.',
    swatches: [
      { name: 'pass',        cssVar: '--c-pass',        hex: color.pass,       role: 'On-track / mastery — AA on surface.' },
      { name: 'review',      cssVar: '--c-review',      hex: color.review,     role: 'DOT / FILL only — fails as text.' },
      { name: 'review-text', cssVar: '--c-review-text', hex: color.reviewText, role: 'Readable amber for review labels and text.' },
      { name: 'error',       cssVar: '--c-error',       hex: color.error,      role: 'Genuine errors only.' },
    ],
  },
  {
    title: 'Ring & focus',
    blurb: 'Ring track for the readiness gauge — value always shown as text. Focus outline: 2px solid, 2px offset, on every interactive control.',
    swatches: [
      { name: 'ring-track', cssVar: '--c-ring-track', hex: color.ringTrack, role: 'Readiness-ring empty track (3.8:1 vs steel fill).' },
      { name: 'focus',      cssVar: '--c-focus',      hex: color.focus,     role: 'Focus outline — 2px solid, 2px offset.' },
    ],
  },
];

function GradePill({ swatchName }: { swatchName: string }) {
  const key = swatchName.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const c = contrast[key];
  if (!c) return null;
  const color = c.grade === 'AAA' ? 'var(--c-pass)'
              : c.grade === 'AA'  ? 'var(--c-review-text)'
              : c.grade === '3:1' ? 'var(--c-pass)'
              : c.grade === 'decor' ? 'var(--c-faint)'
              : 'var(--c-faint)';
  return <span style={{ fontSize: 11, fontWeight: 600, color }}>{c.grade}</span>;
}

function RatioText({ swatchName }: { swatchName: string }) {
  const key = swatchName.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const c = contrast[key];
  if (!c) return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--c-faint)' }}>—</span>;
  if (c.surface === null) return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--c-faint)' }}>the fill</span>;
  const emphasis = c.emphasis !== null ? ` · ${c.emphasis}` : '';
  return <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--c-muted)' }}>{c.surface}{emphasis}</span>;
}

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
};
export default meta;

export const Palette: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, maxWidth: 1120 }}>
      {GROUPS.map((g) => (
        <section key={g.title}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, marginBottom: 6 }}>{g.title}</h2>
          <p className="text-body text-muted" style={{ marginTop: 0, marginBottom: 16, maxWidth: '64ch' }}>{g.blurb}</p>
          <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-hairline)', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '58px minmax(200px, 1fr) 100px 110px 60px 2fr',
              gap: 14, alignItems: 'center',
              padding: '12px 22px', background: '#F5F3ED',
              borderBottom: '1px solid var(--c-hairline)',
            }}>
              <span />
              <span className="eyebrow">Token</span>
              <span className="eyebrow">Hex</span>
              <span className="eyebrow">Surf · emph</span>
              <span className="eyebrow">Grade</span>
              <span className="eyebrow">Use &amp; safe scope</span>
            </div>
            {g.swatches.map((s) => (
              <div key={s.cssVar} style={{
                display: 'grid',
                gridTemplateColumns: '58px minmax(200px, 1fr) 100px 110px 60px 2fr',
                gap: 14, alignItems: 'center',
                padding: '14px 22px',
                borderBottom: '1px solid #EFEBE0',
              }}>
                <span style={{ width: 44, height: 38, borderRadius: 8, background: s.hex, border: '1px solid rgba(0,0,0,0.08)' }} />
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--c-ink)' }}>{s.cssVar}</code>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--c-muted)' }}>{s.hex}</code>
                <RatioText swatchName={s.name} />
                <GradePill swatchName={s.name} />
                <span style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--c-muted)' }}>{s.role}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};
