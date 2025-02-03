import { motion, useScroll, useTransform } from "framer-motion";

function Skills() {
  const { scrollY } = useScroll();
  const skillsY = useTransform(scrollY, [300, 800], ["0px", "-30px"]);

  const categories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Dart", "C", "C++", "Kotlin (learning)"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Flutter", "Pygame", "SDL", "SQL", "DSA", "Arduino Programming"],
    },
    {
      title: "Currently Learning",
      skills: ["Linux Kernel", "Assembly", "Regression & Classification (ML)"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative flex flex-col items-center bg-gradient-to-b from-[#000000] via-[#091132] to-[#000001]"
    >
      
      <motion.h2
        className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h2>

      
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-12 px-6 w-full max-w-6xl items-center"
        style={{ y: skillsY }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative w-72 md:w-72 h-96 p-6 rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.1)] text-center bg-black/40 backdrop-blur-lg border border-gray-700 overflow-hidden flex flex-col justify-center items-center"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
           
            <div className="absolute inset-0 w-full h-full bg-white/5 blur-[40px] opacity-25 rounded-2xl animate-pulse"></div>

            
            <div className="absolute inset-0 border-2 border-transparent rounded-2xl animate-borderGlow"></div>

           
            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4">
              {category.title}
            </h3>

            
            <ul className="space-y-2 text-gray-300 text-base font-medium">
              {category.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;

