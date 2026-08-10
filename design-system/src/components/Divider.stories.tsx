import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: { layout: 'padded' },
  args: { spacing: 44 },
};
export default meta;

export const Default: StoryObj<typeof Divider> = {
  render: (args) => (
    <div>
      <p style={{ color: 'var(--ink-60)' }}>Section A</p>
      <Divider {...args} />
      <p style={{ color: 'var(--ink-60)' }}>Section B</p>
    </div>
  ),
};
