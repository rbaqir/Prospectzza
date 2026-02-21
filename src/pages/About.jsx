import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Users, Target, Rocket } from 'lucide-react'

const VALUES = [
  { icon: <Building2 size={28} />, title: 'Quality First', desc: 'We value data accuracy over sheer volume. Every lead is verified.' },
  { icon: <Target size={28} />, title: 'Hyper-Targeting', desc: 'Reaching the right person is half the battle. We define your exact ICP.' },
  { icon: <Users size={28} />, title: 'Partnership', desc: 'We act as an extension of your sales team, not just a vendor.' },
  { icon: <Rocket size={28} />, title: 'Rapid Growth', desc: 'Our goal is your scalable and predictable revenue.' }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
}

export default function About() {
  const navigate = useNavigate()
  const pageRef = useRef(null)

  return (
    <div ref={pageRef} className="page-wrapper" style={{ paddingTop: '160px' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 9999, fontSize: '0.875rem', color: 'var(--muted)', fontFamily: 'var(--font-dm)', marginBottom: '2rem' }}>
            About Prospectzza
          </div>
          <h1 className="font-syne" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, marginBottom: '2rem' }}>
            We're building the future of <span style={{ color: 'var(--accent)' }}>B2B Outbound</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', lineHeight: 1.8 }}>
            Founded on the principle that data accuracy drives revenue, Prospectzza is a specialized lead generation agency focused entirely on delivering bounce-free, highly curated prospects.
          </p>
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="container" style={{ marginBottom: '8rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
        >
          {VALUES.map((v, i) => (
            <motion.div key={i} variants={itemVariants} className="glass-card" style={{ padding: '3rem 2rem', background: 'var(--card)' }}>
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>{v.icon}</div>
              <h3 className="font-syne" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>{v.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontFamily: 'var(--font-dm)', lineHeight: 1.6 }}>{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '8rem 0' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '2rem' }}>Why We Started</h2>
              <div style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '1.05rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p>
                  Most lead lists are filled with outdated emails, non-decision makers, and generic catch-alls that destroy domain reputation. We saw teams burning out trying to cold email people who weren't even at the company anymore.
                </p>
                <p>
                  We built our proprietary 4-step research methodology to solve exactly this. By pairing AI enrichment with human verification, we ensure you only speak to the people who matter.
                </p>
                <div>
                  <button onClick={() => navigate('/services')} className="btn-outline" style={{ marginTop: '1rem', padding: '0.875rem 2rem' }}>See Our Services</button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
              className="md-hidden"
            >
              <div style={{ width: '100%', aspectRatio: '1', background: 'var(--card)', borderRadius: 32, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="grid-lines" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
                <div style={{ fontSize: '10rem', color: 'var(--border)', fontFamily: 'var(--font-syne)', fontWeight: 800, opacity: 0.5 }}>PZ</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container" style={{ padding: '8rem 0' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card cta-card" style={{ padding: '4rem', textAlign: 'center', background: 'var(--surface)' }}
        >
          <h2 className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>Work with the Best</h2>
          <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: 600, margin: '0 auto 3rem' }}>
            Join 500+ other agencies and B2B SaaS companies relying on our data.
          </p>
          <button onClick={() => navigate('/contact')} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>Contact Us Today</button>
        </motion.div>
      </div>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .cta-card { padding: 2rem !important; }
        }
      `}</style>
    </div>
  )
}
