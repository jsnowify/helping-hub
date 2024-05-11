import { Link } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center h-dvh gap-4">
        <Welcome />
        <Link to="/login" className="flex justify-center ">
          <button className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl">
            Explore
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
