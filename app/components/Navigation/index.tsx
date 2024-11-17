import { useState } from "react";

import { motion } from "framer-motion";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { NavLink, useNavigate } from "@remix-run/react";

import GitHub from "../../icons/GitHub";
import Glasses from "../../icons/Glasses";
import CodePen from "../../icons/CodePen";
import LinkedIn from "../../icons/LinkedIn";
import { XMarkIcon } from "@heroicons/react/24/solid";

const routes: any = [
  {
    slug: "",
    name: "Home",
    emoji: "💀",
  },
  {
    slug: "about",
    name: "About",
    emoji: "😎",
  },
  {
    slug: "skills",
    name: "Skills",
    emoji: "👍",
  },
  {
    slug: "contact",
    name: "Contact",
    emoji: "☎️",
  },
];

export default function Navigation({width}: {width: number}) {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center lg:flex-col lg:h-full w-full">
      <div
        onClick={() => navigate("/")}
        className="flex justify-center lg:w-full mr-4 lg:mr-0 mt-1 cursor-pointer text-sky-950"
      >
        <Glasses className="w-20 lg:w-full fill-current" />
      </div>

      <Bars3Icon
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden w-8 ml-auto text-sky-950"
      />

      {(showMenu || width > 1024) && (
        <motion.div
          initial={{ opacity: 0, scale: width <= 1024 ? 0 : 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="h-full flex flex-col fixed lg:relative inset-0 w-full bg-sky-600 z-20 p-4 lg:p-0"
        >
          <XMarkIcon onClick={() => setShowMenu(false)} className="absolute right-3 w-8 h-8 text-sky-950 lg:hidden"/>
          <div className="flex flex-col pt-6 lg:pt-12 text-sky-200 group flex-grow justify-start space-x-0">
            {routes.map((route: any, idx: Number) => {
              if (idx !== 0) {
                const { slug, emoji, name } = route;

                return (
                  <NavLink prefetch="intent" to={slug} key={`${idx}`} onClick={() => setShowMenu(false)}>
                    {({ isActive }) => (
                      <div className="flex items-center cursor-pointer my-1">
                        {emoji && (
                          <div className="inline-block text-[20px]/[20px]">
                            {emoji}
                          </div>
                        )}
                        <div
                          className={`relative h-8 ml-4 pt-2 transition-colors ${
                            isActive
                              ? "text-white group-hover:text-sky-200"
                              : "text-sky-200 group-hover:text-sky-200"
                          }`}
                        >
                          <div className="hover:text-white">{name}</div>
                          <div
                            className={`mt-1 transition-all h-[2px] bg-sky-950 ${
                              isActive ? "w-full" : "w-0"
                            }`}
                          />
                        </div>
                      </div>
                    )}
                  </NavLink>
                );
              }
            })}
          </div>

          <div className="mt-auto flex items-center justify-around pb-1 text-sky-950 space-x-4">
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://github.com/r3dscar3"
            >
              <GitHub className="w-6 h-6 fill-current" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://codepen.io/r3dscar3"
            >
              <CodePen className="w-6 h-6 fill-current" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://linkedin.com/r3dscar3"
            >
              <LinkedIn className="w-6 h-6 fill-current" />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
