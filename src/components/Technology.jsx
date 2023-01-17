const Technology = ({ name, color = "black" }) => {
  return (
    <p className="pr-2 mb-5">
      <span className="bg-slate-300 text-slate-600 dark:bg-slate-700 dark:text-slate-400 p-2 rounded text-sm">
        {name}
      </span>
    </p>
  );
};

export default Technology;
