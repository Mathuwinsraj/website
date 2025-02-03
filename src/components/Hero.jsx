import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 300], ["0px", "-50px"]);

  
  const fullName = "MADHU WINSRAJ";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullName.slice(0, index + 1)); 
        setIndex(index + 1);
      }, 150); 

      return () => clearTimeout(timeout);
    }
  }, [index]); 

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative bg-gradient-to-b from-[#000000] via-[#091132] to-[#000001]"
    >
      <motion.img
        src="src/assets/1000046389.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full border-1 border-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

    
      <motion.h1
        className="text-4xl font-extrabold mt-6 text-white tracking-wide"
        style={{ y: textY }}
      >
        {displayText}
        <motion.span
          className="text-white animate-blink"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.h1>

      
      <p className="mt-3 text-base text-center max-w-lg leading-relaxed text-gray-300">
        <span className="font-semibold text-white tracking-wide">
          A 17-year-old with a passion for coding and technology,
        </span>
        <br />
        <span className="italic opacity-80">but my interests go well beyond the digital world.</span>
      </p>
    </section>
  );
}

export default Hero;


