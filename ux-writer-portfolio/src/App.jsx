import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/ProjectsPriscilla'
import Skills from './components/Skills'
import Testimonials from './components/TestimonialsPriscilla'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudy from './components/CaseStudyPriscilla'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Testimonials />
              <Contact />
            </main>
          } />
          <Route path="/case-study/:id" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

