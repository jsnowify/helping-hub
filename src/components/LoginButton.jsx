import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="flex justify-center">
      <button className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl">
        <Link to="Forms.jsx">Test</Link>
      </button>
    </div>
  );
};

export default LoginButton;
