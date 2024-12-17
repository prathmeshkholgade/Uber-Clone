import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/auth/UserLogin";
import UserSignup from "./pages/auth/UserSignup";
import CaptainLogin from "./pages/auth/CaptainLogin";
import CaptainSignup from "./pages/auth/CaptainSignup";
import Home from "./pages/Home";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogOut from "./pages/auth/UserLogOut";
import CaptainLogout from "./pages/auth/CaptainLogout";
import CaptainHome from "./pages/captain/CaptainHome";
import CaptainProtectWrapper from "./pages/captain/CaptainProtectWrapper";
import Riding from "./pages/user/Riding";
import CaptainRiding from "./pages/captain/CaptainRiding";
// import Map from "./pages/captain/Map";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/riding" element={<Riding />} />
        {/* <Route path="/map" element={<Map/>} /> */}
        <Route path="/captain-riding" element={<CaptainRiding />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              {" "}
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/logout-user"
          element={
            <UserProtectWrapper>
              <UserLogOut />{" "}
            </UserProtectWrapper>
          }
        />
        <Route
          path="/logout-captain"
          element={
            <UserProtectWrapper>
              <CaptainLogout />{" "}
            </UserProtectWrapper>
          }
        />
        <Route
          path="captain-home"
          element={
            <CaptainProtectWrapper>
              {" "}
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
