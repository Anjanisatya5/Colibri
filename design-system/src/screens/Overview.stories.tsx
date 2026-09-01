import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/Sidebar';
import { ProgressRing } from '../components/ProgressRing';
import { Callout } from '../components/Callout';
import { Signal } from '../components/Signal';
import { RubiAccentBlock } from '../components/RubiAccentBlock';
import { Button, TextLink } from '../components/Button';

/**
 * Screens · Overview · v5
 *
 * The whole style guide expressed as one screen: sidebar shell, section
 * rhythm, callout, readiness ring, signals, Rubi accent block, primary +
 * secondary + Rubi actions, hairline-rowed table.
 */

const meta: Meta = {
  title: 'Screens/Overview',
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Dashboard: StoryObj = {
  render: () => (
    <div className="app" style={{ minHeight: '100vh' }}>
      <Sidebar
        items={[
          { label: 'Dashboard',       active: true },
          { label: 'Learn with Rubi' },
          { label: 'Course' },
          { label: 'Flashcards' },
          { label: 'Exam simulator',  disabled: true },
          { label: 'Progress',        disabled: true },
        ]}
        stats={[
          { label: 'Course hours', value: '28 of 40 · to sit the exam' },
          { label: 'Exam',         value: <>Aug 14 · <span style={{ color: 'var(--c-review-text)' }}>not booked</span></> },
        ]}
        user={{ initials: 'JR', name: 'Jordan R.' }}
      />

      <main className="main">
        <div className="max">
          {/* ─── Hero ─────────────────────────────── */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h1>Your learning journey, Jordan</h1>
              <div className="text-body text-muted">
                Life &amp; Health · Florida · Exam Aug 14 ·{' '}
                <span className="text-ink" style={{ fontWeight: 600 }}>8 days out</span>
              </div>
            </div>
            <div style={{
              width: 260, flex: 'none',
              paddingLeft: 24,
              borderLeft: '1px solid var(--c-hairline)',
              display: 'flex', flexDirection: 'column', gap: 7,
            }}>
              <span className="eyebrow">Weekly check-in</span>
              <span className="text-sm text-muted" style={{ lineHeight: 1.5 }}>
                Thirty seconds. Tells Rubi how prep feels, beyond the numbers.
              </span>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, fontWeight: 500, color: 'var(--c-steel)' }}>
                Start →
              </a>
            </div>
          </div>

          <div style={{ height: 1, background: 'var(--c-hairline)', margin: '36px 0' }} />

          {/* ─── Tonight callout ───────────────────── */}
          <section style={{ marginBottom: 36 }}>
            <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>Tonight</span>
            <Callout
              eyebrow="Wed · Aug 22"
              title="Annuities · 45 minutes"
              meta="Session 3 of 5 this week. Nothing else is due today."
              actions={
                <>
                  <TextLink>Can't study tonight</TextLink>
                  <Button variant="primary">Start session</Button>
                </>
              }
            />
          </section>

          {/* ─── Where you are — ring + Rubi block ── */}
          <section style={{ marginBottom: 36 }}>
            <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>Where you are</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 320px', gap: 40, alignItems: 'center' }}>
              <ProgressRing value={62} size={160} label="ready" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="eyebrow">Exam readiness</span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', height: 24, padding: '0 12px',
                    borderRadius: 20, border: '1px solid var(--c-border-interactive)',
                    fontSize: 12.5, color: 'var(--c-steel)', fontWeight: 500,
                  }}>Developing</span>
                </div>
                <div className="text-body text-ink" style={{ maxWidth: '46ch', lineHeight: 1.6 }}>
                  Our best estimate of your chance of passing right now. Keep this pace and you'll be ready before Aug 14.
                </div>
                <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 14, color: 'var(--c-muted)', textDecoration: 'underline', textUnderlineOffset: 2, alignSelf: 'flex-start' }}>
                  How is this calculated?
                </a>
              </div>
              <RubiAccentBlock
                eyebrow="Rubi · next step"
                title="Recalibrate Policy provisions & riders"
                body="You rated yourself confident here, but your answers don't match."
                action={<Button variant="rubi">Start recalibration</Button>}
              />
            </div>
          </section>

          {/* ─── Assignments table ─────────────────── */}
          <section style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="eyebrow">Your assignments</span>
              <span className="text-sm text-faint">2 proven · 1 in progress · 3 to start</span>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '38%' }}>Assignment</th>
                  <th style={{ width: '14%' }}>Type</th>
                  <th style={{ width: '18%' }}>Due</th>
                  <th style={{ width: '30%' }}>Readiness</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 500 }}>Life policies</td>
                  <td className="text-faint">Course</td>
                  <td className="text-faint">Completed</td>
                  <td><Signal variant="pass">Proven</Signal></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Policy provisions & riders</td>
                  <td className="text-faint">Course</td>
                  <td className="text-faint">Completed</td>
                  <td><Signal variant="review">Not proven</Signal></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Annuities</td>
                  <td className="text-faint">Course</td>
                  <td className="text-faint">Aug 9</td>
                  <td className="text-faint" style={{ fontSize: 13 }}>In progress · 10 min left</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Health & disability</td>
                  <td className="text-faint">Course</td>
                  <td className="text-faint">Aug 11</td>
                  <td className="text-faint" style={{ fontSize: 13 }}>Not started</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 500 }}>Exam Simulator</td>
                  <td className="text-faint">Exam</td>
                  <td className="text-faint">Aug 13</td>
                  <td className="text-faint" style={{ fontSize: 13 }}>Locked</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* ─── Action rail ───────────────────────── */}
          <section>
            <span className="eyebrow" style={{ marginBottom: 12, display: 'block' }}>Recommended next</span>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary">Start tonight's session</Button>
              <Button variant="secondary">Book your exam seat</Button>
              <Button variant="rubi">Ask Rubi for a plan check</Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  ),
};

export const Onboarding: StoryObj = {
  render: () => (
    <div style={{ minHeight: '100vh', background: 'var(--c-surface)', display: 'flex', flexDirection: 'column' }}>
      {/* Partner header — 64px */}
      <header style={{
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', borderBottom: '1px solid var(--c-hairline)',
        position: 'sticky', top: 0, background: 'var(--c-surface)', zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 600, color: 'var(--c-ink)' }}>Xcel Solutions</span>
          <span style={{ width: 1, height: 16, background: 'var(--c-hairline)' }} />
          <span className="text-sm text-muted">powered by Compass</span>
        </div>
        <TextLink>Save &amp; exit</TextLink>
      </header>

      {/* Progress bar — one 4px pill per step */}
      <div style={{ display: 'flex', gap: 6, padding: '16px 32px 0', maxWidth: 1120, width: '100%', margin: '0 auto' }}>
        {[100, 100, 66, 0, 0].map((pct, i) => (
          <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: 'var(--c-hairline)', overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: 'var(--c-steel)' }} />
          </div>
        ))}
      </div>

      {/* Shell — left questions, right ambient preview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(480px,540px) 1fr', gap: 40, padding: '48px 32px 120px', maxWidth: 1120, width: '100%', margin: '0 auto', flex: 1 }}>
        <div>
          <p className="text-body text-muted" style={{ margin: 0 }}>Where you're starting from helps Rubi set your pace.</p>
          <h1 style={{ marginTop: 8, marginBottom: 28 }}>Where are you in your prep?</h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="opt-card selected">
              <div className="opt-icon">
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v8"/><path d="M12 10c-3 0-5 2-5 5v5h10v-5c0-3-2-5-5-5z"/>
                </svg>
              </div>
              <div className="opt-body">
                <span className="opt-title">New to this material</span>
                <span className="opt-sub">Starting fresh. Build my foundation.</span>
              </div>
              <span className="opt-check">✓</span>
            </button>
            <button className="opt-card">
              <div className="opt-icon">
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>
                </svg>
              </div>
              <div className="opt-body">
                <span className="opt-title">Some background</span>
                <span className="opt-sub">I know parts and want to close gaps.</span>
              </div>
              <span className="opt-check" />
            </button>
            <button className="opt-card">
              <div className="opt-icon">
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>
                </svg>
              </div>
              <div className="opt-body">
                <span className="opt-title">Retaking the exam</span>
                <span className="opt-sub">I've tested before and want to pass this time.</span>
              </div>
              <span className="opt-check" />
            </button>
          </div>

          {/* Footer — Back / Skip / Continue */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--c-hairline)' }}>
            <Button variant="secondary">Back</Button>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <TextLink>Skip for now</TextLink>
              <Button variant="primary">Continue</Button>
            </div>
          </div>
        </div>

        {/* Right panel — ambient preview */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(180deg, rgba(236,238,240,0.5), rgba(255,255,255,0))',
          border: '1px solid var(--c-hairline)',
          borderRadius: 14,
          overflow: 'hidden',
          minHeight: 480,
          padding: 32,
        }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: 14 }}>Peek · your plan</span>
          <div style={{ position: 'absolute', top: 80, right: -60, bottom: -80, left: 40, background: 'var(--c-surface)', border: '1px solid var(--c-hairline)', borderRadius: 14, boxShadow: 'var(--shadow-md)', padding: 24 }}>
            <div style={{ height: 12, width: '55%', background: 'var(--c-emphasis-fill)', borderRadius: 5, marginBottom: 14 }} />
            <div style={{ height: 8,  width: '82%', background: 'var(--c-emphasis-fill)', borderRadius: 5, marginBottom: 8 }} />
            <div style={{ height: 8,  width: '68%', background: 'var(--c-emphasis-fill)', borderRadius: 5, marginBottom: 24 }} />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 24 }}>
              <ProgressRing value={0} size={78} valueFontSize={16} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 10, width: '60%', background: 'var(--c-emphasis-fill)', borderRadius: 5, marginBottom: 8 }} />
                <div style={{ height: 8,  width: '78%', background: 'var(--c-emphasis-fill)', borderRadius: 5 }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {[1,2,3].map((i) => (
                <div key={i} style={{ height: 60, background: 'var(--c-emphasis-fill)', borderRadius: 10 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
