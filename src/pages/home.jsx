import React, { useContext } from "react";
import Navbar from "../components/Fragments/Navbar";

const Home = () => {
 
  return (
    <>
        <Navbar />
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
          <header className='p-4'>
            <h1 className='text-2xl'>Tema Dark dengan Context dan Tailwind CSS</h1>
          </header>
        </div>
    </>
  );
};

export default Home;
