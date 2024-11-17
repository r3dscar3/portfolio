import { useCallback } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "@remix-run/react";

import useResizeObserver from "./hooks/useResizeObserver";

import "./styles/tailwind.css";

import Navigation from "./components/Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  const [observeResize, dimensions]: any = useResizeObserver();

  const wrapperRef = useCallback((node: any) => {
    if (node !== null) {
      observeResize(node);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { width } = dimensions;

  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href="https://use.typekit.net/wtd2mht.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          ref={wrapperRef}
          className="flex flex-col lg:flex-row w-full h-dvh"
        >
          <div className="relative flex lg:flex-col lg:min-w-[200px] lg:max-w-[200px] lg:h-dvh bg-sky-600 border-b-8 lg:border-r-8 lg:border-b-0 border-sky-950 text-white p-4 z-20">
            <div className="z-10 max-w-[8px] w-2 h-3 bg-gradient-to-r from-sky-600 to-gray-100 from-50% to-50% absolute bottom-[-11px] right-[3px] rotate-90 lg:rotate-0 lg:top-0 lg:right-[-8px] overflow-hidden ">
              <div className="absolute w-4 h-4 rotate-45 bg-sky-950 left-[-5px] bottom-[-12px]" />
            </div>

            <Navigation width={width} />

            <div className="z-10 max-w-[8px] w-2 h-3 bg-gradient-to-l lg:bg-gradient-to-r from-sky-600 to-gray-100 from-50% to-50% absolute bottom-[-11px] left-[3px] -rotate-90 lg:rotate-0 lg:bottom-0 lg:left-auto lg:right-[-8px] overflow-hidden ">
              <div className="absolute w-4 h-4 rotate-45 bg-sky-950 left-[-5px] bottom-[-12px] lg:bottom-auto lg:top-[-12px]" />
            </div>
          </div>

          <div className="w-full min-h-[calc(100dvh-78px)] lg:h-full bg-gray-100">
            {children}
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const outlet = useOutlet();
  const location = useLocation();

  return (
    <AnimatePresence mode="sync" initial={false}>
      <motion.main
        className="relative z-10 flex h-full min-h-full w-full flex-grow flex-col"
        key={location.pathname}
        initial={{  opacity: 0, scale: 0 }}
        animate={{  opacity: 1, scale: 1 }}
        exit={{  opacity: 0, scale: 0 }}
      >
        {outlet}
      </motion.main>
    </AnimatePresence>
  );
}
