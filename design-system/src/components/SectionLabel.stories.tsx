import type { Meta, StoryObj } from '@storybook/react';
import { SectionLabel } from './SectionLabel';

const meta: Meta<typeof SectionLabel> = {
  title: 'Atoms/SectionLabel',
  component: SectionLabel,
  parameters: { layout: 'padded' },
  args: { children: 'Tonight' },
};
export default meta;

type Story = StoryObj<typeof SectionLabel>;

export const Muted: Story = {};
export const Rubi: Story = { args: { tone: 'rubi', children: 'Rubi · Next step' } };
export const Attention: Story = { args: { tone: 'attention', children: 'Not booked' } };
