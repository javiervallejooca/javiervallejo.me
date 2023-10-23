import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DarkMode from "../components/DarkMode";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";

const Index = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  useEffect(() => {
    darkToggle
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkToggle, localStorage.theme]);

  return (
    <div className="w-full bg-gradient-to-b from-slate-200 to-slate-300 selection:bg-slate-600 selection:text-slate-100 dark:from-slate-800 dark:to-slate-900 dark:selection:bg-slate-200 dark:selection:text-slate-800">
      <main className="relative mb-0 pb-0">
        <LanguageSelector />
        <DarkMode darkToggle={darkToggle} setDarkToggle={setDarkToggle} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
