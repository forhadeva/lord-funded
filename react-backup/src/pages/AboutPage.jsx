import React from 'react';
import { Heart, Target, Shield, Users, TrendingUp, BookOpen, Award, Globe, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: <Heart size={24} />,
    title: 'Faith-Driven Mission',
    desc: 'We believe faithful stewardship of capital is a calling. Every trader we fund is empowered to trade with purpose and integrity.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Full Transparency',
    desc: 'No hidden rules, no trailing drawdowns, no surprise disqualifications. What you see is what you get — always.',
  },
  {
    icon: <Target size={24} />,
    title: 'Trader-First Design',
    desc: 'Every rule, every feature, every payout structure is designed to help skilled traders succeed — not to make them fail.',
  },
  {
    icon: <Users size={24} />,
    title: 'Global Community',
    desc: 'Traders from 80+ countries trust LordFunded. Our growing community is proof that discipline and faith create results.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Fast Payouts',
    desc: 'Get your profits within 24-48 hours. No holdbacks, no delays — you earn it, you receive it.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Education & Support',
    desc: '24/7 support team ready to help. We want our traders to succeed, and we back that with real human assistance.',
  },
];

const stats = [
  { val: '$500K', label: 'Max Funding', icon: <TrendingUp size={20} /> },
  { val: '100%', label: 'Max Profit Split', icon: <Award size={20} /> },
  { val: '80+', label: 'Countries Served', icon: <Globe size={20} /> },
  { val: '24h', label: 'Payout Speed', icon: <Zap size={20} /> },
];

const timeline = [
  {
    year: 'The Beginning',
    title: 'Founded on Faith',
    desc: 'LordFunded was born from a simple belief: that disciplined, faith-driven traders deserve access to real capital without unfair obstacles.',
  },
  {
    year: 'Our Growth',
    title: 'Building Trust Globally',
    desc: 'Word spread. Traders from over 80 countries joined. We paid out hundreds of thousands and proved that transparency wins.',
  },
  {
    year: 'Today',
    title: 'Industry Leading Standards',
    desc: 'With accounts up to $500K, profit splits up to 100%, and the fairest rules in the industry — we\'re just getting started.',
  },
  {
    year: 'The Future',
    title: 'Empowering More Traders',
    desc: 'We\'re expanding our platform, adding new account types, and building technology to help every disciplined trader find their path to funding.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section style={{
        position: 'relative', padding: '160px 0 100px',
        textAlign: 'center', overflow: 'hidden',
      }}>
        {/* Background */}
        <div className="bg-grid" />
        <div className="glow-overlay" style={{ width: '500px', height: '500px', top: '-15%', left: '50%', transform: 'translateX(-50%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)',
            padding: '6px 18px', borderRadius: '100px',
            fontSize: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600,
            color: 'var(--gold-primary)', letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            <Award size={14} /> Our Story
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800,
            lineHeight: 1.1, marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px',
          }}>
            Trading With <span className="text-gold-gradient">Purpose</span>,<br />
            Funded With <span className="text-gold-gradient">Integrity</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '18px',
            lineHeight: '1.7', maxWidth: '620px', margin: '0 auto 40px',
          }}>
            LordFunded is more than a prop firm. We're a community built on the belief that
            disciplined traders deserve fair access to capital and the opportunity to grow.
          </p>

          {/* Stats Row */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px',
            maxWidth: '750px', margin: '0 auto',
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: 'rgba(14,13,10,0.7)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '16px', padding: '24px 28px',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                textAlign: 'center', flex: '1', minWidth: '140px',
                transition: 'all 0.3s ease',
              }}>
                <div style={{ color: 'var(--gold-primary)', marginBottom: '10px' }}>{s.icon}</div>
                <div style={{
                  fontSize: '28px', fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                }} className="text-gold-gradient">{s.val}</div>
                <div style={{
                  fontSize: '12px', color: 'var(--text-muted)',
                  marginTop: '4px', fontFamily: 'var(--font-sans)',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MISSION SECTION
      ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>

            {/* Left: Mission */}
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
                color: 'var(--gold-primary)', textTransform: 'uppercase',
                letterSpacing: '0.12em', marginBottom: '14px',
              }}>
                Our Mission
              </div>
              <h2 style={{
                fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800,
                marginBottom: '24px', lineHeight: 1.15,
              }}>
                Empowering Traders to <span className="text-gold-gradient">Trade God's Way</span>
              </h2>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '16px',
                lineHeight: '1.75', marginBottom: '16px',
              }}>
                We founded LordFunded on the conviction that the financial markets are a place where
                faith, discipline, and stewardship converge. Trading isn't gambling — it's a skill
                that rewards patience, consistency, and integrity.
              </p>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '16px',
                lineHeight: '1.75', marginBottom: '28px',
              }}>
                Our mission is to remove the barrier of capital for skilled traders worldwide. Whether
                you trade forex, gold, crypto, or indices — if you demonstrate consistency and
                discipline, we'll fund your journey.
              </p>

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Static drawdown — never trails, never tightens',
                  'Challenge fee refunded on your first payout',
                  'Profit splits scale up to 100% over time',
                  'No minimum trading days on HFT accounts',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} className="text-gold" />
                    <span style={{ fontSize: '15px', color: 'var(--text-primary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual card */}
            <div style={{
              background: 'rgba(14,13,10,0.6)',
              border: '1px solid rgba(212,175,55,0.15)',
              borderRadius: '20px', padding: '40px',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              position: 'relative', overflow: 'hidden',
            }}>
              {/* Decorative gradient */}
              <div style={{
                position: 'absolute', top: '-40px', right: '-40px',
                width: '180px', height: '180px',
                background: 'radial-gradient(circle, rgba(212,175,55,0.12), transparent 70%)',
                filter: 'blur(30px)', pointerEvents: 'none',
              }} />

              <div style={{
                fontSize: '60px', fontWeight: 900,
                fontFamily: 'Georgia, serif',
                color: 'rgba(212,175,55,0.1)',
                lineHeight: 1, marginBottom: '20px',
              }}>"</div>

              <p style={{
                fontSize: '20px', fontStyle: 'italic',
                lineHeight: '1.7', color: 'rgba(255,255,255,0.9)',
                marginBottom: '28px', fontFamily: 'var(--font-sans)',
              }}>
                Whoever can be trusted with very little can also be trusted with much.
                We fund traders who prove they can be trusted — starting small, growing big.
              </p>

              <div style={{
                width: '60px', height: '3px',
                background: 'linear-gradient(90deg, #d4af37, transparent)',
                borderRadius: '2px', marginBottom: '20px',
              }} />

              <div style={{
                fontFamily: 'var(--font-heading)', fontSize: '14px',
                fontWeight: 700, color: 'var(--gold-primary)',
              }}>
                — The LordFunded Philosophy
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .grid-2 { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>
              Our Core Values
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
              marginBottom: '16px',
            }}>
              What Sets Us <span className="text-gold-gradient">Apart</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '16px',
              maxWidth: '560px', margin: '0 auto',
            }}>
              Every decision we make is guided by these principles.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid-3" style={{ gap: '20px' }}>
            {values.map((v, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(14,13,10,0.6)',
                  border: '1px solid rgba(212,175,55,0.1)',
                  borderRadius: '18px', padding: '32px 28px',
                  backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                  e.currentTarget.style.boxShadow = '0 0 28px rgba(212,175,55,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  width: '50px', height: '50px', borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-primary)', marginBottom: '20px',
                }}>
                  {v.icon}
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '17px',
                  fontWeight: 700, color: 'white', marginBottom: '10px',
                }}>{v.title}</h4>
                <p style={{
                  fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65',
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TIMELINE / OUR JOURNEY
      ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>
              Our Journey
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
              marginBottom: '16px',
            }}>
              From Vision to <span className="text-gold-gradient">Reality</span>
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '20px', top: '8px', bottom: '8px',
              width: '2px',
              background: 'linear-gradient(180deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1), transparent)',
            }} />

            {timeline.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex', gap: '28px', marginBottom: '48px',
                position: 'relative',
              }}>
                {/* Dot */}
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'rgba(212,175,55,0.1)',
                  border: '2px solid rgba(212,175,55,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 0 16px rgba(212,175,55,0.15)',
                }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: '#d4af37',
                    boxShadow: '0 0 10px rgba(212,175,55,0.6)',
                  }} />
                </div>

                {/* Content */}
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)', fontSize: '12px',
                    color: 'var(--gold-primary)', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    marginBottom: '6px',
                  }}>
                    {item.year}
                  </div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)', fontSize: '18px',
                    fontWeight: 700, color: 'white', marginBottom: '8px',
                  }}>{item.title}</h4>
                  <p style={{
                    fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: '1.65',
                  }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════ */}
      <section style={{
        padding: '80px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div className="container">
          <div style={{
            background: 'rgba(14,13,10,0.7)',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '24px', padding: '64px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', top: '-60px', left: '50%',
              transform: 'translateX(-50%)',
              width: '400px', height: '200px',
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.12), transparent 70%)',
              filter: 'blur(40px)', pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
                marginBottom: '18px',
              }}>
                Ready to Trade With <span className="text-gold-gradient">Purpose</span>?
              </h2>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '17px',
                maxWidth: '520px', margin: '0 auto 32px', lineHeight: '1.7',
              }}>
                Join thousands of disciplined traders who are funded by LordFunded. Start your challenge today.
              </p>
              <a href="/" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                Get Started Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
