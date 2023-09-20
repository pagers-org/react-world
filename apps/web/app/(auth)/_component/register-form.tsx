"use client";

import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import type { RegisterReq } from "../_types";
import { useRegister } from "../_hooks/use-register";
import { UserSchema, UserType } from "../_types";
import { ErrorMessage } from "./error-message";

export function RegisterForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    resetField,
  } = useForm<RegisterReq>();

  const { mutate } = useRegister();

  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterReq> = data => {
    mutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
      onError: () => {
        setError("email", {
          message: "email has already been taken",
        });
        setError("username", {
          message: "username has already been taken",
        });

        resetField("password");
      },
    });
  };

  const isEmailValid = (email: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="form-group">
        <input
          {...register("username", { required: "Username can't be blank" })}
          className="form-control form-control-lg"
          placeholder="Username"
          type="text"
        />
      </fieldset>
      {errors.username ? <ErrorMessage message={errors.username.message} /> : null}

      <fieldset className="form-group">
        <input
          {...register("email", {
            required: "Email can't be blank",
            validate: email => isEmailValid(email) || "Invalid email format",
          })}
          className="form-control form-control-lg"
          placeholder="Email"
          type="text"
        />
      </fieldset>
      {errors.email ? <ErrorMessage message={errors.email.message} /> : null}

      <fieldset className="form-group">
        <input
          {...register("password", { required: "Password can't be blank" })}
          className="form-control form-control-lg"
          placeholder="Password"
          type="password"
        />
      </fieldset>
      {errors.password ? <ErrorMessage message={errors.password.message} /> : null}

      <button className="btn btn-lg btn-primary pull-xs-right" type="submit">
        Sign up
      </button>
    </form>
  );
}
