import { ReactNode } from "react";

interface PageWrapperProps {
  heading: string;
  emoji: string;
  children: ReactNode;
}

const PageWrapper = ({ children, heading, emoji }: PageWrapperProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center bg-white border-b border-gray-300 p-4 font-bold">
        <div className="text-title3">{heading}</div>
        <div className="w-6 h-6 ml-auto">{emoji}</div>
      </div>

      <div className="relative h-full overflow-auto p-4">
        <div className="flex flex-col max-w-[1200px]">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
