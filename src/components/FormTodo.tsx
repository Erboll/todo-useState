import React from "react";

interface Props {
  onSubmit: (e: React.FormEvent) => void;
  textTodo: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTodo = ({ onSubmit, textTodo, onChange }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="text-center ">
        <label>
          <input
            type="text"
            value={textTodo}
            onChange={onChange}
            className="bg-gray-50  border border-gray-300 text-gray-900 text-lg rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block p-1 m-auto  mt-10 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
           dark:focus:border-blue-500 w-5/12"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-9 px-4 rounded"
        >
          Add task
        </button>
      </div>
    </form>
  );
};

export default FormTodo;
