
import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Carousel from "@/components/ui/Carousel";

export default function Home() {
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
