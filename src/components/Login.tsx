import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import FormLogin from "./FormLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Invalid user"));
  };

  return (
    <div>
      <FormLogin title="Sign in" handlerClick={handleLogin} />
    </div>
  );
};

export default Login;
