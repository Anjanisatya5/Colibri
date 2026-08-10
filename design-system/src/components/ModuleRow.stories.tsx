import type { Meta, StoryObj } from '@storybook/react';
import { ModuleRow } from './ModuleRow';

const meta: Meta<typeof ModuleRow> = {
  title: 'Molecules/ModuleRow',
  component: ModuleRow,
  parameters: { layout: 'padded' },
};
export default meta;

export const CourseList: StoryObj<typeof ModuleRow> = {
  render: () => (
    <div style={{ maxWidth: 960 }}>
      <ModuleRow moduleLabel="Module 1 · 7 lessons" title="Life insurance policy types" icon="shield"     state="complete"    action={<a style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 500 }}>Review →</a>} />
      <ModuleRow moduleLabel="Module 2 · 7 lessons" title="Policy provisions & riders" icon="flashcards" state="not-proven"  action={<a style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 500 }}>Review →</a>} />
      <ModuleRow moduleLabel="Module 3 · 8 lessons · in progress" title="Annuities"    icon="sparkle"    state="in-progress" progress={52}
        action={<button style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 34, padding: '0 16px', borderRadius: 8, background: 'var(--violet)', color: '#fff', border: 'none', fontSize: 12.5, fontWeight: 600 }}>Resume →</button>} />
      <ModuleRow moduleLabel="Module 4 · 8 lessons" title="Health & disability" icon="plus" state="upcoming" action={<a style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 500 }}>Start →</a>} />
      <ModuleRow moduleLabel="Module 5 · 6 lessons" title="Regulation & ethics" icon="flag" state="upcoming" action={<a style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 500 }}>Start →</a>} />
    </div>
  ),
};
