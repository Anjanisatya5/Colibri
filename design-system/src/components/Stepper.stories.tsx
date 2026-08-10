import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  args: {
    steps: ['Schedule', 'Experience', 'Preferences', 'Diagnostic', 'Summary'],
    currentIndex: 2,
  },
  argTypes: {
    currentIndex: { control: { type: 'range', min: 0, max: 4 } },
  },
};
export default meta;

export const OnboardingProgress: StoryObj<typeof Stepper> = {};
