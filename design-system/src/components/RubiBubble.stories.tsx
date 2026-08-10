import type { Meta, StoryObj } from '@storybook/react';
import { RubiBubble } from './RubiBubble';

const meta: Meta<typeof RubiBubble> = {
  title: 'Molecules/RubiBubble',
  component: RubiBubble,
  parameters: { layout: 'padded' },
};
export default meta;

export const Editorial: StoryObj<typeof RubiBubble> = {
  render: () => (
    <div style={{ maxWidth: 620 }}>
      <RubiBubble>
        {[
          "Got it — Aug 14, 2026. That's 56 days out, about 8 weeks. Very workable if we stay steady.",
          "How much time can you give it? Pick how many days a week, and how long each session runs.",
        ]}
      </RubiBubble>
    </div>
  ),
};

export const Soft: StoryObj<typeof RubiBubble> = {
  render: () => (
    <div style={{ maxWidth: 620 }}>
      <RubiBubble variant="soft">
        Let's learn Annuities together, right here. I'll bring in a short video, the key ideas, and we'll check your understanding as we go.
      </RubiBubble>
    </div>
  ),
};
