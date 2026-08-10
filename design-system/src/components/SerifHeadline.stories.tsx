import type { Meta, StoryObj } from '@storybook/react';
import { SerifHeadline } from './SerifHeadline';

const meta: Meta<typeof SerifHeadline> = {
  title: 'Atoms/SerifHeadline',
  component: SerifHeadline,
  parameters: { layout: 'padded' },
  args: { children: 'Your learning journey, Jordan', size: 'display' },
  argTypes: {
    size: { control: 'select', options: ['display','h1','h2','h3','card','row'] },
  },
};
export default meta;

type Story = StoryObj<typeof SerifHeadline>;

export const Playground: Story = {};

export const Ramp: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <SerifHeadline size="display">Your learning journey, Jordan</SerifHeadline>
      <SerifHeadline size="h1">Welcome back</SerifHeadline>
      <SerifHeadline size="h2">Your exam schedule</SerifHeadline>
      <SerifHeadline size="h3">Annuities</SerifHeadline>
      <SerifHeadline size="card">Book your exam seat</SerifHeadline>
      <SerifHeadline size="row" as="span">Life insurance policy types</SerifHeadline>
    </div>
  ),
};
