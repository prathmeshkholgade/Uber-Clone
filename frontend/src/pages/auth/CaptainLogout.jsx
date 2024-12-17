import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUserAction } from "../../app/features/auth/userSlice";

export default function CaptainLogout() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutCaptain = async () => {
    try {
      const res = await dispatch(logOutUserAction()).unwrap();
      console.log(res);
      localStorage.clear("token");
      navigate("/captain-login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logOutCaptain();
  }, []);
  return <div>captainlogout</div>;
}
