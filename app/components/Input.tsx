import classNames from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef((props: any, ref) => {
  const { value, className } = props;

  return <input {...props} value={value ?? ''} ref={ref} type={props.type ? props.type : 'text'} className={classNames("block w-full rounded-md text-footnote", className)} />;
});

Input.displayName = 'Input';

export default Input;
