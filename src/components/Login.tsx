import React from "react";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../hooks/use-auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password);
  };

  return <div>Login</div>;
};

export default Login;
