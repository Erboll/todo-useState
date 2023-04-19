import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/userSlice";
import FormLogin from "./FormLogin";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };
  return (
    <div>
      <FormLogin title="Register" handlerClick={handleLogin} />
    </div>
  );
};

export default SignUp;
