import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { API_URL } from "./Url";

function CapsuleGrid() {
  const [capsules, setCapsules] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  //   api call to fetch all the countries
  useEffect(() => {
    const fetchCapsules = async () => {
      const response = await fetch(`${API_URL}capsules`);
      const capsule = await response.json();
      setCapsules(capsule);
      setSearchQuery(capsule);
    };
    fetchCapsules();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setCapsules(searchQuery);
    } else {
      const filterResult = searchQuery.filter(
        (item) =>
          item.serial.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.status.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setCapsules(filterResult);
    }
    setFilterValue(e.target.value);
  };

  return (
    <>
      <section className="container mx-auto my-4 py-5 px-4 md:px-10 lg:px-28 border-t border-[#f0f0f0]">
        <h2 className="text-xl md:text-4xl text-gray-900 font-medium">
          Search Capsules
        </h2>
        {/* Search and Filter Functionality */}
        <div className="relative flex flex-col md:flex-row container mx-auto mb-16 my-10">
          <div className="my-auto z-10 absolute left-4 mt-3 md:mt-4">
            <BsSearch className="text-black" />
          </div>
          <input
            type="text"
            placeholder="Search by serial e.g C105"
            className="pl-10 p-2.5 shadow-md rounded-md md:w-1/3 dark:bg-gray-700 relative"
            value={filterValue}
            onChange={(e) => handleFilter(e)}
          />
          <select
            className="mr-auto ml-0 md:ml-auto md:mr-0 mt-6 md:mt-0 my-2 p-2.5 shadow-md rounded-md font-medium dark:bg-gray-700"
            // onChange={(val) => filterByRegion(val.target.value)}
          >
            <option value="">Filter by type</option>
            <option value="Dragon 1.0">Dragon 1.0</option>
            <option value="Dragon 2.0">Dragon 2.0</option>
          </select>
        </div>
        {/* End of search and Filter Functionality */}
      </section>
      <section className="container grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-16 mx-auto px-6 md:px-10 lg:px-28">
        {/* Capsules */}

        {capsules.map((item) => (
          <article
            key={item.id}
            className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white"
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
