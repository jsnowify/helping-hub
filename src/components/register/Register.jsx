import { RegisterButton } from "./RegisterButton";
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
  return (
    <>
      <div className="flex h-dvh flex-col justify-center gap-10">
        <h1 className="flex justify-center font-bold text-6xl">Register</h1>
        <RegisterForm />
        <RegisterButton />
      </div>
    </>
  );
};
