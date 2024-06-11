import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );

      history.push("/home"); // Login successful
      // You can handle the successful login response here, such as redirecting the user to another page
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid username or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col"
    >
      <div className="w-64 text-left mb-4">
        <label htmlFor="username" className="block mb-2 text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 w-full p-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-[#0a0a0a] rounded-md shadow-sm"
        />
      </div>
      <div className="w-64 text-left mb-4">
        <label htmlFor="password" className="block mb-2 text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 w-full p-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-[#0a0a0a] rounded-md shadow-sm"
        />
      </div>
      {error && <p>{error}</p>}
      <button
        type="submit"
        className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
