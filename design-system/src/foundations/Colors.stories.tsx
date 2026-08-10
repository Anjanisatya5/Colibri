import type { Meta, StoryObj } from '@storybook/react';
import { color } from '../tokens/tokens';

/**
 * Foundations · Colors
 *
 * Every swatch below is a CSS custom property in `styles/compass.css`.
 * Reference them with `var(--paper)`, `var(--violet)`, etc.
 */

type Swatch = { name: string; cssVar: string; value: string; role?: string };

const GROUPS: { title: string; blurb: string; swatches: Swatch[] }[] = [
  {
    title: 'Surface & ink',
    blurb: 'Warm, paper-toned neutrals. Never pure #FFF for backgrounds.',
    swatches: [
      { name: 'paper',    cssVar: '--paper',    value: color.paper,    role: 'App background' },
      { name: 'canvas',   cssVar: '--canvas',   value: color.canvas,   role: 'Deep canvas behind surfaces' },
      { name: 'warm-100', cssVar: '--warm-100', value: color.warm100,  role: 'Active nav, soft fills' },
      { name: 'warm-200', cssVar: '--warm-200', value: color.warm200,  role: 'Tracks, chips' },
      { name: 'hairline', cssVar: '--hairline', value: color.hairline, role: 'Dividers' },
      { name: 'line',     cssVar: '--line',     value: color.line,     role: 'Borders' },
    ],
  },
  {
    title: 'Ink scale',
    blurb: 'Text tones. --ink is primary, the -60/-40 stops carry body & meta.',
    swatches: [
      { name: 'ink',    cssVar: '--ink',    value: color.ink,    role: 'Primary text' },
      { name: 'ink-80', cssVar: '--ink-80', value: color.ink80 },
      { name: 'ink-70', cssVar: '--ink-70', value: color.ink70 },
      { name: 'ink-60', cssVar: '--ink-60', value: color.ink60,  role: 'Body copy' },
      { name: 'ink-50', cssVar: '--ink-50', value: color.ink50,  role: 'Micro labels' },
      { name: 'ink-40', cssVar: '--ink-40', value: color.ink40,  role: 'Muted / meta' },
      { name: 'ink-30', cssVar: '--ink-30', value: color.ink30,  role: 'Faint / disabled' },
    ],
  },
  {
    title: 'Brand',
    blurb: 'Intelligence Blue is the logo & link color. Rubi Violet is the primary CTA. Adaptive Teal signals readiness.',
    swatches: [
      { name: 'blue',        cssVar: '--blue',        value: color.blue,       role: 'Intelligence Blue — logo, links' },
      { name: 'blue-hover',  cssVar: '--blue-hover',  value: color.blueHover },
      { name: 'violet',      cssVar: '--violet',      value: color.violet,     role: 'Rubi Violet — primary CTA' },
      { name: 'violet-tint', cssVar: '--violet-tint', value: color.violetTint, role: 'Rubi surface' },
      { name: 'violet-chip', cssVar: '--violet-chip', value: color.violetChip },
      { name: 'violet-line', cssVar: '--violet-line', value: color.violetLine },
      { name: 'teal',        cssVar: '--teal',        value: color.teal,       role: 'Adaptive Teal — readiness' },
    ],
  },
  {
    title: 'Signal',
    blurb: 'Green = proven. Amber = attention. Red is reserved for the Rubi mark.',
    swatches: [
      { name: 'green',        cssVar: '--green',        value: color.green,       role: 'Complete / proven' },
      { name: 'green-tint',   cssVar: '--green-tint',   value: color.greenTint },
      { name: 'amber',        cssVar: '--amber',        value: color.amber,       role: 'Attention (text on paper)' },
      { name: 'amber-bright', cssVar: '--amber-bright', value: color.amberBright, role: 'Attention (fills)' },
      { name: 'rubi-red',     cssVar: '--rubi-red',     value: color.rubiRed,     role: 'Rubi mark only' },
    ],
  },
];

function ColorGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      {GROUPS.map((g) => (
        <section key={g.title}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 6 }}>{g.title}</h2>
          <p style={{ color: 'var(--ink-60)', fontSize: 14, marginTop: 0, marginBottom: 16, maxWidth: '54ch' }}>
            {g.blurb}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 14 }}>
            {g.swatches.map((s) => (
              <div key={s.cssVar}
                   style={{ border: '1px solid var(--hairline)', borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
                <div style={{ background: s.value, height: 72 }} />
                <div style={{ padding: '10px 12px 12px' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 600 }}>{s.name}</div>
                  <code style={{ fontSize: 12, color: 'var(--ink-60)' }}>{s.cssVar} · {s.value}</code>
                  {s.role && (
                    <div style={{ fontSize: 12.5, color: 'var(--ink-60)', marginTop: 4 }}>{s.role}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => <ColorGrid />,
};
