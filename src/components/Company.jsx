import { useState, useEffect } from "react";
import Technology from "./Technology";

const Company = ({
  textDateFrom,
  textDateTo,
  name,
  job,
  company,
  technologies,
  current = false,
}) => {
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const dateFrom = new Date(textDateFrom);
  const dateTo = new Date(textDateTo);

  const monthsNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  useEffect(() => {
    let misMeses =
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear());

    let i = 0;

    while (misMeses > 12) {
      misMeses = misMeses - 12;
      i++;
    }

    if (misMeses === 12) {
      i++;
      misMeses = 0;
    }

    setMonths(misMeses + 1);
    setYears(i);
  }, []);

  return (
    <div className="mb-4 flex flex-col rounded border border-slate-200 bg-slate-200 p-4 text-white shadow dark:border-slate-800 dark:bg-slate-800  dark:text-black">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-center">
          <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
            {name}
          </div>
          <div className="text-sm italic text-slate-400 dark:text-slate-500">
            {job}
          </div>
        </div>
        <div className="flex flex-col justify-end py-1 text-sm text-slate-500 dark:text-slate-500 sm:py-0">
          <div className="mb-0 flex justify-start sm:mb-1 sm:justify-end">
            <span className=" rounded-full bg-slate-300 px-2 py-1 text-slate-700 dark:bg-slate-400 dark:text-slate-700">
              {name === "iteisa" && console.log(years)}
              {years > 0 && (
                <>
                  {years} {years === 1 ? "año" : "años"}
                  {","}
                </>
              )}{" "}
              {months} {months === 1 ? "mes" : "meses"}
            </span>
          </div>
          <div className="flex pt-1 sm:justify-end sm:pt-0">
            <div className="mr-1">
              {monthsNames[dateFrom.getMonth()] + "/" + dateFrom.getFullYear()}
            </div>
            -
            <div className="ml-1">
              {current ? (
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  Actualmente
                </span>
              ) : (
                <>
                  {monthsNames[dateTo.getMonth()] + "/" + dateTo.getFullYear()}{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-1 text-slate-600 dark:text-slate-400">
        {company === "iteisa" && (
          <>
            <p className="mb-4">
              Enfocado "originalmente" a realizar trabajos de desarrollo web en
              CMS, como WordPress, PrestaShop y Moodle.
            </p>
            <p className="mb-4">
              He desarrollado varios plugins para WordPress y así cumplir las
              necesidades de los clientes, obteniendo un punto de visto mucho
              más profundo de este gestor de contenidos.
            </p>
            <p className="mb-4">
              Gracias a este conocimiento, también he retocado temas, por lo que
              sería capaz de hacer un theme o tema a medida.
            </p>
            <p className="mb-4">
              En ITEISA soy el responsable del desarrollo en el departamento
              web, cerrando el círculo entre las reuniones iniciales, las
              reuniones de toma de requisitos, el desarrollo del producto y la
              formación a cliente.
            </p>
            <p className="mb-4">
              ITEISA es una empresa que ofrece servicios de hosting, por lo que
              muchos días tengo que trabajar en varios proyectos web, ya que
              recibimos tickets para actualizar plataformas, configurar algún
              plugin, arreglar fallos... Esto provoca que los cambios de
              contexto son habituales en mi día a día.
            </p>
            <p className="mb-4">
              Por necesidades de la empres amplio mi experiencia en React,
              empezando a ayudar en varios proyectos de React y otros frameworks
              JavaScript, como NextJS y 11ty(Eleventy). Además, adquiero
              conocimientos en el desarrollo de APIs y el uso de GIT como
              software de control de versiones.
            </p>
          </>
        )}

        {company === "zitelia" && (
          <>
            <p className="mb-4">
              Mi primera experiencia laboral como informático.
            </p>
            <p>
              Inicialmente y el motivo por el que entré, fue para ayudar a
              desarrollar un software propio en C#.
            </p>
            <p className="mb-4">
              Cuando se acabó dicho proyecto me propusieron realizar desarrollos
              web en WordPress y PrestaShop.
            </p>
            <p className="mb-4">
              Al tener soltura para hablar con clientes y darles, exitosamente,
              la formación para que fueran capaces de autogestionar sus
              contenidos, me empezaron a pasar labores como técnico comercial.
            </p>
            <p className="mb-4">
              Los trabajos consistían en la toma de requisitos, orientación a
              los clientes en sus proyectos, el propio desarrollo, la
              preparación de documentación y formación para que el cliente
              aprendiera cómo manejar su plataforma.
            </p>
            <p className="mb-4">
              Por necesidades laborales, aprendí conocimientos de SEO para
              conseguir que páginas webs aparecieran en buenas posiciones en el
              buscador de Google, consiguiendo posicionar servicios de la web de
              Zitelia en las primeras posiciones del mercado nacional.
            </p>
            <p className="mb-4">
              En los últimos años, enfocan mis trabajos en el desarrollo de
              software a medida, trabajando principalmente con PHP. Utilizando
              el framework CodeIgniter a modo de sistema monolítico.
            </p>
          </>
        )}
      </div>
      <div className="mt-2 flex flex-wrap">
        {technologies.map((technology, i) => {
          return <Technology key={i} name={technology.name} />;
        })}
      </div>
    </div>
  );
};

export default Company;
