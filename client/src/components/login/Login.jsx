import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LoginForms from "./LoginForms";

export const Login = () => {
  return (
    <>
      <div className="flex h-dvh flex-col justify-center gap-10">
        <h1 className="flex justify-center font-bold text-6xl">Welcome Back</h1>
        <LoginForms />
        <LoginButton className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl" />
        <p className="text-center mt-4">
          Does not have an account yet?{" "}
          <Link
            to="/register"
            className=" text-gray-500 hover:text-blue-700 underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </>
  );
};
