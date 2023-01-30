import { Link } from "react-router-dom";
const GoBack = () => {
  return (
    <Link
      to="/"
      className="text-slate-600 underline underline-offset-4 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
    >
      Volver al inicio
    </Link>
  );
};

export default GoBack;
