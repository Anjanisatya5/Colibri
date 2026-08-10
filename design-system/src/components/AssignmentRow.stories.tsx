import type { Meta, StoryObj } from '@storybook/react';
import { AssignmentRow } from './AssignmentRow';
import { SectionLabel } from './SectionLabel';

const meta: Meta<typeof AssignmentRow> = {
  title: 'Molecules/AssignmentRow',
  component: AssignmentRow,
  parameters: { layout: 'padded' },
};
export default meta;

export const DashboardTable: StoryObj<typeof AssignmentRow> = {
  render: () => (
    <div style={{ maxWidth: 960 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 178px 118px 140px', gap: 22, padding: '0 0 10px' }}>
        <SectionLabel style={{ color: 'var(--ink-40)', letterSpacing: '0.1em' }}>Assignment</SectionLabel>
        <SectionLabel style={{ color: 'var(--ink-40)', letterSpacing: '0.1em' }}>Type</SectionLabel>
        <SectionLabel style={{ color: 'var(--ink-40)', letterSpacing: '0.1em' }}>Progress</SectionLabel>
        <SectionLabel style={{ color: 'var(--ink-40)', letterSpacing: '0.1em' }}>Due</SectionLabel>
        <SectionLabel style={{ color: 'var(--ink-40)', letterSpacing: '0.1em' }}>Readiness</SectionLabel>
      </div>
      <AssignmentRow title="Life policies"       type="Course" state="proven"      progressLabel="Complete"   due={<span style={{ color: 'var(--ink-30)' }}>Completed</span>} readinessLabel="Proven" />
      <AssignmentRow title="Provisions"          type="Course" state="not-proven"  progressLabel="Complete"   due={<span style={{ color: 'var(--ink-30)' }}>Completed</span>} readinessLabel="Not proven" />
      <AssignmentRow title="Annuities"           type="Course" state="in-progress" progress={82} progressLabel="10 min left" due="Aug 9"  readinessLabel={<span style={{ color: 'var(--ink-30)' }}>In progress</span>} />
      <AssignmentRow title="Health & disability" type="Course" state="not-started" progressLabel="20 min" due="Aug 11" readinessLabel={<span style={{ color: 'var(--ink-30)' }}>Not started</span>} />
      <AssignmentRow title="Regulation & ethics" type="Course" state="not-started" progressLabel="50 min" due="Aug 12" readinessLabel={<span style={{ color: 'var(--ink-30)' }}>Not started</span>} />
      <AssignmentRow title="Exam Simulator"      type="Exam"   state="locked"      progressLabel="50 min" due="Aug 13" readinessLabel={<span style={{ color: 'var(--ink-30)' }}>Locked</span>} />
    </div>
  ),
};
