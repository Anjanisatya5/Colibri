import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Molecules/NavItem',
  component: NavItem,
  parameters: { layout: 'padded' },
};
export default meta;

type Story = StoryObj<typeof NavItem>;

export const List: Story = {
  render: () => (
    <nav className="sb-nav" style={{ width: 220 }}>
      <NavItem active>Dashboard</NavItem>
      <NavItem>Learn with Rubi</NavItem>
      <NavItem>Course</NavItem>
      <NavItem>Flashcards</NavItem>
      <NavItem disabled>Exam simulator</NavItem>
      <NavItem disabled>Progress</NavItem>
    </nav>
  ),
};
