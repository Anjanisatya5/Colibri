import type { Meta, StoryObj } from '@storybook/react';
import { ModeCard } from './ModeCard';
import { Icon } from '../icons/Icon';

const meta: Meta<typeof ModeCard> = {
  title: 'Molecules/ModeCard',
  component: ModeCard,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof ModeCard>;

export const Fork: Story = {
  render: () => (
    <div className="fork" style={{ display: 'flex', gap: 14, maxWidth: 600 }}>
      <ModeCard
        primary
        tag="Recommended"
        title={<>Talk it through <Icon paths={<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>} size={16} style={{ color: 'var(--violet)' }} /></>}
        desc="I ask, you answer in your own words. Best if you'd like me to explain as we go."
      />
      <ModeCard
        tag="Faster"
        title={<>Fill out a quick form <Icon name="flashcards" size={16} style={{ color: 'var(--ink-40)' }} /></>}
        desc="The same questions on one page. Best if you already know your dates."
      />
    </div>
  ),
};
