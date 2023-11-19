import { forwardRef } from 'react';

import './Input.scss';

interface InputProps {
  autoFocus?: boolean;
  id?: string;
  label: string;
  maxLength?: number;
  placeholder: string;
  type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, placeholder, type = 'text' } = props;

  return (
    <>
      <label htmlFor={id} className="label_input">
        {label}
      </label>
      <input {...props} ref={ref} placeholder={placeholder} type={type} className="input" />
    </>
  );
});
Input.displayName = 'Input';
export { Input };
