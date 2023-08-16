"use client";

import UpdateEmployeeForm from "@/components/UpdateEmployeeForm";
import { getEmployee } from "@/libs/fetchApi";
import React from "react";
import { useQuery } from "react-query";

const UpdateEmployee = ({ params }) => {
  const { id } = params;

  const { isLoading, isError, data, error } = useQuery(["employee", id], () =>
    getEmployee(id)
  );

  if (isLoading) return console.log("Loading...!");
  if (isError) return console.log("Error");

  return <UpdateEmployeeForm empData={data} />;
};

export default UpdateEmployee;
