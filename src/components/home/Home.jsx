import React from "react";
import MainCanvas from "./MainCanvas";

export default function Home() {
  return (
    <div className="flex justify-center mt-20 w-screen">
      <div className="border-1 shadow-2xl rounded p-3 hover:shadow-amber-600">
        Hi, I'm Shyam
      </div>
      <MainCanvas />
    </div>
  );
}
