import GoBack from "../components/about/GoBack";

const PageNotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative w-5/6 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm">
        <div className="overflow-hidden rounded py-5 text-center text-slate-700 dark:text-slate-300">
          <h1 className="mb-5 flex text-5xl font-black">Error 404</h1>
          <p>
            La página 404 de toda la vida..., desconozco cómo has llegado hasta
            aquí ...
          </p>
          <GoBack />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
