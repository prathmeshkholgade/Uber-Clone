import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../app/features/auth/userSlice";
export default function UserSignup() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const VehicleType = ["car", "auto", "motorcycle"];
  const onSubmit = async (data) => {
    try {
      const res = await dispatch(signUpUser(data)).unwrap();
      console.log(res);
      navigate("/home");
      localStorage.setItem("token", res.token);
      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-14 mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-lg mb-2">What's your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              {...register("fullName.firstName", {
                required: { value: true, message: "Please enter firstName" },
              })}
              className="bg-[#eeeeee] w-1/2 rounded  px-4 py-2 border  text-base placeholder:text-base"
              placeholder="First Name"
            />
            <input
              type="text"
              {...register("fullName.lastName", {
                required: {
                  value: true,
                  message: "Please enter email address",
                },
              })}
              className="bg-[#eeeeee] w-1/2 rounded  px-4 py-2 border  text-base placeholder:text-base"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Please enter email address" },
            })}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-base placeholder:text-base"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Please enter password " },
            })}
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-base placeholder:text-base"
            placeholder="Password"
          />

          <button className="bg-[#111] text-white py-2 mb-4 px-4 text-lg  rounded w-full font-semibold">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already Have an Account ?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

      <div className="w-full">
        <p className="text-xs leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
        {/* <Link
          to={"/captain-login"}
          className="bg-[#10b461]   flex items-center justify-center text-white py-2 mb-5 px-4 text-lg  rounded w-full font-semibold"
        >
          Sign in as Captain
        </Link> */}
      </div>
    </div>
  );
}
