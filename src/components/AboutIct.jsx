import React from "react";
import { motion } from "framer-motion";

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <div className="w-full min-h-[55vh] bg-gray-100 font-serif flex items-center justify-center px-4 py-8">
      <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2 w-full h-64 md:h-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <img
            src="./assets/arpit_bhardwaj.jpg"
            alt="Dean Arpit Bharadwaj"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="md:w-1/2 w-full bg-white flex flex-col justify-center px-10 md:px-16 py-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-3">
            Message from the Dean
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Dr. Arpit Bharadwaj
          </h1>
          <blockquote className="text-sm md:text-base italic text-gray-700 border-l-4 border-indigo-600 pl-6">
            University School of Information and Communication Technology came into existence in 2008 with the primary objective of catering to all academic and research requirements in fields of electronics communication and computer science. The first academic session consisting of post-graduate program started in July 2009, and at present, it is successfully running undergraduate, post-graduate, and research programs in all emerging areas related to information and communication technology. The school is committed towards providing highest quality teaching education and producing technocrats who can work on the latest available technologies in the global context.
          </blockquote>
          <p className="mt-6 text-lg font-medium text-gray-800">
            — Dean, School of ICT (SOICT)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
