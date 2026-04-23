function Projects() {
  const projects = [
    { title: "Library Management System", description: "System for managing library operations including book inventory, member records, issue/return tracking.", techStack: ["React", "Node.js", "MongoDB"], color: "#6366f1", link: "https://github.com/rishitharaodaggu28-commits/library-management-system" },
    { title: "Student Management System", description: "Student information management with enrollment, grade tracking, and attendance management.", techStack: ["React", "JavaScript", "CSS"], color: "#10b981", link: "https://github.com/rishitharaodaggu28-commits/student-management-system" },
    { title: "Portfolio Website", description: "Personal portfolio with modern responsive design and glassmorphism effects.", techStack: ["React", "React Router", "CSS"], color: "#f59e0b", link: "https://github.com/rishitharaodaggu28-commits/portfolio-website" }
  ]

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>Showcasing my work in AI, Web Development, and Software Engineering</p>
      </section>
      <section className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-header" style={{ background: `linear-gradient(135deg, ${p.color}, #1e293b)` }}>
              <h3>{p.title}</h3>
            </div>
            <div className="project-content">
              <p className="project-description">{p.description}</p>
              <div className="tech-stack">
                {p.techStack.map((t, j) => <span key={j} className="tech-badge">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects