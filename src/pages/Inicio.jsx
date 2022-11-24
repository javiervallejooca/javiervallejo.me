import { Link } from "react-router-dom";
const Inicio = () => {
  console.log(
    "Gracias a todos las personas que me han enseñado y me han hecho convertirme en el trabajador que soy."
  );
  console.log("Thx to A. Guerra, que me inspiró para hacer esta web");

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-5/6 xl:w-1/3 sm:w-3/4 md:w-2/5 relative xl:max-w-sm lg:w-2/5">
          <div className="rounded overflow-hidden shadow-md bg-slate-900">
            <div className="absolute -mt-[70px] w-full flex justify-center">
              <div className="h-32 w-32">
                <img
                  src="https://javiervallejo.com/wp-content/uploads/2019/10/logo-bn.png"
                  alt="Fotografía de Javier Vallejo"
                  className="rounded-full h-full w-full shadow-md"
                />
              </div>
            </div>
            <div className="px-6 mt-16 pb-6">
              <h1 className="font-bold text-slate-100 text-4xl text-center mb-1 font-dmsans tracking-tighter">
                Javier Vallejo
              </h1>
              <p className="text-slate-300 text-sm text-center font-poppins">
                Desarrollador de software en{" "}
                <a
                  className="text-fuchsia-600 font-bold hover:text-fuchsia-500 hover:decoration-fuchsia-500"
                  target="_blank"
                  rel="noopeneer noreferrer"
                  href="https://iteisa.com"
                >
                  ITEISA
                </a>
              </p>

              <p className="text-center text-slate-400 pt-3 pb-6 font-normal font-poppins">
                PHP<br></br>React<br></br> JavaScript <br></br>WordPress
                <br></br>PrestaShop<br></br> SEO
              </p>

              <Link
                className={`border font-poppins rounded py-2 flex justify-center hover:text-slate-900 hover:bg-slate-300 hover:border-slate-900  text-slate-400 bg-slate-900 border-slate-400`}
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
