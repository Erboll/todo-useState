import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-purple-400 w-100% h-auto text-right pr-5 pt-5 pb-5">
      <Link to={"/"} className="font-bold text-indigo-900  pr-6">
        Home
      </Link>
      <Link to={"/add-todo"} className="font-bold text-indigo-900 pr-6 ">
        Add task
      </Link>{" "}
      <Link to={"/login"} className="font-bold text-indigo-900  pr-6">
        Login
      </Link>
    </nav>
  );
};

export default NavBar;
