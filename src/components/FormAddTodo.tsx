import { ChangeEvent, FormEvent } from "react";
interface Props {
  onSubmit: (e: FormEvent) => void;
  textTask: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormAddTodo = ({ onSubmit, textTask, onChange }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="m-auto w-96">
        <label>
          {" "}
          Add todo :
          <input
            type="text"
            value={textTask}
            className="border ml-2 border-gray-400 rounded-sm p-1"
            onChange={onChange}
          />
        </label>
        <button
          className="bg-blue-500 ml-5 hover:bg-blue-700 text-white py-1.5 px-2 rounded text-sm font-light"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default FormAddTodo;
