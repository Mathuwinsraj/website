import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); 

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
     
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('/your-parallax-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY
        }}
      />

      
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
