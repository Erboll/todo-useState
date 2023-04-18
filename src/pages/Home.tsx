import TodoList from "../components/TodoList";
import { Task } from "../types";
interface Props {
  tasks: Task[];
  removeBtn: (id: number) => void;
  toggle: (id: number) => void;
}

const Home = ({ tasks, removeBtn, toggle }: Props) => {
  return (
    <div>
      {tasks.map((t) => (
        <TodoList key={t.id} task={t} removeBtn={removeBtn} toggle={toggle} />
      ))}
    </div>
  );
};

export default Home;
