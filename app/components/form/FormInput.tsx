import type { ChangeEvent, InputHTMLAttributes } from 'react';

import Input from './Input';

interface FormInputBind extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onFocus: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  'data-1p-ignore'?: boolean;
}

interface FormInputProps {
  value: string;
  touched: boolean;
  isValid: boolean | null;
  isEmpty: boolean;
  errorMessage: string;
  bind: FormInputBind;
  reset: () => void;
  clear: () => void;
}

export default function FormInput({ inputProps }: { inputProps: FormInputProps }) {
  return (
    <div className='relative w-full'>
      <Input {...inputProps.bind} />
      {inputProps.errorMessage && (
        <div className='absolute top-full left-0 text-caption3 text-red-600 px-2 py-0.5'>
          {inputProps.errorMessage}
        </div>
      )}
    </div>
  );
}
