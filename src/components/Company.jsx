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
              Enfocado "originalmente" a realizar trabajos de desarrollo web en
              CMS.
            </p>
            <p className="mb-4">
              He desarrollado varios plugins para cumplir las necesidades de los
              clientes, obtiendo un punto de visto mucho más profundo de
              WordPress.
            </p>
            <p className="mb-4">
              De nuevo, soy el responsable del desarollo del departamento web de
              la empresa, cerrando de nuevo el círculo entre las reuniones de
              toma de requisitos, desarrollo de producto y formación a cliente.
            </p>
            <p className="mb-4">
              Por necesidades de la empresa me forman en React y desarrollo
              trabajos a medida.
            </p>{" "}
            <p className="mb-4">
              Amplio mi experiencia en React y otros frameworks JavaScript,
              adquiero conocimientos de desarrollo de APIs y el uso de GIT como
              software de control de versiones, utilizando integraciones
              continuas para los despliegues.
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
              contenidos de web empecé a realizar labores como técnico
              comercial.
            </p>
            <p className="mb-4">
              Desde la toma de requisitos, para orientarles en sus proyectos
              webs, hasta el propio desarrollo y la preparación de documentación
              y formación para que el cliente aprendiera cómo manejar su
              plataforma.
            </p>
            <p className="mb-4">
              {" "}
              Por necesidades de la empresa, aprendí conocimientos de SEO para
              conseguir que páginas webs aparezcan en Google, consiguiendo
              posicionar ciertos servicios de la empresa en las primeras
              posiciones del mercado nacional.
            </p>
            <p className="mb-4">
              {" "}
              En los últimos años se enfocaron mis trabajos e el desarrollo a
              medida, trabajando principalmente con PHP y jQuery, utilizando el
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
