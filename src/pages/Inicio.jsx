import { useEffect } from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  useEffect(() => {
    console.log(
      "Gracias a todos las personas que me han enseñado y me han hecho convertirme en el trabajador que soy."
    );
    console.log("Thx to A. Guerra, que me inspiró para hacer esta web");
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-5/6 xl:w-1/3 sm:w-3/4 md:w-2/5 relative xl:max-w-sm lg:w-2/5">
          <div className="rounded overflow-hidden shadow-md bg-slate-100 dark:bg-slate-900">
            <div className="absolute -mt-[70px] w-full flex justify-center">
              <div className="h-32 w-32">
                <img
                  src="https://javiervallejo.com/wp-content/uploads/2019/10/logo-bn.png"
                  alt="Logo de Javier Vallejo"
                  className="rounded-full h-full w-full shadow-md"
                />
              </div>
            </div>
            <div className="px-6 mt-16 pb-6">
              <h1 className="font-bold text-slate-800 dark:text-slate-100 text-4xl text-center mb-1 font-dmsans tracking-tighter">
                Javier Vallejo
              </h1>
              <p className=" text-slate-700 dark:text-slate-300 text-sm text-center font-poppins">
                Desarrollador de software en{" "}
                <a
                  className="text-pink-500 font-bold hover:text-pink-400 hover:decoration-pink-400"
                  target="_blank"
                  rel="noopeneer noreferrer"
                  href="https://www.iteisa.com"
                >
                  ITEISA
                </a>
              </p>

              <p className="text-center text-slate-500 dark:text-slate-400 pt-3 pb-6 font-normal font-poppins">
                React<br></br>JavaScript<br></br>PHP<br></br>WordPress
                <br></br>PrestaShop<br></br> SEO
              </p>

              <Link
                className={`border font-poppins rounded py-2 flex justify-center    
                          hover:text-slate-100 hover:bg-slate-700 hover:border-slate-100  text-slate-600 bg-slate-100 border-slate-600
                          dark:hover:text-slate-900 dark:hover:bg-slate-300 dark:hover:border-slate-900  dark:text-slate-400 dark:bg-slate-900 dark:border-slate-400`}
                to="sobre-mi"
              >
                Ver más información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
