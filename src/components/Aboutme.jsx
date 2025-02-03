import { useState } from "react";
import { motion } from "framer-motion";

function AboutMe() {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      title: "Novels",
      content:
        "My obsession peaked after finishing the Harry Potter series in 5 days! I now mostly read fiction, non-fiction, and murder mysteries. I love exploring complex plots and deep character development.",
      image: "/public/assets/yyy.jpg", 
    },
    {
      title: "Sports",
      content:
        "I play football, watch a lot of cricket, and was in my school team for throwball and basketball. My passion for sports keeps me fit and active.",
      image: "/public/assets/yoo.png", 
    },
    {
      title: "Art",
      content:
        "I started sketching in art class and have since developed a love for all types of art. I find creating art an excellent way to express myself.",
      image: "/public/assets/OIP.jpeg", 
    },
    {
      title: "Docs",
      content:
        "I really like reading true crime documentaries and analyzing criminal psychology. It's fascinating to learn about criminal behavior and the justice system.",
      image: "/public/assets/ccc.jpg",
    },
    {
      title: "Others",
      content:
        "I keep up with world affairs, enjoy photography, gaming, and chess. I love to debate on various topics, and sometimes I also photograph my dog.",
      image: "/public/assets/dd.jpg", 
    },
  ];

  return (
    <section
      id="about"
      className="py-12 flex flex-col items-center bg-gradient-to-b from-[#000000] via-[#091132] to-[#000001] overflow-hidden"
    >
      
      <motion.h2
        className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

     
      <motion.div
        className="w-full px-6 max-w-6xl mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-300">
          When I'm not working on anything, I like to read, listen to music or watch true crime documentaries. I go for runs, keep up on world news, do pencil sketches too.
        </p>
      </motion.div>

      
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-6 px-4 w-full max-w-6xl items-center overflow-x-auto scrollbar-hidden"
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="relative w-full sm:w-56 h-72 rounded-2xl shadow-lg text-center bg-black/40 backdrop-blur-lg border border-gray-700 overflow-hidden flex flex-col justify-between p-4"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            onClick={() => setSelectedSection(index)} 
            onMouseLeave={() => setSelectedSection(null)} 
          >
           
            {selectedSection !== index && (
              <img src={section.image} alt={section.title} className="w-full h-28 object-cover rounded-2xl mb-2" />
            )}

         
            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-2">
              {section.title}
            </h3>

            {selectedSection === index && (
              <motion.p
                className="text-xs text-gray-300 font-medium flex-grow flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              >
                {section.content}
              </motion.p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default AboutMe;
