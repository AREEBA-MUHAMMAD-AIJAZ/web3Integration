"use client";
import { useContextAPI } from "@/contextApi";
import { useState } from "react";

const MyForm = () => {
  const { Contract } = useContextAPI();
  const [name, setName] = useState("");
  const [age, SetAge] = useState("");
  const [Token, SetToken] = useState("");

  const handleEmailChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    SetAge(e.target.value);
  };
  const handleTokenChange = (e) => {
    SetToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Contract.Set(name, age, Token);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const res = await Contract.get();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <button
        onClick={getData}
        className="border rounded-full px-8 py-3 text-2xl bg-blue-500 hover:bg-blue-800 text-white my-3"
      >
        Get Data
      </button>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Enter your name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={name}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="age"
            placeholder="Enter Age"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={age}
            onChange={handleAgeChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="token"
            placeholder="Enter Token"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            value={Token}
            onChange={handleTokenChange}
          />
        </div>

        <div>
          <button
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
