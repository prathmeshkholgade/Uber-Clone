import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../app/features/auth/userSlice";
export default function UserProtectWrapper({ children }) {
  const user = useSelector((state) => state.auth?.user?.user);
  const [loading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  console.log(token);
  const navigate = useNavigate();
  const checkAuthetication = async (token) => {
    try {
      const res = await dispatch(authenticateUser(token)).unwrap();
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    checkAuthetication(token);
  }, [navigate, token]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
