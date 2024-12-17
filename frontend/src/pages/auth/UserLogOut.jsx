import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUserAction } from "../../app/features/auth/userSlice";

export default function UserLogOut() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutUser = async () => {
    try {
      const res = await dispatch(logOutUserAction()).unwrap();
      console.log(res);
      localStorage.clear("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logOutUser();
  }, []);
  return <div>userlogout</div>;
}
