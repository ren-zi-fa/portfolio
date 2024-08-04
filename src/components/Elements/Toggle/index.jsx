import React, { useContext } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { DarkModeContext } from "../../../hooks/DarkMode";

const ToggleDark = () => {
  const { theme, toggleTheme } = useContext(DarkModeContext);

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div className="relative w-16 h-8 bg-gray-200 rounded-full peer-checked:bg-blue-600 dark:bg-gray-700 transition-colors duration-300">
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <IconSun
            className={`w-6 h-6 text-yellow-500 bg-slate-500 rounded-full transform transition-transform duration-300 ${
              theme === "dark" ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
            stroke={2}
          />
          <IconMoon
            className={`w-6 h-6 text-blue-500 transform transition-transform duration-300 bg-white rounded-full  ${
              theme === "dark" ? "-translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            stroke={2}
          />
        </div>
      </div>
    </label>
  );
};

export default ToggleDark;
