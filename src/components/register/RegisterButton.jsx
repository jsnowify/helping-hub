import { Link } from "react-router-dom";
export const RegisterButton = () => {
  return (
    <div className="flex justify-center">
      <Link to="/home">
        <button className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl">
          Register
        </button>
      </Link>
    </div>
  );
};
