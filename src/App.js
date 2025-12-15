import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profilePic from "../src/assets/Muhammed_Fazal.jpg";

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
// const Hero = () => (
//   <section
//     id="home"
//     className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-bgLight dark:bg-bgDark px-4"
//   >
//     <Particles />

//     {/* Profile Image */}
//     <motion.div
//       className="mb-6 z-10"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <img
//         src="/Muhammed_Fazal.jpg"  // place your photo in public/profile.jpg
//         alt="Muhammed Fazal"
//         className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary dark:border-accent object-cover shadow-lg"
//       />
//     </motion.div>

//     {/* Name and Title */}
//     <motion.h1
//       className="relative text-4xl md:text-6xl font-bold mb-3 z-10 text-primary dark:text-accent"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       Muhammed Fazal
//     </motion.h1>
//     <motion.p
//       className="relative mt-2 text-lg md:text-xl text-gray-600 dark:text-gray-400 z-10"
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2, duration: 0.8 }}
//     >
//       Backend-Focused Full Stack Developer · Application Support Engineer · Data Engineer
//     </motion.p>

//     {/* Description */}
//     <motion.p
//       className="relative text-base md:text-lg mt-4 max-w-2xl z-10 text-gray-700 dark:text-gray-300"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.4, duration: 1 }}
//     >
//       Building scalable backend systems, APIs, and cross-platform applications with 6+ years of experience in Laravel, Node.js, React, Vue.js, Python, and cloud services (AWS, GCP, Azure).
//     </motion.p>

//     {/* Buttons */}
//     <motion.div
//       className="flex flex-wrap justify-center gap-4 mt-6 z-10"
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay: 0.8, duration: 0.5 }}
//     >
//       <a
//         href="#contact"
//         className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition"
//       >
//         Contact Me
//       </a>
//       <a
//         href="/Muhammed_Fazal_CV.pdf"
//         download
//         className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-accent transition"
//       >
//         Download CV
//       </a>
//       <a
//         href="https://www.linkedin.com/in/muhammed-fazal-kv"
//         target="_blank"
//         className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition"
//       >
//         LinkedIn
//       </a>
//     </motion.div>
//   </section>
// );
 
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-20 px-4 bg-bgLight dark:bg-bgDark"
    >
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 max-w-7xl mx-auto">
      <motion.div
  className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-6 md:mb-0"
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.05 }}
>
  <img
    src="/Muhammed_Fazal.jpg"
    alt="Muhammed Fazal"
    className="w-full h-full object-cover object-center"
  />
</motion.div>




      <div className="flex-1 text-center md:text-left md:ml-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-primary dark:text-accent mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m Muhammed Fazal
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Backend-Focused Full Stack Developer | Application Support Engineer | Data Engineer
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="#contact"
            className="inline-block bg-primary dark:bg-accent text-white dark:text-bgLight px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Hire Me
          </motion.a>

          <motion.a
            href="/MUHAMMED FAZAL_Fullstack.pdf"
            download
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-2xl transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </div>
    </section>
  );
};




// About Section
// const About = () => (
//   <section id="about" className="relative bg-bgLight dark:bg-bgDark">
//     <Particles />
//     <SectionContainer>
//       <h2 className="text-4xl font-bold text-primary dark:text-accent mb-6 text-center">About Me</h2>
//       <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
//         Backend-focused Full Stack Developer with 6+ years of experience building scalable backend systems and cross-platform applications using <strong>Laravel, PHP, Vue.js, Node.js, Python, TypeScript, JavaScript, React,</strong> and <strong>React Native</strong>.
//       </p>
//       <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
//         Skilled in designing and developing <strong>web applications, APIs, and database-driven solutions</strong>, with expertise in frontend and backend development, <strong>API integration</strong>, and <strong>performance optimization</strong>. Experienced in <strong>Agile/Scrum environments</strong>, delivering high-quality projects on schedule.
//       </p>
//       <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
//         Proficient in <strong>technical support, troubleshooting, and end-user training</strong>, with strong problem-solving, communication, and collaboration skills. Quick to adapt to new technologies and committed to implementing efficient, innovative solutions.
//       </p>
//       <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
//         Specialized in <strong>backend architecture, microservices, secure REST APIs, queue workers, performance optimization,</strong> and <strong>cloud deployments</strong>. Experienced building enterprise-level platforms including <strong>ERP, WMS, and inventory systems</strong> using <strong>AWS, GCP, Azure, Redis, Horizon, SQS,</strong> and <strong>MySQL</strong>.
//       </p>
//       {/* <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
//         🏠Sweden | 📞+46 764502891 | 📩muhammedfazalkv@gmail.com | 🟦<a href="https://www.linkedin.com/in/muhammed-fazal-kv" className="text-primary dark:text-accent hover:underline">LinkedIn</a> | 💼Swedish Residence & Work Permit | Immediate Joiner
//       </p> */}

//       <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed flex flex-wrap gap-4">
//       {/* Location */}
//       <span className="flex items-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
//         </svg>
//         Sweden
//       </span>

//       {/* Work Permit */}
//       <span className="flex items-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/>
//         </svg>
//         Swedish Residence & Work Permit
//       </span>

//       {/* Phone */}
//       <span className="flex items-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.88.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 5a1 1 0 011-1H7a1 1 0 011 1c0 1.35.26 2.67.74 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
//         </svg>
//         +46 764502891
//       </span>

//       {/* Email */}
//       <span className="flex items-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 12.713l11.985-7.713H0L12 12.713zm0 2.574L0 7.5v12h24v-12l-12 7.787z"/>
//         </svg>
//         <a href="mailto:muhammedfazalkv@gmail.com" className="text-primary dark:text-accent hover:underline">
//           muhammedfazalkv@gmail.com
//         </a>
//       </span>

//       {/* LinkedIn */}
//       <span className="flex items-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.104-.896-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.225c.625-.947 1.709-1.725 3-1.725 2.21 0 4 1.79 4 4v5.5z"/>
//         </svg>
//         <a href="https://www.linkedin.com/in/muhammed-fazal-kv" className="text-primary dark:text-accent hover:underline">
//           LinkedIn
//         </a>
//       </span>

//       {/* Immediate Joiner */}
//       <span className="flex items-center gap-1">
//         <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L1.5 21h21L12 2zm0 3.84L19.93 19H4.07L12 5.84zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z"/>
//         </svg>
//         Immediate Joiner
//       </span>
//     </p>

//     </SectionContainer>
//   </section>
// );

const About = () => (
  <section id="about" className="relative bg-bgLight dark:bg-bgDark">
    <Particles />
    <SectionContainer>
      <h2 className="text-4xl font-bold text-primary dark:text-accent mb-12 text-center">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-6xl mx-auto">
        {/* Profile Photo */}
        <motion.div
          className="flex-shrink-0 w-48 md:w-64"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/Muhammed_Fazal_1.jpg" // Place your image in public/profile.jpg
            alt="Muhammed Fazal"
            className="rounded-xl shadow-lg border-4 border-primary dark:border-accent object-cover w-full"
          />
        </motion.div>

        {/* Bio / Details */}
        <motion.div
          className="flex-1 text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Backend-focused Full Stack Developer with 6+ years of experience building scalable backend systems, APIs, and cross-platform applications using <strong>Laravel, PHP, Node.js, Python, React, React Native, Vue.js</strong> and cloud services like <strong>AWS, GCP, Azure</strong>.
          </p>

          <p>
            Skilled in designing and developing <strong>web applications, APIs, and database-driven solutions</strong>, with expertise in frontend and backend development, <strong>API integration</strong>, and <strong>performance optimization</strong>. Experienced in <strong>Agile/Scrum environments</strong>, delivering high-quality projects on schedule.
          </p>

          <p>
            Proficient in <strong>technical support, troubleshooting, and end-user training</strong>, with strong problem-solving, communication, and collaboration skills. Quick to adapt to new technologies and committed to implementing efficient, innovative solutions.
          </p>

          <p>
            Specialized in <strong>backend architecture, microservices, secure REST APIs, queue workers, performance optimization,</strong> and <strong>cloud deployments</strong>. Experienced building enterprise-level platforms including <strong>ERP, WMS, and inventory systems</strong> using <strong>AWS, GCP, Azure, Redis, Horizon, SQS, MySQL</strong>.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 mt-4 text-gray-600 dark:text-gray-400">
            <span>📍 Sweden</span>
            <span>📞 +46 764502891</span>
            <span>📧 <a href="mailto:muhammedfazalkv@gmail.com" className="text-primary dark:text-accent hover:underline">muhammedfazalkv@gmail.com</a></span>
            <span>🟦 <a href="https://www.linkedin.com/in/muhammed-fazal-kv" className="text-primary dark:text-accent hover:underline">LinkedIn</a></span>
            <span>📝 Immediate Joiner</span>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  </section>
);


// Skills Section
// const Skills = () => {
//   const skills = [
//     "Laravel", "Symfony", "PHP 8+", "Node.js", "Python", "React", "Vue.js", "React Native",
//     "Tailwind CSS", "TypeScript", "JavaScript", "MySQL", "PostgreSQL", "MongoDB",
//     "AWS", "GCP", "Azure", "Docker", "Redis", "CI/CD PIPELINE", "OOP", "POSTMAN", "SOLID", "DDD"
//   ];
//   return (
//     <section id="skills" className="relative bg-bgLight dark:bg-bgDark">
//       <Particles />
//       <SectionContainer>
//         <h2 className="text-4xl font-bold text-primary dark:text-accent mb-12 text-center">Core Technical Skills</h2>
//         <div className="flex flex-wrap justify-center gap-4">
//           {skills.map((skill, idx) => (
//             <motion.div
//               key={idx}
//               className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:scale-105 transform transition"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.05 }}
//             >
//               {skill}
//             </motion.div>
//           ))}
//         </div>
//       </SectionContainer>
//     </section>
//   );
// };



const Skills = () => {
  const skillGroups = {
    "Backend & APIs": [
      "Laravel",
      "Symfony",
      "PHP 8+",
      "MVC",
      "OOP",
      "SOLID",
      "DDD",
      "Event-Driven Architecture",
      "REST APIs",
      "OAuth",
      "JWT",
      "Node.js",
      "Python",
      "GraphQL",
      "WebSockets",
      "API Versioning"
    ],

    "Frontend": [
      "React",
      "Vue.js",
      "Blade",
      "Livewire",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Vite",
      "Next.js",
      "Nuxt.js",
      "SASS/SCSS",
      "Tailwind UI Components"
    ],

    "Mobile": [
      "React Native",
      "Android / iOS Integration",
      "Uber APIs",
      "Android OS",
      "iOS"
    ],

    "Databases & Data": [
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "BigQuery",
      "Schema Design",
      "Indexing",
      "Query Profiling",
      "Data Modeling",
      "ETL",
      "Airflow",
      "Prefect",
      "Kafka",
      "Kinesis",
      "DBT",
      "Pandas",
      "NumPy"
    ],

    "Cloud, DevOps & Infrastructure": [
      "AWS (EC2, S3, SQS, RDS)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "Docker",
      "Redis",
      "Laravel Forge",
      "Firebase",
      "Apache",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "PM2",
      "Kubernetes (Basics)"
    ],

    "OS & Scripting": [
      "Windows 10+",
      "macOS",
      "Linux",
      "Ubuntu",
      "Debian",
      "Bash",
      "PowerShell",
      "Command Prompt",
      "Shell Scripting"
    ],

    "Testing & Quality": [
      "PHPUnit",
      "Pest",
      "Integration Testing",
      "End-to-End Testing",
      "Vitest",
      "Jest",
      "Cypress",
      "Data Validation",
      "PSR Standards",
      "Code Reviews",
      "Git",
      "Postman Collections",
      "Swagger/OpenAPI",
      "TDD / Mocking"
    ],

    "Support & Operations": [
      "Application Support L1 & L2",
      "ITIL",
      "System Configuration",
      "Troubleshooting",
      "Microsoft 365",
      "MS Office",
      "New Relic",
      "Datadog",
      "ELK Stack",
      "Prometheus",
      "ServiceNow",
      "Zendesk",
      "Jira Service Desk",
      "Incident Management",
      "Backup & Recovery Tools",
      "Automation Scripts"
    ],

    "CMS & E-Commerce": [
      "WordPress",
      "Plugin Development",
      "Theme Customization",
      "Gutenberg",
      "ACF",
      "WooCommerce",
      "Yoast SEO",
      "GTMetrix",
      "PageSpeed Optimization",
      "Shopify",
      "Liquid",
      "Theme Development",
      "App Development",
      "Shopify APIs",
      "Webhooks",
      "Headless Shopify"
    ],

    "Other": [
      "Secure Coding",
      "Caching Strategies",
      "Performance Optimization",
      "GDPR-Conscious Development",
      "JIRA",
      "Confluence",
      "Google Maps API",
      "SEO",
      "Digital Marketing",
      "Documentation",
      "End-User Training"
    ]
  };


  return (
    <section id="skills" className="relative bg-bgLight dark:bg-bgDark">
      <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold text-primary dark:text-accent mb-12 text-center">
          Core Technical Skills
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Technologies and tools I use regularly in production, support, and cloud environments
        </p>
        <div className="space-y-10">
          {Object.entries(skillGroups).map(([group, skills], groupIdx) => (
            <div key={groupIdx}>
              {/* Small Heading */}
              <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                {group}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow hover:scale-105 transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.03 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};



// Experience Section
// const Experience = () => {
//   const experiences = [
//     {
//       title: "Software Engineer (Laravel / Node.js / React / React Native)",
//       company: "Skills Outsource Think Pvt Ltd, Bangalore",
//       duration: "Sep 2023 – Aug 2025",
//       description: [
//         "Designed and developed backend services and microservices using Laravel, PHP, TypeScript",
//         "Built secure REST APIs powering web and mobile apps",
//         "Integrated React Native mobile applications with backend logic",
//         "Implemented automated unit/integration tests with PHPUnit & Pest",
//         "Deployed production systems using AWS (EC2, S3, SQS), Docker, and Laravel Forge",
//       ],
//     },
//     {
//       title: "Web Developer (Laravel / Vue.js / Symfony)",
//       company: "Allianze Infosoft, Kochi",
//       duration: "Mar 2021 – Sep 2023",
//       description: [
//         "Developed CRM, HRMS, and warehouse modules using Laravel & Vue.js",
//         "Implemented ERP/WMS domain workflows and database processes",
//         "WordPress multisite setup, blogs, SEO optimization, localization",
//       ],
//     },
//     {
//       title: "Application Support Engineer",
//       company: "National Informatics Centre (NIC), Kochi",
//       duration: "2019 – 2021",
//       description: [
//         "Provided L1/L2 support for enterprise platforms, desktops, laptops, M365, MacOS, iOS, Android",
//         "Developed SQL automation scripts, DB backups, ETL & reporting modules",
//         "Participated in ITSM-based incident management using ticketing systems",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" className="relative bg-bgLight dark:bg-bgDark">
//       <Particles />
//       <SectionContainer>
//         <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent text-center">Professional Experience</h2>
//         <div className="space-y-8">
//           {experiences.map((exp, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.2 }}
//             >
//               <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-accent">{exp.title}</h3>
//               <p className="text-gray-500 dark:text-gray-400 mb-2">{exp.company} | {exp.duration}</p>
//               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
//                 {exp.description.map((d, i) => <li key={i}>{d}</li>)}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </SectionContainer>
//     </section>
//   );
// };






const Experience = () => {
  const [expandedIdx, setExpandedIdx] = React.useState(null);

  const experiences = [
    {
      title: "Software Engineer (Laravel / Node.js / React / React Native)",
      company: "Skills Outsource Think Pvt Ltd, Bangalore, India",
      duration: "Sep 2023 – Aug 2025",
      description: {
        short: [
          "Developed backend services and RESTful APIs using Laravel and NestJS (TypeScript).",
          "Built dynamic frontend components in Vue.js and React with Tailwind CSS.",
          "Contributed to React Native mobile apps (Android & iOS).",
          "Integrated third-party services: Google Maps API, Uber for Business, Firebase, Stripe.",
          "Implemented automated tests with PHPUnit, Pest, Vitest, Jest, and Cypress.",
          "Deployed applications on AWS, Docker, and Laravel Forge.",
          "Collaborated with international teams in Agile/Scrum environments."
        ],
        long: [
          "Developed and maintained backend services and RESTful APIs using PHP Laravel and NestJS (TypeScript) for large-scale web and mobile applications, ensuring scalability and reliability.",
          "Built secure and dynamic REST APIs powering web and mobile applications, following best practices in authentication, authorization, and performance optimization.",
          "Designed and implemented modular backend architectures with NestJS, applying Dependency Injection, TypeORM, and Mongoose for efficient database interactions (PostgreSQL, MongoDB).",
          "Built dynamic and responsive frontend components in Vue.js and React, leveraging Material-UI, Blade, Tailwind CSS, and modern JavaScript (ES6+) practices for seamless user interfaces.",
          "Contributed to React Native mobile applications (Android & iOS – Driver and Rider apps), powered by Laravel APIs, ensuring smooth API communication and consistent UI/UX.",
          "Integrated third-party services including Google Maps API, Uber for Business, Firebase (push notifications), and Stripe (payment gateway) for enhanced app functionality.",
          "Implemented automated unit and integration tests with PHPUnit, Pest, Vitest, Jest, and Cypress, applying TDD practices for robust and maintainable code.",
          "Deployed and managed applications on cloud platforms like AWS (EC2, S3, RDS, SQS), Docker, and Laravel Forge, ensuring optimized performance and CI/CD integration.",
          "Collaborated with cross-functional international teams (including a France-based client and CTO) in Agile/Scrum environments, participating in sprint planning, daily stand-ups, and retrospectives to ensure timely delivery and quality.",
          "Designed and maintained database schemas, optimized queries, and performed indexing and profiling for performance improvement.",
          "Applied caching strategies, secure coding practices, and GDPR-conscious development to ensure reliability, security, and compliance."
        ]
      }
    },
    {
      title: "Web Developer (Laravel / Vue.js / Symfony)",
      company: "Allianze Infosoft, Kochi, India",
      duration: "Mar 2021 – Sep 2023",
      description: {
        short: [
          "Developed backend services and RESTful APIs using Laravel and NestJS (TypeScript).",
          "Built dynamic frontend components in Vue.js and React with Tailwind CSS.",
          "Contributed to React Native mobile apps (Android & iOS).",
          "Integrated third-party services: Google Maps API, Uber for Business, Firebase, Stripe.",
          "Implemented automated tests with PHPUnit, Pest, Vitest, Jest, and Cypress.",
          "Deployed applications on AWS, Docker, and Laravel Forge.",
          "Collaborated with international teams in Agile/Scrum environments."
        ],
        long: [
          "Developed and maintained backend services and RESTful APIs using PHP Laravel and NestJS (TypeScript) for large-scale web and mobile applications, ensuring scalability and reliability.",
          "Built secure and dynamic REST APIs powering web and mobile applications, following best practices in authentication, authorization, and performance optimization.",
          "Designed and implemented modular backend architectures with NestJS, applying Dependency Injection, TypeORM, and Mongoose for efficient database interactions (PostgreSQL, MongoDB).",
          "Built dynamic and responsive frontend components in Vue.js and React, leveraging Material-UI, Blade, Tailwind CSS, and modern JavaScript (ES6+) practices for seamless user interfaces.",
          "Contributed to React Native mobile applications (Android & iOS – Driver and Rider apps), powered by Laravel APIs, ensuring smooth API communication and consistent UI/UX.",
          "Integrated third-party services including Google Maps API, Uber for Business, Firebase (push notifications), and Stripe (payment gateway) for enhanced app functionality.",
          "Implemented automated unit and integration tests with PHPUnit, Pest, Vitest, Jest, and Cypress, applying TDD practices for robust and maintainable code.",
          "Deployed and managed applications on cloud platforms like AWS (EC2, S3, RDS, SQS), Docker, and Laravel Forge, ensuring optimized performance and CI/CD integration.",
          "Collaborated with cross-functional international teams (including a France-based client and CTO) in Agile/Scrum environments, participating in sprint planning, daily stand-ups, and retrospectives to ensure timely delivery and quality.",
          "Designed and maintained database schemas, optimized queries, and performed indexing and profiling for performance improvement.",
          "Applied caching strategies, secure coding practices, and GDPR-conscious development to ensure reliability, security, and compliance."
        ]
      },
    },
    {
      title: "Application Support Engineer",
      company: "National Informatics Centre (NIC), Kochi, India",
      duration: "2019 – 2021",
      description: {
        short: [
          "Provided L1/L2 support for enterprise platforms, desktops, laptops, M365, MacOS, iOS, Android",
          "Developed SQL automation scripts, DB backups, ETL & reporting modules",
          "Participated in ITSM-based incident management using ticketing systems",
          "Installed, configured, and maintained computer systems and network components",
          "Monitored application performance and resolved production issues",
          "Created user documentation and conducted end-user training",
          "Collaborated with cross-functional teams to implement improvements"
        ],
        long: [
          "Provided Level 1 and Level 2 technical support for enterprise applications, ensuring minimal downtime and smooth operations.",
          "Installed, configured, and maintained computer systems, network components, and custom applications.",
          "Developed and executed PGSQL scripts for data extraction, analysis, and reporting.",
          "Monitored application performance, troubleshooting issues related to configuration, data, and workflows.",
          "Managed backups, restoration processes, and ensured data integrity for critical systems.",
          "Implemented automated ETL pipelines and reporting modules to improve operational efficiency.",
          "Participated in ITSM-based incident management using ticketing systems, following ITIL best practices.",
          "Created detailed user documentation and conducted end-user training sessions to enhance adoption.",
          "Collaborated with cross-functional teams including developers, system admins, and clients to identify and implement system improvements.",
          "Analyzed recurring issues and provided recommendations for preventive measures and system optimizations."
        ]
      }
    },
  ];

  return (
    <section id="experience" className="relative bg-bgLight dark:bg-bgDark">
      <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent text-center">
          Professional Experience
        </h2>

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
              <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-accent">
                {exp.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {exp.company} | {exp.duration}
              </p>

              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
                {(expandedIdx === idx ? exp.description.long : exp.description.short).map(
                  (d, i) => <li key={i}>{d}</li>
                )}
              </ul>

              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                {expandedIdx === idx ? "Show Less" : "Read More"}
              </button>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};









// Projects Section
// const Projects = () => {
//   const projects = [
//     { title:"Eurecab – Ride Hailing Platform", description:"Laravel, Vue.js, React Native, Redis, Horizon, Adyen, AWS, SQS, Sentry ", link:"https://www.eurecab.com"},
//     { title:"IT Efficiency – AI Monitoring Platform", description:"NestJS, Node.js, Python, AWS Lambda, Serverless, Microservices, Drizzle ORM, MongoDB", link:"https://www.it-efficiency.ai"}
//   ];

//   return (
//     <section id="projects" className="relative bg-bgLight dark:bg-bgDark">
//       <Particles />
//       <SectionContainer>
//         <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent text-center">Selected Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((proj, idx) => (
//             <motion.div
//               key={idx}  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transform transition cursor-pointer" whileHover={{ scale: 1.05, y: -5 }} transition={{ type: "spring", stiffness: 300 }}
//             >
//               <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-accent">{proj.title}</h3>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
//               <a href={proj.link} className="text-primary dark:text-accent hover:underline">View</a>
//             </motion.div>
//           ))}
//         </div>
//       </SectionContainer>
//     </section>
//   );
// };


const Projects = () => {
  const [expandedIdx, setExpandedIdx] = React.useState(null);

  const projects = [
    { 
      title: "Eurecab – Ride Hailing Platform", 
      description: [
        "A French ride-hailing service with separate apps for drivers and riders.",
        "Taxi booking system (web + mobile) for French market; built with Laravel, Vue.js, React Native with MySQL DB.",
        "Backend development for a large-scale French ride-hailing app.",
        "Integrated Google Maps Geocoding API and Uber APIs for real-time location and ride operations.",
        "Ensured timely delivery through Agile/Scrum methodologies."
      ], 
      link: "https://www.eurecab.com"
    },
    { 
      title: "IT Efficiency – AI Monitoring Platform", 
      description: [
        "AI-driven IT monitoring and automation platform; backend powered by NestJS and TypeScript with PostgreSQL DB.",
        "Technologies: NestJS, Node.js, Python, AWS Lambda, Serverless, Microservices, Drizzle ORM, MongoDB.",
        "Customized and extended Vercel AI Chatbot and Langflow AI to meet client-specific requirements.",
        "Implemented NLP workflows and optimized real-time responses.",
        "Integrated chatbot with customer-facing web applications for enhanced engagement."
      ],
      link: "https://www.it-efficiency.ai"
    }
  ];

  return (
    <section id="projects" className="relative bg-bgLight dark:bg-bgDark">
      <Particles />
      <SectionContainer>
        <h2 className="text-4xl font-bold mb-12 text-primary dark:text-accent text-center">
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow cursor-pointer transform transition"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary dark:text-accent">{proj.title}</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                {(expandedIdx === idx ? proj.description : proj.description.slice(0, 2)).map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <button
                onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
              >
                {expandedIdx === idx ? "Show Less" : "Read More"}
              </button>
              <a href={proj.link} className="text-primary dark:text-accent hover:underline block mt-2">View</a>
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
          <div>📩 <a href="mailto:muhammedfazalkv@gmail.com" className="text-primary dark:text-accent hover:underline">muhammedfazalkv@gmail.com</a> | 📞 +46 764502891</div>
          <p>🟦{" "}<a href="https://www.linkedin.com/in/muhammed-fazal-kv" className="text-primary dark:text-accent hover:underline">https://www.linkedin.com/in/muhammed-fazal-kv</a></p>
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
      <profilePic />
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


