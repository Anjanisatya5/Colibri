import type { ReactNode } from 'react';
import { RubiMark } from './RubiMark';

/**
 * RubiSuggestCard — the violet-tinted callout Rubi drops mid-form to
 * suggest a value ("Rubi suggests 45 min × 5 days · [Use this]").
 * Backs onto `.rubi-suggest` in compass.css.
 */
export interface RubiSuggestCardProps {
  title: ReactNode;
  body: ReactNode;
  actionLabel?: ReactNode;
  onAction?: () => void;
}

export function RubiSuggestCard({ title, body, actionLabel = 'Use this', onAction }: RubiSuggestCardProps) {
  return (
    <div className="rubi-suggest">
      <RubiMark size="sm" />
      <div style={{ flex: 1 }}>
        <div className="rs-head">
          <span className="rs-title">{title}</span>
          {onAction && <button className="use-btn" onClick={onAction}>{actionLabel}</button>}
        </div>
        <div className="rs-body">{body}</div>
      </div>
    </div>
  );
}
