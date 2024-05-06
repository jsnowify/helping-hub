import { useState } from "react";

import { Link } from "react-router-dom";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <p> Has been clicked {count} times</p>

        <button onClick={() => setCount(count < 10 ? count + 1 : count)}>
          Increment
        </button>
        <br />
        <button onClick={() => setCount(count ? count - 1 : 0)}>
          Decrement
        </button>
        <Link to="/login">
          <button>Hi</button>
        </Link>
      </div>
    </>
  );
}

export default App;
