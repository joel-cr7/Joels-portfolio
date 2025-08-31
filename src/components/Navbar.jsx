import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // for only navbar on mobile devices

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 py-5 ${
        isScrolled && " bg-background/60 backdrop-blur-sm shadow-xs"
      }`}
    >
      <div className="container flex items-center justify-around">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">JoelMiranda </span>
            Portfolio
          </span>
        </a>

        {/* -------------------------Desktop nav-------------------------- */}
        <div className="hidden md:flex space-x-10">
          {navItems.map((navItem, key) => (
            <a
              key={key}
              href={navItem.href}
              className="text-foreground/80 hover:text-primary hover:text-glow transition-colors duration-300"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        {/* -----------------------Mobile nav---------------------------- */}
        <button
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center 
        transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        >
          <div className="flex flex-col space-y-10 text-xl">
            {navItems.map((navItem, key) => (
              <a
                key={key}
                href={navItem.href}
                className="text-foreground/80 hover:text-primary hover:text-glow transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
