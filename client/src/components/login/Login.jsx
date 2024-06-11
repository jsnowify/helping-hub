import { Link } from "react-router-dom";
import LoginForms from "./LoginForms";

export const Login = () => {
  return (
    <>
      <div className="flex h-dvh flex-col justify-center gap-10">
        <h1 className="flex justify-center font-bold text-6xl">Welcome Back</h1>
        <LoginForms />

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
