const AboutMe = () => {
  return (
    <div className="relative mb-4 w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl">
      <div className="sticky right-0 top-0 mb-4 bg-slate-100 px-4 py-4 text-xl font-bold text-slate-700 opacity-100 dark:bg-slate-900 dark:text-slate-200">
        Sobre mí y perspectivas de aprendizaje
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        <p className="mb-4">
          Laboralmente hablando, si tuviera que definirme con tres adjetivos
          seleccionaría los siguientes:
        </p>
        <ul className="mb-4 list-inside list-disc">
          <li>
            <b>Proactivo:</b> Soy un culo inquieto...
          </li>
          <li>
            <b>Responsable:</b> Me involucro en el proyecto haciendo que sea tan
            mío como del cliente, me gusta que el trabajo salga perfecto.
          </li>
          <li>
            <b>Versátil:</b> Siempre me he amoldado a aprender distintas
            tecnologías para sacar adelante los nuevos proyectos.
          </li>
        </ul>
        <p className="mb-4">
          Me sigo formando en mis ratos libres para obtener mayores
          conocimientos y poder aplicarlos en mi día a día.
        </p>
        <p className="mb-4">
          Actualmente, me encuentro realizando un proyecto con el stack de MERN
          (MongoDB, Express, React y Node) con el que estoy aprendiendo backend
          con la idea de "poder ser" un desarrollador fullstack.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
