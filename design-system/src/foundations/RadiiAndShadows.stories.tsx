import type { Meta, StoryObj } from '@storybook/react';
import { radius, shadow } from '../tokens/tokens';

/**
 * Foundations · Radii & Shadows
 *
 * Cards and cards-of-cards. `--r-md` is the workhorse; `--r-pill` is used
 * for chips and rounded input rails.
 */

function Sample({ swatch }: { swatch: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, background: 'var(--paper)' }}>
      {swatch}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--hairline)', borderRadius: 12, overflow: 'hidden' }}>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>{children}</div>;
}

const meta: Meta = { title: 'Foundations/Radii & Shadows', parameters: { layout: 'padded' } };
export default meta;

export const Radii: StoryObj = {
  render: () => (
    <div>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 18 }}>Radii</h2>
      <Grid>
        {Object.entries(radius).map(([name, val]) => (
          <Card key={name}>
            <Sample swatch={<div style={{ width: 96, height: 96, background: 'var(--violet-tint)', border: '1px solid var(--violet-line)', borderRadius: val }} />} />
            <div style={{ padding: '10px 12px 12px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 600 }}>--r-{name}</div>
              <code style={{ fontSize: 12, color: 'var(--ink-60)' }}>{val}</code>
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  ),
};

export const Shadows: StoryObj = {
  render: () => (
    <div>
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, marginBottom: 18 }}>Shadows</h2>
      <Grid>
        {Object.entries(shadow).map(([name, val]) => (
          <Card key={name}>
            <Sample swatch={<div style={{ width: 120, height: 96, background: '#fff', border: '1px solid var(--hairline)', borderRadius: 12, boxShadow: val }} />} />
            <div style={{ padding: '10px 12px 12px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontWeight: 600 }}>--shadow-{name}</div>
              <code style={{ fontSize: 11, color: 'var(--ink-60)', wordBreak: 'break-all' }}>{val}</code>
            </div>
          </Card>
        ))}
      </Grid>
    </div>
  ),
};
