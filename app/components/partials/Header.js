'use client'
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < 768 ? 300 : 400;
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`${
          isSticky ? "fixed top-0 left-0 w-full shadow-md bg-white" : "relative"
        } transition-all duration-300 z-20`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-center items-center space-x-4 text-gray-700">
          <a href="#" className="font-medium uppercase lg:hover:text-gray-500">Home</a>
          <div className="w-[3px] h-[3px] rounded-full bg-slate-400 mt-2 mobile-sm:hidden lg:block"></div>
          <a href="#" className="font-medium uppercase lg:hover:text-gray-500">Features</a>
          <div className="w-[3px] h-[3px] rounded-full bg-slate-400 mt-2 mobile-sm:hidden lg:block"></div>
          <a href="#" className="font-medium uppercase lg:hover:text-gray-500">Layouts</a>
          <div className="w-[3px] h-[3px] rounded-full bg-slate-400 mt-2 mobile-sm:hidden lg:block"></div>
          <a href="#" className="font-medium uppercase lg:hover:text-gray-500">Pages</a>
        </div>
      </nav>
    </>
  )
}
