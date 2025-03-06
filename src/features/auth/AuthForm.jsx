/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import Eye from "../../assets/eye.svg";
import EyeSlash from "../../assets/eye_slash.svg";

import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useState } from "react";

export default function AuthForm({ isLogin, onSubmit, isLoading }) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  function handleFormSubmit(data) {
    onSubmit(data);
    reset();
  }

  return (
    <div className="mx-auto flex w-full flex-col gap-8 rounded-lg bg-white p-14 shadow-md">
      <div className="flex flex-col items-center gap-8">
        <Logo />

        <p className="text-3xl font-black text-primary">
          {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
        </p>
      </div>

      <form
        className="flex w-full flex-col gap-6"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <FormRow label={"البريد الإلكتروني"} error={errors?.email?.message}>
          <Input
            id="email"
            type="email"
            disabled={isLoading}
            placeholder="example@gmail.com"
            {...register("email", {
              required: "البريد الإلكتروني مطلوب",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "الرجاء إدخال بريد إلكتروني صالح",
              },
            })}
          />
        </FormRow>

        <FormRow label={"الرمز السري"} error={errors?.password?.message}>
          <div className="relative">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 8,
                  message: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
                },
              })}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-7 left-3 flex cursor-pointer items-center"
            >
              <img
                src={isPasswordVisible ? EyeSlash : Eye}
                alt={isPasswordVisible ? "Hide password" : "Show password"}
              />
            </span>
          </div>
        </FormRow>

        <Button type="submit" disabled={isLoading}>
          {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-500">
        {isLogin ? "ليس لديك حساب؟" : "لديك حساب بالفعل؟"}{" "}
        <Link
          to={isLogin ? "/signup" : "/login"}
          className="font-bold text-primary hover:underline"
        >
          {isLogin ? "إنشاء حساب جديد" : "تسجيل الدخول"}
        </Link>
      </p>
    </div>
  );
}
