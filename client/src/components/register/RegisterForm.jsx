import { useState } from "react";
import axios from "axios";

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      username,
      password,
    };

    try {
      await axios.post("http://localhost:5000/api/users/register", userData);
      alert("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center flex-col"
    >
      <div className="w-64 text-left mb-4">
        <label htmlFor="firstName" className="block mb-2 text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border-2 w-full p-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-[#0a0a0a] rounded-md shadow-sm"
        />
      </div>
      <div className="w-64 text-left mb-4">
        <label htmlFor="lastName" className="block mb-2 text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border-2 w-full p-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-[#0a0a0a] rounded-md shadow-sm"
        />
      </div>
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
      <button
        type="submit"
        className="bg-black w-40 h-10 mt-4 rounded-full text-white hover:shadow-2xl"
      >
        Register
      </button>
    </form>
  );
};
