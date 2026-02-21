import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

gsap.registerPlugin(ScrollTrigger)

/** Initializes Lenis on mount, syncs with GSAP ticker, and resets scroll on route change */
function SmoothScroll() {
  const lenisRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,           // How long the scroll easing lasts (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out for butter feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,       // Smooth mouse wheel
      wheelMultiplier: 0.9,    // Slightly reduced for more control
      touchMultiplier: 2.0,    // Snappier on touch
      infinite: false,
    })

    lenisRef.current = lenis

    // Sync Lenis RAF with GSAP ticker — critical for ScrollTrigger accuracy
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0) // Prevent GSAP from skipping frames

    // Tell ScrollTrigger to use Lenis scroll position
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
    })

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  // On route change — smoothly scroll to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false, duration: 0.8 })
    }
    ScrollTrigger.refresh()
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
