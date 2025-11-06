import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import PrincipalMessage from "@/components/PrincipalMessage";
import WhyUs from "@/components/WhyUs";
import Programs from "@/components/Programs";
import CampusLife from "@/components/CampusLife";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <PrincipalMessage />
        {/* <WhyUs /> */}
        <Programs />
        <CampusLife />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
