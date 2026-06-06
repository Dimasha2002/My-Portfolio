import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certifications', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Doctor365 - Telemedicine Platform",
      subtitle: "SE3020 Distributed Systems Group Project",
      timeline: "Feb–Apr 2026 (2 months)",
      role: "Group Project — Appointment Service Lead",
      description: "Microservice for multi-actor healthcare appointment workflows with secure role-based access and zero-downtime deployment.",
      problem: "Multi-actor appointment system needed for healthcare platform (doctors, patients, admins).",
      solution: "Built a microservice with RESTful APIs for booking, rescheduling, cancellation, RBAC, and Kubernetes deployment.",
      myContribution: "Appointment data model, RESTful APIs (doctor/patient/admin workflows), RBAC, containerization, Postman testing.",
      buildPurpose: "Production-ready microservice for end-to-end appointment workflows with secure multi-tenant access and zero-downtime deployment.",
      verification: "Integration tests, API contract validation (Postman), database consistency checks.",
      lessonsLearned: "RBAC design patterns, availability caching vs. real-time accuracy trade-offs, containerization best practices.",
      technologies: ["Node.js", "Express", "MongoDB", "React", "JWT", "Docker", "Kubernetes"],
      github: "https://github.com/ChamudithaSanka/doctor365",
      image: "/doctor365.png"
    },
    {
      title: "OpenLesson - Volunteer Teaching Platform",
      subtitle: "SE3040 Application Framework Group Project",
      timeline: "Feb–Apr 2026 (2 months)",
      role: "Group Project — Teacher Management Lead",
      description: "Volunteer teaching platform with teacher dashboards, live lessons, quizzes, and payment support.",
      problem: "Connect volunteer/paid teachers with students for scheduling, materials, assessments, live lessons, and payouts.",
      solution: "Built teacher/dashboard, study library, scheduling, auto-graded quizzes, Zoom live lessons, and PayHere payment workflows.",
      myContribution: "Data models, REST APIs, Zoom & payment integration, core frontend components, and integration tests.",
      verification: "Integration tests and API validation for real-time teaching and payment flows.",
      lessonsLearned: "API integration, payment flow design, and real-time collaboration for education platforms.",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Socket.IO", "Zoom API", "PayHere", "JWT"],
      github: "https://github.com/ChamudithaSanka/openlesson",
      live: "https://openlesson-sooty.vercel.app/",
      image: "/openlesson.png"
    },
    {
      title: "EduQuiz — Online Quiz & Learning Platform",
      subtitle: "Individual Project",
      timeline: "Jan–Feb 2026 (2 weeks core, 1 month polish & testing)",
      role: "Individual — 100% solo",
      description: "Full-stack quiz platform with teacher CMS, student progress tracking, and responsive learning UI.",
      problem: "Need for a lightweight, easy-to-maintain role-based quizzing platform for teachers and students.",
      solution: "Built a fast full-stack app with teacher module/quizzes and responsive student UI that records attempts and progress.",
      myContribution: "Designed data model, backend APIs, auth, role-based frontend, deployment scripts, and tests.",
      buildPurpose: "Deliver a minimal production-ready demo showing end-to-end teacher → student workflows.",
      verification: "Jest + Supertest unit/integration tests, E2E smoke tests, Postman API checks, and DB verification.",
      lessonsLearned: "Improved role-based access design, data modeling for performance, and UX edge-case discovery via E2E tests.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "Vite", "Tailwind CSS", "JWT", "bcrypt", "Docker"],
      github: "https://github.com/Dimasha2002/eduquiz-platform-frontend",
      live: "https://eduquiz-platform-frontend.onrender.com/",
      image: "/eduquiz.png"
    },
    {
      title: "PayMyHostel — Hostel Payment Management System",
      subtitle: "Individual Project — Full Stack Developer",
      timeline: "Dec 2025–Jan 2026 (1 month)",
      role: "Individual Project — Full Stack Developer",
      description: "Responsive hostel payment system with admin/student workflows, secure auth, and transaction management.",
      problem: "Hostel needed secure student/admin payment tracking, notice management, and role-based access across mobile-friendly interfaces.",
      solution: "Built a full-stack app with RESTful backend, secure RBAC, and responsive React frontend for student/admin use.",
      myContribution: "Auth/authorization, payment and room management APIs, frontend UI/UX, responsive pages, and secure end-to-end flow.",
      buildPurpose: "Deliver a production-ready hostel payment platform with clean mobile-first UX and reliable transactions.",
      verification: "Manual API testing, RBAC validation, UI responsiveness checks, and MongoDB data consistency.",
      lessonsLearned: "End-to-end RBAC, secure API design, responsive frontend patterns, and single-developer full-stack delivery.",
      technologies: ["Node.js", "Express", "MongoDB", "React", "Vite", "JWT", "REST APIs", "CSS"],
      github: "https://github.com/Dimasha2002/PayMyHostel-frontend",
      live: "https://paymyhostel-frontend.onrender.com/",
      image: "/paymyhostel.png"
    },
    {
      title: "MyWellness — Habit Tracker",
      subtitle: "Individual Mobile App",
      timeline: "Sep–Oct 2025 (1 month)",
      role: "Individual Project — Mobile Developer",
      description: "Android app for habits, reminders, streaks, progress charts, and offline persistence.",
      problem: "Users struggled to form and maintain daily wellness habits consistently.",
      solution: "Built a habit tracker with daily check-ins, reminders, progress charts, badges, and export support.",
      myContribution: "UX design, habit data model, Room persistence, WorkManager reminders, Compose UI, Firebase auth/sync, and tests.",
      buildPurpose: "Production-ready mobile app supporting habit formation with offline-first persistence and reminders.",
      verification: "Unit tests, Espresso UI tests, manual device testing, notification simulation, and data verification.",
      lessonsLearned: "Offline-first persistence, WorkManager scheduling edge cases, Compose state management, and habit UX.",
      technologies: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Firebase Auth", "Retrofit", "Coroutines", "Hilt", "MPAndroidChart"],
      github: "https://github.com/Dimasha2002/MyWellness",
      image: "/mywellness.png"
    },
    {
      title: "TraceBack — Community Lost & Found App",
      subtitle: "Individual Mobile App",
      timeline: "Sep 2025 (1 month)",
      role: "Individual Project — Full-stack Mobile Developer",
      description: "Mobile app for reporting lost/found items, searching by location and category, and matching nearby users.",
      problem: "Community members needed a simple way to report missing items and connect with finders in nearby neighborhoods.",
      solution: "Built a location-aware mobile app for item reporting, search, and nearby matching.",
      myContribution: "UI/UX flows, item reporting/search features, location matching, cloud storage, and authentication.",
      buildPurpose: "Portfolio-ready app demonstrating end-to-end lost-and-found workflows focused on usability and locality.",
      verification: "Manual testing for reporting, search, location matching, and login.",
      lessonsLearned: "Mobile location handling, cloud sync, and intuitive reporting/search experiences.",
      technologies: ["Android", "Kotlin", "Firebase Auth", "Firestore", "Google Maps", "Material Design"],
      github: "https://github.com/Dimasha2002/TraceBackAPP",
      image: "/traceback.png"
    }
  ]

  const skills = [
    { name: "Java" },
    { name: "JavaScript" },
    { name: "Python" },
    { name: "HTML5" },
    { name: "C#" },
    { name: "CSS3" },
    { name: "R" },
    { name: " React.js" },
    { name: "UI/UX Design" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "Git & GitHub" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Postman" },
    { name: "Time Management" },
    { name: "Problem Solving" },
    { name: "Android Development" }
  ]

  const certificates = [
    {
      title: "AI/ML Engineer - Stage 1",
      issuer: "Centre for Open and Distance Education, Faculty of Computing, SLIIT",
      viewUrl: "https://code.sliit.org/certificates/ooz2pnny58",
      download: "/AIML1-SLIIT.pdf",
    },
    {
      title: "AI/ML Engineer - Stage 2",
      issuer: "Centre for Open and Distance Education, Faculty of Computing, SLIIT",
      viewUrl: "https://code.sliit.org/certificates/f5etbxgfb5",
      download: "/AIML2-SLIIT.pdf",
    },
    {
      title: "Front-End Web Development",
      issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka",
      download: "/frontend-web-dev-certificate.pdf"
    },
    {
      title: "Server-side Web Programming",
      issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka",
      download: "/Server-side_Web_Programming.pdf"
    },
    {
      title: "Agile Project Management in ICT Projects",
      issuer: "Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka",
      download: "/Agile_Project_Management.pdf"
    },
    {
      title: "Web Development Basics",
      issuer: "IBM SkillBuild, Adobe Learning Manager",
      download: "/Web Development Basics.pdf"
    },
    {
      title: "Developing Sites for the Web",
      issuer: "IBM SkillBuild, Adobe Learning Manager",
      download: "/Developing Sites for the Web.pdf"
    },
    {
      title: "Foundational C# with Microsoft",
      issuer: "freeCodeCamp",
      viewUrl: "https://freecodecamp.org/certification/dimasha/foundational-c-sharp-with-microsoft",
      download: "/C# certificate.pdf"
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Dimasha Hansani</h2>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'certifications', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <section id="home" className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Hi, I'm <span className="highlight">Dimasha Hansani Abeywickrama</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Undergraduate Student - SLIIT
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Third year first semester student at Faculty of Computing, SLIIT. Passionate about creating innovative software solutions.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <a href="/Dimasha _CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Download CV
              </a>
              <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-tertiary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </motion.div>
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <a href="https://www.linkedin.com/in/dimasha2002" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Dimasha2002" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div 
              className="hero-avatar"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <img src="/profile.png" alt="Dimasha Hansani Abeywickrama" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm an undergraduate student at the Faculty of Computing, SLIIT, currently in my 
                third year. I'm passionate about software development and technology, 
                with a focus on creating innovative solutions through code.
              </p>
              <p>
                As a computing student, I'm constantly learning new technologies and developing 
                my skills in various programming languages and frameworks. I enjoy tackling 
                challenging problems and building projects that make a difference.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects<br />Completed</p>
                </div>
                <div className="stat">
                  <h3>3rd</h3>
                  <p>Year Student</p>
                </div>
                <div className="stat">
                  <h3>Computing</h3>
                  <p>Faculty at SLIIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-list">
            {certificates.map((cert, i) => (
              <div key={i} className="project-item certification-item">
                <div className="project-card-grid">
                  <div className="project-left">
                    <div className="project-header-detail">
                      <div>
                        <h3>{cert.title}</h3>
                        {cert.issuer && <p className="project-subtitle">{cert.issuer}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="project-right">
                    <div className="project-details-grid">
                      <div className="detail-column">
                        <div className="detail-item">
                          {cert.description && <p>{cert.description}</p>}
                        </div>
                      </div>
                      <div className="detail-column">
                        <div className="cert-actions-inline">
                          {cert.viewUrl && (
                            <a href={cert.viewUrl} target="_blank" rel="noopener noreferrer" className="cert-btn cert-view">
                              View Certificate
                            </a>
                          )}
                          {cert.download && (
                            <a href={cert.download} target="_blank" rel="noopener noreferrer" className="cert-btn cert-download">
                              Download Certificate
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-card-grid">
                  <div className="project-left">
                    <div className="project-header-detail">
                      <div>
                        <h3>{project.title}</h3>
                        {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                        {project.timeline && <p className="project-meta">{project.timeline} · {project.role}</p>}
                        <p className="project-description">{project.description}</p>
                      </div>
                    </div>
                    {project.image && (
                      <div className={`project-image ${project.imageClass || ''}`}>
                        <img src={project.image} alt={project.title} />
                      </div>
                    )}
                  </div>

                  <div className="project-right">
                    <div className="project-details-grid">
                      <div className="detail-column">
                        <div className="detail-item">
                          <h4>Problem</h4>
                          <p>{project.problem}</p>
                        </div>
                        <div className="detail-item">
                          <h4>Technologies</h4>
                          <p className="project-technologies">{project.technologies.join(' · ')}</p>
                        </div>
                        <div className="detail-item">
                          <h4>My Contribution</h4>
                          <p>{project.myContribution}</p>
                        </div>
                      </div>
                      <div className="detail-column">
                        <div className="detail-item">
                          <h4>Solution</h4>
                          <p>{project.solution}</p>
                        </div>
                        <div className="detail-item">
                          <h4>Lessons Learned</h4>
                          <p>{project.lessonsLearned}</p>
                        </div>
                        <div className="detail-item project-links-compact">
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-link" title="View Live Demo">
                              View Live
                            </a>
                          )}
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-icon" title="View on GitHub">
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <strong>Email:</strong> dimashaabeywickrama@gmail.com
                </div>
                <div className="contact-method">
                  <strong>Phone:</strong> 0717754075
                </div>
                <div className="contact-method">
                  <strong>Location:</strong> No 4/9, Lakeview, Agarawala, Aparekka, Matara, Sri Lanka
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Dimasha Hansani Abeywickrama. All rights reserved.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/dimasha2002" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Dimasha2002" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}

export default App
