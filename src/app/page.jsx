"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row px-4 mt-10 justify-between  md:px-12 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 flex-1 md:h-full md:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-md text-sm text-justify">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
