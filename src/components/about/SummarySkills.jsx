import React from "react";

const SummarySkills = () => {
  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        Resumen sobre mis habilidades o experiencia
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          A lo largo de mi experiencia laboral he trabajado con varias
          tecnologías.
        </p>
        <p className="mb-4">
          Si tuviera que plantear un breve listado y un tiempo aprox. con cada
          una de ellas, sería el siguiente:
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <b>PHP</b> ~ 4/5 años
          </li>
          <li>
            <b>JavaScript</b> ~ 3 años
          </li>
          <li>
            <b>React</b> ~ 2 años
          </li>
          <li>
            <b>C#</b> ~ 1,5 años
          </li>
          <li>
            <b>WordPress</b> ~ 6 años
          </li>
          <li>
            <b>PrestaShop</b> ~ 5 años
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummarySkills;
