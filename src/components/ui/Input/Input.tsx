import { forwardRef } from 'react';

import './Input.scss';

interface InputProps extends React.PropsWithoutRef<JSX.IntrinsicElements['input']> {
  autoFocus?: boolean;
  id?: string;
  label: string;
  maxLength?: number;
  placeholder: string;
  type?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, placeholder, type = 'text' } = props;

  return (
    <>
      <label htmlFor={id} className="label_input">
        {label}
      </label>
      <input
        {...props}
        ref={ref}
        autoFocus
        required
        placeholder={placeholder}
        type={type}
        className="input"
      />
    </>
  );
});
Input.displayName = 'Input';
export { Input };
