import "./styles/tailwind.css";

import { AnimatePresence, motion } from "framer-motion";
import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation,
  useOutlet,
} from "react-router";
import { useCallback, useEffect } from "react";

import Navigation from "./components/Navigation";
import useResizeObserver from "./hooks/useResizeObserver";

export function Layout({ children }: { children: React.ReactNode }) {
  const [observeResize, dimensions]: any = useResizeObserver();

  const wrapperRef = useCallback((node: any) => {
    if (node !== null) {
      observeResize(node);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { width } = dimensions;

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Kanit:wght@400;600;800&display=swap";
    link.rel = "stylesheet";
    link.media = "print";
    link.onload = () => {
      link.media = "all";
    };
    document.head.appendChild(link);
  }, []);

  return (
    <html lang="en">
      <head>
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
          <div className="relative flex lg:flex-col lg:min-w-50 lg:max-w-50 lg:h-dvh bg-sky-700 border-b-9 lg:border-r-9 lg:border-b-0 border-sky-950 text-white p-4 z-20">
            <div className="z-10 max-w-2 w-2 h-3 bg-linear-to-r from-sky-700 to-gray-100 from-50% to-50% absolute -bottom-2.75 -right-0.75 rotate-90 lg:rotate-0 lg:top-0 lg:-right-2 overflow-hidden ">
              <div className="absolute w-4 h-4 rotate-45 bg-sky-950 -left-1 -bottom-3" />
            </div>

            <Navigation width={width} />

            <div className="z-10 max-w-2 w-2 h-3 bg-linear-to-l lg:bg-linear-to-r from-sky-700 to-gray-100 from-50% to-50% absolute -bottom-2.75 left-0.75 -rotate-90 lg:rotate-0 lg:bottom-0 lg:left-auto lg:-right-2 overflow-hidden ">
              <div className="absolute w-4 h-4 rotate-45 bg-sky-950 -left-1 -bottom-3 lg:bottom-auto lg:-top-3" />
            </div>
          </div>

          <div className="w-full min-h-[calc(100dvh-78px)] lg:h-dvh lg:min-h-dvh bg-gray-100">
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
        className="relative z-10 flex h-full min-h-full w-full grow flex-col"
        key={location.pathname}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        {outlet}
      </motion.main>
    </AnimatePresence>
  );
}
