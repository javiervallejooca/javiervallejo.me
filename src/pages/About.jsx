import { useState } from "react";
import { Link } from "react-router-dom";

import Company from "../components/Company";

const About = () => {
  const fechaMercadoLaboral = 2015;
  const workingSince = new Date().getFullYear() - fechaMercadoLaboral;

  const [date, setDate] = useState(workingSince);

  return (
    <div className="flex flex-col items-center justify-center pt-5 sm:pt-12 pb-8 font-poppins">
      <div className="w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl relative mb-4">
        <div className="sticky top-0 right-0 py-4 px-4 text-slate-200 font-bold text-xl opacity-100 bg-slate-900 mb-4">
          Formación
        </div>
        <div className="text-slate-400">
          <p className="mb-4">
            Ya desde pequeño me gustaban por los ordenadores y cacharreaba con
            ellos.
          </p>
          <p className="mb-4">
            Tras finalizar el grado superior de desarrollo de aplicaciones
            informáticas, me animo a estudiar la carrera de{" "}
            <span className="bg-slate-400 text-slate-800 px-1">
              ingeniería informática
            </span>{" "}
            en la Universidad de Cantabria.{" "}
          </p>
          <p className="mb-4">
            En el año 2017 finalizo el TFC (trabajo de fin de carrera) y me
            adentro completamente en el mundo laboral, aunque ya me encontraba
            trabajando a tiempo parcial como desarrollador en Zitelia, los
            últimos años de carrera estuve compaginando trabajo y estudios.
          </p>
        </div>
      </div>
      <div className="w-5/6 sm:w-3/4 md:w-3/5 xl:max-w-5xl relative mb-5">
        <div className="sticky top-0 right-0 py-4 px-4 text-slate-200 font-bold text-xl opacity-100 bg-slate-900 mb-4">
          Experiencia laboral
        </div>
        <div className="text-slate-400 mb-4">
          <p className="mb-4">
            Los últimos años de la carrera estudiaba y trabaja, es decir, llevo{" "}
            <span className="bg-slate-400 text-slate-800 px-1">
              trabajando de forma continua durante los últimos {date} años.
            </span>
          </p>
          <p className="mb-4">
            Este sería el <u>orden cronológico inverso</u> de las empresas donde
            he estado/estoy trabajando.
          </p>
        </div>
        <Company
          textDateFrom="2021-05-01"
          textDateTo={new Date()}
          name="ITEISA"
          job="Desarrollador de software"
          company="iteisa"
          current="true"
          technologies={[
            {
              name: "React",
            },
            {
              name: "NextJs",
            },
            {
              name: "11th",
            },
            {
              name: "WordPress",
            },
            {
              name: "PrestaShop",
            },
            {
              name: "PHP",
            },
            {
              name: "JavaScript",
            },
            {
              name: "Tailwind",
            },
            {
              name: "GIT",
            },
          ]}
        ></Company>

        <Company
          textDateFrom="2015-01-21"
          textDateTo="2021-05-01"
          name="Zitelia"
          job="Desarrollador de software"
          company="zitelia"
          technologies={[
            {
              name: "C#",
            },
            {
              name: "WordPress",
            },
            {
              name: "PrestaShop",
            },
            {
              name: "SEO",
            },
            {
              name: "PHP",
            },
            {
              name: "JavaScript",
            },
            {
              name: "jQuery",
            },
            {
              name: "CodeIgniter",
            },
            {
              name: "Boostrap",
            },
            {
              name: "MySQL",
            },
            {
              name: "SVN",
            },
          ]}
        ></Company>
      </div>
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
            <li>Proactivo: Soy un culo inquieto...</li>
            <li>Responsable: Me gusta que el trabajo salga perfecto.</li>
            <li>
              Versátil: Me amoldo a trabajar y aprender distintas teconologías.
            </li>
          </ul>
          <p className="mb-4">
            Me sigo formando en mis ratos libres para obtener mayores
            conocimientos y poder aplicarlos en mi día a día.
          </p>
          <p className="mb-4">
            Actualmente, me encuentro realizando un proyecto con el stack de
            MERN (MongoDB, Express, React y Node) con el que estoy aprendiendo
            conocimientos de nuevos frameworks y metodologías de desarrollo.
          </p>
        </div>
      </div>
      <Link
        to="/"
        className="text-slate-400 underline underline-offset-4 hover:text-slate-300"
      >
        Volver atrás
      </Link>
    </div>
  );
};

export default About;
