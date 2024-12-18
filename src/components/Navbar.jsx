import { useState } from "react";
import { navLinks, logo } from "../constants/index";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mblMenu, setMblMenu] = useState(false);

  const toggleMenu = () => setMblMenu(!mblMenu);

  const navVariant = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <header className="w-full bg-black py-5 px-8 sm:px-16 z-10 top-0 left-0 fixed">
        <nav className="flex justify-between items-center max-container">
          <motion.div
            variants={navVariant}
            initial="initial"
            animate="animate"
            className="flex gap-1 items-center w-40"
          >
            <a href="/">
              <img
                src={logo.imgURL}
                alt={logo.title}
                className="w-24 h-10 max-md:w-8 max-md:h-8"
              />
            </a>
            <a className="font-[400] text-[30px] max-md:text-[24px]" href="/">
              HARISH
            </a>
          </motion.div>
          <ul className="flex justify-center items-center gap-8 max-md:hidden font-[500] text-[20px]">
            {navLinks.map((nav) => (
              <motion.a
                variants={navVariant}
                initial="initial"
                animate="animate"
                key={nav.label}
                href={nav.href}
              >
                <li className="px-3 py-1 custom-gradient hover:text-black">
                  {nav.label}
                </li>
              </motion.a>
            ))}
          </ul>
          <div
            className="hidden max-md:block cursor-pointer z-30 ease duration-[0.3s]"
            onClick={toggleMenu}
          >
            {!mblMenu ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose size={25} />
            )}
          </div>
          <div
            className={
              mblMenu
                ? "fixed top-0 left-0 right-0 w-full h-[50%] z-20 ease duration-[600ms]"
                : "fixed top-[-100%] left-0 right-0 w-full h-[auto] z-20 ease duration-[600ms]"
            }
          >
            <ul className="flex flex-col justify-center items-center mt-[75px] font-[400] text-[20px] bg-black">
              {navLinks.map((nav) => (
                <li
                  className="px-10 py-3 border-b border-slate-gray w-full"
                  key={nav.label}
                >
                  <a onClick={toggleMenu} href={nav.href}>
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
