import React from "react";

const Summary = () => {
  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky top-0 right-0 mb-4 bg-slate-100 py-4 px-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        Resumen sobre mis habilidades o experiencia
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          A lo largo de mi experiencia laboral he tocado varias tecnologías,
          pero es un breve listado con las que más he estado trabajando junto a
          un tiempo orientativo.
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <b>PHP</b> ~ 4/5 años
          </li>
          <li>
            <b>JavaScript</b> ~ 1 año
          </li>
          <li>
            <b>React</b> ~ 9 meses
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

export default Summary;
