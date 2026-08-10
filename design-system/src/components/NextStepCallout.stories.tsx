import type { Meta, StoryObj } from '@storybook/react';
import { NextStepCallout } from './NextStepCallout';

const meta: Meta<typeof NextStepCallout> = {
  title: 'Molecules/NextStepCallout',
  component: NextStepCallout,
  parameters: { layout: 'padded' },
};
export default meta;

export const Recalibrate: StoryObj<typeof NextStepCallout> = {
  render: () => (
    <NextStepCallout
      title="Recalibrate Policy provisions & riders"
      body="You rated yourself confident here, but your answers don't match."
      actionLabel="Start recalibration"
    />
  ),
};
