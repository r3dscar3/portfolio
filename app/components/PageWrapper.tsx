import { ReactNode } from "react";

interface PageWrapperProps {
  heading: string;
  emoji: string;
  children: ReactNode;
}

const PageWrapper = ({ children, heading, emoji }: PageWrapperProps) => {
  return (
    <div className="relative flex h-full flex-col overflow-y-auto">
      <div className="z-10 sticky top-0 flex items-center bg-white border-b border-gray-300 p-4 font-bold bg-opacity-65 backdrop-blur-sm">
        <h1>{heading}</h1>
        <div className="w-6 h-6 ml-auto">{emoji}</div>
      </div>

      <div className="relative h-full p-4">
        <div className="flex flex-col max-w-[1200px]">{children}</div>
      </div>
    </div>
  );
};

export default PageWrapper;
