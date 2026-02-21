import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'

export default function Contact() {
  const pageRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you within 24 hours.')
    setFormState({ name: '', email: '', company: '', message: '' })
  }

  const inputStyle = {
    width: '100%',
    padding: '1rem 1.25rem',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    color: 'var(--text-main)',
    fontFamily: 'var(--font-dm)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  }

  return (
    <div ref={pageRef} className="page-wrapper" style={{ paddingTop: '160px' }}>
      <section className="container" style={{ marginBottom: '8rem' }}>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 9999, fontSize: '0.875rem', color: 'var(--accent)', fontFamily: 'var(--font-dm)', marginBottom: '2rem' }}>
              Say Hello
            </div>
            <h1 className="font-syne" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, marginBottom: '2rem' }}>
              Let's scale your <span style={{ color: 'var(--accent)' }}>Outbound.</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', lineHeight: 1.8, marginBottom: '4rem' }}>
              Whether you're looking to extract lists from specific platforms or want to outsource your entire B2B data generation, we're here to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.875rem', fontFamily: 'var(--font-syne)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Email Us</div>
                  <a href="mailto:support@prospectzza.com" style={{ color: 'var(--text-main)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', textDecoration: 'none', fontWeight: 500 }}>support@prospectzza.com</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.875rem', fontFamily: 'var(--font-syne)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Call Us</div>
                  <a href="tel:+17375772132" style={{ color: 'var(--text-main)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', textDecoration: 'none', fontWeight: 500 }}>+1 (737) 577-2132</a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.875rem', fontFamily: 'var(--font-syne)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Office Location</div>
                  <div style={{ color: 'var(--text-main)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', fontWeight: 500 }}>5919 Trussville Crossings Pkwy, AL 35235</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card contact-form-card"
            style={{ padding: '3rem', background: 'var(--card)', borderRadius: 24, position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: 'var(--accent)', opacity: 0.05, filter: 'blur(80px)', borderRadius: '50%' }} />
            <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 10 }}>
              Send a Message <Send size={20} color="var(--accent)" />
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', marginBottom: 8, fontWeight: 500 }}>Full Name</label>
                  <input
                    type="text" required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    style={inputStyle}
                    placeholder="John Doe"
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', marginBottom: 8, fontWeight: 500 }}>Work Email</label>
                  <input
                    type="email" required
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    style={inputStyle}
                    placeholder="john@company.com"
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', marginBottom: 8, fontWeight: 500 }}>Company Name</label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={e => setFormState({ ...formState, company: e.target.value })}
                  style={inputStyle}
                  placeholder="Acme Corp"
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', marginBottom: 8, fontWeight: 500 }}>How can we help?</label>
                <textarea
                  required
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                  placeholder="Tell us about your lead generation goals..."
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '1.25rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                Submit Inquiry <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </button>
            </form>
          </motion.div>

          {/* Media Queries */}
          <style>{`
            @media (max-width: 900px) {
              .contact-grid { grid-template-columns: 1fr !important; }
              .contact-form-card { padding: 2rem !important; }
            }
            @media (max-width: 600px) {
              form > div:first-child { grid-template-columns: 1fr !important; gap: 1rem !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}
