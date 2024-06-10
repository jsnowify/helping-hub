export const RegisterForm = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-64 text-left mb-4">
        <label htmlFor="firstName" className="block mb-2 text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
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
          className="border-2 w-full p-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-[#0a0a0a] rounded-md shadow-sm"
        />
      </div>
      <div className="w-64 text-left">
        <label htmlFor="password" className="block mb-2 text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border-2 w-full p-2 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-[#0a0a0a] rounded-md shadow-sm"
        />
      </div>
    </div>
  );
};
