import type { ReactNode } from 'react';
import { RubiMark } from './RubiMark';

/**
 * RubiBubble — a Rubi-authored chat turn. Two visual styles:
 *   editorial:  the full "beat" used on the onboarding chat, with a "Rubi"
 *               label above the copy and paragraphs at 17px.
 *   soft:       the violet-tinted bubble used inside the Learn with Rubi
 *               lesson (a 26px sigil + rounded violet card).
 */

export type RubiBubbleVariant = 'editorial' | 'soft';

export interface RubiBubbleProps {
  variant?: RubiBubbleVariant;
  /** Pass either a single node or an array of paragraphs. */
  children: ReactNode | ReactNode[];
}

export function RubiBubble({ variant = 'editorial', children }: RubiBubbleProps) {
  const paragraphs = Array.isArray(children) ? children : [children];

  if (variant === 'soft') {
    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <span
          style={{
            width: 26, height: 26, flex: 'none', borderRadius: '50%',
            background: 'var(--violet)', marginTop: 2,
          }}
        />
        <div
          style={{
            padding: '14px 18px',
            background: 'var(--violet-tint)',
            border: '1px solid #EBE1F3',
            borderRadius: '4px 14px 14px 14px',
            fontSize: 14.5, lineHeight: 1.55,
            color: 'var(--ink-80)',
            textWrap: 'pretty' as any,
          }}
        >
          {paragraphs.map((p, i) => (
            <div key={i} style={i > 0 ? { marginTop: 8 } : undefined}>{p}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rubi-turn beat">
      <RubiMark />
      <div className="body">
        <div className="who">Rubi</div>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  );
}
