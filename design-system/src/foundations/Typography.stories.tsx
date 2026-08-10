import type { Meta, StoryObj } from '@storybook/react';
import type { CSSProperties } from 'react';

/**
 * Foundations · Typography
 *
 * Source Serif for headlines, Inter for UI.
 * A tight -0.02em letterspacing on serif headings keeps them from feeling loose.
 */

type Row = { label: string; sample: string; note: string; style: CSSProperties };

const HEADLINES: Row[] = [
  { label: 'Display · 40 serif',    sample: 'Your learning journey, Jordan',
    note: '40 · 500 · -0.02em',
    style: { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.02em' } },
  { label: 'H1 · clamp 34–44',      sample: 'Welcome back',
    note: 'clamp(34,4.4vw,44) · 600',
    style: { fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 'clamp(34px,4.4vw,44px)', lineHeight: 1.04 } },
  { label: 'H2 · 25 serif',         sample: 'Your exam schedule',
    note: '25 · 600 · -0.02em',
    style: { fontFamily: 'var(--serif)', fontWeight: 600, fontSize: 25, letterSpacing: '-0.02em' } },
  { label: 'H3 · 22 serif',         sample: 'Annuities',
    note: '22 · 500',
    style: { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 22 } },
  { label: 'Card title · 19 serif', sample: 'Book your exam seat',
    note: '19 · 500 · -0.01em',
    style: { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 19, letterSpacing: '-0.01em' } },
  { label: 'Row title · 17 serif',  sample: 'Life insurance policy types',
    note: '17 · 500',
    style: { fontFamily: 'var(--serif)', fontWeight: 500, fontSize: 17 } },
];

const UI: Row[] = [
  { label: 'Body · 15 sans',        sample: 'Sign in to pick up where you left off.',
    note: '15 · 400 · ink-60',
    style: { fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink-60)', lineHeight: 1.55 } },
  { label: 'Body-tight · 14 sans',  sample: 'Rubi pulls your weakest topics plus the cards you marked to review.',
    note: '14 · 400 · ink-60',
    style: { fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--ink-60)', lineHeight: 1.5 } },
  { label: 'Meta · 12.5 sans',      sample: 'Life & Health · Florida · Exam Aug 14 · 8 days out',
    note: '12.5 · 400 · ink-60',
    style: { fontFamily: 'var(--sans)', fontSize: 12.5, color: 'var(--ink-60)' } },
  { label: 'Micro-label · 11 sans', sample: 'TONIGHT',
    note: '11 · 600 · 0.13em · uppercase',
    style: { fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'var(--ink-50)' } },
  { label: 'Button · 14 sans',      sample: 'Continue',
    note: '14 · 600',
    style: { fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600 } },
];

function Ramp({ rows, title }: { rows: Row[]; title: string }) {
  return (
    <section style={{ marginBottom: 44 }}>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 18 }}>{title}</h2>
      <div style={{ borderTop: '1px solid var(--hairline)' }}>
        {rows.map((r) => (
          <div key={r.label}
               style={{ display: 'grid', gridTemplateColumns: '180px 1fr 200px', gap: 24, alignItems: 'baseline', padding: '20px 4px', borderBottom: '1px solid var(--hairline)' }}>
            <span style={{ fontSize: 12, color: 'var(--ink-50)' }}>{r.label}</span>
            <span style={r.style}>{r.sample}</span>
            <code style={{ fontSize: 11.5, color: 'var(--ink-60)' }}>{r.note}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

const meta: Meta = { title: 'Foundations/Typography', parameters: { layout: 'padded' } };
export default meta;

export const Scale: StoryObj = {
  render: () => (
    <div>
      <Ramp rows={HEADLINES} title="Headlines · Source Serif 4" />
      <Ramp rows={UI}        title="UI text · Inter" />
    </div>
  ),
};
