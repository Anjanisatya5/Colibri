import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from './ProgressRing';

const meta: Meta<typeof ProgressRing> = {
  title: 'Atoms/ProgressRing',
  component: ProgressRing,
  parameters: { layout: 'centered' },
  args: { value: 62, size: 158 },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size:  { control: { type: 'range', min: 60, max: 240, step: 4 } },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressRing>;

export const Readiness: Story = {};

export const Stages: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <ProgressRing value={28} size={110} color="var(--amber-bright)" />
      <ProgressRing value={62} size={110} />
      <ProgressRing value={88} size={110} color="var(--green)" />
    </div>
  ),
};
