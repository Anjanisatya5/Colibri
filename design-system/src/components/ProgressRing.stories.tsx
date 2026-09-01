import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from './ProgressRing';

const meta: Meta<typeof ProgressRing> = {
  title: 'Components/ProgressRing',
  component: ProgressRing,
  parameters: { layout: 'centered' },
  args: { value: 62, size: 120, label: 'ready' },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    size:  { control: { type: 'range', min: 40, max: 240, step: 4 } },
  },
};
export default meta;

type Story = StoryObj<typeof ProgressRing>;

export const Readiness: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
      <ProgressRing value={62} size={66} />
      <ProgressRing value={62} size={110} label="ready" />
      <ProgressRing value={62} size={160} label="ready" />
    </div>
  ),
};

export const OnCallout: Story = {
  render: () => (
    <div className="callout" style={{ display: 'flex', gap: 22, alignItems: 'center', maxWidth: 640 }}>
      <ProgressRing value={62} size={80} />
      <div>
        <span className="eyebrow on-emphasis">Exam readiness</span>
        <div className="callout-title">62% ready</div>
        <div className="callout-meta">Keep this pace and you'll be ready before Aug 14.</div>
      </div>
    </div>
  ),
};
