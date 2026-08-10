import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle2 } from './Toggle2';

const meta: Meta<typeof Toggle2> = {
  title: 'Molecules/Toggle2',
  component: Toggle2 as any,
  parameters: { layout: 'centered' },
};
export default meta;

export const Language: StoryObj = {
  render: () => {
    const [v, setV] = useState<'en' | 'es'>('en');
    return (
      <Toggle2
        value={v}
        onChange={setV}
        options={[
          { value: 'en', label: 'English' },
          { value: 'es', label: 'Español' },
        ]}
      />
    );
  },
};
