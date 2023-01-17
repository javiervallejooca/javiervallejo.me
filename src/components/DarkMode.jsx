import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = ({ darkToggle, setDarkToggle }) => {
  return (
    <div className="sticky top-2">
      <div className="flex justify-end text-slate-800 dark:text-slate-300 p-4">
        <MdOutlineDarkMode
          size="2rem"
          className="hover:cursor-pointer"
          onClick={() => {
            setDarkToggle(!darkToggle);
          }}
        />
      </div>
    </div>
  );
};

export default DarkMode;
