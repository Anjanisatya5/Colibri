import type { Meta, StoryObj } from '@storybook/react';
import { type as typeScale } from '../tokens/tokens';

/**
 * Foundations · Typography · v5
 *
 * Serif for headings (display / h1 / h2), Sans for UI text (body / sm / eyebrow).
 * All type sizes are tokens — never one-off px values in components.
 */

const SAMPLES: Record<string, string> = {
  '--text-display': 'A system, not a swatch',
  '--text-h1':      'Section heading',
  '--text-h2':      'Card title',
  '--text-body':    'Body copy sits at 15px for comfortable reading.',
  '--text-sm':      'Supporting detail and captions.',
  '--text-eyebrow': 'EYEBROW LABEL',
};

const meta: Meta = { title: 'Foundations/Typography', parameters: { layout: 'padded' } };
export default meta;

export const Scale: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 980 }}>
      <p className="text-body text-muted" style={{ maxWidth: '64ch', marginTop: 0, marginBottom: 20 }}>
        <b>Source Serif 4</b> for the three heading tiers. <b>Inter</b> for body, small, and eyebrow.
        Both stacks widen to system fonts so Compass renders correctly wherever the brand fonts don't load.
      </p>
      <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-hairline)', borderRadius: 14, padding: '8px 4px' }}>
        {typeScale.map((t) => (
          <div key={t.token} style={{
            display: 'grid',
            gridTemplateColumns: '170px 200px 1fr',
            gap: 20, alignItems: 'baseline',
            padding: '18px 26px',
            borderBottom: '1px solid #EFEBE0',
          }}>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--c-faint)' }}>{t.token}</code>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--c-muted)' }}>
              {t.family === 'serif' ? 'Serif' : 'Sans'} {t.px} / {t.weight}
            </code>
            <span style={{
              fontFamily: t.family === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)',
              fontSize: t.px,
              fontWeight: t.weight,
              lineHeight: t.token === '--text-body' ? 1.55 : 1.2,
              letterSpacing: t.token === '--text-display' ? '-0.02em'
                            : t.token === '--text-eyebrow' ? '0.14em'
                            : 'normal',
              textTransform: t.token === '--text-eyebrow' ? 'uppercase' : 'none',
              color: 'var(--c-ink)',
            }}>
              {SAMPLES[t.token]}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};
