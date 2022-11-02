const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-5/6 xl:w-1/3 sm:w-3/4 md:w-2/5 relative xl:max-w-sm lg:w-2/5">
        <div className="rounded overflow-hidden shadow-md bg-slate-900 text-slate-300 text-center py-5">
          <h1 className="flextext-center text-5xl font-black mb-5">
            {" "}
            Error 404{" "}
          </h1>
          <p>
            La página 404 de toda la vida..., solo desconozco cómo has llegado
            hasta aquí ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
