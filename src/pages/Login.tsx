import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <div>
        or <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Login;
