import type { ReactNode } from 'react';
import { Icon, type IconName } from '../icons/Icon';
import { SerifHeadline } from './SerifHeadline';

/**
 * ModuleRow — a course module row. Three visual states: complete
 * (green fill), not-proven (amber fill), in-progress (violet, tinted row).
 */
export type ModuleState = 'complete' | 'not-proven' | 'in-progress' | 'upcoming';

export interface ModuleRowProps {
  moduleLabel: string;
  title: string;
  icon?: IconName;
  state: ModuleState;
  progress?: number;
  action?: ReactNode;
}

const FILL: Record<ModuleState, string> = {
  complete: 'var(--green)',
  'not-proven': 'var(--amber-bright)',
  'in-progress': 'var(--violet)',
  upcoming: 'var(--warm-200)',
};

const STATE_LABEL: Record<ModuleState, string> = {
  complete: 'Complete',
  'not-proven': 'Not proven',
  'in-progress': 'In progress',
  upcoming: 'Up next',
};

const STATE_COLOR: Record<ModuleState, string> = {
  complete: 'var(--green)',
  'not-proven': 'var(--amber)',
  'in-progress': 'var(--violet)',
  upcoming: 'var(--ink-40)',
};

export function ModuleRow({
  moduleLabel, title, icon = 'shield', state, progress, action,
}: ModuleRowProps) {
  const isInProgress = state === 'in-progress';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 20,
      padding: '22px 4px',
      borderTop: '1px solid var(--hairline)',
      background: isInProgress ? '#FBF6F1' : 'transparent',
    }}>
      <span style={{
        width: 38, height: 38, flex: 'none', borderRadius: 9,
        background: isInProgress ? 'var(--violet-chip)' : 'var(--warm-100)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: isInProgress ? 'var(--violet)' : 'var(--ink-70)',
      }}>
        <Icon name={icon} size={17} />
      </span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: isInProgress ? 'var(--violet)' : 'var(--ink-40)' }}>
          {moduleLabel}
        </span>
        <SerifHeadline size="row" as="span" style={{ fontWeight: isInProgress ? 600 : 500, color: state === 'upcoming' ? 'var(--ink-70)' : 'var(--ink)' }}>
          {title}
        </SerifHeadline>
        <div style={{
          height: 3, maxWidth: 260, borderRadius: 2,
          background: 'var(--warm-200)', overflow: 'hidden',
        }}>
          <span style={{ display: 'block', width: `${progress ?? (state === 'complete' || state === 'not-proven' ? 100 : 0)}%`, height: '100%', background: FILL[state] }} />
        </div>
      </div>
      <span style={{ fontSize: 12, color: STATE_COLOR[state], width: 80, textAlign: 'right', fontWeight: 500 }}>
        {STATE_LABEL[state]}
      </span>
      <span style={{ width: 70, display: 'flex', justifyContent: 'flex-end' }}>{action}</span>
    </div>
  );
}
