import { RiUserReceivedFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import { Task } from "../types";
import TodoList from "../components/TodoList";
interface Props {
  tasks: Task[];
  removeTask: (id: number) => void;
}

const Home = ({ tasks, removeTask }: Props) => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <NavBar />
      {tasks.map((task) => (
        <TodoList task={task} removeTask={() => removeTask(task.id)} />
      ))}
      <button
        className="absolute top-4 right-6 text-xs pt-1.5 text-white flex items-center justify-between"
        onClick={() => dispatch(removeUser())}
      >
        <RiUserReceivedFill /> <span className="pl-2 ">{email}</span>
      </button>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Home;
