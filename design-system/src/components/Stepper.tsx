/**
 * Stepper — the linear progress ticker used at the top of the guided
 * onboarding. Backs onto `.stepper` / `.step` in compass.css.
 *
 * State per step is derived from the currentIndex:
 *   i < current  → done
 *   i === current → current
 *   i > current  → upcoming
 */
export interface StepperProps {
  steps: string[];
  currentIndex: number;
}

export function Stepper({ steps, currentIndex }: StepperProps) {
  return (
    <div className="stepper" style={{ padding: 0 }}>
      {steps.map((label, i) => {
        const done = i < currentIndex;
        const cur = i === currentIndex;
        return (
          <span key={label} style={{ display: 'inline-flex', alignItems: 'center' }}>
            <div className={['step', done ? 'done' : '', cur ? 'current' : ''].filter(Boolean).join(' ')}>
              <span className="num">{done ? '✓' : i + 1}</span>
              <span className="lbl">{label}</span>
            </div>
            {i < steps.length - 1 && (
              <span className={['step-line', done ? 'done' : ''].filter(Boolean).join(' ')} />
            )}
          </span>
        );
      })}
    </div>
  );
}
