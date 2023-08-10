import React from "react";

const SearchEmployee = ({ searchData }) => {
  const handleSearch = () => {
    // const { isLoading, isError, data, error } = useQuery(
    //   ["employees", searchData],
    //   getSearchEmployees(searchData)
    // );

    // if (isLoading) return console.log("Employee is Loading...");
    // if (isError) return console.log(`Got Error ${error}`);
    console.log("sd", searchData);
  };

  return (
    <button
      className="bg-blue-500 text-white px-2 py-1 rounded-md"
      onClick={handleSearch}
    >
      Search
    </button>
  );
};

export default SearchEmployee;
