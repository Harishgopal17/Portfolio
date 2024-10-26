import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { projects } from "../constants/index";

export default function NewProject() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Projects" className="relative " ref={ref}>
      <div className="pt-24 sticky top-0 left-0 scroll-mt-[100px]">
        <h2 className="text-green text-2xl font-medium">Projects</h2>
        <motion.div
          style={{ scaleX }}
          className="h-2 bg-slate-white"
        ></motion.div>
      </div>
      {projects.map((item) => (
        <Pro key={item.name} item={item} />
      ))}
    </div>
  );
}

function Pro({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <>
      <div className="h-screen snap-center">
        <div className="flex items-center justify-center w-full h-full">
          <div className="h-full flex justify-center items-center gap-6">
            <div ref={ref}>
              <img src={item.imgURL} alt={item.name} />
            </div>
            <motion.div style={{ y }}>
              <p>{item.description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
