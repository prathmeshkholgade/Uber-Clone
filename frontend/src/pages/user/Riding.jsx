import React from "react";
import { Link } from "react-router-dom";
export default function Riding() {
  return (
    <div className=" h-screen">
      <Link
        to={"/home"}
        className="fixed right-2 top-2 w-10 h-10 flex items-center rounded-full justify-center bg-white"
      >
        <i className="text-lg font-medium ri-home-3-fill"></i>
      </Link>
      <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR452_201802_M_20180228165525.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">
              sarthak sharam
              {/* {props.ride?.captain.fullname.firstname} */}
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              Mp 04 AB 6565
              {/* {props.ride?.captain.vehicle.plate} */}
            </h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
            {/* <h1 className="text-lg font-semibold">  </h1> */}
          </div>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  {/* {props.ride?.destination} */}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹185 </h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-5 w-full bg-green-600 text-white p-2 font-semibold rounded-lg">
          Make a Payment
        </button>
      </div>
    </div>
  );
}
