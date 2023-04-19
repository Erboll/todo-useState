import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp";

const RegisterPage = () => {
  return (
    <div className="text-center rounded-lg w-96 m-auto translate-y-48 border border-slate-200 shadow-xl">
      <h1 className="pt-4 pb-4 font-mono ">Login</h1>
      <SignUp />

      <Link
        to={"/login"}
        className="font-light absolute bottom-8 left-20 text-sm text-blue-600 dark:text-blue-500 hover:underline"
      >
        Sign up
      </Link>
    </div>
  );
};

export default RegisterPage;
