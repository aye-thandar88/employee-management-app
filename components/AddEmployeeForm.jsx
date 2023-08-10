"use client";

import { getEmployees, postEmployee } from "@/libs/fetchApi";
import React, { useReducer } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import Noti from "./Noti";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const AddEmployeeForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const router = useRouter();

  const queryClient = useQueryClient();
  const addMutation = useMutation(postEmployee, {
    onSuccess: () => {
      queryClient.prefetchQuery("employees", getEmployees);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");

    let { firstname, lastname, email, salary, date, status } = formData;

    const model = {
      name: `${firstname} ${lastname}`,
      avartat: ":)",
      email,
      salary,
      date,
      status: status ?? "Active",
    };

    addMutation.mutate(model);
    router.push("/");
    router.refresh();
  };

  if (addMutation.isLoading) return console.log("Loading");
  if (addMutation.isError) return console.log(addMutation.error.message);
  if (addMutation.isSuccess)
    return console.log("Success");

  const handleCancel = () => {
    router.replace("/");
  };

  return (
    <form onSubmit={handleSubmit} className="border-b-2 py-6">
      <div className="grid grid-cols-2 lg:grid:cols-3 gap-4">
        <div>
          <input
            onChange={setFormData}
            type="text"
            name="firstname"
            placeholder="First Name"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            type="text"
            name="salary"
            placeholder="Salary"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            type="date"
            name="date"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div className="flex gap-10 items-center">
          <div className="form-check">
            <input
              onChange={setFormData}
              type="radio"
              value="Active"
              id="radioDefault1"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault1"
              className="inline-block tet-gray-800"
            >
              Active
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={setFormData}
              type="radio"
              value="Inactive"
              id="radioDefault2"
              name="status"
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              htmlFor="radioDefault2"
              className="inline-block tet-gray-800"
            >
              Inactive
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className="bg-emerald-700 text-white p-3 rounded-md"
            type="submit"
          >
            Add
          </button>
          <button
            className="bg-rose-700 text-white p-3 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
