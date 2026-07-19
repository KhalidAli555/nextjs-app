"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";

const navlinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integration", href: "#integration" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = ({onLoginClick,onSignupClick}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 items-center bg-neutral-950/70 backdrop-blur-2xl">
          <div>
           <a href="#">
           <Image src="/logo.svg" width={100} height={100} alt="Logo" className="ml-2" />
           </a> 
          </div>

          {/* Desktop nav */}
          <div className="lg:flex justify-center items-center hidden">
            <nav className="flex gap-6 font-medium">
              {navlinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex justify-end gap-4">
            {/* Hamburger / Close icon */}
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg viewBox="0 0 100 80" width="30" height="30" fill="#fff" className="cursor-pointer">
                  <rect width="100" height="20" rx="10"></rect>
                  <rect y="30" width="100" height="20" rx="10"></rect>
                  <rect y="60" width="100" height="20" rx="10"></rect>
                </svg>
              )}
            </div>

            {/* Desktop buttons */}
            <button onClick={onLoginClick} className="border border-white h-12 px-6 font-medium text-white bg-transparent rounded-full cursor-pointer hidden md:inline-flex items-center">
              Log In
            </button>
            <button onClick={onSignupClick}   className="border h-12 px-6 font-medium text-black bg-lime-400 border-lime-400 rounded-full cursor-pointer hidden md:inline-flex items-center">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile nav links */}
       
        <AnimatePresence>
        {isOpen && (
          <motion.div 
          initial={{height:0}}
          animate={{height:"auto"}}
          exit={{height:0}}
          className="overflow-hidden">
          <div className=" md:hidden flex flex-col items-center gap-4 bg-neutral-900/90 p-4 shadow-lg text-white backdrop-blur-md rounded-xl">
            {navlinks.map((link) => (
              <a href={link.href} key={link.label} onClick={() => setIsOpen(false)} className="w-full text-center font-medium">
                {link.label}
              </a>
            ))}
            <button onClick={onLoginClick} className="w-[130px] border border-white py-2 rounded-full ">Log In</button>
            <button onClick={onSignupClick}
            className="w-[130px] bg-lime-400 text-black py-2 rounded-full">Signup Azure</button>
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      
      </div>
    </section>
  );
};

export default Navbar;
