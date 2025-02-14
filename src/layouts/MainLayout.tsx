import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import DarkMode from "../components/shared/DarkMode";
import Footer from "../components/shared/Footer";
import LanguageSelector from "../components/shared/LanguageSelector";

const MainLayout = () => {
  const [darkToggle, setDarkToggle] = useState(false);

  useEffect(() => {
    if (darkToggle) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkToggle]);

  useEffect(() => {
    // Verificar si el navegador tiene modo oscuro
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    // Actualizar el estado basado en el valor actual del media query
    setDarkToggle(darkModeMediaQuery.matches);
  }, []);

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

export default MainLayout;
