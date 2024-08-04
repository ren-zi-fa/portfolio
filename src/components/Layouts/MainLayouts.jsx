import React, { useContext } from "react";
import Navbar from "../Fragments/Navbar";
import { DarkModeContext } from "../../hooks/DarkMode";

const MainLayouts = ({ children }) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <>
      <div className={theme === "dark" ? "dark" : ""}>
        <Navbar />
        <div className='pt-20 bg-blue-300 min-h-screen px-10 dark:bg-black '>{children}</div>
      </div>
    </>
  );
};

export default MainLayouts;
