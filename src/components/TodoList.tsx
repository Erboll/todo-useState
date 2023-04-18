import React from "react";
import { Task } from "../types";

interface Props {
  removeBtn: (id: number) => void;
  task: Task;
  toggle: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ removeBtn, task, toggle }) => {
  return (
    <div>
      <ul>
        <li
          className=" flex border border-black-400 p-2 mb-4 w-3/4 rounded-md mt-6 m-auto tracking-widest text-gray-500 md:text-lg dark:text-gray-400"
          key={task.id}
        >
          {task.task}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggle(task.id)}
            className="ml-96"
          />
          <button
            onClick={() => removeBtn(task.id)}
            className="inline-block ml-auto"
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
