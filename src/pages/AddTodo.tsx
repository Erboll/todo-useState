import React, { ChangeEvent, FormEvent } from "react";
import NavBar from "../components/NavBar";
import FormAddTodo from "../components/FormAddTodo";
interface Props {
  addTask: (e: FormEvent) => void;
  textTask: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddTodo = ({ addTask, textTask, onChange }: Props) => {
  return (
    <div>
      <NavBar />
      <FormAddTodo onSubmit={addTask} textTask={textTask} onChange={onChange} />
    </div>
  );
};

export default AddTodo;
