import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = new URLSearchParams(formData);

    try {
      const response = await fetch("https://formspree.io/f/mkgobpen", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });

      if (response.ok) {
        setFormStatus("Success! Your message has been sent.");
        event.target.reset();
      } else {
        const errorResponse = await response.json();
        setFormStatus(errorResponse.errors ? errorResponse.errors.join(", ") : "There was an issue with sending your message. Please try again.");
      }
    } catch (error) {
      setFormStatus("There was an issue with sending your message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 relative flex flex-col items-center bg-gradient-to-b from-[#000000] via-[#091132] to-[#000001]"
    >
      <motion.h2
        className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-6">

        <div className="w-full md:w-1/2 bg-black/40 p-8 rounded-2xl shadow-lg text-center mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold text-white mb-12">Connect with Me</h3>
          <div className="space-y-4">
            <a
              href="https://www.instagram.com/mathuwinsraj/"
              className="block p-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @mathuwinsraj
            </a>
            <a
              href="https://discord.com/users/1170612312424599599"
              className="block p-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord: @noxacoda
            </a>
            <a
              href="mailto:mathu1413@gmail.com"
              className="block p-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Email: mathu1413@gmail.com
            </a>
            {/* Added GitHub link */}
            <a
              href="https://github.com/Mathuwinsraj"
              className="block p-5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: Mathuwinsraj
            </a>
          </div>
        </div>

        <motion.div
          className="w-full md:w-1/2 bg-black/40 p-8 rounded-2xl shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-black/30 text-white border border-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-black/30 text-white border border-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-black/30 text-white border border-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>

          {formStatus && (
            <div className="mt-4 text-lg text-white">
              <p>{formStatus}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
