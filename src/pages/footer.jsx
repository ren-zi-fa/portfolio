import React from "react";
const MyFooter = () => {
    const currentYear = new Date().getFullYear(); 
  return (
    <footer className='bg-gray-100  shadow dark:bg-gray-900 '>
        <div className='w-full  mx-auto p-6 md:py-8'>
          <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
          <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400 px-2'>
            © {currentYear} 
            <a href='https://flowbite.com/' className='hover:underline'>
              Renzi Pebriandika 
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
  )
}

export default MyFooter