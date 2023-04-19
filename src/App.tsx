import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddTodo from "./pages/AddTodo";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-todo" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
