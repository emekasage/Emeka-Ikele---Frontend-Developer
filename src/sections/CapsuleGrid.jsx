import React, { useState } from "react";
import CapsuleInfoModal from "../components/CapsuleInfoModal";

function CapsuleGrid({ capsuleData }) {
  const [openModal, setOpenModal] = useState(false);
  const [capsuleInfo, setCapsuleInfo] = useState();
  return (
    <>
      {openModal && (
        <CapsuleInfoModal closeModal={setOpenModal} capsuleInfo={capsuleInfo} />
      )}
      <section
        className="container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-16 mx-auto px-6 md:px-10 lg:px-28 z-0"
        id="view-capsules"
      >
        {/* Capsules */}
        {capsuleData.map((item) => (
          <article
            key={item.id}
            className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white"
            onClick={() => {
              setOpenModal(true);
              setCapsuleInfo(item);
            }}
          >
            <img
              src="../../../assets/capsule00.jpg"
              alt={item.serial}
              className="h-3/4 rounded-tl-lg rounded-tr-lg"
            />
            <div className="pt-3 pb-6 px-4">
              <h3 className="font-bold mb-2">{item.serial}</h3>
              <h4 className="text-sm font-semibold">
                Status:{" "}
                <span className="text-gray-700 dark:text-gray-300 font-normal">
                  {item.status}
                </span>
              </h4>
              <h4 className="text-sm font-semibold">
                Type:{" "}
                <span className="text-gray-700 dark:text-gray-300 font-normal">
                  {item.type}
                </span>
              </h4>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default CapsuleGrid;
