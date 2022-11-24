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

    setMonths(misMeses + 1);
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
              clientes, obteniendo un punto de visto mucho más profundo de
              WordPress.
            </p>
            <p className="mb-4">
              Gracias a este conocimiento, también he retocado temas, por lo que
              sería capaz de hacer un theme o tema a medida.
            </p>
            <p className="mb-4">
              De nuevo, soy el responsable del desarrollo en el departamento web
              de la empresa, cerrando de nuevo el círculo entre las reuniones de
              toma de requisitos, desarrollo del producto y formación a cliente.
            </p>
            <p className="mb-4">
              ITEISA es una empresa que ofrece servicios de hosting, por lo que
              muchos días tengo que trabajar en varios proyectos web ya que
              recibiamos tickets para actualizar plataformas, configurar algún
              plugin, arreglar fallos... Los cambios de contexto son habituales
              en mi día a día.
            </p>
            <p className="mb-4">
              Por necesidades de la empresa me formo en React y participo en el
              proceso de desarrollos de software a medida. Parte de estos
              trabajos son el mantenimiento de aplicaciones web, resolviendo
              bugs y aportando nuevas funcionalidades. También participo en el
              desarrollo de nuevos proyectos.
            </p>
            <p className="mb-4">
              Amplio mi experiencia en React y otros frameworks JavaScript, como
              NextJS y Eleventy. Adquiero conocimientos en el desarrollo de APIs
              y el uso de GIT como software de control de versiones, utilizando
              integraciones continuas para los despliegues.
            </p>
          </>
        )}

        {company === "zitelia" && (
          <>
            <p className="mb-4">
              Mi primera experiencia laboral como informático.
            </p>
            <p>
              Los primeros 6 meses aprex. estuve de desarrollando en un software
              propio de la empresa en C#.
            </p>
            <p className="mb-4">
              Cuando se acabó dicho proyecto me propusieron realizar desarrollos
              web en WordPress y PrestaShop.
            </p>
            <p className="mb-4">
              Al tener soltura para hablar con clientes y darles, exitosamente,
              la formación para que fueran capaces de auto gestionar su, me
              empezaron a pasar labores como técnico comercial.
            </p>
            <p className="mb-4">
              Las labores consistían en la toma de requisitos, orientación en
              sus proyectos, el propio desarrollo, la preparación de
              documentación y formación para que el cliente aprendiera cómo
              manejar su plataforma.
            </p>
            <p className="mb-4">
              Por necesidades de la empresa, aprendí conocimientos de SEO para
              conseguir que páginas webs aparezcan en Google, consiguiendo
              posicionar ciertos servicios de la empresa en las primeras
              posiciones del mercado nacional.
            </p>
            <p className="mb-4">
              En los últimos años, por necesidadesde la empresa, mis trabajos se
              enfocaron en el desarrollo a medida, trabajando principalmente con
              PHP, utilizando el framework CodeIgniter.
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
