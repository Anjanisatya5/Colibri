import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { Field } from '../components/Field';
import { WordMark } from '../components/Logo';

/**
 * Screens · Login
 *
 * The full login card assembled from atoms + molecules.
 * This is the same visual as the prototype's `#login` block.
 */

const meta: Meta = {
  title: 'Screens/Login',
  parameters: { layout: 'fullscreen', backgrounds: { default: 'canvas' } },
};
export default meta;

export const Card: StoryObj = {
  render: () => (
    <div style={{
      position: 'relative',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--canvas)',
      padding: 24,
      minHeight: '100vh',
    }}>
      <form
        className="login-card"
        onSubmit={(e) => { e.preventDefault(); alert('Signed in (demo).'); }}
      >
        <div className="login-brand"><WordMark /></div>
        <h1>Welcome back</h1>
        <p className="login-sub">Sign in to pick up where you left off.</p>
        <Field id="email" label="Email" type="email" defaultValue="jordan.reyes@colibri.co" autoComplete="username" />
        <Field
          id="pw"
          label="Password"
          type="password"
          defaultValue="compass2026"
          autoComplete="current-password"
          trailingLink={<a href="#" onClick={(e) => e.preventDefault()}>Forgot?</a>}
        />
        <Button variant="signin" type="submit">Sign in</Button>
        <p className="login-foot">
          New here? <a href="#" onClick={(e) => e.preventDefault()}>Create an account</a>
        </p>
      </form>
    </div>
  ),
};
