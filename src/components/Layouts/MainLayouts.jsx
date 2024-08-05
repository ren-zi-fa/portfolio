import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Fragments/Navbar";
import { DarkModeContext } from "../../hooks/DarkMode";
import IconWa from "../Elements/Button/IconWa";
import Loading from "../Fragments/Loading";
import MyFooter from "../../pages/footer";


const MainLayouts = ({ children }) => {
  const { theme } = useContext(DarkModeContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={theme === "dark" ? "dark" : ""}>
          <Navbar />
          <div className='pt-20 bg-blue-100 min-h-screen px-5 dark:bg-gray-600 '>
            {children}
            <IconWa />
            <MyFooter/>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayouts;
