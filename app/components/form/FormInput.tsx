import Input from './Input';

export default function FormInput({ inputProps }: any) {
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
