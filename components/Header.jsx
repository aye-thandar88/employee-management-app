import React from "react";
import Link from "next/link";
import { HiPlusCircle } from "react-icons/hi";

const Header = () => {
  return (
    <div className="border-b-2">
      <h1 className="text-4xl font-bold text-center">Employee Management</h1>
      <div className="my-6 w-full">
        <Link
          href="/addEmployee"
          className="bg-emerald-700 text-white p-3 rounded-md flex w-1/6 gap-2"
        >
          <HiPlusCircle size={24} />
          <span>Add Employee</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
