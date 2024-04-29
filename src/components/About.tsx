import React from 'react'
import Image from 'next/image'
import { MdArrowForward } from 'react-icons/md'

const About = () => {
    return (
        <div className="flex items-center gap-12 justify-between px-32 py-20 h-fit bg-[linear-gradient(to_right,rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0.8)),url('/p5.jpg')]" style={{ backgroundSize: 'cover' }}>
            <div className='relative flex-1 pb-16'>
                <div className='w-[35rem] h-[34rem] shadow-lg relative bg-white'>
                    <Image src={'/watertreatment.jpg'} alt='image' fill objectFit='cover' className='p-3' />
                </div>

                <div className='absolute right-0 top-[25rem] w-[20rem] h-[14rem] bg-white shadow-lg'>
                    <Image src={'/p3.jpg'} alt='image' fill objectFit='cover' className='p-3' />
                </div>
            </div>


            <div className='max-w-[35rem]'>
                <div className='flex items-center gap-3'>
                    <span className='text-blue-2 text-lg'>About Our Company</span>
                    <p className='w-20 h-[2px] bg-cyan-1 '></p>
                </div>

                <h1 className='text-6xl text-blue-2 font-extrabold leading-extra-tight my-4'>
                    Your Business Name LLC
                </h1>
                <p className='text-gary-1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde harum nemo quam odio dolor
                    id nam totam saepe quasi necessitatibus, blanditiis voluptate animi consequuntur delectus eligendi tenetur
                    id nam totam saepe quasi necessitatibus, blanditiis voluptate animi consequuntur delectus eligendi tenetur
                    accusamus placeat!
                </p>
                <p className='text-gary-1 my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde harum nemo quam odio dolor
                    id nam totam saepe quasi necessitatibus, blanditiis voluptate animi consequuntur delectus eligendi tenetur
                    accusamus placeat!eligendi tenetur accusamus placeat!
                </p>
                <button className="py-5 px-10 text-lg bg-blue-2 text-white font-bold flex items-center gap-2 mt-12">
                    <span>
                        Read More
                    </span>
                    <span>
                        <MdArrowForward size={20} />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default About