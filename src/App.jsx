import { Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>© 2026 Rishitha Rao Daggu. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/rishitharaodaggu28-commits" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rishitha-rao-33292b268?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:rishitharaodaggu28@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App