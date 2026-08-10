import type { ReactNode } from 'react';
import { SectionLabel } from './SectionLabel';
import { SerifHeadline } from './SerifHeadline';

/**
 * NextStepCallout — the "Rubi · Next step" panel on the dashboard, with a
 * violet left rule, headline, description, and a soft outlined CTA.
 */
export interface NextStepCalloutProps {
  eyebrow?: string;
  title: ReactNode;
  body: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function NextStepCallout({
  eyebrow = 'Rubi · Next step',
  title,
  body,
  actionLabel,
  onAction,
}: NextStepCalloutProps) {
  return (
    <div style={{ width: 300, flex: 'none' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 9,
        paddingLeft: 24,
        borderLeft: '2px solid var(--violet)',
      }}>
        <SectionLabel tone="rubi" style={{ letterSpacing: '0.11em' }}>{eyebrow}</SectionLabel>
        <SerifHeadline size="card" as="span">{title}</SerifHeadline>
        <span style={{ fontSize: 14, lineHeight: 1.5, color: '#5B5560' }}>{body}</span>
        {actionLabel && (
          <button
            onClick={onAction}
            style={{
              display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center',
              height: 40, padding: '0 20px', marginTop: 4,
              borderRadius: 8,
              border: '1px solid var(--violet-line)',
              background: 'transparent',
              color: 'var(--violet)',
              fontSize: 13, fontWeight: 500,
            }}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
