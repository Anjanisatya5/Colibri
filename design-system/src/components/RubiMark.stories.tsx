import type { Meta, StoryObj } from '@storybook/react';
import { RubiMark } from './RubiMark';

const meta: Meta<typeof RubiMark> = {
  title: 'Atoms/RubiMark',
  component: RubiMark,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof RubiMark>;

export const Md: Story = { args: { size: 'md' } };
export const Sm: Story = { args: { size: 'sm' } };
export const Custom: Story = { args: { size: 56 } };

export const WithName: Story = {
  render: () => (
    <span className="rubi-intro" style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
      <RubiMark size="sm" />
      <span className="name" style={{ fontSize: 13, fontWeight: 600, color: 'var(--rubi-red)' }}>Rubi</span>
      <span className="status" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 0 3px rgba(27,138,90,.15)' }} />
    </span>
  ),
};
