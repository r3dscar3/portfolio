import { Link } from "@remix-run/react";

const NavLink = ({ active, emoji, label, pathname }: any) => {
  return (
    <Link to={pathname}>
      <div className="flex items-center cursor-pointer text-body my-1">
        {emoji && (
          <div className="inline-block text-[20px]/[20px]">
            {emoji}
          </div>
        )}
        <div
          className={`relative h-8 ml-4 pt-2 transition-colors group ${
            active ? "text-white" : "text-sky-200 hover:text-sky-100"
          }`}
        >
          <div>{label}</div>
          <div
            className={`mt-1 transition-all h-[2px] bg-sky-950 ${
              active ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </div>
      </div>
    </Link>
  );
};

export default NavLink;
