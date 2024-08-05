import React from "react";

const ContenText = () => {
  return (
    <>
      <div className='mt-10 flex flex-col justify-center overflow-hidden  dark:bg-gray-900 md:justify-normal px-4'>
        <div className='font-extrabold text-lg md:text-4xl [text-wrap:balance] bg-clip-text text-gray-600 dark:text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 pr-2 mb-2'>
          Hello,I'm
          <span className='text-blue-700 dark:text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden ps-1 '>
            <ul className='block animate-text-slide-2 text-left leading-tight [&_li]:block'>
              <li>Renzi Pebriandika</li>
              <li>Full Stack Developer</li>
              <li aria-hidden='true' className=''>
                Renzi Pebriandika
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className='px-4 font-semibold'>
        <p className='mb-4 text-xl'>
          Im a <span className='bg-green-400 rounded-lg px-2 dark:text-slate-700 text-xl'>Full Stack Developer</span> Based in Pasaman Barat
        </p>
        <p>
          As an experienced Full-Stack Developer with two years of hands-on experience, I have skillfully completed various projects using the Laravel and React.js frameworks. My expertise lies particularly in Laravel, where I can create
          websites quickly and responsively. I have a strong interest in new technologies
        </p>
      </div>
    </>
  );
};

export default ContenText;
