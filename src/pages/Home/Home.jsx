import React, { useEffect } from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Footer from "../../components/Footer";
import Testimonials from "../../components/Testimonials";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <section className="font-gilroy font-medium text-gray text-lg leading-[27px]">
      <Header />
      <Services />
      <About />
      <Achievements />
      <Testimonials />
      <ContactForm/>
      <Footer />
    </section>
  );
};

export default Home;
