import { FC, SVGProps } from "react";

interface CardProps {
  icon: FC<SVGProps<SVGElement>>;
  title: string;
  copy: string;
}

export default function Card({ icon: Icon, title, copy }: CardProps) {
  return (
    <div className="bg-gray-200 rounded-md shadow-md flex flex-col items-center p-4 border border-gray-300">
      <div className="w-24 h-24">
        <Icon className="fill-sky-950" />
      </div>
      <h3>{title}</h3>
      <p className="py-3 text-footnote text-gray-600">{copy}</p>
    </div>
  );
}
