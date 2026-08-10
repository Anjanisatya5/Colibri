import type { Meta, StoryObj } from '@storybook/react';
import { RubiAskBar } from './RubiAskBar';

const meta: Meta<typeof RubiAskBar> = {
  title: 'Molecules/RubiAskBar',
  component: RubiAskBar,
  parameters: { layout: 'padded' },
};
export default meta;

export const Decorative: StoryObj<typeof RubiAskBar> = { render: () => <div style={{ maxWidth: 720 }}><RubiAskBar /></div> };
export const Interactive: StoryObj<typeof RubiAskBar> = { render: () => <div style={{ maxWidth: 720 }}><RubiAskBar interactive /></div> };
