import React from "react";

function CapsuleInfoModal({ closeModal, capsuleInfo }) {
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center bg-black bg-opacity-70 z-50 top-0">
      <div
        className="w-full h-full inset-0 z-0 absolute"
        onClick={() => {
          closeModal(false);
        }}
      ></div>
      <div className="max-w-xs md:max-w-xl z-50 bg-white rounded-2xl p-8">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col justify-center text-center space-y-3">
            <h4 className="font-bold text-gray-700 text-2xl">
              Capsule - {capsuleInfo.serial}
            </h4>
            <div className="my-5 px-6 md:px-20 flex flex-col space-y-3">
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-semibold">Land Landings:</span>{" "}
                {capsuleInfo.land_landings}
              </p>
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-semibold">Number of times re-used:</span>{" "}
                {capsuleInfo.reuse_count}
              </p>
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-semibold">Status:</span>{" "}
                {capsuleInfo.status}
              </p>
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-semibold">Type:</span> {capsuleInfo.type}
              </p>
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-semibold">Water Landings:</span>{" "}
                {capsuleInfo.water_landings}
              </p>
              <p className="text-sm text-gray-600 font-normal">
                <span className="font-semibold">Last Update:</span>{" "}
                {capsuleInfo.last_update}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CapsuleInfoModal;
