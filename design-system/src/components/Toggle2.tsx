import type { ReactNode } from 'react';

/**
 * Toggle2 — a two-option pill toggle (e.g. English / Español).
 * Backs onto `.toggle-2` in compass.css.
 */
export interface Toggle2Option<T extends string> {
  value: T;
  label: ReactNode;
}

export interface Toggle2Props<T extends string> {
  options: [Toggle2Option<T>, Toggle2Option<T>];
  value: T;
  onChange: (next: T) => void;
}

export function Toggle2<T extends string>({ options, value, onChange }: Toggle2Props<T>) {
  return (
    <div className="toggle-2">
      {options.map((o) => (
        <button
          key={o.value}
          className={o.value === value ? 'sel' : ''}
          onClick={() => onChange(o.value)}
          aria-pressed={o.value === value}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
