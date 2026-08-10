import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Topic: Story = { args: { variant: 'topic', children: 'Life insurance policy types' } };
export const TopicOn: Story = { args: { variant: 'topic-on', children: 'Annuities' } };
export const Learner: Story = {
  args: { variant: 'learner', children: 'My exam is Aug 14, 2026' },
  render: (args) => <div style={{ display: 'flex', justifyContent: 'flex-end' }}><Chip {...args} /></div>,
};
export const StatusProven: Story = {
  args: { variant: 'status', children: 'Proven', dotColor: '#1B8A5A', style: { color: '#1B8A5A' } },
};
export const StatusAttention: Story = {
  args: { variant: 'status', children: 'Not proven', dotColor: '#E8873A', style: { color: '#B26414' } },
};
export const QuickReply: Story = {
  args: { variant: 'chip-btn', children: "Sure, let's do it" },
};

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Chip variant="topic">Life insurance policy types</Chip>
      <Chip variant="topic">Policy provisions &amp; riders</Chip>
      <Chip variant="topic-on">Annuities</Chip>
      <Chip variant="topic">Health &amp; disability</Chip>
      <Chip variant="topic">Regulation &amp; ethics</Chip>
    </div>
  ),
};
