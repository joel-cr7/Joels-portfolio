import { Briefcase, CodeXml, Globe } from "lucide-react";
import React from "react";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Passionate full-stack Developer</h1>
            <p>
              With over 2 years of experience in backend development, 
              I specialize in building production ready systems using <u>Java</u> and <u>SpringBoot</u>. 
              I focus on delivering reliable backend solutions that power real-world applications by writing clean and maintainable code.
            </p>
            <p>
              I'm passionate about solving complex engineering challenges and 
              continuously learning new tools and technologies to stay ahead in the evolving tech landscape. 
              While backend development is my primary expertise, I also have experience building frontend applications using <u>React.JS</u>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/JoelMiranda_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <CodeXml className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Development</h4>
                  <p>
                    Building scalable and efficient backend systems using microservice architecture.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p>
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 rounded-xl card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Collaboration & Delivery</h4>
                  <p>
                    Working closely with cross-functional teams to deliver high-quality, production-ready software from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
