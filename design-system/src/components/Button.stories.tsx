import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: { layout: 'padded' },
  args: { children: 'Continue', variant: 'primary' },
  argTypes: {
    variant: { control: 'select', options: ['primary','ghost','signin','use','text'] },
    trailingArrow: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const PrimaryWithArrow: Story = { args: { trailingArrow: true } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Back' } };
export const Use: Story = { args: { variant: 'use', children: 'Use this' } };
export const Text: Story = { args: { variant: 'text', children: 'Fine-tune in the guided form' } };

export const Signin: Story = {
  args: { variant: 'signin', children: 'Sign in' },
  render: (args) => <div style={{ width: 360 }}><Button {...args} /></div>,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
      <Button variant="primary" trailingArrow>Continue</Button>
      <Button variant="ghost">Back</Button>
      <Button variant="use">Use this</Button>
      <Button variant="text">Fine-tune in the guided form</Button>
      <div style={{ width: 360 }}><Button variant="signin">Sign in</Button></div>
    </div>
  ),
};
