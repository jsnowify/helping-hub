import LoginButton from "./LoginButton";
import Forms from "./LoginForms";

export const Login = () => {
  return (
    <>
      <div className="flex h-dvh flex-col justify-center gap-10">
        <h1 className="flex justify-center font-bold text-6xl">Welcome Back</h1>
        <Forms />
        <LoginButton className="bg-black w-40 h-10 rounded-full text-white hover:shadow-2xl" />
      </div>
    </>
  );
};
