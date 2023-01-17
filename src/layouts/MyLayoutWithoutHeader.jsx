import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";

const MyLayoutWithoutHeader = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  useEffect(() => {
    darkToggle
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkToggle, localStorage.theme]);

  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 selection:bg-slate-600 selection:text-slate-100 dark:selection:bg-slate-200 dark:selection:text-slate-800 relative">
      <main className="mb-0 pb-0">
        <DarkMode darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MyLayoutWithoutHeader;
