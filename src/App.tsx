import { ChangeEvent, FormEvent, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Task } from "./types";

function App() {
  const [textTask, setTextTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (textTask.trim().length) {
      setTasks([
        ...tasks,
        { id: Date.now(), completed: false, task: textTask },
      ]);
      setTextTask("");
      navigate("/");
    }
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTask(e.target.value);
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home tasks={tasks} removeTask={removeTask} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/add-todo"
          element={
            <AddTodo
              addTask={onSubmit}
              textTask={textTask}
              onChange={onChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
