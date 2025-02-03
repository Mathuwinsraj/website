import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 

function Navbar() {
  const [showEducation, setShowEducation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md shadow-lg z-20">
      <div className="flex justify-between items-center px-6 py-3 md:px-10 md:py-2">
        
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/1000046389.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-0 border-white shadow-lg"
          />
          <span className="text-1xl font-bold mt-1 text-white tracking-wide">MADHU WINSRAJ</span>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        
        <div className={`md:flex space-x-4 hidden`}>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink> 
          
          
          <div
            className="relative"
            onMouseEnter={() => setShowEducation(true)}
            onMouseLeave={() => setShowEducation(false)}
          >
            <motion.button
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/30 transition-all text-sm font-medium tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              Education
            </motion.button>
            {showEducation && (
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/90 text-white rounded-lg shadow-lg backdrop-blur-lg p-4 border border-gray-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2 text-sm font-medium">
                  <p><strong>Primary:</strong> Seiku CBSE Academy</p>
                  <p><strong>Secondary:</strong> Bharath Vidya Mandir</p>
                  <p><strong>University:</strong> Amrita Vishwa Vidyapeetham</p>
                </div>
              </motion.div>
            )}
          </div>

          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>

      
      {isOpen && (
        <motion.div
          className="md:hidden bg-black/80 backdrop-blur-lg text-white flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink href="#home" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="#about" onClick={() => setIsOpen(false)}>About Me</NavLink> 
          <NavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </motion.div>
      )}
    </nav>
  );
}


const NavLink = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/30 transition-all text-sm font-medium tracking-wide"
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    {children}
  </motion.a>
);

export default Navbar;
