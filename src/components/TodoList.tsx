import React, { useState } from "react";
import { Task } from "../types";

interface Props {
  task: Task;
  removeTask: React.MouseEventHandler;
}

const TodoList = ({ task, removeTask }: Props) => {
  const [editTask, setEditTask] = useState(task.task);
  const [editInput, setEditInput] = useState(false);

  return (
    <div className="border border-black-400 rounded-md w-3/6 m-auto p-2 text-lg flex justify-between mb-6">
      {editInput ? (
        <input
          className="w-4/6"
          value={editTask}
          autoFocus
          type="text"
          onChange={(event) => setEditTask(event.target.value)}
        />
      ) : (
        <div className="mt-3">{editTask}</div>
      )}

      <div className="flex justify-between w-1/4 items-center ">
        <button
          onClick={removeTask}
          className="bg-blue-500 mt-3 mb-3 hover:bg-blue-400 text-white font-normal
       py-1 px-2 text-xs border-b-3 border-blue-700 self-start  hover:border-blue-500 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => setEditInput((prev) => !prev)}
          className="bg-blue-500 mt-3 mb-3 hover:bg-blue-400 text-white font-normal
       py-1 px-2 text-xs border-b-3 border-blue-700   hover:border-blue-500 rounded"
        >
          {editInput ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
