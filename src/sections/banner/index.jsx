import React from "react";
import Header from "./Header";

function Index() {
  return (
    <>
      <Header />
      <section className="container mx-auto my-4 py-5 px-4 md:px-10 lg:px-28 block lg:flex justify-between items-center">
        <div className="max-w-full lg:max-w-xl flex flex-col">
          <h1 className="text-4xl md:text-6xl md:text-center lg:text-left font-semibold text-gray-900">
            All Info About SpaceX Capsules
          </h1>
          <p className="font-normal text-lg md:text-center lg:text-left mt-6 mb-10 text-gray-400">
            All in one place
          </p>
        </div>
        <div className="max-w-full mx-auto lg:mx-0 md:max-w-xl drop-shadow-md">
          <img
            src="../../../assets/hero_capsule.jpg"
            alt="hero-graphics"
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}

export default Index;
