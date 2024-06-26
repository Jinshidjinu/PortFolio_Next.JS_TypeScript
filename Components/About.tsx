import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Image from 'next/image'
import img from '../public/assets/images/youngProgrammer.jpg'

const  About = () => {
  return (
    <div className='bg-gray-950 pb-[3rem] pt-[3rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-green-400 mb-[1rem]'>ABOUT ME</h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] mb-[3rem] font-bold text-white '>Transforming <span className='text-yellow-400'>Visions</span></h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                    <span className='w-[100px] hidden md:block h-[5px] bg-slate-400 '></span>
                    <p className='text-[19px] text-slate-300 w-[80%] '>
                    Self-taught MERN Stack Developer with a proven ability to adapt in both selfstarting and collaborative environments while staying focused on achieving high
                    quality results under strict deadlines.
                    </p>
                </div>
                <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-sky-300 text-black flex items-center space-x-2'>
                <p>Download CV</p>
                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>
            </div>
          <div data-aos="fade-left" className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] h-[300px] w-[300px] relative'>
            <Image 
            src={img} 
            alt="user" 
            layout='fill' 
            objectFit='contain' 
            className='relative z-[11] w-[100%] h-[100%] object-contain'
             />
             <div className='absolute w-[100%] h-[100%] z-[10] bg-green-500 top-[-2rem] right-[-2rem] '></div>
          </div>
        </div>
        
    </div>
  )
}

export default About