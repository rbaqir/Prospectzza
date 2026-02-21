import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Search, CheckCircle, Package, Link2, Smartphone, Zap, Gem, ArrowRight, Quote } from 'lucide-react'
import { useCounterAnimation } from '../hooks/useAnimations'

const TICKER_ITEMS = ['LinkedIn Leads', 'B2B Data Enrichment', 'Social Media Leads', 'Pro Lead Lists', 'GDPR Compliant', 'Verified Emails', 'CRM Ready']
const SERVICE_CARDS = [
  { icon: <Link2 size={24} />, color: 'var(--accent)', title: 'LinkedIn Leads', desc: 'Decision-makers sourced via LinkedIn Sales Navigator with verified emails, job titles, and insights.' },
  { icon: <Smartphone size={24} />, color: 'var(--text-main)', title: 'Social Media Leads', desc: 'Verified influencer, creator, and business leads from social platforms with engagement data.' },
  { icon: <Zap size={24} />, color: 'var(--text-main)', title: 'Data Enrichment', desc: 'Upgrade existing lists with verified emails, direct dials, LinkedIn profiles, and firmographics.' },
  { icon: <Gem size={24} />, color: 'var(--accent)', title: 'Pro Leads', desc: 'Premium, bounce-free datasets enriched with revenue, phone, location, and firmographics.' },
]
const PROCESS_STEPS = [
  { num: '01', icon: <Target size={32} />, title: 'Target Setup Research', desc: 'We define your ideal customer profile, filters, and targeting strategy.' },
  { num: '02', icon: <Search size={32} />, title: 'Lead Research', desc: 'We source leads from LinkedIn, Apollo, and multiple premium databases.' },
  { num: '03', icon: <CheckCircle size={32} />, title: 'Quality Verification', desc: 'Every email and contact is verified for deliverability — zero bounce guarantee.' },
  { num: '04', icon: <Package size={32} />, title: 'Final Delivery', desc: 'Clean Excel/CSV or Google Sheets, CRM-ready and delivered on time.' },
]
const TESTIMONIALS = [
  {
    stars: '★★★★★',
    text: '"This was my first experience collaborating with them, and I must say, I am truly grateful for the attention to detail and support with lead generation. I eagerly anticipate ongoing assistance."',
    name: 'Randall J. Ferguson', role: 'CEO & Founder',
  },
  {
    stars: '★★★★★',
    text: '"Working with this team has been a game-changer for our outbound campaigns. Their strategic approach and attention to detail have helped us reach heights we didn\'t think possible."',
    name: 'James Mitchell', role: 'Head of Sales, TechFlow',
  },
  {
    stars: '★★★★★',
    text: '"The Pro Package delivers exactly what it promises — 10,000 clean, bounce-free leads every month. Our pipeline has never been healthier. Highly recommended."',
    name: 'Sarah Aldridge', role: 'Growth Lead, Nexify',
  },
]
const CLIENTS = ['B2B Brands', 'DTC Brands', 'UK Digital Marketing', 'Startup Canada', 'Tech Agencies', 'SaaS Companies']

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
}

export default function Home() {
  const navigate = useNavigate()
  const pageRef = useRef(null)

  useCounterAnimation(true)

  return (
    <div ref={pageRef} className="page-wrapper">
      {/* ===== HERO ===== */}
      <section className="grid-lines" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 96, paddingBottom: 64, position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <motion.div
              initial="hidden" animate="visible" variants={containerVariants}
            >
              {/* Badge */}
              <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 9999, padding: '0.5rem 1rem', marginBottom: '2rem', fontSize: '0.75rem', fontFamily: 'var(--font-dm)', color: 'var(--muted)' }}>
                <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                500+ Verified Clients Worldwide
              </motion.div>

              <motion.h1 variants={itemVariants} className="font-syne" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                100% Verified<br />
                <span style={{ color: 'var(--accent)' }}>Lead Generation</span><br />
                Agency
              </motion.h1>

              <motion.p variants={itemVariants} className="font-dm" style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 480 }}>
                We connect you with the right audience through data-driven strategies that turn prospects into loyal customers — verified, enriched, and ready to convert.
              </motion.p>

              <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                <button onClick={() => navigate('/services')} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>
                  Explore Services <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </button>
                <button onClick={() => navigate('/portfolio')} className="btn-outline" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>View Portfolio</button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="stats-flex" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                {[{ val: 500, label: 'Trusted Clients' }, { val: 10, label: 'M+ Leads Delivered' }, { val: 25, label: 'Years Combined Exp' }].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
                    {i > 0 && <div style={{ width: 1, height: 40, background: 'var(--border)' }} />}
                    <div>
                      <div className="font-syne counter" data-target={s.val} style={{ fontWeight: 800, fontSize: '2rem', color: 'var(--text-main)' }}>0</div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.8rem', fontFamily: 'var(--font-dm)', marginTop: 2 }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Visual Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
              className="md-hidden"
            >
              <div style={{ position: 'relative', width: 400, height: 400 }}>
                <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--border)', borderRadius: '50%', borderStyle: 'dashed' }} className="spin-slow" />
                <div style={{ position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%', border: '1px solid var(--accent)', opacity: 0.3, borderRadius: '50%' }} className="spin-reverse" />
                <div style={{ position: 'absolute', top: '25%', left: '25%', right: '25%', bottom: '25%', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                  <div className="font-syne" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent)' }}>PZ</div>
                </div>

                {/* Floating elements */}
                 <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', top: 20, right: 0, padding: '1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                >
                  <CheckCircle size={20} color="var(--accent)" />
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 700, fontFamily: 'var(--font-syne)' }}>100% Verified</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-dm)' }}>Zero Bounce Rate</div>
                  </div>
                </motion.div>

                 <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  style={{ position: 'absolute', bottom: 40, left: -20, padding: '1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                >
                  <Target size={20} color="var(--text-main)" />
                  <div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 700, fontFamily: 'var(--font-syne)' }}>Laser Targeted</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.75rem', fontFamily: 'var(--font-dm)' }}>B2B Audiences</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.25rem 0', background: 'var(--surface)' }}>
        <div className="ticker-inner" style={{ display: 'flex', gap: '3rem' }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <span style={{ color: 'var(--muted)', fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>{item}</span>
              <span style={{ color: 'var(--accent)', fontSize: '0.8rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ===== PROCESS ===== */}
      <section style={{ padding: '8rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <p className="font-syne" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Process</p>
            <h2 className="font-syne" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-main)', marginBottom: '1rem' }}>
              How We Deliver Results
            </h2>
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', maxWidth: 500, margin: '0 auto' }}>A proven 4-step process that ensures every lead meets your exact ideal customer profile</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                  <div style={{ color: 'var(--accent)' }}>{step.icon}</div>
                  <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-syne)', fontWeight: 800, color: 'var(--border)' }}>{step.num}</div>
                </div>
                <h3 className="font-syne" style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', fontFamily: 'var(--font-dm)', lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section style={{ padding: '8rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-syne" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Offer</p>
              <h2 className="font-syne" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-main)' }}>Our Services</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <button onClick={() => navigate('/services')} className="btn-outline" style={{ padding: '0.75rem 1.5rem' }}>View All Services</button>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}
          >
            {SERVICE_CARDS.map((card, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card"
                onClick={() => navigate('/services')}
                style={{ padding: '2.5rem 2rem', cursor: 'pointer', background: 'var(--card)' }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 12, marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div style={{ color: card.color }}>{card.icon}</div>
                </div>
                <h3 className="font-syne" style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem', fontSize: '1.2rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontFamily: 'var(--font-dm)', lineHeight: 1.6 }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CLIENTS ===== */}
      <section style={{ padding: '6rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Trusted by leading companies and brands globally</p>
          </div>
          <div className="clients-grid">
            {CLIENTS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card-static client-card"
                style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--muted)', cursor: 'default' }}
                whileHover={{ color: 'var(--text-main)', borderColor: 'var(--accent)' }}
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section style={{ padding: '8rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <p className="font-syne" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Testimonials</p>
            <h2 className="font-syne" style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-main)' }}>1,580+ Happy Customers</h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} variants={itemVariants} className="glass-card" style={{ padding: '2.5rem', background: 'var(--card)' }}>
                <Quote size={32} color="var(--border)" style={{ marginBottom: '1.5rem' }} />
                <p style={{ color: 'var(--text-main)', fontFamily: 'var(--font-dm)', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '0.95rem' }}>{t.text}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-syne)', fontWeight: 700, color: 'var(--accent)', fontSize: '0.85rem', flexShrink: 0 }}>
                    {t.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <div className="font-syne" style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.8rem', fontFamily: 'var(--font-dm)' }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{ padding: '8rem 0', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', padding: '6rem 3rem', textAlign: 'center', background: 'var(--card)', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
          >
            <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />
            <div style={{ position: 'relative' }}>
              <h2 className="font-syne" style={{ fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                Ready to Scale?
              </h2>
              <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '1.125rem', maxWidth: 500, margin: '0 auto 3rem', lineHeight: 1.6 }}>
                Get started with 2,000 verified B2B leads for just $250/month. GDPR-compliant, bounce-free, and CRM-ready.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/pricing')} className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>View Pricing</button>
                <button onClick={() => navigate('/contact')} className="btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>Talk to Us</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; text-align: center; }
          .hero-grid > div { margin: 0 auto; display: flex; flex-direction: column; alignItems: center; }
          .hero-grid h1 { font-size: clamp(2.5rem, 8vw, 4rem) !important; }
          .hero-grid p { margin: 0 auto 2.5rem !important; }
          .hero-grid .btn-primary, .hero-grid .btn-outline { width: 100%; margin-bottom: 0.5rem; }
          .hero-grid > div > div[style*="display: flex; flex-wrap: wrap"] { justify-content: center; width: 100%; }
          .stats-flex { flex-wrap: wrap; justify-content: center; gap: 1.5rem !important; }
          .stats-flex > div[style*="width: 1"] { display: none; }
        }
        @media (max-width: 640px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .clients-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
