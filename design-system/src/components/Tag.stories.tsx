import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  args: { children: 'Developing', variant: 'outline' },
  argTypes: { variant: { control: 'select', options: ['outline','rubi','teal'] } },
};
export default meta;

export const Outline: StoryObj<typeof Tag> = {};
export const Rubi: StoryObj<typeof Tag> = { args: { variant: 'rubi', children: 'Rubi' } };
export const Proven: StoryObj<typeof Tag> = { args: { variant: 'teal', children: 'Proven' } };
