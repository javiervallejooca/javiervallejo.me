const AboutMe = () => {
  return (
    <div className="w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl relative mb-4">
      <div className="sticky top-0 right-0 py-4 px-4 text-slate-200 font-bold text-xl opacity-100 bg-slate-900 mb-4">
        Sobre mí y perspectivas de aprendizaje
      </div>
      <div className="text-slate-400">
        <p className="mb-4">
          Laboralmente hablando, si tuviera que definirme con tres adjetivos
          seleccionaría los siguientes:
        </p>
        <ul class="list-disc list-inside mb-4">
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
          (MongoDB, Express, React y Node) con el que estoy aprendiendo
          conocimientos de nuevos frameworks y metodologías de desarrollo.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
