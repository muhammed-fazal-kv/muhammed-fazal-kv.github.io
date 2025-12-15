import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// Logo Component
const Logo = () => (
  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
    MF
  </div>
);

// Navbar
const Navbar = ({ activeSection, toggleDarkMode, darkMode }) => (
  <nav className="fixed w-full z-50 bg-bgLight dark:bg-bgDark shadow">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Logo />
        <span className="text-xl font-bold text-primary dark:text-accent">Muhammed Fazal</span>
      </div>
      <div className="hidden md:flex space-x-6 items-center">
        {["about", "skills", "experience", "projects", "contact"].map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`hover:text-primary dark:hover:text-accent ${
              activeSection === sec ? "text-primary font-semibold dark:text-accent" : ""
            }`}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 bg-primary text-white rounded hover:bg-accent transition"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  </nav>
);

// Social Icons
const SocialIcons = () => (
  <div className="fixed left-6 top-1/3 flex flex-col space-y-4 z-50">
    <a href="https://linkedin.com/in/muhammed-fazal-kv" target="_blank" className="text-primary text-2xl hover:scale-110 transform transition dark:text-accent">
      <FaLinkedin />
    </a>
    <a href="https://github.com/muhammed-fazal-kv" target="_blank" className="text-primary text-2xl hover:scale-110 transform transition dark:text-accent">
      <FaGithub />
    </a>
    <a href="mailto:muhammedfazalkv@gmail.com" className="text-primary text-2xl hover:scale-110 transform transition dark:text-accent">
      <FaEnvelope />
    </a>
  </div>
);

// Particle background
const Particles = () => (
  <div className="absolute w-full h-full pointer-events-none bg-gradient-to-br from-primary/10 via-accent/10 to-primary/0 animate-bg-move"></div>
);

// Section container animation
const SectionContainer = ({ children }) => (
  <motion.div
    className="relative max-w-6xl mx-auto px-6 py-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

// Hero Section
const Hero = () => (
  <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-bgLight dark:bg-bgDark">
    <Particles />
    <motion.h1
      className="relative text-5xl md:text-6xl font-bold mb-4 z-10 text-primary dark:text-accent"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Muhammed Fazal
    </motion.h1>
    <motion.p
      className="relative text-xl md:text-2xl mb-6 max-w-2xl z-10 text-gray-700 dark:text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Backend-focused Full Stack Developer with 6+ years building scalable backend systems and cross-platform applications.
    </motion.p>
    <motion.a
      href="#contact"
      className="relative px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition z-10"
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
  <section id="about" className="relative bg-bgLight dark:bg-bgDark">
    <Particles />
    <SectionContainer>
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6 text-center">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
        Backend-focused Full Stack Developer with 6+ years developing scalable backend systems and cross-platform applications using Laravel, PHP, Vue.js, Node, Python, TypeScript, JavaScript, React, and React Native.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
        Specialized in backend architecture, microservices, secure REST APIs, queue workers, performance optimization, and cloud deployments. Experienced building enterprise-level platforms including ERP, WMS, and inventory systems with AWS, GCP, Azure, Redis, Horizon, SQS, and MySQL.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
        Location: Sweden | Phone: +46 764502891 | Email: muhammedfazalkv@gmail.com | LinkedIn: <a href="https://www.linkedin.com/in/muhammed-fazal-kv
" className="text-primary dark:text-accent hover:underline">LinkedIn</a> | Work Permit: Swedish Residence & Work Permit | Immediate Joiner
      </p>
    </SectionContainer>
  </section>
);

// Skills Section
const Skills = () => {
  const skills = [
    "Laravel", "Symfony", "PHP 8+", "Node.js", "Python", "React", "Vue.js", "React Native",
    "Tailwind CSS", "TypeScript", "JavaScript", "MySQL", "PostgreSQL", "MongoDB",
    "AWS", "GCP", "Azure", "Docker", "Redis", "CI/CD PIPELINE", "OOP", "POSTMAN", "SOLID", "DDD"
  ];
  return (
    <section id="skills" className="relative bg-bgLight dark:bg-bgDark">
      <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold text-primary dark:text-accent mb-12 text-center">Core Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:scale-105 transform transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </SectionContainer>
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
    <section id="experience" className="relative bg-bgLight dark:bg-bgDark">
      <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-accent">{exp.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{exp.company} | {exp.duration}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {exp.description.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    { title:"Eurecab – Ride Hailing Platform", description:"Laravel, Vue.js, React Native, Redis, Horizon, Adyen, AWS, SQS, Sentry ", link:"https://www.eurecab.com"},
    { title:"IT Efficiency – AI Monitoring Platform", description:"NestJS, Node.js, Python, AWS Lambda, Serverless, Microservices, Drizzle ORM, MongoDB", link:"https://www.it-efficiency.ai"}
  ];

  return (
    <section id="projects" className="relative bg-bgLight dark:bg-bgDark">
      <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent text-center">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-accent">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
              <a href={proj.link} className="text-primary dark:text-accent hover:underline">View</a>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="relative bg-bgLight dark:bg-bgDark">
    <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold mb-6 text-primary dark:text-accent text-center">Contact Me</h2>
        <motion.div
          className="text-center space-y-4 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <p>Email: muhammedfazalkv@gmail.com | Phone: +46 764502891</p>
          <p>LinkedIn:{" "}<a href="https://www.linkedin.com/in/muhammed-fazal-kv" className="text-primary dark:text-accent hover:underline">https://www.linkedin.com/in/muhammed-fazal-kv</a></p>
          <div className="mt-4">
            <a href="mailto:muhammedfazalkv@gmail.com" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition inline-block">Email Me</a>
          </div>
        </motion.div>
      </SectionContainer>
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

  // Default light mode, load from localStorage if available
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);

    const handleScroll = () => {
      const sections = ["about","skills","experience","projects","contact"];
      const scrollPos = window.scrollY + 200;
      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [darkMode]);

  return (
    <div className="font-sans dark:text-white dark:bg-bgDark scroll-smooth relative">
      <Navbar activeSection={activeSection} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SocialIcons />
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


