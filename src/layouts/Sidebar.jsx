import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";

const Sibebar = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  useEffect(() => {
    darkToggle
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkToggle]);

  return (
    <div className="w-full bg-gradient-to-b from-slate-400 to-slate-900 selection:bg-slate-600 selection:text-slate-100 dark:from-slate-800 dark:to-slate-900 dark:selection:bg-slate-200 dark:selection:text-slate-800">
      <main className="relative mb-5 flex pb-0">
        <div className="sidebar w-1/4 bg-blue-200">132</div>
        <div className="main-content w-3/4">
          <DarkMode darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sibebar;
