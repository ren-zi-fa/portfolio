import React, { useContext } from "react";
import Navbar from "../components/Fragments/Navbar";
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen px-5 py-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 grid grid-cols-1 md:grid-cols-2'>
        <div className=''>
          <div className='grid grid-cols-1 1 w-full max-w-sm bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 h-max px-24 '>
            <div className='text-center border-b-2 md:mb-4 mb-0'>
              <img src='../assets/img/renzi.jpg' alt='' className='w-24 h-24 mb-3  mt-4 rounded-full shadow-lg mx-auto' />
              <h1 className='text-xl font-bold '>Renzi</h1>
              <h2 className='text-xl font-bold '>Pebriandika</h2>
            </div>
            <h1 className='text-center '>Web Developer</h1>
          </div>
          <div className=' border-t-2 bg-slate-200 max-w-sm dark:bg-slate-500 rounded-b-lg h-20 grid grid-cols-4  items-center place-content-center px-12 '>
            <a href=''>
              <IconBrandGithub className='w-7 h-7' stroke={2} />
            </a>
            <a href=''>
              <IconBrandInstagram className='w-7 h-7' stroke={2} />
            </a>
            <a href=''>
              <IconBrandFacebook className='w-7 h-7' stroke={2} />
            </a>
            <a href=''>
              <IconBrandLinkedin className='w-7 h-7' stroke={2} />
            </a>
          </div>
        </div>
        <div className="">
       
<ol class="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
   <li>
      List item one
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>You might feel like you are being really "organized" o</li>
         <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
         <li>Nesting tons of folders in your source code is also not helpful.</li>
      </ul>
   </li>
   <li>
      List item two
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>I'm not sure if we'll bother styling more than two levels deep.</li>
         <li>Two is already too much, three is guaranteed to be a bad idea.</li>
         <li>If you nest four levels deep you belong in prison.</li>
      </ul>
   </li>
   <li>
      List item three
      <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
         <li>Again please don't nest lists if you want</li>
         <li>Nobody wants to look at this.</li>
         <li>I'm upset that we even have to bother styling this.</li>
      </ul>
   </li>
</ol>

        </div>
      </div>
    </>
  );
};

export default Home;
