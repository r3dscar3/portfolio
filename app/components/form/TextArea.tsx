import classNames from 'classnames';
import { forwardRef } from 'react';

const TextArea = forwardRef(
  (
    props: { value?: string; className?: string; rows?: number },
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
    const { value, className, rows } = props;

    return (
      <textarea
        {...props}
        value={value ?? ''}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={classNames(
          'block w-full rounded-md text-footnote placeholder-gray-400 border-gray-300',
          className
        )}
        rows={rows ?? 4}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
