import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: { layout: 'padded' },
  args: { value: 62, tone: 'violet', width: 260 },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    tone: { control: 'select', options: ['violet', 'green', 'amber', 'ink', 'teal'] },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: 300 }}>
      <ProgressBar value={100} tone="green"  />
      <ProgressBar value={62}  tone="violet" />
      <ProgressBar value={40}  tone="amber"  />
      <ProgressBar value={82}  tone="teal"   />
      <ProgressBar value={30}  tone="ink"    />
    </div>
  ),
};
