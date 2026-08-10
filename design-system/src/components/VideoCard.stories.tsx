import type { Meta, StoryObj } from '@storybook/react';
import { VideoCard } from './VideoCard';

const meta: Meta<typeof VideoCard> = {
  title: 'Molecules/VideoCard',
  component: VideoCard,
  parameters: { layout: 'padded' },
};
export default meta;

export const AnnuitiesOverview: StoryObj<typeof VideoCard> = {
  args: {
    eyebrow: 'Presentation · Annuities overview',
    duration: '1:30',
    description: 'A quick overview before we dig in: how an annuity works, and why it exists.',
    transcript: [
      { time: '0:00', text: 'An annuity is a contract between you and an insurance company.' },
      { time: '0:18', text: 'You put money in now, and it pays you income later, often for life.' },
      { time: '0:42', text: 'While your money is going in, the contract is in its accumulation phase, growing tax-deferred.' },
      { time: '1:05', text: 'When payments start coming back to you, that\'s annuitization, the payout phase.' },
    ],
  },
};
