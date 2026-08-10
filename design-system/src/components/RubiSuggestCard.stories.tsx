import type { Meta, StoryObj } from '@storybook/react';
import { RubiSuggestCard } from './RubiSuggestCard';

const meta: Meta<typeof RubiSuggestCard> = {
  title: 'Molecules/RubiSuggestCard',
  component: RubiSuggestCard,
  parameters: { layout: 'padded' },
};
export default meta;

export const RhythmSuggestion: StoryObj<typeof RubiSuggestCard> = {
  render: () => (
    <div style={{ maxWidth: 620 }}>
      <RubiSuggestCard
        title="Rubi suggests 45 min × 5 days"
        body="About 3.8 hours a week — enough to cover the full Life & Health blueprint before Aug 14 with room to review. Meeting each topic across the week is the spacing that makes it stick."
        onAction={() => alert('Used!')}
      />
    </div>
  ),
};
