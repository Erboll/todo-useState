import { RiUserReceivedFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <NavBar />
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
