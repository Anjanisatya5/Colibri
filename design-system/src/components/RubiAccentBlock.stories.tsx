import type { Meta, StoryObj } from '@storybook/react';
import { RubiAccentBlock } from './RubiAccentBlock';
import { Button } from './Button';

const meta: Meta<typeof RubiAccentBlock> = {
  title: 'Components/RubiAccentBlock',
  component: RubiAccentBlock,
  parameters: { layout: 'padded' },
};
export default meta;

export const NextStep: StoryObj<typeof RubiAccentBlock> = {
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <RubiAccentBlock
        eyebrow="Rubi · next step"
        title="Recalibrate Policy provisions & riders"
        body="You rated yourself confident here, but your answers don't match."
        action={<Button variant="rubi">Start recalibration</Button>}
      />
    </div>
  ),
};

export const Insight: StoryObj<typeof RubiAccentBlock> = {
  render: () => (
    <div style={{ maxWidth: 460 }}>
      <RubiAccentBlock
        eyebrow="Rubi · insight"
        title="Your Fridays are ~35% slower than your Mondays."
        body="Consider moving heavier topics earlier in the week — you tend to lose focus by end-of-week."
      />
    </div>
  ),
};
