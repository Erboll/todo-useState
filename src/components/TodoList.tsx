import React from "react";
import { Task } from "../types";

interface Props {
  task: Task;
  removeTask: React.MouseEventHandler;
}

const TodoList = ({ task, removeTask }: Props) => {
  return (
    <div className="border border-black-400 rounded-md w-3/6 m-auto p-2 text-lg flex justify-between mb-6">
      <span>{task.task}</span>

      <button onClick={removeTask}>X</button>
    </div>
  );
};

export default TodoList;
