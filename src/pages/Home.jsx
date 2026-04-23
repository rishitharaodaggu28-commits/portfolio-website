function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img 
              src="/portfolio-website/profile.jpg" 
              alt="Rishitha Rao Daggu" 
              className="profile-image"
            />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Rishitha Rao Daggu</span></h1>
            <p className="hero-subtitle">B.Tech 3rd Year AI Student</p>
            <p className="hero-tagline">Passionate about AI, Machine Learning, and building innovative solutions</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p>
            I am a 3rd-year B.Tech student specializing in Artificial Intelligence at Mahindra University. 
            Currently, I am exploring the fascinating fields of Machine Learning, Deep Learning, and Data Science. 
            I have a strong foundation in Python, C++, and React, and I'm eager to apply my knowledge to real-world problems.
            My goal is to contribute to cutting-edge AI research and development while continuously learning new technologies.
          </p>
        </div>
      </section>

      <section className="research-section">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          <div className="interest-card">
            <div className="interest-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>Exploring AI algorithms and intelligent systems</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">🧠</div>
            <h3>Machine Learning</h3>
            <p>Building predictive models and neural networks</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">📊</div>
            <h3>Data Science</h3>
            <p>Analyzing complex datasets and deriving insights</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">💬</div>
            <h3>NLP</h3>
            <p>Natural Language Processing and text analysis</p>
          </div>
          <div className="interest-card">
            <div className="interest-icon">💻</div>
            <h3>Software Development</h3>
            <p>Building scalable web applications</p>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-grid">
          <div className="detail-card">
            <h3>Name</h3>
            <p>Rishitha Rao Daggu</p>
          </div>
          <div className="detail-card">
            <h3>Phone</h3>
            <p>+91 8106035465</p>
          </div>
          <div className="detail-card">
            <h3>Personal Email</h3>
            <p>rishitharaodaggu28@gmail.com</p>
          </div>
          <div className="detail-card">
            <h3>College Email</h3>
            <p>se23uari029@mahindrauniversity.edu.in</p>
          </div>
        </div>
      </section>

      <section className="links-section">
        <h2 className="section-title">Connect With Me</h2>
        <div className="links-container">
          <a href="https://github.com/rishitharaodaggu28-commits" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rishitha-rao-33292b268?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:rishitharaodaggu28@gmail.com" className="social-link">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email
          </a>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-badge">Python</div>
          <div className="skill-badge">C++</div>
          <div className="skill-badge">React</div>
          <div className="skill-badge">Machine Learning</div>
          <div className="skill-badge">Data Analysis</div>
          <div className="skill-badge">SQL</div>
          <div className="skill-badge">Git</div>
          <div className="skill-badge">HTML/CSS</div>
          <div className="skill-badge">JavaScript</div>
          <div className="skill-badge">Node.js</div>
        </div>
      </section>
    </div>
  )
}

export default Home