import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const variant = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const isInView = useInView(ref, { margin: "-80px" });

  return (
    <>
      <div ref={ref} className="w-full flex justify-center items-center">
        <motion.div
          variants={variant}
          initial="initial"
          animate={isInView && "animate"}
          className="flex flex-col gap-8"
        >
          <h2
            id="about"
            className="text-green text-2xl font-medium scroll-mt-[100px]"
          >
            About
          </h2>
          <div className="flex flex-col gap-7 text-base lg:text-lg lg:leading-8 font-normal leading-7 text-slate-white">
            <p>
              Hello, I'm Harish, a passionate and aspiring web developer
              dedicated to crafting seamless and user-friendly digital
              experiences. A BSC in Computer science graduate and a fervor for
              staying at the forefront of technology, I am excited to embark on
              a journey to create innovative and visually appealing web
              solutions.
            </p>
            <p>
              Driven by my curiosity and love for problem-solving, I delve into
              the realm of coding to transform ideas into interactive and
              dynamic websites. My goal is not only to write code but to create
              digital experiences that leave a lasting impact on users.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
