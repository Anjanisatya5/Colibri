import type { Meta, StoryObj } from '@storybook/react';
import { LearnerBubble } from './LearnerBubble';

const meta: Meta<typeof LearnerBubble> = {
  title: 'Molecules/LearnerBubble',
  component: LearnerBubble,
  parameters: { layout: 'padded' },
};
export default meta;

export const Default: StoryObj<typeof LearnerBubble> = {
  render: () => (
    <div style={{ maxWidth: 620 }}>
      <LearnerBubble>My exam is Aug 14, 2026</LearnerBubble>
      <LearnerBubble>45 min · 5 days/wk</LearnerBubble>
    </div>
  ),
};
