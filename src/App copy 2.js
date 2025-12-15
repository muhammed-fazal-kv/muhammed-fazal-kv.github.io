import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Navbar Component
const Navbar = ({ activeSection }) => {
  const sections = ["about", "skills", "experience", "projects", "contact"];
  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Muhammed Fazal</div>
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`hover:text-primary ${
                activeSection === section ? "text-primary font-semibold" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => (
  <section
    id="home"
    className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-white text-center px-4"
  >
    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Muhammed Fazal
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl mb-6 max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Backend-focused Full Stack Developer with 6+ years building scalable backend systems
      and cross-platform applications using Laravel, PHP, Node.js, React, and React Native.
    </motion.p>
    <motion.a
      href="#contact"
      className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-200 transition"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      Contact Me
    </motion.a>
  </section>
);

// About Section
const About = () => (
  <motion.section
    id="about"
    className="py-20 bg-gray-50 dark:bg-gray-800"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-primary mb-6 text-center">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
        Backend-focused Full Stack Developer with 6+ years developing scalable backend systems and
        cross-platform applications using Laravel, PHP, Vue.js, Node, Python, TypeScript, JavaScript,
        React, and React Native. Skilled in API integration, database optimization, Agile/Scrum,
        CI/CD pipelines, and end-user support.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
        Specialized in backend architecture, microservices, secure REST APIs, queue workers,
        performance optimization, and cloud deployments. Experienced building enterprise-level
        platforms including ERP, WMS, and inventory systems with AWS, GCP, Azure, Redis, Horizon,
        SQS, and MySQL.
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-center">
        Location: Sweden | Phone: +46 764502891 | Email: muhammedfazalkv@gmail.com | LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/muhammedfazal"
          className="text-primary hover:underline"
        >
          LinkedIn
        </a>{" "}
        | Work Permit: Swedish Residence & Work Permit | Immediate Joiner
      </p>
    </div>
  </motion.section>
);

// Skills Section
const Skills = () => {
  const skills = [
    "Laravel", "Symfony", "PHP 8+", "Node.js", "Python", "React", "Vue.js", "React Native",
    "Tailwind CSS", "TypeScript", "JavaScript", "MySQL", "PostgreSQL", "MongoDB",
    "AWS", "GCP", "Azure", "Docker", "Redis", "CI/CD", "OOP", "SOLID", "DDD"
  ];
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-12">Core Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:scale-105 transform transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer (Laravel / Node.js / React / React Native)",
      company: "Skills Outsource Think Pvt Ltd, Bangalore",
      duration: "Sep 2023 – Aug 2025",
      description: [
        "Designed and developed backend services and microservices using Laravel, PHP, TypeScript",
        "Built secure REST APIs powering web and mobile apps",
        "Integrated React Native mobile applications with backend logic",
        "Implemented automated unit/integration tests with PHPUnit & Pest",
        "Deployed production systems using AWS (EC2, S3, SQS), Docker, and Laravel Forge",
      ],
    },
    {
      title: "Web Developer (Laravel / Vue.js / Symfony)",
      company: "Allianze Infosoft, Kochi",
      duration: "Mar 2021 – Sep 2023",
      description: [
        "Developed CRM, HRMS, and warehouse modules using Laravel & Vue.js",
        "Implemented ERP/WMS domain workflows and database processes",
        "WordPress multisite setup, blogs, SEO optimization, localization",
      ],
    },
    {
      title: "Application Support Engineer",
      company: "National Informatics Centre (NIC), Kochi",
      duration: "2019 – 2021",
      description: [
        "Provided L1/L2 support for enterprise platforms, desktops, laptops, M365, MacOS, iOS, Android",
        "Developed SQL automation scripts, DB backups, ETL & reporting modules",
        "Participated in ITSM-based incident management using ticketing systems",
      ],
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {exp.company} | {exp.duration}
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "Eurecab – Ride Hailing Platform",
      description:
        "Laravel, Vue.js, React Native, Redis, Horizon, Adyen, AWS, SQS, Sentry",
      link: "#",
    },
    {
      title: "IT Efficiency – AI-based IT Monitoring Platform",
      description:
        "NestJS, Node.js, Python, AWS Lambda, Serverless, Microservices, Drizzle ORM, MongoDB",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transform transition cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-primary hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6 text-primary">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Email: muhammedfazalkv@gmail.com | Phone: +46 764502891
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/muhammedfazal"
          className="text-primary hover:underline"
        >
          https://www.linkedin.com/in/muhammedfazal
        </a>
      </p>
      <a
        href="mailto:muhammedfazalkv@gmail.com"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition"
      >
        Email Me
      </a>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="py-6 bg-gray-900 text-white text-center">
    <p>© 2025 Muhammed Fazal. All rights reserved.</p>
  </footer>
);

// Main App
export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans dark:text-white dark:bg-gray-900 scroll-smooth">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
