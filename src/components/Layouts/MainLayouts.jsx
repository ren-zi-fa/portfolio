import React, { useContext } from "react";
import Navbar from "../Fragments/Navbar";
import { DarkModeContext } from "../../hooks/DarkMode";
import IconWa from "../Elements/Button/IconWa";

const MainLayouts = ({ children }) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <>
      <div className={theme === "dark" ? "dark" : ""}>
        <Navbar />
        <div className='pt-20 bg-blue-100 min-h-screen px-5 dark:bg-gray-600 '>{children}
          <IconWa/>
        </div>
      </div>
    </>
  );
};

export default MainLayouts;
