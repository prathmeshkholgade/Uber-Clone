import React from "react";

export default function VehiclePanel({
  setvehiclePanelOpen,
  setConfirmedRidePanel,
}) {
  return (
    <div>
      <h5
        onClick={() => {
          setvehiclePanelOpen(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2">Choose a vehicle</h3>
      <div
        onClick={() => {
          setConfirmedRidePanel(true);
        }}
        className="flex p-3 mb-2 border active:border-black bg-gray-100 rounded-xl w-full  items-center justify-between"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            MOTO{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm text-gray-600">3 mins away</h5>
          <p className="text-sm font-medium">
            {" "}
            Affordable,motarcycle compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">65</h2>
      </div>

      <div
        onClick={() => {
          setConfirmedRidePanel(true);
        }}
        className="flex p-3 mb-2  border active:border-black bg-gray-100 rounded-xl w-full  items-center justify-between"
      >
        <img
          className="h-14"
          src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm text-gray-600">2 mins away</h5>
          <p className="text-sm font-medium"> Affordable,compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">190</h2>
      </div>

      <div
        onClick={() => {
          setConfirmedRidePanel(true);
        }}
        className="flex p-3 mb-2  border active:border-black bg-gray-100 rounded-xl w-full  items-center justify-between"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UBERAUTO{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm text-gray-600">2 mins away</h5>
          <p className="text-sm font-medium"> Affordable,Auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">70</h2>
      </div>
    </div>
  );
}
