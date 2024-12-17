import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { loginCaptainAction } from "../../app/features/auth/captainSlice";
export default function CaptainLogin() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    try {
      const res = await dispatch(loginCaptainAction(data)).unwrap();
      console.log(res);
      localStorage.setItem("token", res.token);
      navigate("/captain-home");
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-4"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl mb-2">What's your email</h3>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Please enter email address" },
            })}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Please enter password " },
            })}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:texxt-base"
            placeholder="password"
          />
          <button className="bg-[#111] text-white py-2 mb-4 px-4 text-lg  rounded w-full font-semibold">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet ?{" "}
          <Link to={"/captain-signup"} className="text-blue-600">
            Register as a captain
          </Link>
        </p>
      </div>

      <div className="w-full">
        <Link
          to={"/login"}
          className="bg-[#d5622d]   flex items-center justify-center text-white py-2 mb-5 px-4 text-lg  rounded w-full font-semibold"
        >
          Sign in as user
        </Link>
      </div>
    </div>
  );
}
