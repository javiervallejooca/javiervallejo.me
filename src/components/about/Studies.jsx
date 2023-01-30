const Studies = () => {
  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky top-0 right-0 mb-4 bg-slate-100 py-4 px-4 text-xl font-bold text-slate-800 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        Formación
      </div>

      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          Ya desde pequeño me gustaban por los ordenadores y cacharreaba con
          ellos.
        </p>
        <p className="mb-4">
          Tras finalizar el grado superior de desarrollo de aplicaciones
          informáticas, me animo a estudiar la carrera de{" "}
          <span className="bg-slate-600 px-1 text-slate-200 dark:bg-slate-400 dark:text-slate-800">
            ingeniería informática
          </span>{" "}
          en la Universidad de Cantabria.{" "}
        </p>
        <p className="mb-4">
          En el año 2017 finalizo el TFC (trabajo de fin de carrera) y me
          adentro completamente en el mundo laboral, aunque ya me encontraba
          trabajando a tiempo parcial como desarrollador en Zitelia, los últimos
          años de carrera estuve compaginando trabajo y estudios.
        </p>
      </div>
    </div>
  );
};

export default Studies;
