"use client";
import MyForm from "@/component/SetFunc";
import Modal from "@/component/walletModel";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(false);

  return (
    <div className="bg-blue-200 text-center">
      <Modal open={data} setOpen={setData} />
      <h1 className="font-bold text-5xl text-white ">Web3Modal</h1>
      <button
        onClick={() => setData(true)}
        className="border rounded-full px-8 py-3 text-2xl bg-blue-500 hover:bg-blue-800 text-white my-3"
      >
        connect wallet
      </button>
      <MyForm />
    </div>
  );
}
