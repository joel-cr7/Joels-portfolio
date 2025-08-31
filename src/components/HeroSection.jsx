import { ArrowBigDown, ArrowBigDownIcon, ArrowDown } from "lucide-react";
import React, { useState, useEffect } from "react";

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 100);
      };
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-1">
              {" "}
              Joel
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-2"> Miranda</span>
          </h1>
          <p className="text-lg md:text-xl opacity-0 mx-auto animate-fade-in-3">
            I work as a <b><em>Software Engineer</em></b> specializing in backend development — building scalable, high-performance systems. I also contribute to frontend development using modern technologies.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className={`absolute bottom-8 right-18 animate-bounce flex flex-col items-center ${isScrolled ? "opacity-0" : "opacity-100"}`}>
        <span className="text-sm mb-2">Scroll</span>
        <ArrowBigDown size={50} className="text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
