"use client";

import React, { useReducer } from "react";
import Link from "next/link";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Login = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="max-w-2xl flex flex-col gap-4 items-center"
      onSubmit={handleLogin}
    >
      <div className="w-full">
        <input
          onChange={setFormData}
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 w-full p-2 rounded-md"
        />
      </div>

      <div className="w-full">
        <input
          onChange={setFormData}
          type="text"
          name="password"
          placeholder="Password"
          className="border-2 w-full p-2 rounded-md"
        />
      </div>

      <div className="flex gap-3">
        <button
          className="bg-emerald-700 text-white p-3 rounded-md"
          type="submit"
        >
          Log in
        </button>
      </div>

      <div>
        <Link href={"/register"}>
          Don't have an account? <span className="underline">Register</span>
        </Link>
      </div>
    </form>
  );
};

export default Login;
