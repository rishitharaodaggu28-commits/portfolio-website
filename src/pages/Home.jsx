function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img 
              src="https://avatars.githubusercontent.com/u/246885894?v=4" 
              alt="Rishithara Odaggu" 
              className="profile-image"
            />
          </div>
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Rishithara Odaggu</span></h1>
            <p className="hero-subtitle">B.Tech 3rd Year AI Student</p>
            <p className="hero-tagline">Passionate about AI, Machine Learning, and building innovative solutions</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p>
            I am a 3rd-year B.Tech student specializing in Artificial Intelligence at VNR Vignana Jyothi Institute of Engineering and Technology. 
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
            <p>Rishithara Odaggu</p>
          </div>
          <div className="detail-card">
            <h3>Phone</h3>
            <p>+91 9XXXXXXXXX</p>
          </div>
          <div className="detail-card">
            <h3>Personal Email</h3>
            <p>rishitharaodaggu28@gmail.com</p>
          </div>
          <div className="detail-card">
            <h3>College Email</h3>
            <p>23K01A12XX@vnrvjiet.in</p>
          </div>
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