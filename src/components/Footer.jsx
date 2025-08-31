import React from "react";
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border flex flex-wrap justify-between items-center">
      <div className="flex flex-col items-start text-md">
        <div>
          Developed using{" "}
          <span>
            <em>
              <strong>React JS</strong>
            </em>
          </span>{" "}
          and{" "}
          <em>
            <strong>Tailwind CSS</strong>
          </em>{" "}
        </div>
        <div className="text-sm mt-2">&copy; {new Date().getFullYear()} Joel Miranda</div>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}

export default Footer;
