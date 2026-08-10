import type { ReactNode } from 'react';

/**
 * LearnerBubble — right-aligned Intelligence Blue bubble that shows the
 * learner's messages in the onboarding chat. Backs onto `.learner .chip`.
 */
export function LearnerBubble({ children }: { children: ReactNode }) {
  return (
    <div className="learner beat">
      <span className="chip">{children}</span>
    </div>
  );
}
