import React from "react";

const Summary = () => {
  return (
    <div className="w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl relative mb-4">
      <div className="sticky top-0 right-0 py-4 px-4 text-slate-800 dark:text-slate-200 font-bold text-xl opacity-100 bg-slate-100 dark:bg-slate-900 mb-4">
        Resumen sobre mis habilidades o experiencia
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          A lo largo de mi experiencia laboral he tocado varias tecnologías,
          pero es un breve listado con las que más he estado trabajando junto a
          un tiempo orientativo.
        </p>
        <ul className="list-disc list-inside mb-4">
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
