import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import useSmoothScroll from './hooks/useSmoothScroll.js'
import AboutMe from './pages/AboutMe/AboutMe.jsx'
import Home from './pages/Home/Home.jsx'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx'
import Projects from './pages/Projects/Projects.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  useSmoothScroll()

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
