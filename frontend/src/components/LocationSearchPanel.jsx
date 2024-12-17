import React from "react";

export default function LocationSearchPanel({
  setPanelOpen,
  setvehiclePanelOpen,
}) {
  const location = [
    "24 B near koopors cafe Sheryian coading school",
    "28 A near malhotra cafe Sheryian coading school",
    "24 B near sighaniya cafe Sheryian coading school",
    "sectore 9 ,navi mumbai belapur",
  ];
  return (
    <div>
      {/* /// this is just sample data */}
      {location.map((location) => (
        <div
          onClick={() => {
            setvehiclePanelOpen(true);
            setPanelOpen(false)
          }}
          className=" flex   border-2 p-3 rounded-xl  active:border-black  ites-center my-2 gap-4 justify-start"
        >
          <p className="bg-[#eee] w-8 h-8 rounded-full flex items-center justify-center">
            <i className="ri-map-pin-fill "></i>
          </p>

          <h4 className="font-medium ">{location}</h4>
        </div>
      ))}
    </div>
  );
}
