import React from 'react';
import { Heart, Target, Shield, Users, TrendingUp, BookOpen } from 'lucide-react';

const values = [
  {
    icon: <Heart size={24} className="text-gold" />,
    title: 'Faith-Driven Mission',
    desc: 'We believe faithful stewardship of capital is a calling. Every trader we fund is empowered to trade with purpose and integrity.',
  },
  {
    icon: <Shield size={24} className="text-gold" />,
    title: 'Full Transparency',
    desc: 'No hidden rules, no trailing drawdowns, no surprise disqualifications. What you see is what you get — always.',
  },
  {
    icon: <Target size={24} className="text-gold" />,
    title: 'Trader-First Design',
    desc: 'Every rule, every feature, every payout structure is designed to help skilled traders succeed — not to make them fail.',
  },
  {
    icon: <Users size={24} className="text-gold" />,
    title: 'Global Community',
    desc: 'Traders from 80+ countries trust LordFunded. Our growing community is proof that discipline and faith create results.',
  },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.04), transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>

          {/* Left: Text Content */}
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>
              About LordFunded
            </div>

            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
              marginBottom: '20px', lineHeight: 1.15,
            }}>
              Empowering Traders With <span className="text-gold-gradient">Purpose & Capital</span>
            </h2>

            <p style={{
              color: 'var(--text-secondary)', fontSize: '16px',
              lineHeight: '1.75', marginBottom: '20px',
            }}>
              LordFunded is a faith-inspired proprietary trading firm built on the principle that
              disciplined traders deserve access to real capital. We don't just fund accounts — we
              invest in people who trade with consistency, patience, and integrity.
            </p>

            <p style={{
              color: 'var(--text-secondary)', fontSize: '16px',
              lineHeight: '1.75', marginBottom: '32px',
            }}>
              With account sizes up to <strong className="text-gold">$500,000</strong>, profit
              splits scaling to <strong className="text-gold">100%</strong>, and a commitment to
              transparent, static drawdown rules — we've built the prop firm that traders actually
              want to trade with.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '40px', flexWrap: 'wrap',
            }}>
              {[
                { val: '$500K', label: 'Max Funding' },
                { val: '100%', label: 'Profit Split' },
                { val: '80+', label: 'Countries' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '32px', fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                  }} className="text-gold-gradient">
                    {stat.val}
                  </div>
                  <div style={{
                    fontSize: '13px', color: 'var(--text-muted)',
                    fontFamily: 'var(--font-sans)', marginTop: '2px',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Value Cards Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}>
            {values.map((v, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(14,13,10,0.6)',
                  border: '1px solid rgba(212,175,55,0.12)',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(212,175,55,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div style={{
                  background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  width: '48px', height: '48px',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  {v.icon}
                </div>

                {/* Title */}
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px', fontWeight: 700,
                  color: 'white', marginBottom: '8px',
                }}>
                  {v.title}
                </h4>

                {/* Desc */}
                <p style={{
                  fontSize: '13px', color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          #about [style*="text-align: left"] {
            text-align: center !important;
          }
          #about [style*="display: flex"][style*="gap: 40px"] {
            justify-content: center !important;
          }
        }
        @media (max-width: 640px) {
          #about [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
