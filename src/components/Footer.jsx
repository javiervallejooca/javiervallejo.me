import React from "react";
import vite from "../img/vite.svg";
import tailwind from "../img/tailwindcss.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-2 font-Poppins text-slate-400 text-sm">
      <div className="inline-flex items-center p-1 bg-slate-800 rounded">
        Desarrollado con{" "}
        <img
          name="Vite"
          alt="Vite"
          title="Vite"
          className="h-4 w-4 mx-1 "
          src={vite}
        />{" "}
        +
        <img
          name="Tailwind CSS"
          alt="Tailwind CSS"
          title="Tailwind CSS"
          className="h-4 w-4 mx-1 fill-white"
          src={tailwind}
        />
      </div>
    </footer>
  );
};

export default Footer;
