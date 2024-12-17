import React, { useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const { handleSubmit, register } = useForm();
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const conformRidePanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false);
  const vihiclePanleRef = useRef(null);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 20,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );
  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vihiclePanleRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vihiclePanleRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);
  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(conformRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(conformRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRidePanel]);
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  const onSubmit = (data) => {};
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full  ">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="line absolute w-1 h-16 top-[45%] left-[10%] bg-gray-900 rounded-full"></div>
            <input
              {...register("pickup", { required: { value: true } })}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              {...register("destination", { required: { value: true } })}
              onClick={() => {
                setPanelOpen(true);
              }}
              type="text"
              className="bg-[#eee] px-8 py-2 text-base mt-3 rounded-lg w-full"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div className=" bg-white  " ref={panelRef}>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setvehiclePanelOpen={setvehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vihiclePanleRef}
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px-3 py-10"
      >
        <VehiclePanel
          setConfirmedRidePanel={setConfirmedRidePanel}
          setvehiclePanelOpen={setvehiclePanelOpen}
        />
      </div>
      <div
        ref={conformRidePanelRef}
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px-3 py-10"
      >
        <ConfirmedRide
          setvehiclePanelOpen={setvehiclePanelOpen}
          setVehicleFound={setVehicleFound}
          setConfirmedRidePanel={setConfirmedRidePanel}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px-3 py-10"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full bottom-0 z-10  bg-white px-3 py-10"
      >
        <WaitingForDriver
          waitingForDriver={waitingForDriver}
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>
    </div>
  );
};

export default Home;
