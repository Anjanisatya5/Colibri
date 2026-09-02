import type { Meta, StoryObj } from '@storybook/react';
import { Signal } from './Signal';

const meta: Meta<typeof Signal> = {
  title: 'Components/Signal',
  component: Signal,
  parameters: { layout: 'padded' },
};
export default meta;

export const AllVariants: StoryObj<typeof Signal> = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <Signal variant="pass">Proven</Signal>
      <Signal variant="review">Not proven</Signal>
      <Signal variant="error">Error</Signal>
    </div>
  ),
};
