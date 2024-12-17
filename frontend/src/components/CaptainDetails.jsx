import React from "react";

export default function CaptainDetails() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://i.pinimg.com/736x/08/1a/02/081a02feee8e7aa3f7b4d0d85bf47f09.jpg"
            alt=""
          />
          <h4 className="text-lg font-medium">Harsha Patel</h4>
        </div>
        <div>
          <h4 className="text-lg font-semibold">294 </h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex mt-6 p-3 bg-gray-100 rounded-xl  justify-center gap-4 items-start">
        <div className="text-center">
          <i className="font-thin text-3xl ri-time-line"></i>
          <p className="text-lg font-medium">10.2</p>
          <p className="text-gray-600 text-sm">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="font-thin text-3xl ri-speed-up-line"></i>
          <p className="text-lg font-medium">10.2</p>
          <p className="text-gray-600 text-sm">Hours Online</p>
        </div>
        <div>
          <i className="font-thin text-3xl ri-sticky-note-fill"></i>
          <p className="text-lg font-medium">10.2</p>
          <p className="text-gray-600 text-sm">Hours Online</p>
        </div>
      </div>
    </div>
  );
}
