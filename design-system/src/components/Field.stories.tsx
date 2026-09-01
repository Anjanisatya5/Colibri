import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Molecules/Field',
  component: Field,
  parameters: { layout: 'padded' },
  args: {
    id: 'email',
    label: 'Email',
    type: 'email',
    defaultValue: 'jordan.reyes@colibri.co',
    autoComplete: 'username',
  },
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Email: Story = { render: (args) => <div style={{ width: 380 }}><Field {...args} /></div> };

export const PasswordWithForgot: Story = {
  render: () => (
    <div style={{ width: 380 }}>
      <Field
        id="pw"
        label="Password"
        type="password"
        defaultValue="compass2026"
        autoComplete="current-password"
        trailingLink={<a href="#" onClick={(e) => e.preventDefault()}>Forgot?</a>}
      />
    </div>
  ),
};
