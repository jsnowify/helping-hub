import { Link } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center h-dvh gap-4 bg-[#0a0a0a]">
        <Welcome />
        <Link to="/login" className="flex justify-center ">
          <button className="bg-[#f1f1f1] w-40 h-10 rounded-full text-[#0a0a0a] hover:shadow-2xl">
            Explore
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
