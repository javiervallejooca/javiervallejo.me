import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MyLayoutWithoutHeader = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 selection:bg-slate-200 selection:text-slate-800">
      <main className="mb-0 pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MyLayoutWithoutHeader;
