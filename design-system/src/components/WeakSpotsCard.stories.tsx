import type { Meta, StoryObj } from '@storybook/react';
import { WeakSpotsCard } from './WeakSpotsCard';

const meta: Meta<typeof WeakSpotsCard> = {
  title: 'Molecules/WeakSpotsCard',
  component: WeakSpotsCard,
  parameters: { layout: 'padded' },
};
export default meta;

export const Default: StoryObj<typeof WeakSpotsCard> = {
  render: () => (
    <div style={{ maxWidth: 960 }}>
      <WeakSpotsCard
        body="Rubi pulls your weakest topics plus the cards you marked “to review.”"
        actionLabel="12 cards →"
      />
    </div>
  ),
};
