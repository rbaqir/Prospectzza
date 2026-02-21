import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link2, Smartphone, Zap, Gem, CheckCircle, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SERVICES = [
  {
    icon: <Link2 size={32} />,
    title: 'LinkedIn Sales Navigator Leads',
    desc: 'We extract highly targeted lists of decision-makers directly from LinkedIn Sales Navigator, capturing accurate professional data.',
    features: ['Job Title & Seniority filters', 'Company Size & Industry targeting', 'Verified Business Emails', 'LinkedIn Profile URLs'],
    color: 'var(--accent)'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Social Media Extraction',
    desc: 'Building targeted lists from Instagram, Facebook, and Twitter. Perfect for influencer marketing, DTC brands, or localized B2C outreach.',
    features: ['Follower/Following extraction', 'Engagement rate analysis', 'Keyword-based targeting', 'Public email scraping'],
    color: 'var(--text-main)'
  },
  {
    icon: <Zap size={32} />,
    title: 'B2B Data Enrichment',
    desc: 'Have an outdated CRM? We take your existing lists and append missing data points like verified emails, phone numbers, and LinkedIn URLs.',
    features: ['Waterfall enrichment process', 'Identify un-bounced emails', 'Direct mobile dials', 'Firmographic data append'],
    color: 'var(--text-main)'
  },
  {
    icon: <Gem size={32} />,
    title: 'The Pro Lead Package',
    desc: 'Our flagship service for serious B2B growth teams. We prospect, clean, verify, and deliver 100% bounce-free data on a recurring monthly basis.',
    features: ['10,000+ Leads per month', 'Zero-bounce guarantee', 'Custom ICP building', 'Dedicated Account Manager'],
    color: 'var(--accent)'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
}

export default function Services() {
  const navigate = useNavigate()
  const pageRef = useRef(null)

  return (
    <div ref={pageRef} className="page-wrapper" style={{ paddingTop: '160px' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 9999, fontSize: '0.875rem', color: 'var(--accent)', fontFamily: 'var(--font-dm)', marginBottom: '2rem' }}>
            What We Do
          </div>
          <h1 className="font-syne" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Data-driven <span style={{ color: 'var(--accent)' }}>Prospecting</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', lineHeight: 1.8 }}>
            Whether you need to extract thousands of LinkedIn profiles, enrich your stale CRM, or generate custom lead lists from scratch, we have a solution built for your scale.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="container" style={{ marginBottom: '8rem' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ display: 'grid', gap: '3rem' }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card service-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                padding: '3rem',
                background: 'var(--card)',
                borderRadius: 24,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 300, background: s.color, opacity: 0.03, filter: 'blur(100px)', borderRadius: '50%' }} />
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>
                  {s.icon}
                </div>
                <h2 className="font-syne" style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)' }}>{s.title}</h2>
                <p style={{ color: 'var(--muted)', fontSize: '1.1rem', fontFamily: 'var(--font-dm)', lineHeight: 1.7, maxWidth: 600 }}>{s.desc}</p>
                
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {s.features.map((feat, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-main)', fontSize: '0.95rem', fontFamily: 'var(--font-dm)' }}>
                      <CheckCircle size={18} color="var(--accent)" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 600, margin: '0 auto' }}
          >
            <h2 className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.5rem' }}>Don't see exactly what you need?</h2>
            <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)', fontSize: '1.125rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              We offer custom data scraping and bespoke extraction scripts for complex enterprise needs. Let's discuss your unique requirements.
            </p>
            <button onClick={() => navigate('/contact')} className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1rem' }}>
              Talk to an Expert <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 900px) {
          .service-card { padding: 2rem !important; }
          .service-card > div:last-child { flex-direction: column !important; }
        }
      `}</style>
    </div>
  )
}
