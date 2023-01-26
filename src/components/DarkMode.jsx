import { MdOutlineDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";

const DarkMode = ({ darkToggle, setDarkToggle }) => {
  return (
    <div style={{ zIndex: "10" }} className="fixed bottom-0 right-0 p-4">
      <div className="flex justify-end rounded-full bg-slate-600 p-1 text-slate-200 dark:bg-slate-200 dark:text-slate-600">
        {darkToggle ? (
          <BiSun
            size="2rem"
            className="hover:cursor-pointer"
            onClick={() => {
              setDarkToggle(false);
            }}
          />
        ) : (
          <MdOutlineDarkMode
            size="2rem"
            className="hover:cursor-pointer"
            onClick={() => {
              setDarkToggle(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DarkMode;
