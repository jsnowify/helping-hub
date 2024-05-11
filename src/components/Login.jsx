import LoginButton from "./LoginButton";

export const Login = () => {
  return (
    <>
      <div className="flex h-dvh flex-col justify-center gap-10">
        <h1 className="flex justify-center font-bold text-6xl">Welcome Back</h1>
        <LoginButton className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl" />
        <footer className="flex justify-center">
          <span className="font-bold mr-1">Status: </span>Under Development
        </footer>
      </div>
    </>
  );
};
