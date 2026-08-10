import type { Meta, StoryObj } from '@storybook/react';
import { WeeklyGrid } from './WeeklyGrid';

const meta: Meta<typeof WeeklyGrid> = {
  title: 'Molecules/WeeklyGrid',
  component: WeeklyGrid,
  parameters: { layout: 'padded' },
};
export default meta;

export const CurrentWeek: StoryObj<typeof WeeklyGrid> = {
  render: () => <WeeklyGrid days={['done', 'done', 'planned', 'rest', 'rest', 'rest']} />,
};
