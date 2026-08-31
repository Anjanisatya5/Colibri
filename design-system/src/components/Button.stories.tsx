import type { Meta, StoryObj } from '@storybook/react';
import { Button, TextLink } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'padded' },
  args: { children: 'Continue', variant: 'primary' },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'rubi'] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary', children: 'Back' } };
export const Rubi: Story = { args: { variant: 'rubi', children: 'Start recalibration' } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Continue</Button>
      <Button variant="secondary">Back</Button>
      <Button variant="rubi">Start recalibration</Button>
      <TextLink>Skip for now</TextLink>
    </div>
  ),
};

export const OnEmphasis: Story = {
  render: () => (
    <div className="callout" style={{ display: 'flex', gap: 12, alignItems: 'center', maxWidth: 640 }}>
      <div style={{ flex: 1 }}>
        <span className="eyebrow on-emphasis">Tonight</span>
        <div className="callout-title">Annuities · 45 minutes</div>
      </div>
      <Button variant="secondary">Skip</Button>
      <Button variant="primary">Start session</Button>
    </div>
  ),
};
