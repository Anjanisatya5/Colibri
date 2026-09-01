import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from './Icon';

const ALL: IconName[] = [
  'arrow-right','arrow-left','chevron-down','chevron-right',
  'check','check-circle','circle','circle-empty',
  'plus','mic','send','exit',
  'calendar','clock','globe','bell','layers',
  'video','audio','book','flashcards',
  'lock','info','shield','sparkle','target',
  'seed','trend','retry','flag','home','dashboard',
];

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: { layout: 'padded' },
  args: { name: 'arrow-right', size: 18 },
  argTypes: {
    name: { control: 'select', options: ALL },
    size: { control: { type: 'range', min: 12, max: 48, step: 2 } },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Playground: Story = {};

export const Library: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8, color: 'var(--ink)' }}>
      {ALL.map((n) => (
        <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', border: '1px solid var(--hairline)', borderRadius: 10, background: '#fff' }}>
          <Icon name={n} size={18} />
          <code style={{ fontSize: 11.5, color: 'var(--ink-60)' }}>{n}</code>
        </div>
      ))}
    </div>
  ),
};
