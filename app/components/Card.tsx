import type { FC, SVGProps } from 'react';

interface CardProps {
  icon: FC<SVGProps<SVGElement>>;
  title: string;
  copy: string;
}

export default function Card({ icon: Icon, title, copy }: CardProps) {
  return (
    <div className='bg-gray-200 rounded-md shadow-md flex flex-col items-center p-4 border border-gray-300'>
      <div className='w-30 h-30'>
        <Icon className='fill-black opacity-35' />
      </div>
      <h3 className='text-gray-600 w-full text-left'>{title}</h3>
      <p className='py-3 w-full text-left'>{copy}</p>
    </div>
  );
}
