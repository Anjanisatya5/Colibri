import type { ReactNode } from 'react';
import { Icon } from '../icons/Icon';

/**
 * Slot — a single row inside the onboarding profile rail.
 * Empty state shows a dashed circle; filled state shows a checked violet disc
 * (or a teal disc when `readiness` is true).
 */
export interface SlotProps {
  label: string;
  value?: ReactNode;
  readiness?: boolean;
}

export function Slot({ label, value, readiness }: SlotProps) {
  const filled = value !== undefined && value !== '' && value !== '—';
  return (
    <div className={['slot', readiness ? 'readiness' : '', filled ? 'filled' : ''].filter(Boolean).join(' ')}>
      <span className="dot">
        <Icon name="check" size={13} />
      </span>
      <div>
        <div className="k">{label}</div>
        <div className="v">{filled ? value : '—'}</div>
      </div>
    </div>
  );
}
