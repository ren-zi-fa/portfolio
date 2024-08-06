import React, { useContext } from "react";
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import ContenText from "../components/Fragments/ContenText";
import Download from "../components/Elements/Button/Download";

const Home = () => {
  return (
    <>
      <div className='min-h-fit px-5 py-4 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <div className='grid grid-cols-1 w-full max-w-sm bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 h-max px-24 '>
            <div className='text-center border-b-2 md:mb-4 mb-0'>
              <img src='/img/renzi.jpg' alt='' className='w-32 h-32 mb-3  mt-4 rounded-full shadow-lg mx-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-2' />
              <h1 className='text-xl font-bold '>Renzi</h1>
              <h2 className='text-xl font-bold '>Pebriandika</h2>
            </div>
            <h1 className='text-center my-2 mx-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-0.5'>Web Developer</h1>
          </div>
          <div className='text-center border-t-2 bg-slate-200 max-w-sm dark:bg-slate-300 rounded-b-lg h-20 grid grid-cols-4  items-center place-content-center px-12 '>
            <a href=''>
              <IconBrandGithub className='w-7 h-7 dark:text-black mx-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-2' stroke={2} />
            </a>
            <a href=''>
              <IconBrandInstagram className='w-7 h-7 text-pink-400 mx-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-2' stroke={2} />
            </a>
            <a href=''>
              <IconBrandFacebook className='w-7 h-7 text-blue-600 mx-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-2' stroke={2} />
            </a>
            <a href=''>
              <IconBrandLinkedin className='w-7 h-7 text-blue-500 mx-auto cursor-pointer transform transition-transform duration-300 hover:-translate-y-2' stroke={2} />
            </a>
          </div>
        </div>
        <div className='mt-7 px-4'>
          <ContenText />
          <div className='mx-4 mt-8'>
            <Download />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
