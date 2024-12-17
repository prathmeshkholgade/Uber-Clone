import React from "react";

export default function LookingForDriver({ setVehicleFound }) {
  return (
    <div>
      <div>
        <h5
          onClick={() => {
            setVehicleFound(false);
          }}
          className="p-1 text-center absolute top-0 w-[93%] "
        >
          <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-2 ">Looking for a Driver</h3>
        <div className="flex gap-2 justify-between flex-col items-center">
          <img
            className="h-24"
            src="https://i.pinimg.com/474x/8d/21/7b/8d217b1000b642005fea7b6fd6c3d967.jpg"
            alt=""
          />

          <div className="details w-full mt-5">
            <div className="flex items-center gap-2 p-2 border-b-2  ">
              <i className="text-lg ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -top-1 text-gray-600">
                  Kankaria talab,Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -top-1 text-gray-600">
                  Kankaria talab,Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 ">
              <i className="ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-xl font-medium">198</h3>
                <p className="text-sm -top-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
