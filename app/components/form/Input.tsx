import classNames from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(
  (
    props: { value?: string; className?: string; type?: string },
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { value, className } = props;

    return (
      <input
        {...props}
        value={value ?? ''}
        ref={ref as React.Ref<HTMLInputElement>}
        type={props.type ? props.type : 'text'}
        className={classNames(
          'block w-full rounded-md text-footnote placeholder-gray-400 border-gray-300',
          className
        )}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
