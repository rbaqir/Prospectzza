import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Users, Briefcase, Rocket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CATEGORIES = ['All', 'SaaS', 'Agencies', 'Ecommerce']

const PROJECTS = [
  { id: 1, title: 'Nexify ERP', category: 'SaaS', results: '25% increase in MRR', desc: 'Sourced 5,000 CTOs and IT Directors, resulting in $120k pipeline generated in 45 days.', icon: <Rocket size={24} /> },
  { id: 2, title: 'TechFlow Agency', category: 'Agencies', results: '15 new retainers', desc: 'Built a custom scraping tool to find fast-growing e-commerce brands actively hiring for marketing roles.', icon: <Users size={24} /> },
  { id: 3, title: 'Lumina Skincare', category: 'Ecommerce', results: '10k Influencer Database', desc: 'Extracted contact details for micro-influencers on TikTok and Instagram based in the UK.', icon: <ExternalLink size={24} /> },
  { id: 4, title: 'CloudSync', category: 'SaaS', results: '40% lower CAC', desc: 'Enriched 20,000 stale CRM records with fresh verified emails and LinkedIn profiles.', icon: <Briefcase size={24} /> },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
}

export default function Portfolio() {
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter)

  return (
    <div ref={pageRef} className="page-wrapper" style={{ paddingTop: '160px' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 9999, fontSize: '0.875rem', color: 'var(--accent)', fontFamily: 'var(--font-dm)', marginBottom: '2rem' }}>
            Our Work
          </div>
          <h1 className="font-syne" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Proven <span style={{ color: 'var(--accent)' }}>Success Stories</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', lineHeight: 1.8 }}>
            Explore how we've helped B2B companies across sectors build massive, profitable sales pipelines with high-intent prospect data.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="container" style={{ marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'var(--text-main)' : 'var(--surface)',
                color: filter === cat ? 'var(--primary)' : 'var(--muted)',
                border: `1px solid ${filter === cat ? 'var(--text-main)' : 'var(--border)'}`,
                padding: '0.65rem 1.5rem',
                borderRadius: 9999,
                fontSize: '0.875rem',
                fontFamily: 'var(--font-dm)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="container" style={{ marginBottom: '8rem', minHeight: 400 }}>
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(p => (
              <motion.div
                layout
                key={p.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="glass-card"
                style={{ background: 'var(--card)', borderRadius: 24, overflow: 'hidden', cursor: 'pointer' }}
              >
                <div style={{ height: 200, background: 'var(--surface)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--border)' }}>
                  {/* Abstract placeholder visual */}
                  <div style={{ width: 100, height: 100, borderRadius: '50%', border: '4px solid var(--accent)', opacity: 0.2 }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'inline-flex', padding: '0.35rem 0.85rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 9999, fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--font-dm)' }}>
                      {p.category}
                    </div>
                    <div style={{ color: 'var(--accent)' }}>{p.icon}</div>
                  </div>
                  <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '1rem' }}>{p.title}</h3>
                  <div style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Results: {p.results}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontFamily: 'var(--font-dm)', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <div className="container" style={{ paddingBottom: '8rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card cta-card" style={{ padding: '4rem', textAlign: 'center', background: 'var(--surface)' }}
        >
          <h2 className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>Want Results Like These?</h2>
          <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: 600, margin: '0 auto 3rem' }}>
            Don't let bad data throttle your outbound campaigns. Let's build a clean, converting list for your team.
          </p>
          <button onClick={() => navigate('/pricing')} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>View Pricing Packages</button>
        </motion.div>
      </div>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 900px) {
          .cta-card { padding: 2rem !important; }
        }
      `}</style>
    </div>
  )
}
