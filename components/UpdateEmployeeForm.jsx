"use client";

import { getEmployees, updateEmployee } from "@/libs/fetchApi";
import React, { useReducer } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const UpdateEmployeeForm = ({ empData }) => {
  const router = useRouter();
  const [formData, setFormData] = useReducer(formReducer, {});

  const { name, salary, date, email, status, _id } = empData.employee;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const queryClient = useQueryClient();
  const updateMutation = useMutation(
    (newData) => updateEmployee(_id, newData),
    {
      onSuccess: async (data) => {
        queryClient.prefetchQuery("employees", getEmployees);
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");

    let empName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updatedData = Object.assign({}, empData, formData, { name: empName });

    await updateMutation.mutate(updatedData);
    router.push("/");
    router.refresh();
  };

  const handleCancel = () => {
    router.replace("/");
  };

  return (
    <form onSubmit={handleSubmit} className="border-b-2 py-6">
      <div className="grid grid-cols-2 lg:grid:cols-3 gap-4">
        <div>
          <input
            onChange={setFormData}
            defaultValue={firstname}
            type="text"
            name="firstname"
            placeholder="First Name"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            defaultValue={lastname}
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            defaultValue={email}
            type="email"
            name="email"
            placeholder="Email"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            defaultValue={salary}
            type="text"
            name="salary"
            placeholder="Salary"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div>
          <input
            onChange={setFormData}
            defaultValue={date}
            type="date"
            name="date"
            className="border-2 w-full p-2 rounded-md"
          />
        </div>

        <div className="flex gap-10 items-center">
          <div className="form-check">
            <input
              defaultChecked={status == "Active"}
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
              defaultChecked={status !== "Active"}
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
            Update
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

export default UpdateEmployeeForm;
