import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Molecules/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Dashboard: Story = {
  render: () => (
    <div className="app" style={{ minHeight: 600 }}>
      <Sidebar
        items={[
          { label: 'Dashboard', active: true },
          { label: 'Learn with Rubi' },
          { label: 'Course' },
          { label: 'Flashcards' },
          { label: 'Exam simulator', disabled: true },
          { label: 'Progress', disabled: true },
        ]}
        stats={[
          { label: 'Course hours', value: '28 of 40 · to sit the exam' },
          { label: 'Exam', value: <>Aug 14 · <span style={{ color: 'var(--amber)' }}>not booked</span></> },
        ]}
        user={{ initials: 'JR', name: 'Jordan R.' }}
      />
      <main className="main" />
    </div>
  ),
};
