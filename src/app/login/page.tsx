"use client";
import { RegisterUserInput } from "@/types/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const inputStyle = "border border-gray-400 px-4 py-3 m-2 w-80 rounded-md";

const Login = () => {
  const { register, handleSubmit } = useForm<Omit<RegisterUserInput, "username">>();
  const router = useRouter();

  const onSubmit = async (loginInput: Omit<RegisterUserInput, "username">) => {
    await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(loginInput),
    }).then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl p-3">Sign in</h1>
      <Link href="/register" className="text-sm text-primary">
        Need an account?
      </Link>
      <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={inputStyle}
          type="email"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className={inputStyle}
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button className="bg-primary text-white text-lg px-6 py-3 rounded-md" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
export default Login;
