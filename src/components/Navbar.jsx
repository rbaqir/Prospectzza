import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import logo from '../assets/Logo.svg'
import nameLogo from '../assets/Name.svg'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Determine initial theme setup safely
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'dark'
    }
    return 'dark'
  })

  // Theme effect
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Scroll detection
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Update scroll pos on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  function handleNav(path) {
    setMobileOpen(false)
    navigate(path)
  }

  const baseCapsuleStyle = {
    pointerEvents: 'auto',
    background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid var(--border)',
    borderRadius: 9999,
    boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="container"
      style={{
        position: 'absolute',
        top: 24,
        left: 0,
        right: 0,
        zIndex: 50,
        pointerEvents: 'none',
      }}
    >
      <div style={{ display: 'flex', gap: '0.75rem', width: '100%', position: 'relative' }}>

        {/* Left Nav Capsule */}
        <nav
          className="desktop-nav-capsule"
          style={{
            ...baseCapsuleStyle,
            padding: '0.5rem 0.5rem 0.5rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexGrow: 1,
            justifyContent: 'space-between'
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '0px', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
          >
            <img src={logo} alt="Prospectzza Logo" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
            <img src={nameLogo} alt="Prospectzza" style={{ height: '3.0rem', objectFit: 'contain', transform: 'translateY(1.5px)', marginLeft: '-12px' }} />
          </button>

          {/* Desktop Nav */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 3, position: 'relative', flexGrow: 1, justifyContent: 'flex-end' }}
            className="md-hidden-mobile"
          >
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-dm)',
                    fontWeight: 600,
                    position: 'relative',
                    color: active ? 'var(--text-main)' : 'var(--muted)',
                    transition: 'color 0.2s',
                    borderRadius: 9999,
                    whiteSpace: 'nowrap',
                    zIndex: 1,
                  }}
                  onMouseEnter={e => { if (!active) e.target.style.color = 'var(--text-main)' }}
                  onMouseLeave={e => { if (!active) e.target.style.color = 'var(--muted)' }}
                >
                  {active && (
                    <motion.div
                      layoutId="navIndicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 9999,
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.label}
                </button>
              )
            })}
          </div>

          {/* Mobile flex spacer to push logo left when links are hidden */}
          <div className="mobile-only" style={{ flexGrow: 1 }} />
        </nav>

        {/* Right CTA Desktop Capsule */}
        <div
          style={{ ...baseCapsuleStyle, padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}
          className="md-block"
        >
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="tel:+17375772132"
            style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-dm)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-main)'}
          >
            +1 (737) 577-2132
          </a>
          <button
            onClick={() => handleNav('/contact')}
            className="btn-primary"
            style={{ padding: '0.65rem 1.25rem', borderRadius: 9999, fontSize: '0.875rem' }}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile View: Single Unified Capsule */}
        <div
          className="mobile-flex"
          style={{
            ...baseCapsuleStyle,
            padding: '0.5rem 0.5rem 0.5rem 1rem',
            display: 'none', // hidden on desktop
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            style={{ display: 'flex', alignItems: 'center', gap: '0px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <img src={logo} alt="Prospectzza Logo" style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }} />
            <img src={nameLogo} alt="Prospectzza" style={{ height: '2.6rem', objectFit: 'contain', transform: 'translateY(1px)', marginLeft: '-8px' }} />
          </button>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <button
              onClick={toggleTheme}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: '50%', transition: 'background 0.2s' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(o => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          id="mobile-menu"
          className={mobileOpen ? 'open' : ''}
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: 0,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            padding: mobileOpen ? '1.5rem' : '0 1.5rem',
            overflow: 'hidden',
            maxHeight: mobileOpen ? 450 : 0,
            opacity: mobileOpen ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: mobileOpen ? 'auto' : 'none'
          }}
        >
          {NAV_LINKS.map(link => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.875rem 0',
                background: 'none', border: 'none', cursor: 'pointer',
                color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-main)',
                fontWeight: location.pathname === link.path ? 700 : 500,
                fontFamily: 'var(--font-dm)', fontSize: '1rem',
                borderBottom: '1px solid var(--border)',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('/contact')}
            className="btn-primary"
            style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', borderRadius: 9999, fontSize: '1rem' }}
          >
            Let's Talk
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .md-hidden-mobile { display: none !important; }
          .md-block { display: none !important; }
          .mobile-only { display: block !important; }
          .mobile-flex { display: flex !important; }
          /* Hide the desktop left capsule completely on mobile to use the single mobile capsule */
          nav.desktop-nav-capsule { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
          .md-hidden-mobile { display: flex !important; }
          .md-block { display: flex !important; }
          .mobile-flex { display: none !important; }
        }
      `}</style>
    </motion.div>
  )
}
