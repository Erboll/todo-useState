import React, { FormEvent, useState } from "react";
import { Task } from "../types";

const FormAddTodo = () => {
  const [textTask, setTextTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, { id: Date.now(), completed: false, task: textTask }]);
    console.log(tasks);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={textTask}
        className="border border-gray-800"
        onChange={(e) => setTextTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FormAddTodo;
