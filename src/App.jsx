import { useState, useEffect } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop'

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
      title: "TraceBack",
      description: "A lost and found mobile app that helps users report and find missing items in their community. Features include item reporting, search functionality, and location-based matching.",
      technologies: ["Android Studio", "Kotlin", "Java", "XML"],
      github: "https://github.com/Dimasha2002/TraceBackAPP"
    },
    {
      title: "MyWellness",
      description: "A habit tracker app designed to help users build and maintain healthy daily routines. Track your wellness goals, monitor progress, and develop positive habits consistently.",
      technologies: ["Android Studio", "Kotlin", "Java", "XML", "SharedPreferences"],
      github: "https://github.com/Dimasha2002/MyWellness"
    },
    {
      title: "WellnessTracker",
      description: "A comprehensive habit tracker app that empowers users to create, monitor, and achieve their personal wellness goals through daily habit tracking and progress visualization.",
      technologies: ["Android Studio", "Kotlin", "Java", "XML", "SharedPreferences"],
      github: "https://github.com/Dimasha2002/WellnessTracker"
    }
  ]

  const skills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "R" },
    { name: "SQL" },
    { name: "MongoDB" },
    { name: "CSS" }
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
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Dimasha Hansani Abeywickrama</span></h1>
            <h2>Undergraduate Student - SLIIT</h2>
            <p>Third year first semester student at Faculty of Computing, SLIIT. Passionate about creating innovative software solutions.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/dimasha-abeywickrama-a531b9386/" target="_blank" rel="noopener noreferrer" className="hero-social-icon">
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
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img src="/profile.jpg" alt="Dimasha Hansani Abeywickrama" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm an undergraduate student at the Faculty of Computing, SLIIT, currently in my 
                third year first semester. I'm passionate about software development and technology, 
                with a focus on creating innovative solutions through code.
              </p>
              <p>
                As a computing student, I'm constantly learning new technologies and developing 
                my skills in various programming languages and frameworks. I enjoy tackling 
                challenging problems and building projects that make a difference.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>5+</h3>
                  <p>Projects Completed</p>
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
          <div className="certifications-grid">
            <div className="certification-item">
              <h3>AI/ML Engineer - Stage 1</h3>
              <p>Centre for Open and Distance Education, Faculty of Computing, SLIIT</p>
              <div className="cert-actions">
                <a 
                  href="https://code.sliit.org/certificates/ooz2pnny58" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  View Certificate
                </a>
                <a 
                  href="/AIML1-SLIIT.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  Download Certificate
                </a>
              </div>
            </div>
            <div className="certification-item">
              <h3>AI/ML Engineer - Stage 2</h3>
              <p>Centre for Open and Distance Education, Faculty of Computing, SLIIT</p>
              <div className="cert-actions">
                <a 
                  href="https://code.sliit.org/certificates/f5etbxgfb5" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  View Certificate
                </a>
                <a 
                  href="/AIML2-SLIIT.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-link"
                >
                  Download Certificate
                </a>
              </div>
            </div>
            <div className="certification-item">
              <h3>Front-End Web Development</h3>
              <p>Centre for Open & Distance Learning (CODL), University of Moratuwa, Sri Lanka</p>
              <a 
                href="/frontend-web-dev-certificate.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-link"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-icon" title="View on GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
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
              <a href="https://www.linkedin.com/in/dimasha-abeywickrama-a531b9386/" target="_blank" rel="noopener noreferrer" className="social-icon">
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
