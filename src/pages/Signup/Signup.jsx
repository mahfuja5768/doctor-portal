import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/userToken";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  
  if(token){
    navigate('/')
  }

  const handleLogin = (data) => {
    setSignupError("");
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully user created.");

        const userInfo = {
          displayName: data.name,
        };
        console.log(userInfo);
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err.message);
        setSignupError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully signup.");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-6 shadow-xl">
        <h2 className="text-3xl text-center mb-5">Sign up</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full"
            />
          </div>
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
                /* pattern: {value: use RegEx} */
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
          {signupError && <p className="text-error">{signupError}</p>}
          <input
            type="submit"
            value="Signup"
            className="btn btn-accent w-full mt-5"
          />
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Please Login
          </Link>
        </p>
        <div className="divider mb-7">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
