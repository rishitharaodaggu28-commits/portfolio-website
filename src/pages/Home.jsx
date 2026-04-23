function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src="/profile.jpg" alt="Rishitha Rao Daggu" className="profile-image" />
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
          <p>I am a 3rd-year B.Tech student specializing in Artificial Intelligence at Mahindra University. Currently exploring Machine Learning, Deep Learning, and Data Science. Strong foundation in Python, C++, and React.</p>
        </div>
      </section>

      <section className="research-section">
        <h2 className="section-title">Research Interests</h2>
        <div className="interests-grid">
          <div className="interest-card"><div className="interest-icon">🤖</div><h3>AI</h3><p>AI algorithms</p></div>
          <div className="interest-card"><div className="interest-icon">🧠</div><h3>ML</h3><p>Neural networks</p></div>
          <div className="interest-card"><div className="interest-icon">📊</div><h3>Data Science</h3><p>Data analysis</p></div>
          <div className="interest-card"><div className="interest-icon">💬</div><h3>NLP</h3><p>Text analysis</p></div>
          <div className="interest-card"><div className="interest-icon">💻</div><h3>Web Dev</h3><p>Web apps</p></div>
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Personal Details</h2>
        <div className="details-grid">
          <div className="detail-card"><h3>Name</h3><p>Rishitha Rao Daggu</p></div>
          <div className="detail-card"><h3>Phone</h3><p>+91 8106035465</p></div>
          <div className="detail-card"><h3>Personal Email</h3><p>rishitharaodaggu28@gmail.com</p></div>
          <div className="detail-card"><h3>College Email</h3><p>se23uari029@mahindrauniversity.edu.in</p></div>
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
        </div>
      </section>
    </div>
  )
}

export default Home