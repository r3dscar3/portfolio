import type { ChangeEvent } from 'react';
import { useState } from 'react';
import validation from '../utils/validation';

interface UseFormInputProps {
  initialValue?: string;
  validators?: any[];
}

export default function useFormInput({ initialValue = '', validators = [] }: UseFormInputProps) {
  const [value, setValue] = useState(initialValue || '');
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(
    initialValue !== '' && initialValue !== null && !touched ? true : null
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const validateField = (value: any) => {
    setIsEmpty(validation.isEmpty(value));

    if (validators && validators.length) {
      validators.some((validator: any) => {
        const result = validator(value);
        const valid = result === null;

        setIsValid(valid);
        setErrorMessage(result);

        return !valid;
      });
    }
  };

  return {
    value,
    touched,
    isValid,
    isEmpty,
    errorMessage,
    bind: {
      value,
      onFocus: () => setTouched(true),
      onChange: (event: ChangeEvent<HTMLInputElement>): void => setValue(event.target.value),
      onBlur: (event: ChangeEvent<HTMLInputElement>): void => validateField(event.target.value),
    },
    reset: () => {
      setValue(initialValue);
      setIsValid(true);
      setTouched(false);
    },
    clear: () => {
      setValue('');
      setIsValid(true);
      setTouched(false);
    },
  };
}
