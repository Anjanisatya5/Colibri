import type { Meta, StoryObj } from '@storybook/react';
import { radius, spacing, shadow } from '../tokens/tokens';

const meta: Meta = { title: 'Foundations/Radii, Spacing & Shadows', parameters: { layout: 'padded' } };
export default meta;

const Wrap = ({ children }: { children: React.ReactNode }) => (
  <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-hairline)', borderRadius: 14, padding: '8px 4px' }}>
    {children}
  </div>
);
const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '12px 24px', borderBottom: '1px solid #EFEBE0' }}>
    {children}
  </div>
);

export const Radii: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <p className="text-body text-muted" style={{ maxWidth: '64ch', marginTop: 0, marginBottom: 20 }}>
        Four radii, in ascending softness. <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>--r-md</code> is the workhorse
        (buttons, inputs); <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>--r-pill</code> is 20px — not a full pill anymore.
      </p>
      <Wrap>
        {Object.entries(radius).map(([name, val]) => (
          <Row key={name}>
            <span style={{ width: 44, height: 34, background: 'var(--c-steel)', borderRadius: val, flex: 'none' }} />
            <code style={{ width: 120, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--c-ink)' }}>--r-{name}</code>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--c-muted)' }}>{val}</code>
          </Row>
        ))}
      </Wrap>
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <p className="text-body text-muted" style={{ maxWidth: '64ch', marginTop: 0, marginBottom: 20 }}>
        4px base. Compositions should snap to these six stops instead of freehand values.
      </p>
      <Wrap>
        {Object.entries(spacing).map(([name, val]) => (
          <Row key={name}>
            <span style={{ width: 52, flex: 'none' }}>
              <span style={{ display: 'block', height: 12, width: val, background: 'var(--c-terracotta)', borderRadius: 2 }} />
            </span>
            <code style={{ width: 120, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--c-ink)' }}>--s-{name.slice(1)}</code>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--c-muted)' }}>{val}</code>
          </Row>
        ))}
      </Wrap>
    </div>
  ),
};

export const Shadows: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <p className="text-body text-muted" style={{ maxWidth: '64ch', marginTop: 0, marginBottom: 20 }}>
        Elevation is a border + shadow, never a second surface color.
        <br />
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>--shadow-sm</code> is the resting card;
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>--shadow-md</code> lifts a callout;
        <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>--shadow-lg</code> is reserved for overlays.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
        {Object.entries(shadow).map(([name, val]) => (
          <div key={name} style={{ background: 'var(--c-surface)', border: '1px solid var(--c-hairline)', borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ padding: 32, background: 'var(--c-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 120, height: 88, background: 'var(--c-surface)', border: '1px solid var(--c-hairline)', borderRadius: 12, boxShadow: val }} />
            </div>
            <div style={{ padding: '10px 14px 14px', borderTop: '1px solid var(--c-hairline)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--c-ink)' }}>--shadow-{name}</div>
              <code style={{ fontSize: 11, color: 'var(--c-muted)', wordBreak: 'break-all' }}>{val}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
