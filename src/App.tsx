import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import { Task } from "./types";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const navigate = useNavigate();
  const [textTodo, setTextTodo] = useState("");
  const [task, setTask] = useState<Task[]>([]);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textTodo.trim().length) {
      setTask([...task, { task: textTodo, id: Date.now(), completed: false }]);
    }
    setTextTodo("");
    navigate("/");
  };

  const toggleComplete = (id: number) => {
    setTask(
      task.map((t) => {
        if (t.id !== id) return t;
        return {
          ...t,
          completed: !t.completed,
        };
      })
    );
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTodo(e.target.value);
  };
  const removeBtn = (id: number) => {
    const removeTask = task.filter((t) => t.id !== id);
    setTask(removeTask);
  };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home tasks={task} removeBtn={removeBtn} toggle={toggleComplete} />
          }
        />
        <Route
          path="/add-todo"
          element={
            <AddTodo
              onSubmit={onSubmit}
              textTodo={textTodo}
              onChange={onChange}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
