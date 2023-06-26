import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/userToken";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  if(token){
    navigate(from, {replace: true});
  }

  const handleLogin = (data) => {
    setLoginError("");
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        toast.success('Successfully loged in.');
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Successfully loged in.')
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-6 shadow-xl">
        <h2 className="text-3xl text-center mb-5">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forgot Password ?</span>
            </label>
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <div>{loginError && <p className="text-error">{loginError}</p>}</div>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full mt-3 mb-3"
          />
        </form>
        <p>
          New to Doctors Portal?{" "}
          <Link to="/signup" className="text-primary">
            Create new account
          </Link>
        </p>
        <div className="divider mb-7">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
