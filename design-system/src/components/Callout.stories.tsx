import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';
import { Button, TextLink } from './Button';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  parameters: { layout: 'padded' },
};
export default meta;

export const Tonight: StoryObj<typeof Callout> = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <Callout
        eyebrow="Tonight"
        title="Annuities · 45 minutes"
        meta="Session 3 of 5 this week."
      />
    </div>
  ),
};

export const TonightWithActions: StoryObj<typeof Callout> = {
  render: () => (
    <div style={{ maxWidth: 720 }}>
      <Callout
        eyebrow="Tonight"
        title="Annuities · 45 minutes"
        meta="Nothing else is due today."
        actions={
          <>
            <TextLink>Can’t study tonight</TextLink>
            <Button variant="primary">Start session</Button>
          </>
        }
      />
    </div>
  ),
};
