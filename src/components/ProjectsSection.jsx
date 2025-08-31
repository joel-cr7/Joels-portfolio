import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "IAS (Infinx Automation Solution)",
      description:
        "Team project at INFINX — a SaaS product designed to manage and run Robotic Process Automation (RPA). Worked on developing the backend, focusing on microservices communication, integration with AWS services, and implementing distributed locking and many more production features.",
      image: "/joels-portfolio/projects/project1.png",
      tags: [
        "Spring Boot",
        "AWS",
        "Kafka",
        "Redis",
        "MongoDB",
        "PostgreSQL",
        "Microservices",
      ],
    },
    {
      id: 2,
      title: "Linkedin Backend Microservices",
      description:
        "Built social media backend microservice based application similar to Linkedin by managing several degree of user connections using graph DB, JWT based authentication, managing user posts, API Gateway and many more features.",
      image: "/joels-portfolio/projects/project2.png",
      tags: [
        "Spring Boot",
        "Kafka",
        "PostgreSQL",
        "Neo4j",
        "JWT",
        "Microservices",
      ],
      demoUrl: "https://github.com/joel-cr7/Linkedin-microservices",
    },
    {
      id: 3,
      title: "Hotel Management Backend",
      description:
        "Full-featured hotel management and booking platform similar to AirBnb with user authentication, role-based access control and payment processing.",
      image: "/joels-portfolio/projects/project3.png",
      tags: [
        "Spring Boot",
        "PostgreSQL",
        "Spring Security",
        "JWT authentication",
        "Authorization",
        "Stripe",
      ],
      demoUrl: "https://github.com/joel-cr7/AirBnb-Java-Backend",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-md card-hover"
            >
              {/* Project banner */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Skills, project name and description */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 bg-primary/30 text-xs font-medium border rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
              </div>

              {/* Project icons */}
              <div className="p-6 flex space-x-3 mt-auto">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="cursor-pointer" size={20} />
                  </a>
                ) : <span className="text-sm"><em>(Proprietary)</em></span> }
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/joel-cr7"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
