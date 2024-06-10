import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="flex justify-center">
      <Link to="/home">
        <button className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl">
          Login
        </button>
      </Link>
    </div>
  );
};

export default LoginButton;
