import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ link }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuDropdown = [
    { name: "Laravel", link: "/" },
    { name: "react", link: "/" },
    { name: "nextJs", link: "/" },
  ];
  return (
    <div ref={dropdownRef}>
      <div onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='cursor-pointer flex items-center'>
        <div className='flex '>
          <span className='text-gray-900 dark:text-white hover:text-gray-400 '>{link.name}</span>
          {isDropDownOpen ? <IconChevronUp className='ml-2 mt-1 ' stroke={2} /> : <IconChevronDown className='ml-2 mt-1' stroke={2} />}
        </div>
      </div>
      <ul className={`block md:absolute mt-0 md:mt-4 mr-10 w-[215px] md:w-[400px] shadow-md rounded left-0 md:left-[-30px] bg-slate-200 dark:bg-slate-600 tracking-widest  md:right-0 transition-all duration-500 ease-in ${isDropDownOpen ? "block" : "hidden"}`}>
        <li className='px-4 py-5 grid grid-cols-2'>
          {menuDropdown.map((item, index) => (
            <Link to={item.link} key={index} className='underline hover:text-red-500 py-2 text-sm'>
              {item.name}
            </Link>
          ))}
        </li>
        
        
      </ul>
    </div>
  );
};

export default Dropdown;
