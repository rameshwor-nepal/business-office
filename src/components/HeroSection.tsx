import React from 'react'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdArrowForward } from 'react-icons/md'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <>
            <section className="bg-cyan-1 py-3 px-14">
                <div className="flex justify-between items-center text-sm">
                    <p>
                        <span className="mr-3">
                            Mon-Fri: 9AM - 5PM
                        </span>
                        <span>
                            yourbusiness@business.com
                        </span>
                    </p>

                    <div className="flex gap-4 text-lg">
                        <FaInstagram />
                        <FaLinkedinIn />
                        <FaWhatsapp />
                    </div>

                </div>
            </section>

            <section className='grid grid-cols-12 grid-rows-12 relative'>
                <div className="col-span-12 row-span-10 bg-[linear-gradient(to_bottom,rgba(22,33,84,0.9),rgba(55,92,157,0.6)),url('/plumbing-home.jpg')]  text-white" style={{ backgroundSize: 'cover' }}>
                    <nav className="px-14 py-6 flex justify-between items-center">
                        <div className="">
                            <span className="text-3xl tracking-wider font-medium">Business Logo</span>
                        </div>
                        <ul className="flex gap-5 no-underline">
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Projects
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Contact
                            </li>
                        </ul>
                    </nav>
                    <div className="flex justify-between items-center mt-24  px-32">
                        <div className="w-[39rem]">
                            <p className="pb-4 text-lg">
                                Building with Confidence
                            </p>
                            <h1 className="text-[90px] leading-extra-tight font-bold">
                                Building and Maintaining Your Dreams
                            </h1>
                            <p>
                                Fast, Friendly home repair service done right the first time!!
                            </p>
                            <button className="py-5 px-10 text-lg bg-white text-blue-2 font-bold flex items-center gap-2 mt-8 mb-20">
                                <span>
                                    Expore More
                                </span>
                                <span>
                                    <MdArrowForward size={20} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[27rem] h-[40rem] z-10 absolute top-48 right-32">
                    <Image src={'/PLUMBING.jpg'} alt="image1" fill objectFit='cover' />
                </div>
                <div className="bg-cyan-1 col-span-12 row-span-2 pt-14 px-32">
                    <span className="text-5xl font-extrabold text-white"> 20% Year of Experience</span>
                </div>
            </section>

        </>
    )
}

export default HeroSection