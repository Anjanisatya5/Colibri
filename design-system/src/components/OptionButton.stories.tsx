import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { OptionButton } from './OptionButton';

const meta: Meta<typeof OptionButton> = {
  title: 'Molecules/OptionButton',
  component: OptionButton,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof OptionButton>;

export const Squares: Story = {
  render: () => {
    const options = [2, 3, 4, 5, '6+'];
    const [picked, setPicked] = useState<string | number>(5);
    return (
      <div className="opt-row">
        {options.map((n) => (
          <OptionButton key={n} shape="square" selected={picked === n} onClick={() => setPicked(n)}>
            {n}
          </OptionButton>
        ))}
      </div>
    );
  },
};

export const Pills: Story = {
  render: () => {
    const options = ['Daily', 'A few a week', 'No reminders'];
    const [picked, setPicked] = useState('Daily');
    return (
      <div className="opt-row">
        {options.map((n) => (
          <OptionButton key={n} selected={picked === n} onClick={() => setPicked(n)}>
            {n}
          </OptionButton>
        ))}
      </div>
    );
  },
};
