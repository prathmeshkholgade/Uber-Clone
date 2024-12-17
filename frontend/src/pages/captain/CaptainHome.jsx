import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../../components/CaptainDetails";
import RidePopUp from "../../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../../components/ConfirmRidePopUp";

export default function CaptainHome() {
  const ridePopupPanelRef = useRef(null);
  const conformRidePanelPopupRef = useRef(null);
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePanelPopup, setConfirmRidePanelPopup] = useState(false);
  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopupPanel]);
  useGSAP(() => {
    if (confirmRidePanelPopup) {
      gsap.to(conformRidePanelPopupRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(conformRidePanelPopupRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanelPopup]);
  return (
    <div className="h-screen">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          // ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePanelPopup={setConfirmRidePanelPopup}
          // setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          // confirmRide={confirmRide}
        />
      </div>
      <div
        ref={conformRidePanelPopupRef}
        className="fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePanelPopup={setConfirmRidePanelPopup}
        />
      </div>
    </div>
  );
}
