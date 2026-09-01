import type { Meta, StoryObj } from '@storybook/react';
import { Logo, WordMark } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  args: { size: 40 },
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      {[19, 26, 40, 64].map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Logo size={s} />
          <code style={{ fontSize: 11, color: 'var(--ink-60)' }}>{s}px</code>
        </div>
      ))}
    </div>
  ),
};

export const Wordmark: Story = {
  render: () => <WordMark />,
};
