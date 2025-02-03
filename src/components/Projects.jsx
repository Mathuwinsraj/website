import { motion } from "framer-motion";
import { useState } from "react";

function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null); 

  const projects = [
    {
      title: "YouTube Transcript Summarizer",
      description:
        "The YouTube Transcript Summarizer generates concise video summaries, helping users save time. It's built with Python, using the YouTube API to fetch transcripts and NLTK for processing.",
      image: "/public/assets/c1052ea1c2d45d46abbac1849c71969.png",
    },
    {
      title: "Smart Parking System",
      description:
        "The real-time parking spot monitor displays available parking spots using an ultrasonic sensor connected to an Arduino Nano. Built with C/C++, it updates parking availability in real-time.",
      image: "/public/assets/b3d87292f1f458636a8d28a6a20e7853.jpeg",
    },
    {
      title: "College Timetable Viewer",
      description:
        "This Flutter project, developed in Dart, displays the timetable for college sections based on user selection. It is integrated with Firebase for real-time updates and data management.",
      image: "/public/assets/fbe5b4a0b6008eec7439f8e80209faae.jpeg",
    },
    {
      title: "2D Physics Simulator",
      description:
        "The 2D Physics Simulator visualizes various physics operations through interactive simulations. Built with C and SQL, it provides a realistic way to understand fundamental physics concepts in action.",
      image: "/public/assets/b3d87292f1f458636a8d28a6a20e7853.jpeg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative flex flex-col items-center bg-gradient-to-b from-[#000000] via-[#091132] to-[#000001]"
    >
      <motion.h2
        className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        PROJECTS
      </motion.h2>

      <motion.div className="flex sm:flex-row gap-6 px-6 w-full max-w-6xl overflow-x-auto sm:justify-start sm:flex-nowrap flex-wrap">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full sm:w-72 h-auto sm:h-96 p-6 rounded-2xl shadow-lg text-center bg-black/40 backdrop-blur-lg border border-gray-700 overflow-hidden flex flex-col justify-between items-center cursor-pointer"
            onMouseEnter={() => setSelectedIndex(index)} 
            onMouseLeave={() => setSelectedIndex(null)} 
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
          
            {selectedIndex !== index && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-2xl mb-4" 
              />
            )}

           
            <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2">
              {project.title}
            </h3>

            {selectedIndex === index && (
              <motion.p
                className="text-sm text-gray-300 font-medium mt-2 px-2 overflow-hidden text-ellipsis whitespace-normal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
              >
                {project.description}
              </motion.p>
            )}
          </motion.div>
        ))}
        <motion.div
          className="relative w-full sm:w-72 h-auto sm:h-96 p-6 rounded-2xl shadow-lg text-center bg-black/40 backdrop-blur-lg border border-gray-700 overflow-hidden flex flex-col justify-between items-center"
          onMouseEnter={() => setSelectedIndex(index)} 
          onMouseLeave={() => setSelectedIndex(null)} 
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-4">
            Currently Working On...
          </h3>
          <p className="text-m text-gray-300 font-extrabold mb-2">
            Finance Manager
          </p>
          <p className="text-xs text-gray-300">
            (Python, CSS, JavaScript, AJAX, RESTful API)
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
