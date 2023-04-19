import React, { useState } from "react";

interface Props {
  title: string;
  handlerClick: () => void;
}

const FormLogin = ({ title, handlerClick }: Props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={handlerClick}>{title}</button>
    </form>
  );
};

export default FormLogin;
