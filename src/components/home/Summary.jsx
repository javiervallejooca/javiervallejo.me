import { Link } from "react-router-dom";
import logo from "../../img/logo-jv.webp";

const Summary = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative w-5/6 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
        <div className="overflow-hidden rounded bg-slate-100 shadow-md dark:bg-slate-900">
          <div className="absolute -mt-[70px] flex w-full justify-center">
            <div className="h-32 w-32">
              <img
                src={logo}
                alt="Logo de Javier Vallejo"
                className="h-full w-full rounded-full shadow-md"
                decoding="async"
                loading="lazy"
              />
            </div>
          </div>
          <div className="mt-16 px-6 pb-6">
            <h1 className="mb-1 text-center font-dmsans text-4xl font-bold tracking-tighter text-slate-800 dark:text-slate-100">
              Javier Vallejo
            </h1>
            <p className=" text-center font-poppins text-sm text-slate-700 dark:text-slate-300">
              Desarrollador de software en{" "}
              <a
                className="font-bold text-sky-500 hover:text-sky-400 hover:decoration-sky-400"
                target="_blank"
                rel="noopeneer noreferrer"
                href="#"
              >
                LIS Data Solutions
              </a>
            </p>

            <p className="pt-3 pb-6 text-center font-poppins font-normal text-slate-500 dark:text-slate-400">
              React<br></br>JavaScript<br></br>PHP<br></br>WordPress
              <br></br>PrestaShop<br></br> SEO
            </p>

            <Link
              className={`flex justify-center rounded border border-slate-600 bg-slate-100    
                      py-2 font-poppins text-slate-600  hover:border-slate-100 hover:bg-slate-700 hover:text-slate-100
                      dark:border-slate-400 dark:bg-slate-900 dark:text-slate-400  dark:hover:border-slate-900 dark:hover:bg-slate-300 dark:hover:text-slate-900`}
              to="sobre-mi"
            >
              Ver más información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
