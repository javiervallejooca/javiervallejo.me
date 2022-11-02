const Technology = ({ name, color = "black" }) => {
  return (
    <p className="pr-2 mb-5">
      <span className="bg-slate-700 text-slate-400 p-2 rounded text-sm">
        {name}
      </span>
    </p>
  );
};

export default Technology;
