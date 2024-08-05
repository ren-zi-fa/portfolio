import React from "react";

const Loading = () => {
  return (
      <div className=' bg-slate-900 min-h-screen flex justify-center place-content-center items-center'>
        <div className='px-3 py-1 text-xl font-medium leading-none text-center text-slate-100  rounded-full animate-pulse'>Loading...</div>
      </div>
  );
};

export default Loading;
