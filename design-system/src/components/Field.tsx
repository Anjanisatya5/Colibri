import type { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Field — a labeled input used on the login card. Backs onto `.field`.
 * Supports an optional trailing link in the label ("Forgot?").
 */
export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  trailingLink?: ReactNode;
}

export function Field({ label, id, trailingLink, className, ...inputProps }: FieldProps) {
  return (
    <div className={['field', className].filter(Boolean).join(' ')}>
      <div className="flabel">
        <label htmlFor={id}>{label}</label>
        {trailingLink}
      </div>
      <input id={id} {...inputProps} />
    </div>
  );
}
