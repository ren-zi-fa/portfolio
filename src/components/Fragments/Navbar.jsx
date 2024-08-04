import React, { useContext, useState } from "react";
import Button from "../Elements/Button";
import { IconMenu2, IconX, IconBrandWhatsapp } from "@tabler/icons-react";
import Dropdown from "../Elements/Dropdown";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../hooks/DarkMode";
import ToggleDark from "../Elements/Toggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(DarkModeContext);
  const Links = [
    { name: "home", link: "/" },
    { name: "project", link: "/project" },
    { name: "about", link: "/about" },
    { name: "blog", link: "/blog" },
    { name: "contact", link: "/contact" },
  ];

  const ChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className='shadow-md w-full fixed top-0 left-0 z-10 h-16 bg-white dark:bg-slate-700'>
        <div className='flex items-center justify-between py-4 px-7 md:px-10'>
            <div onClick={() => setIsOpen(!isOpen)} className='text-3xl cursor-pointer md:hidden'>
              {isOpen ? <IconX /> : <IconMenu2 />}
            </div>
          <div className='font-bold text-2xl cursor-pointer font-[Poppins] text-gray-800'>Renzi</div>
          <div className='flex items-center'>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:h-0 h-[700px] md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-16 bg-white ${isOpen ? "left-0" : "  left-[-780px]"}`}>
              {Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 relative font-semibold'>
                  {link.name === "project" ? (
                    <Dropdown link={link} />
                  ) : (
                    <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Button cls='flex gap-2 bg-green-500 hover:bg-green-600'>
            <IconBrandWhatsapp stroke={2} /> Chat
          </Button>
          <ToggleDark onChange={ChangeTheme} />
          {/* <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className='p-2 bg-blue-500 text-white rounded'>
          Switch to {theme === "light" ? "dark" : "light"} mode
        </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
