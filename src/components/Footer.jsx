import { useTranslation } from "react-i18next";

import react from "../img/react.svg";
import vite from "../img/vite.svg";
import tailwind from "../img/tailwindcss.svg";

import packageJson from "../../package.json";

const Footer = () => {
  const { t } = useTranslation();

  const versionVite = packageJson.dependencies.vite;
  const versionReact = packageJson.dependencies.react;
  const versionTailwind = packageJson.devDependencies.tailwindcss;

  return (
    <footer className="font-Poppins flex items-center justify-center py-2 text-sm text-slate-600 dark:text-slate-400">
      <div className="inline-flex items-center rounded bg-slate-200 p-1 dark:bg-slate-800">
        {t("developed_with")}{" "}
        <img
          name="Vite"
          alt="Vite"
          title={`Vite v${versionVite}`}
          className="mx-1 h-4 w-4 "
          src={vite}
        />{" "}
        +
        <img
          name="React"
          alt="React"
          title={`React v${versionReact}`}
          className="mx-1 h-4 w-4 fill-white"
          src={react}
        />
        +
        <img
          name="Tailwind CSS"
          alt="Tailwind CSS"
          title={`Tailwind CSS v${versionTailwind}`}
          className="mx-1 h-4 w-4 fill-white"
          src={tailwind}
        />
      </div>
    </footer>
  );
};

export default Footer;
