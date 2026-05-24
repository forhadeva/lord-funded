import React from 'react';
import { ClipboardCheck, CheckSquare, Crown, ArrowRight, ArrowDown, DollarSign, TrendingUp, Shield, Zap, BarChart3, Users, Clock } from 'lucide-react';

const mainSteps = [
  {
    num: '01',
    icon: <ClipboardCheck size={32} />,
    step: 'Step 1: Build Profit',
    title: 'The Challenge',
    desc: 'Choose your account type and size, pay the one-time challenge fee, and start trading. Meet the profit target while respecting daily and overall drawdown limits. No time pressure — trade at your own pace.',
    details: [
      'Choose from Trial, Quest, Throne, or Lord accounts',
      'Account sizes from $5K up to $500K',
      'Profit target: 10% (Step 1) or 10%/5% (Step 2)',
      'Static drawdown — floor never moves or trails',
    ],
    color: '#d4af37',
  },
  {
    num: '02',
    icon: <CheckSquare size={32} />,
    step: 'Step 2: Confirm Success',
    title: 'The Verification',
    desc: 'For Quest (Step 2) accounts, verify your consistency in a second phase with a reduced 5% profit target under the same drawdown rules. Trial and Throne accounts skip this step entirely.',
    details: [
      'Reduced 5% profit target (Quest only)',
      'Same drawdown rules as Phase 1',
      'Trial & Throne accounts skip verification',
      'Lord Instant has zero challenge phases',
    ],
    color: '#10b981',
  },
  {
    num: '03',
    icon: <Crown size={32} />,
    step: 'Step 3: Keep 90% Profits',
    title: 'The Funded Lord',
    desc: 'Once you pass, you receive a live funded account with real capital. Trade the firm\'s money, keep up to 90% of profits (scaling to 100%), and get paid every 21 days. Your challenge fee is fully refunded on your first payout.',
    details: [
      'Profit split starts at 80% (75% for Lord)',
      'Split increases by 5% after each payout',
      'Scales all the way up to 100% profit split',
      'Challenge fee fully refunded on first payout',
    ],
    color: '#8b5cf6',
  },
];

const accountComparison = [
  { type: 'Trial (Step 1)', phases: '1 Phase', target: '10%', minDays: '5 days', split: '80%', color: '#d4af37' },
  { type: 'Quest (Step 2)', phases: '2 Phases', target: '10% / 5%', minDays: '5 + 5 days', split: '80%', color: '#10b981' },
  { type: 'Throne (HFT)', phases: '1 Phase', target: '10%', minDays: 'None', split: '80%', color: '#8b5cf6' },
  { type: 'Lord (Instant)', phases: 'None', target: 'None', minDays: 'None', split: '75%', color: '#ef4444' },
];

const extras = [
  { icon: <Shield size={24} />, title: 'Static Drawdown', desc: 'Your drawdown floor is fixed at initial balance. It never moves, never trails, never tightens — no matter how much profit you generate.' },
  { icon: <DollarSign size={24} />, title: 'Fee Refund', desc: 'Your entire challenge fee is refunded on your very first funded payout. It\'s like getting the challenge for free.' },
  { icon: <TrendingUp size={24} />, title: 'Scaling Plan', desc: 'After 3 consecutive profitable payouts, your account grows by 25% (20% for Lord). Your capital increases as you perform.' },
  { icon: <Clock size={24} />, title: '21-Day Payouts', desc: 'Payouts are processed every 21 days via bank wire, USDT, BTC, Wise, or Deel. Minimum $100 withdrawal.' },
  { icon: <Zap size={24} />, title: 'No Time Limits', desc: 'Take as long as you need to pass. There is no maximum time limit on any challenge phase.' },
  { icon: <BarChart3 size={24} />, title: 'Real Conditions', desc: 'All accounts operate in a simulated environment designed to mirror real market conditions with real-time pricing.' },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', padding: '160px 0 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div className="bg-grid" />
        <div className="glow-overlay" style={{ width: '500px', height: '500px', top: '-15%', left: '50%', transform: 'translateX(-50%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)',
            padding: '6px 18px', borderRadius: '100px', fontSize: '12px',
            fontFamily: 'var(--font-heading)', fontWeight: 600,
            color: 'var(--gold-primary)', letterSpacing: '0.08em',
            textTransform: 'uppercase', marginBottom: '24px',
          }}>
            The Funding Roadmap
          </div>

          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '18px' }}>
            Three Steps To <span className="text-gold-gradient">Become Funded</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '600px', margin: '0 auto' }}>
            Our evaluations are simple, structured, and designed to filter for disciplined risk management.
          </p>
        </div>
      </section>

      {/* ═══ MAIN 3 STEPS ═══ */}
      <section style={{ padding: '20px 0 80px' }}>
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {mainSteps.map((step, idx) => (
              <div key={idx}>
                {/* Step Card */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px',
                  alignItems: 'center', marginBottom: idx < mainSteps.length - 1 ? '0' : '0',
                }}>
                  {/* Left: Content */}
                  <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                    {/* Step badge */}
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      background: `${step.color}10`, border: `1px solid ${step.color}30`,
                      padding: '5px 14px', borderRadius: '100px',
                      fontSize: '11px', fontFamily: 'var(--font-heading)', fontWeight: 700,
                      color: step.color, letterSpacing: '0.08em', textTransform: 'uppercase',
                      marginBottom: '16px',
                    }}>
                      {step.step}
                    </div>

                    <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                      {step.title}
                    </h2>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.75', marginBottom: '24px' }}>
                      {step.desc}
                    </p>

                    {/* Detail bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {step.details.map((d, di) => (
                        <div key={di} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{
                            width: '20px', height: '20px', borderRadius: '6px',
                            background: `${step.color}15`, border: `1px solid ${step.color}30`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                          }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: step.color }} />
                          </div>
                          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Visual Card */}
                  <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                    <div style={{
                      background: 'rgba(14,13,10,0.65)',
                      border: `1px solid ${step.color}20`,
                      borderRadius: '24px', padding: '48px 40px',
                      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                      position: 'relative', overflow: 'hidden',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}>
                      {/* Big number */}
                      <div style={{
                        position: 'absolute', top: '16px', right: '24px',
                        fontSize: '100px', fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        color: `${step.color}08`, lineHeight: 1,
                      }}>{step.num}</div>

                      {/* Glow */}
                      <div style={{
                        position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
                        width: '200px', height: '120px',
                        background: `radial-gradient(ellipse, ${step.color}15, transparent 70%)`,
                        filter: 'blur(25px)', pointerEvents: 'none',
                      }} />

                      {/* Icon */}
                      <div style={{
                        width: '72px', height: '72px', borderRadius: '20px',
                        background: `${step.color}10`, border: `1px solid ${step.color}25`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: step.color, margin: '0 auto 24px',
                        position: 'relative',
                      }}>{step.icon}</div>

                      <div style={{
                        fontSize: '18px', fontWeight: 700,
                        fontFamily: 'var(--font-heading)', color: 'white',
                        marginBottom: '8px', position: 'relative',
                      }}>{step.title}</div>

                      <div style={{
                        fontSize: '13px', color: step.color,
                        fontFamily: 'var(--font-heading)', fontWeight: 600,
                        position: 'relative',
                      }}>{step.step}</div>
                    </div>
                  </div>
                </div>

                {/* Connector arrow */}
                {idx < mainSteps.length - 1 && (
                  <div style={{ textAlign: 'center', padding: '32px 0' }}>
                    <ArrowDown size={28} style={{ color: 'rgba(212,175,55,0.25)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            [style*="grid-template-columns: 1fr 1fr"][style*="gap: 48px"] {
              grid-template-columns: 1fr !important;
            }
            [style*="order: 2"] { order: 2 !important; }
            [style*="order: 1"] { order: 1 !important; }
          }
        `}</style>
      </section>

      {/* ═══ ACCOUNT COMPARISON TABLE ═══ */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>Compare Account Types</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800 }}>
              Find Your <span className="text-gold-gradient">Perfect Fit</span>
            </h2>
          </div>

          {/* Table */}
          <div style={{
            maxWidth: '900px', margin: '0 auto',
            background: 'rgba(14,13,10,0.6)',
            border: '1px solid rgba(212,175,55,0.12)',
            borderRadius: '20px', overflow: 'hidden',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          }}>
            {/* Header */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
              padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(212,175,55,0.03)',
            }}>
              {['Account Type', 'Phases', 'Profit Target', 'Min. Days', 'Profit Split'].map((h, i) => (
                <div key={i} style={{
                  fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-heading)',
                  color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.06em',
                }}>{h}</div>
              ))}
            </div>

            {/* Rows */}
            {accountComparison.map((row, idx) => (
              <div key={idx} style={{
                display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr',
                padding: '18px 24px', alignItems: 'center',
                borderBottom: idx < accountComparison.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                transition: 'background 0.2s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: row.color, boxShadow: `0 0 8px ${row.color}66` }} />
                  <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'white' }}>{row.type}</span>
                </div>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{row.phases}</span>
                <span style={{ fontSize: '14px', color: row.target === 'None' ? '#10b981' : 'var(--text-secondary)', fontWeight: row.target === 'None' ? 600 : 400 }}>{row.target}</span>
                <span style={{ fontSize: '14px', color: row.minDays === 'None' ? '#10b981' : 'var(--text-secondary)', fontWeight: row.minDays === 'None' ? 600 : 400 }}>{row.minDays}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'white' }}>{row.split}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KEY BENEFITS ═══ */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800 }}>
              Built For <span className="text-gold-gradient">Your Success</span>
            </h2>
          </div>

          <div className="grid-3" style={{ gap: '20px' }}>
            {extras.map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(14,13,10,0.6)',
                border: '1px solid rgba(212,175,55,0.1)',
                borderRadius: '18px', padding: '32px 24px',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{
                  background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)',
                  width: '50px', height: '50px', borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-primary)', marginBottom: '18px',
                }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '40px 0 100px' }}>
        <div className="container">
          <div style={{
            background: 'rgba(14,13,10,0.7)', border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '24px', padding: '64px 48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          }}>
            <div style={{
              position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
              width: '400px', height: '200px',
              background: 'radial-gradient(ellipse, rgba(212,175,55,0.12), transparent 70%)',
              filter: 'blur(40px)', pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
                Ready to Start Your <span className="text-gold-gradient">Journey</span>?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.7' }}>
                Choose your challenge, prove your discipline, and trade with up to $500,000 in funded capital.
              </p>
              <a href="/challenges" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                View Challenges <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
