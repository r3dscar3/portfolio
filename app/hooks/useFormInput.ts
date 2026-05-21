import { useEffect, useState } from 'react';

import type { ChangeEvent } from 'react';
import validation from '../utils/validation';

interface UseFormInputProps {
  initialValue?: string;
}

export default function useFormInput({ initialValue = '' }: UseFormInputProps) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean | null>(
    initialValue !== '' && initialValue !== null ? true : null
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(!initialValue);

  // ✅ Sync state when initialValue changes (e.g. after form submission)
  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
      setIsEmpty(false);
      setIsValid(true);
    }
  }, [initialValue]);

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
      onBlur: (): void => setIsEmpty(validation.isEmpty(value)),
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
    setErrorMessage: (message: string) => setErrorMessage(message),
  };
}
