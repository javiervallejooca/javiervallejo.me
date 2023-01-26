const Technology = ({ name, color = "black" }) => {
  return (
    <p className="mb-5 pr-2">
      <span className="rounded bg-slate-300 p-2 text-sm text-slate-600 dark:bg-slate-700 dark:text-slate-400">
        {name}
      </span>
    </p>
  );
};

export default Technology;
