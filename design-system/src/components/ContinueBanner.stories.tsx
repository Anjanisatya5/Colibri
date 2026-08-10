import type { Meta, StoryObj } from '@storybook/react';
import { ContinueBanner, ContinueBannerThumbnail } from './ContinueBanner';

const meta: Meta<typeof ContinueBanner> = {
  title: 'Molecules/ContinueBanner',
  component: ContinueBanner,
  parameters: { layout: 'padded' },
};
export default meta;

export const CourseTop: StoryObj<typeof ContinueBanner> = {
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <ContinueBanner
        eyebrow="Continue your course · 3 of 5"
        title="Annuities"
        progress={52}
        thumbnail={<ContinueBannerThumbnail />}
      />
    </div>
  ),
};
