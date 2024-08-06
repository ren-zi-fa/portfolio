import { IconBrandAdobePhotoshop, IconBrandVisualStudio } from '@tabler/icons-react'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="max-w-full bg-gray-100 shadow border-1 gap-2 h-fit grid grid-cols-1 md:grid-cols-2 px-4 py-2 item-center place-content-center rounded-lg ">
       <div className="">
        <h1 className='text-center font-bold text-2xl tracking-widest'>Education</h1>
        <div className="bg-gray-500 max-w-fit h-fit mx-auto my-2 border-b-2 border-slate-100 rounded-lg px-2 py-4 shadow-md">
          <IconBrandAdobePhotoshop className='w-20 h-20 mx-auto' stroke={1}/>
          <h2 className='text-lg text-center font-semibold'>Lorem ipsum dolo</h2>
          <p className=''>Lorem ipsum dolor sit amet consectet quis beatae explicabo quidem dicta eaque maiores architecto tenetur nulla odio?</p>
        </div>
        <div className="bg-gray-500 max-w-fit h-fit mx-auto my-2 border-b-2 border-slate-100 rounded-lg px-2 py-4 shadow-md">
          <IconBrandAdobePhotoshop className='w-20 h-20 mx-auto' stroke={1}/>
          <h2 className='text-lg text-center font-semibold'>Lorem ipsum dolo</h2>
          <p className=''>Lorem ipsum dolor sit amet consectet quis beatae explicabo quidem dicta eaque maiores architecto tenetur nulla odio?</p>
        </div>
       </div>
       <div className="">

        <h1 className='text-center font-bold text-2xl tracking-widest'>Skills</h1>
        <div className="bg-gray-500 max-w-fit h-fit mx-auto my-2 border-b-2 border-slate-100 rounded-lg px-2 py-4 shadow-md">
          <IconBrandAdobePhotoshop className='w-20 h-20 mx-auto' stroke={1}/>
          <h2 className='text-lg text-center font-semibold'>Lorem ipsum dolo</h2>
          <p className=''>Lorem ipsum dolor sit amet consectet quis beatae explicabo quidem dicta eaque maiores architecto tenetur nulla odio?</p>
        </div><div className="bg-gray-500 max-w-fit h-fit mx-auto my-2 border-b-2 border-slate-100 rounded-lg px-2 py-4 shadow-md">
          <IconBrandAdobePhotoshop className='w-20 h-20 mx-auto' stroke={1}/>
          <h2 className='text-lg text-center font-semibold'>Lorem ipsum dolo</h2>
          <p className=''>Lorem ipsum dolor sit amet consectet quis beatae explicabo quidem dicta eaque maiores architecto tenetur nulla odio?</p>
        </div>
       </div>
      </div>
    </>
  )
}

export default About