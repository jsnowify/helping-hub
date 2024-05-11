import { Link } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center content-center place-content-center">
        <Welcome />
        <Link to="/login" className="justify-center ">
          <button>Explore</button>
        </Link>
      </div>
    </>
  );
}

export default App;
