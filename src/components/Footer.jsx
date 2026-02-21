import { useNavigate } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Activity } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Plans & Pricing', path: '/pricing' },
]

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ padding: '5rem 1.5rem 2rem' }}>
        {/* Grid */}
        <div className="footer-main-grid">
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--accent)', color: '#000', fontSize: 13, fontWeight: 900, fontFamily: 'var(--font-syne)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PZ</div>
              <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-main)' }}>Prospectzza</span>
            </div>
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 300, marginBottom: '2rem' }}>
              Prospectzza is your reliable partner for premium B2B lead generation, ensuring a steady, high-converting sales pipeline.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="glass-card-static"
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-main)', textDecoration: 'none',
                    transition: 'all 0.2s', background: 'var(--card)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--text-main)'
                    e.currentTarget.style.color = 'var(--primary)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--card)'
                    e.currentTarget.style.color = 'var(--text-main)'
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, color: 'var(--text-main)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem',
                      transition: 'color 0.2s', padding: 0,
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, color: 'var(--text-main)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Contact Info
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', display: 'flex', gap: 10 }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>📍</span>
                <span style={{ wordBreak: 'break-word', flex: 1, minWidth: 0 }}>5919 Trussville Crossings Pkwy, AL</span>
              </li>
              <li>
                <a href="mailto:support@prospectzza.com" style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', gap: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>📧</span>
                  <span style={{ wordBreak: 'break-all', flex: 1, minWidth: 0 }}>support@prospectzza.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+17375772132" style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', textDecoration: 'none', display: 'flex', gap: 10, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>📞</span>
                  <span style={{ wordBreak: 'break-word', flex: 1, minWidth: 0 }}>+1 (737) 577-2132</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter + Copyright */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem', marginBottom: 4 }}>Subscribe to our Newsletter</div>
            <div style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem' }}>Get the latest news and special offers</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', width: '100%' }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: 'var(--primary)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '0.75rem 1.25rem',
                color: 'var(--text-main)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem',
                outline: 'none', flex: '1 1 200px', transition: 'border-color 0.2s', width: '100%'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <button className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: 8, fontSize: '0.875rem', flex: '1 1 auto', whiteSpace: 'nowrap' }}>
              Subscribe
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem' }}>
            Copyright 2026: All Rights Reserved by{' '}
            <span style={{ color: 'var(--text-main)', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>Prospectzza</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
