import NavLink from "./NavLink";
import { useLocation, useNavigate } from "@remix-run/react";

// import Loader from 'components/Loader';

import Glasses from "../../icons/Glasses";
import GitHub from "../../icons/GitHub";
import CodePen from "../../icons/CodePen";
import LinkedIn from "../../icons/LinkedIn";

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
    slug: "contact",
    name: "Contact",
    emoji: "☎️",
  },
];

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full w-full">
        <div onClick={() => navigate('/')} className="flex justify-center w-full mt-10 cursor-pointer text-sky-950">
        <Glasses className="w-3/4 fill-current" />
        </div>
      

      <div className="flex flex-col pt-12">
        {routes.map((route: any, idx: Number) => {
          if (idx !== 0) {
            return (
              <NavLink
                active={location.pathname === `/${route.slug}`}
                emoji={route.emoji || (idx === 1 ? "💀" : "📱")}
                key={idx}
                label={route.name}
                pathname={`/${route.slug}`}
              />
            );
          }
        })}
      </div>
      <div className="mt-auto flex items-center justify-around pb-7 text-sky-950">
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
    </div>
  );
}
