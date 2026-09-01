import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  args: { initials: 'JR', size: 24 },
};
export default meta;

export const Default: StoryObj<typeof Avatar> = {};
export const Large: StoryObj<typeof Avatar> = { args: { size: 56 } };
