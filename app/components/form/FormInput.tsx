import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import Input from './Input';
import TextArea from './TextArea';

type DataAttributes = { 'data-1p-ignore'?: boolean };

type FormInputBind =
  | (Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
      value?: string;
    } & DataAttributes)
  | (Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> & {
      value?: string;
    } & DataAttributes);

interface FormInputProps {
  bind: FormInputBind;
  errorMessage?: string;
}

export default function FormInput({
  inputProps,
  rows,
}: {
  inputProps: FormInputProps;
  rows?: number;
}) {
  const { bind, errorMessage } = inputProps;

  return (
    <div className='relative w-full'>
      {rows !== undefined ? <TextArea {...bind} rows={rows} /> : <Input {...bind} />}
      {errorMessage && (
        <div className='absolute top-full left-0 text-caption3 text-red-600 px-2 py-0.5'>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
