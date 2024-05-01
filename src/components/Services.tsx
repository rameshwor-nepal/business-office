import React from 'react'
import { MdArrowForward } from 'react-icons/md'

const Services = () => {
    return (
        <main className=' relative'>
            <div className='flex w-full h-[50rem] absolute z-[-10]'>
                <div className='bg-white flex-1'></div>
                <div className='bg-[#f9faff] flex-1 h-[40rem]'></div>

            </div>
            <section className=' xl:px-32 lg:px-20 sm:px-16 px-10 h-fit py-16'>
                <div className='z-10'>
                    <div className='flex items-center gap-3' data-aos="fade-right" data-aos-duration="500">
                        <span className='text-blue-2 text-lg'>What we are offering</span>
                        <p className='w-20 h-[2px] bg-cyan-1 '></p>
                    </div>
                    <h1 className='lg:text-6xl text-4xl text-blue-2 font-extrabold leading-extra-tight my-3'>
                        Our Services
                    </h1>
                    <p className='text-gray-1'>
                        No job is too big or too small for the crew at Your Business Name LLC
                    </p>
                </div>
                <div className='grid grid-cols-12 gap-6 mt-6 z-10'>
                    <div
                        className='lg:col-span-5 md:col-span-6  col-span-12 p-6 border-solid border-2 border-cyan-1 relative bg-white'
                        data-aos="fade-right" data-aos-duration="500"
                    >
                        <h4 className='text-blue-2 text-3xl my-2 '>Plumbing</h4>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis exercitationem eum rem,
                            minima praesentium ab deserunt repellat corrupti? Quod unde illo tempora consequatur voluptate
                            voluptatem necessitatibus, voluptas sequi delectus itaque.
                        </p>
                        <button className="text-lg text-cyan-1 flex items-center float-right gap-1 mt-3">
                            <span>
                                Read More
                            </span>
                            <span>
                                <MdArrowForward size={20} />
                            </span>
                        </button>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-2.7rem] bottom-[2.2rem] rotate-90'></span>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-6px] bottom-[-0.3rem] '></span>
                    </div>

                    <div
                        className='lg:col-span-5 md:col-span-6   col-span-12 p-6 border-solid border-2 border-cyan-1 relative bg-white'
                        data-aos="fade-left" data-aos-duration="500"
                    >
                        <h4 className='text-blue-2 text-3xl my-2 '>Water Treatment</h4>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis exercitationem eum rem,
                            minima praesentium ab deserunt repellat corrupti? Quod unde illo tempora consequatur voluptate
                            voluptatem necessitatibus, voluptas sequi delectus itaque.
                        </p>
                        <button className="text-lg text-cyan-1 flex items-center float-right gap-1 mt-3">
                            <span>
                                Read More
                            </span>
                            <span>
                                <MdArrowForward size={20} />
                            </span>
                        </button>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-2.7rem] bottom-[2.2rem] rotate-90'></span>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-6px] bottom-[-0.3rem] '></span>
                    </div>

                    <div className='md:col-span-6 col-span-12 p-6 border-solid border-2 border-cyan-1 relative bg-white'
                        data-aos="fade-right" data-aos-duration="500"
                    >
                        <h4 className='text-blue-2 text-3xl my-2 '>Commercial Property Maintenance</h4>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis exercitationem eum rem,
                            minima praesentium ab deserunt repellat corrupti? Quod unde illo tempora consequatur voluptate
                            voluptatem necessitatibus, voluptas sequi delectus itaque.
                        </p>
                        <button className="text-lg text-cyan-1 flex items-center float-right gap-1 mt-3">
                            <span>
                                Read More
                            </span>
                            <span>
                                <MdArrowForward size={20} />
                            </span>
                        </button>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-2.7rem] bottom-[2.2rem] rotate-90'></span>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-6px] bottom-[-0.3rem] '></span>
                    </div>

                    <div
                        className='md:col-span-6 col-span-12 p-6 border-solid border-2 border-cyan-1 relative bg-white'
                        data-aos="fade-left" data-aos-duration="500"
                    >
                        <h4 className='text-blue-2 text-3xl my-2 '>Preventative Maintenance</h4>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis exercitationem eum rem,
                            minima praesentium ab deserunt repellat corrupti? Quod unde illo tempora consequatur voluptate
                            voluptatem necessitatibus, voluptas sequi delectus itaque.
                        </p>
                        <button className="text-lg text-cyan-1 flex items-center float-right gap-1 mt-3">
                            <span>
                                Read More
                            </span>
                            <span>
                                <MdArrowForward size={20} />
                            </span>
                        </button>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-2.7rem] bottom-[2.2rem] rotate-90'></span>
                        <span className='block absolute w-20 h-[6px] bg-blue-2 right-[-6px] bottom-[-0.3rem] '></span>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Services