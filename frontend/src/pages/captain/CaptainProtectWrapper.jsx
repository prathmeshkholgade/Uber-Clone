import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateCaptain } from "../../app/features/auth/captainSlice";

export default function CaptainProtectWrapper({ children }) {
  const token = localStorage.getItem("token");
  const [loading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  console.log(token);
  const checkAuthetication = async (token) => {
    try {
      const res = await dispatch(authenticateCaptain(token)).unwrap();
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    checkAuthetication(token);
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
