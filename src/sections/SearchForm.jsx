import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Pagination from "../components/Pagination";
import FunctionsProvider from "../provider/FunctionsProvider";
import CapsuleGrid from "./CapsuleGrid";

function SearchForm() {
  const [capsules, setCapsules] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [filterQuery, setFilterQuery] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [capsulesPerPage] = useState(10);

  //  api call to fetch all the capsules
  useEffect(() => {
    const fetchCapsules = async () => {
      const response = await FunctionsProvider.getCapsules();
      const capsule = await response.json();
      setCapsules(capsule);
      setSearchQuery(capsule);
      setFilterQuery(capsule);
    };
    fetchCapsules();
  }, []);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setCapsules(searchQuery);
    } else {
      const filterResult = searchQuery.filter(
        (item) =>
          item.serial.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.status.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(filterResult);
      setCapsules(filterResult);
    }
    setFilterValue(e.target.value);
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setCapsules(filterQuery);
    } else {
      const typeResult = filterQuery.filter((item) =>
        item.type.includes(e.target.value)
      );
      console.log(typeResult);
      setCapsules(typeResult);
    }
  };

  // Paginate posts
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = capsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="container mx-auto my-4 py-5 px-4 md:px-10 lg:px-28 border-t border-[#f0f0f0] z-0">
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
            onChange={(e) => handleSearch(e)}
          />
          <select
            className="mr-auto ml-0 md:ml-auto md:mr-0 mt-6 md:mt-0 my-2 p-2.5 shadow-md rounded-md font-medium dark:bg-gray-700"
            onChange={(e) => handleFilter(e)}
          >
            <option value="">Filter by type</option>
            {capsules.map((type) => (
              <option value={type.type} key={type.id}>
                {type.type}
              </option>
            ))}
          </select>
        </div>
        {/* End of search and Filter Functionality */}
      </section>
      <CapsuleGrid capsuleData={currentCapsules} />
      <Pagination
        capsulesPerPage={capsulesPerPage}
        totalCapsules={capsules.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default SearchForm;
