import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import "./styles/index.css";

import Glasses from "./icons/Glasses";

import Navigation from "./components/Navigation";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href="https://use.typekit.net/wtd2mht.css"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex w-full h-full">
          <div className="flex flex-col min-w-[300px] max-w-[300px] h-full bg-sky-600 text-white p-4">
            <Navigation />
          </div>

          <div className="w-full h-full bg-gray-100">
            <Outlet />
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
