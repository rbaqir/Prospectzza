import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, HelpCircle, ChevronDown, Rocket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PLANS = [
  {
    name: 'Starter Setup',
    price: '$500',
    desc: 'Perfect for small teams testing outbound for the first time.',
    features: ['1,000 Verified Leads/mo', 'Basic firmographics', '1 Custom ICP build', 'Email Support'],
    missing: ['Zero-bounce guarantee', 'Direct dials', 'Dedicated AM'],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Pro Package',
    price: '$1,500',
    desc: 'Our most popular plan. Everything you need to scale predictable revenue.',
    features: ['5,000 Verified Leads/mo', 'Full enrichment (LinkedIn, Location)', '3 Custom ICP builds', 'Zero-bounce guarantee', 'Priority Email & Chat Support'],
    missing: ['Direct mobile dials', 'Custom extraction scripts'],
    cta: 'Start Scaling',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Bespoke extraction, massive volume, and direct mobile dials for sales floors.',
    features: ['Unlimited custom ICPs', 'Direct mobile dials', 'Custom scraping tools', 'Dedicated Account Manager', '24/7 Slack Support'],
    missing: [],
    cta: 'Contact Sales',
    popular: false
  }
]

const FAQS = [
  { q: 'What does "zero-bounce" mean?', a: 'Every email we provide undergoes a stringent 3-step verification process. If a lead bounces, we replace it for free.' },
  { q: 'Can I target specific job titles and industries?', a: 'Yes. We use over 40+ filters including seniority, software used, funding rounds, and precise industry tags to dial in your ICP.' },
  { q: 'How is the data delivered?', a: 'We deliver clean datasets via CSV, Excel, or direct sync to your CRM (HubSpot, Salesforce, etc.) depending on your tier.' },
  { q: 'Do you offer monthly contracts?', a: 'Yes. While we recommend 3-month commitments to see full pipeline ROI, you can pause or cancel your subscription at any time.' }
]

export default function Pricing() {
  const navigate = useNavigate()
  const pageRef = useRef(null)
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div ref={pageRef} className="page-wrapper" style={{ paddingTop: '160px' }}>
      {/* Header */}
      <section className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 800, margin: '0 auto' }}
        >
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 9999, fontSize: '0.875rem', color: 'var(--accent)', fontFamily: 'var(--font-dm)', marginBottom: '2rem' }}>
            Transparent Pricing
          </div>
          <h1 className="font-syne" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.1, marginBottom: '2rem' }}>
            Invest in <span style={{ color: 'var(--accent)' }}>Pipeline</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', fontFamily: 'var(--font-dm)', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 3rem' }}>
            Stop paying for bounced emails and generic catch-alls. Get verified, actionable B2B data delivered straight to your team.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            <span style={{ color: billing === 'monthly' ? 'var(--text-main)' : 'var(--muted)', fontFamily: 'var(--font-dm)', fontWeight: 600 }}>Monthly</span>
            <button
              onClick={() => setBilling(b => b === 'monthly' ? 'yearly' : 'monthly')}
              style={{
                width: 60, height: 32, borderRadius: 16, background: 'var(--surface)', border: '1px solid var(--accent)',
                position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 4
              }}
            >
              <motion.div
                animate={{ x: billing === 'monthly' ? 0 : 28 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent)' }}
              />
            </button>
            <span style={{ color: billing === 'yearly' ? 'var(--text-main)' : 'var(--muted)', fontFamily: 'var(--font-dm)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
              Annually <span style={{ background: 'var(--accent)', color: '#000', padding: '2px 8px', borderRadius: 9999, fontSize: '0.7rem', fontWeight: 800 }}>SAVE 20%</span>
            </span>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="container" style={{ marginBottom: '8rem' }}>
        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', alignItems: 'center' }}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={plan.popular ? "glass-card popular-card" : "glass-card-static"}
              style={{
                background: plan.popular ? 'var(--surface)' : 'var(--card)',
                padding: '3rem 2rem', border: plan.popular ? '2px solid var(--accent)' : '1px solid var(--border)',
                borderRadius: 24, position: 'relative', overflow: 'hidden',
                transform: plan.popular ? 'scale(1.05)' : 'none',
                zIndex: plan.popular ? 10 : 1
              }}
            >
              {plan.popular && (
                <div style={{ position: 'absolute', top: 16, right: 16, background: 'var(--accent)', color: '#000', fontSize: '0.75rem', fontWeight: 800, fontFamily: 'var(--font-syne)', padding: '0.35rem 1rem', borderRadius: 9999, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Rocket size={14} /> MOST POPULAR
                </div>
              )}

              <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{plan.name}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', fontFamily: 'var(--font-dm)', lineHeight: 1.6, marginBottom: '2rem', minHeight: 45 }}>{plan.desc}</p>
              
              <div style={{ marginBottom: '2rem' }}>
                <span className="font-syne" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {plan.price === 'Custom' ? 'Let\'s Talk' : (billing === 'yearly' && plan.price !== 'Custom' ? `$${parseInt(plan.price.replace('$','').replace(',','')) * 0.8}` : plan.price)}
                </span>
                {plan.price !== 'Custom' && <span style={{ color: 'var(--muted)', fontFamily: 'var(--font-dm)' }}>/mo</span>}
              </div>

              <button
                onClick={() => navigate('/contact')}
                className={plan.popular ? "btn-primary" : "btn-outline"}
                style={{ width: '100%', padding: '1rem', borderRadius: 12, marginBottom: '2.5rem', fontSize: '1rem' }}
              >
                {plan.cta}
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-main)', fontSize: '0.9rem', fontFamily: 'var(--font-dm)' }}>
                    <Check size={18} color="var(--accent)" /> {f}
                  </div>
                ))}
                {plan.missing.map((m, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--muted)', fontSize: '0.9rem', fontFamily: 'var(--font-dm)' }}>
                    <X size={18} color="var(--muted)" /> {m}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '8rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <HelpCircle size={40} color="var(--accent)" style={{ margin: '0 auto 1.5rem' }} />
            <h2 className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Got Questions?</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="glass-card-static" style={{ background: 'var(--card)', borderRadius: 16, overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', fontFamily: 'var(--font-dm)', fontWeight: 600, fontSize: '1.05rem', textAlign: 'left' }}
                >
                  {faq.q}
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }}>
                    <ChevronDown size={20} color={openFaq === i ? 'var(--accent)' : 'var(--muted)'} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 2rem 1.5rem', color: 'var(--muted)', fontFamily: 'var(--font-dm)', lineHeight: 1.7 }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Queries */}
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .popular-card { transform: none !important; z-index: 1 !important; border-width: 1px !important; }
        }
      `}</style>
    </div>
  )
}
