import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500 mb-3">
      <div className="container px-4 mx-auto flex items-center justify-between pr-60">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to={"/"}
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            Todo Auth
          </Link>
        </div>
        <div className="flex flex-wrap">
          <Link
            to={"/"}
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          >
            Home
          </Link>
          <Link
            to={"/add-todo"}
            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          >
            Add task
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
