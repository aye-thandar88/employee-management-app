"use client";

import React, { useState } from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import Link from "next/link";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { deleteEmployee, getEmployees } from "@/libs/fetchApi";
import RemoveEmployee from "./RemoveEmployee";
import SearchEmployee from "./SearchEmployee";

const EmployeeList = () => {
  const [searchData, setSearchData] = useState("");
  const { isLoading, isError, data, error } = useQuery(
    "employees",
    getEmployees
  );

  if (isLoading) return console.log("Employee is Loading...");
  if (isError) return console.log(`Got Error ${error}`);

  return (
    <div className="mx-auto relative overflow-y-auto overflow-x-hidden">
      <div className="flex justify-end my-5 gap-3">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        <SearchEmployee searchData={searchData} />
      </div>

      <table className="text-sm text-left w-full table-auto">
        <thead className="border-b dark:bg-gray-800 bg-gray-100">
          <tr>
            <th className="py-3 text-center">Name</th>
            <th className="py-3 text-center">Email</th>
            <th className="py-3 text-center">Salary</th>
            <th className="py-3 text-center">Birthday</th>
            <th className="py-3 text-center">Status</th>
            <th className="py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr className="border-b dark:bg-gray-800" key={emp._id}>
              <td className="py-3">
                <span>{emp.name}</span>
              </td>
              <td className="py-3">
                <span>{emp.email}</span>
              </td>
              <td className="py-3">
                <span>${emp.salary}</span>
              </td>
              <td className="py-3">
                <span>{emp.date}</span>
              </td>
              <td className="py-3">
                <div className="flex items-center">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      emp.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }
                      mr-2`}
                  ></div>
                  <span>{emp.status}</span>
                </div>
              </td>
              <td className="flex justify-around py-3">
                <Link href={`/updateEmployee/${emp._id}`} className="cursor">
                  <HiPencilAlt size={24} />
                </Link>
                <RemoveEmployee id={emp._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
