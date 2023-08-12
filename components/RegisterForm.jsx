"use client";

import React, { useReducer } from "react";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { getUser, postUser } from "@/libs/fetchApi";
import Link from "next/link";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const RegisterForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const router = useRouter();
  let { name, email, password } = formData;
  const addMutation = useMutation(postUser);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("All fields are necessary.");
      return;
    }

    if (!formData) return console.log("No form data");

    addMutation.mutate(formData);

    router.push("/");
  };

  return (
    <form
      className="max-w-2xl flex flex-col gap-4 items-center"
      onSubmit={handleRegister}
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
          type="email"
          name="email"
          placeholder="Email"
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
          Register
        </button>
      </div>

      <div>
        <Link href={"/"}>
          Already have an account? <span className="underline">Login</span>
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
