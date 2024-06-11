import { SVGProps } from "react";

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }

interface SVGIcon extends SVGProps<SVGSVGElement> {
    className?: string;
}