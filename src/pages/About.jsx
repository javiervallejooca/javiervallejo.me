import { useState } from "react";
import { Link } from "react-router-dom";
import { useInterval } from "usehooks-ts";

import Company from "../components/Company";
import AboutMe from "../components/AboutMe";
import Summary from "../components/Summary";

const About = () => {
  const fechaMercadoLaboral = 2015; // 12 de enero de 2015npm fund
  const workingSince = new Date().getFullYear() - fechaMercadoLaboral; //in years

  const [typeDate, setTypeDate] = useState("años");

  const [delay, setDelay] = useState(1000);
  const [isPlaying, setPlaying] = useState(false);

  const [date, setDate] = useState(workingSince);

  useInterval(
    () => {
      setDate(date + 1);
    },
    isPlaying ? delay : null
  );

  const handleDate = () => {
    switch (typeDate) {
      case "años":
        setDate(workingSince * 12);
        setTypeDate("meses");
        setPlaying(false);
        break;
      case "meses":
        setDate(parseInt(date * 4.345));
        setTypeDate("semanas");
        setPlaying(false);
        break;
      case "semanas":
        setDate(date * 7);
        setTypeDate("días");
        setPlaying(false);
        break;
      case "días":
        setDate(date * 24);
        setTypeDate("horas");
        setPlaying(false);
        break;
      case "horas":
        setDate(date * 60);
        setTypeDate("minutos");
        setPlaying(false);
        break;
      case "minutos":
        setDate(date * 60);
        setTypeDate("segundos");
        setPlaying(true);
        break;
      case "segundos":
        setDate(workingSince);
        setTypeDate("años");
        setPlaying(false);
        break;
      default:
        setDate(workingSince);
        setTypeDate("años");
        setPlaying(false);
        break;
    }
  };

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
            <span
              onClick={handleDate}
              className="bg-slate-400 text-slate-800 px-1 cursor-pointer"
            >
              trabajando de forma continua durante los últimos {date} {typeDate}
              .
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
              name: "11ty",
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
              name: "Tailwind CSS",
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
      <AboutMe />

      <Summary />

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
