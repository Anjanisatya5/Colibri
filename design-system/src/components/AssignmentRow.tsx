import type { ReactNode } from 'react';
import { Icon } from '../icons/Icon';
import { ProgressBar } from './ProgressBar';
import { Chip } from './Chip';

/**
 * AssignmentRow — one row in the dashboard's "Your assignments" table.
 * State drives icon, progress fill, and the readiness dot.
 */
export type AssignmentState = 'proven' | 'not-proven' | 'in-progress' | 'not-started' | 'locked';

export interface AssignmentRowProps {
  title: string;
  type: string;
  state: AssignmentState;
  progress?: number;
  progressLabel: string;
  due: ReactNode;
  readinessLabel: ReactNode;
}

function StateIcon({ state }: { state: AssignmentState }) {
  const box = (bg: string, icon: ReactNode) => (
    <span style={{ width: 32, height: 32, flex: 'none', borderRadius: 8, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon}
    </span>
  );
  switch (state) {
    case 'proven':
      return box('var(--green)', <Icon name="check" size={15} style={{ color: '#fff', strokeWidth: 3 }} />);
    case 'not-proven':
      return box('var(--green)', <Icon name="check" size={15} style={{ color: '#fff', strokeWidth: 3 }} />);
    case 'in-progress':
      return box('var(--amber-bright)', (
        <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2.5px solid #fff', boxSizing: 'border-box' }} />
      ));
    case 'locked':
      return box('var(--ink)', <Icon name="lock" size={14} style={{ color: '#fff', strokeWidth: 1.9 }} />);
    case 'not-started':
    default:
      return (
        <span style={{ width: 32, height: 32, flex: 'none', borderRadius: 8, background: 'var(--paper)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid #C9C3B5', boxSizing: 'border-box' }} />
        </span>
      );
  }
}

function ReadinessDot({ state, readinessLabel }: { state: AssignmentState; readinessLabel: ReactNode }) {
  if (state === 'proven') return <Chip variant="status" dotColor="var(--green)" style={{ color: 'var(--green)' }}>{readinessLabel ?? 'Proven'}</Chip>;
  if (state === 'not-proven') return <Chip variant="status" dotColor="var(--amber-bright)" style={{ color: 'var(--amber)' }}>{readinessLabel ?? 'Not proven'}</Chip>;
  return <span style={{ fontSize: 13.5, color: 'var(--ink-30)' }}>{readinessLabel}</span>;
}

export function AssignmentRow({
  title, type, state, progress, progressLabel, due, readinessLabel,
}: AssignmentRowProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 96px 178px 118px 140px',
      alignItems: 'center',
      gap: 22,
      padding: '16px 0',
      borderTop: '1px solid var(--hairline)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <StateIcon state={state} />
        <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--ink)' }}>{title}</span>
      </div>
      <span style={{ fontSize: 14, color: 'var(--ink-40)' }}>{type}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {state === 'proven' || state === 'not-proven' ? (
          <ProgressBar value={100} tone="green" width={72} />
        ) : state === 'in-progress' ? (
          <ProgressBar value={progress ?? 0} tone="green" width={72} />
        ) : (
          <span style={{ width: 72, height: 4, borderRadius: 2, background: 'var(--warm-200)' }} />
        )}
        <span style={{ fontSize: 13, color: 'var(--ink-60)' }}>{progressLabel}</span>
      </div>
      <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 14, color: 'var(--ink-60)' }}>
        {typeof due === 'string' && !['Completed'].includes(due) && <Icon name="calendar" size={15} style={{ color: '#B0ABA0' }} />}
        {due}
      </span>
      <ReadinessDot state={state} readinessLabel={readinessLabel} />
    </div>
  );
}
