import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';

const meta: Meta<typeof Slot> = {
  title: 'Molecules/Slot',
  component: Slot,
  parameters: { layout: 'padded' },
};
export default meta;

export const Rail: StoryObj<typeof Slot> = {
  render: () => (
    <aside className="rail" style={{ width: 260 }}>
      <h3>Your profile</h3>
      <p className="rsub">Builds as we talk</p>
      <Slot label="Exam"            value="Aug 14, 2026 · 56 days" />
      <Slot label="Rhythm"          value="45 min × 5 days/wk" />
      <Slot label="Starting point"  value="New to this material" />
      <Slot label="Readiness"       value="~28% · Early" readiness />
      <Slot label="Formats & check-ins" />
    </aside>
  ),
};
