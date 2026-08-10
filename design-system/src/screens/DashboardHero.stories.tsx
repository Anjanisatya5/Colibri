import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from '../components/ProgressRing';
import { NextStepCallout } from '../components/NextStepCallout';
import { SectionLabel } from '../components/SectionLabel';
import { SerifHeadline } from '../components/SerifHeadline';
import { Tag } from '../components/Tag';

/**
 * Screens · Dashboard Hero
 *
 * The "Where you are" block from the dashboard: a 62% readiness ring paired
 * with a Rubi next-step callout. Assembled from ProgressRing + NextStepCallout.
 */

const meta: Meta = { title: 'Screens/Dashboard Hero', parameters: { layout: 'padded' } };
export default meta;

export const WhereYouAre: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 1080 }}>
      <SectionLabel>Where you are</SectionLabel>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, marginTop: 16 }}>
        <ProgressRing value={62} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <SectionLabel>Exam readiness</SectionLabel>
            <Tag variant="outline">Developing</Tag>
          </div>
          <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-70)', maxWidth: 430 }}>
            Our best estimate of your chance of passing right now. Keep this pace and you'll be ready before Aug 14.
          </div>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 14, color: 'var(--ink-50)', textDecoration: 'underline', textUnderlineOffset: 2 }}>
            How is this calculated?
          </a>
        </div>
        <NextStepCallout
          title="Recalibrate Policy provisions & riders"
          body="You rated yourself confident here, but your answers don't match."
          actionLabel="Start recalibration"
        />
      </div>

      <div style={{ marginTop: 44 }}>
        <SerifHeadline size="display" as="h1">Your learning journey, Jordan</SerifHeadline>
      </div>
    </div>
  ),
};
