import { Icon } from '../icons/Icon';

/**
 * RubiAskBar — the "Ask Rubi…" composer that appears above the dashboard,
 * course, and flashcards content. Purely decorative in the prototype
 * (pointer-events: none via `.rubi-ask`); wire it up with `interactive` if
 * you need real behavior later.
 */
export interface RubiAskBarProps {
  placeholder?: string;
  /**
   * `false` (default) matches the prototype: the bar is a look-only affordance
   * and does not accept input. `true` removes pointer-events:none and lets the
   * user actually type/click.
   */
  interactive?: boolean;
}

export function RubiAskBar({ placeholder = 'Ask Rubi…', interactive = false }: RubiAskBarProps) {
  return (
    <div
      className="rubi-ask"
      aria-hidden={!interactive}
      style={interactive ? { pointerEvents: 'auto', cursor: 'text' } : undefined}
    >
      <span className="plus" aria-hidden="true">+</span>
      <input type="text" placeholder={placeholder} readOnly={!interactive} tabIndex={interactive ? 0 : -1} />
      <span className="mic" aria-hidden="true"><Icon name="mic" size={16} /></span>
      <span className="send" aria-hidden="true"><Icon name="send" size={17} /></span>
    </div>
  );
}
