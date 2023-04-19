import React, { useState } from "react";

interface Props {
  title: string;
  handlerClick: (email: string, password: string) => void;
}

const FormLogin = ({ title, handlerClick }: Props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="pl-20" onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        className="block border mb-4 pl-2 rounded-md"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="password"
        className="block border pl-2 rounded-md"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <button
        className="bg-blue-500 mt-6 hover:bg-blue-400 text-white font-normal
       py-1 px-2 text-xs border-b-3 border-blue-700 ml-14 mb-8 hover:border-blue-500 rounded"
        onClick={() => handlerClick(email, pass)}
      >
        {title}
      </button>
    </form>
  );
};

export default FormLogin;
