import type { Meta, StoryObj } from '@storybook/react';
import { Field } from '../components/Field';
import { Button } from '../components/Button';
import { WordMark } from '../components/Logo';

/**
 * Screens · Login · v5
 * Steel primary button, terracotta text-link, no cream ground.
 */

const meta: Meta = {
  title: 'Screens/Login',
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Card: StoryObj = {
  render: () => (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--c-surface)',
      padding: 24,
    }}>
      <form
        onSubmit={(e) => { e.preventDefault(); alert('Signed in (demo).'); }}
        style={{
          width: 420,
          maxWidth: '100%',
          background: 'var(--c-surface)',
          border: '1px solid var(--c-hairline)',
          borderRadius: 20,
          padding: '38px 40px 30px',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div style={{ marginBottom: 26 }}><WordMark /></div>
        <h1 style={{ marginBottom: 10 }}>Welcome back</h1>
        <p className="text-body text-muted" style={{ marginTop: 0, marginBottom: 30 }}>
          Sign in to pick up where you left off.
        </p>
        <Field id="email" label="Email" type="email" defaultValue="jordan.reyes@colibri.co" autoComplete="username" />
        <Field
          id="pw"
          label="Password"
          type="password"
          defaultValue="compass2026"
          autoComplete="current-password"
          trailingLink={<a href="#" onClick={(e) => e.preventDefault()}>Forgot?</a>}
        />
        <Button variant="primary" type="submit" style={{ width: '100%', height: 48, marginTop: 8 }}>
          Sign in
        </Button>
        <p style={{
          textAlign: 'center',
          fontSize: 14,
          color: 'var(--c-faint)',
          marginTop: 22,
        }}>
          New here?{' '}
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--c-steel)', fontWeight: 600 }}>
            Create an account
          </a>
        </p>
      </form>
    </div>
  ),
};
