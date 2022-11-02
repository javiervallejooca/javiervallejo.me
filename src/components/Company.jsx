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
  const [description, setDescription] = useState("");
  const [dateFrom, setDateFrom] = useState(new Date(textDateFrom));
  const [dateTo, setDateTo] = useState(new Date(textDateTo));
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

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

    setMonths(misMeses);
    setYears(i);
  }, []);

  return (
    <div className="flex flex-col border border-slate-800 rounded p-4 bg-slate-800 shadow text-black mb-4">
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-center">
          <div className="text-xl font-bold text-slate-200">{name}</div>
          <div className="italic text-slate-500 text-sm">{job}</div>
        </div>
        <div className="py-1 sm:py-0 text-sm text-slate-500 flex flex-col justify-end">
          <div className="flex justify-start sm:justify-end mb-0 sm:mb-1">
            <span className=" bg-slate-400 text-slate-700 px-2 py-1 rounded-full">
              {years} {years === 1 ? "año" : "años"} , {months}{" "}
              {months === 1 ? "mes" : "meses"}
            </span>
          </div>
          <div className="flex sm:justify-end pt-1 sm:pt-0">
            <div className="mr-1">
              {monthsNames[dateFrom.getMonth()] + "/" + dateFrom.getFullYear()}
            </div>
            -
            <div className="ml-1">
              {current ? (
                <span className="font-bold text-slate-300">Actualmente</span>
              ) : (
                <>
                  {monthsNames[dateTo.getMonth()] + "/" + dateTo.getFullYear()}{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-slate-400 mt-4 mb-1">
        {company === "iteisa" && (
          <>
            <p className="mb-4">
              Enfocado "originalmente" para realizar trabajos de desarrollo web
              en CMS.
            </p>
            <p className="mb-4">
              He desarrollado varios plugins para cumplir las necesidades de los
              clientes, obtiendo un punto de visto mucho más profundo de
              WordPress.
            </p>
            <p className="mb-4">
              De nuevo, era el responsable del desarollo departamente web,
              cerrando de nuevo el circulo de reunión para toma de requisitos,
              desarrollo y formación.
            </p>
            <p className="mb-4">
              Por necesidades de la empresa me forman en React y hago trabajos
              de desarrollo a medida y el desarrollo web.
            </p>{" "}
            <p className="mb-4">
              Amplio mi experiencia en React y otros frameworks JavaScript,
              adquiero conocimientos de desarrollo de APIs y el uso de GIT como
              control de versiones, utilizando integraciones continuas para los
              despliegues.
            </p>
          </>
        )}

        {company === "zitelia" && (
          <>
            <p className="mb-4">
              Mi primera experiencia laboral como informático.
            </p>
            <p className="mb-4">
              Empecé realizando desarrollos web para WordPress y PrestaShop.
            </p>
            <p className="mb-4">
              Al tener soltura para hablar con clientes y darles exitosamente la
              formación para que fueran capaces para la auto gestión de
              contenidos de web.
            </p>
            <p className="mb-4">
              Empecé a realizar la toma de requisitos para orientarles en sus
              proyectos webs, además luego me encargaba del propio desarrollo y
              preparar al cliente y que aprendiera cómo manejar su plataforma.
            </p>
            <p className="mb-4">
              {" "}
              Por necesidades de la empresa, aprendí conocimiento para que
              páginas webs aparezcan en Google, consiguiendo posicionar ciertos
              servicios de la empresa en las primeras posiciones del mercado
              nacional.
            </p>
            <p className="mb-4">
              Posteriormente se puedo ofrecer un servicios de auditorias web
              para lograr aparecer en Google según la temática del cliente.
            </p>
            <p className="mb-4">
              {" "}
              En los últimos años enfocaron mis trabajos al desarrollo a medida,
              trabajando principalmente con PHP y jQuery, utilizando el
              framework CodeIgniter.
            </p>
          </>
        )}
      </div>
      <div className="flex flex-wrap mt-2">
        {technologies.map((technology, i) => {
          return <Technology key={i} name={technology.name} />;
        })}
      </div>
    </div>
  );
};

export default Company;
