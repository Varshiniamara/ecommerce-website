import React from "react";
import { Navbar } from "../../components/Navbar";
import { Register } from "../../components/Register";

export const AuthRegister = () => {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center mt-32">
        <Register />
      </main>
    </>
  );
};


