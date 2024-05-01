"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <FeaturedProject />
      <Testimonials />
      <Contact />
      <Footer />
      {/* <Carousel /> */}
    </>

  )
}
