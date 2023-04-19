import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="text-center rounded-lg w-96 m-auto translate-y-48 border border-slate-200 shadow-xl">
      <h1 className="pt-4 pb-4 font-mono ">Login</h1>
      <Login />

      <Link
        to={"/register"}
        className="font-light absolute bottom-8 left-20 text-sm text-blue-600 dark:text-blue-500 hover:underline"
      >
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
