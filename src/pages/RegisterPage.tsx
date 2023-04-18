import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>

      <div>
        Already have account ? <Link to={"/login"}>Sign in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
