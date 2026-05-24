import React from 'react';
import { Calendar, Percent, ShieldCheck, Scale, Award, RefreshCw, ArrowRight, Shield, Zap, TrendingUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturesPage() {
  const { t } = useLanguage();

  const features = [
    { icon: <Calendar size={28} className="text-gold" />, title: t('feat1Title'), desc: t('feat1Desc') },
    { icon: <ShieldCheck size={28} className="text-gold" />, title: t('feat2Title'), desc: t('feat2Desc') },
    { icon: <Percent size={28} className="text-gold" />, title: t('feat3Title'), desc: t('feat3Desc') },
    { icon: <RefreshCw size={28} className="text-gold" />, title: t('feat4Title'), desc: t('feat4Desc') },
    { icon: <Scale size={28} className="text-gold" />, title: t('feat5Title'), desc: t('feat5Desc') },
    { icon: <Award size={28} className="text-gold" />, title: t('feat6Title'), desc: t('feat6Desc') },
  ];

  const highlights = [
    {
      icon: <Shield size={24} />,
      title: 'Static Drawdown Protection',
      desc: 'All drawdown limits on our accounts are calculated statically based on your initial account balance. The floor never trails, never tightens, and never shifts against your profits. If you earn profit, it increases your breathing room.',
      tag: 'FAIR STABILIZATION'
    },
    {
      icon: <Zap size={24} />,
      title: 'Lightning-Fast Execution',
      desc: 'Our servers are colocated in premium NY4/LD4 financial data centers. Execute trades with single-digit millisecond latency, ultra-low slippage, and deep simulated liquidity to match real market scenarios.',
      tag: 'SPEED & PRECISION'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Capital Expansion Plan',
      desc: 'Demonstrate consistency by completing three consecutive profitable payout cycles, and we will scale your funded account size by 25% (20% for Lord Instant accounts). Multiply your buying power up to $2,000,000.',
      tag: 'SCALING ROADMAP'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative', padding: '160px 0 80px',
        textAlign: 'center', overflow: 'hidden',
      }}>
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
            <Award size={14} /> {t('featuresTag')}
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800,
            lineHeight: 1.1, marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px',
          }}>
            {t('featuresTitle1')} <span className="text-gold-gradient">{t('featuresTitle2')}</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '18px',
            lineHeight: '1.7', maxWidth: '620px', margin: '0 auto 40px',
          }}>
            {t('featuresDesc')}
          </p>
        </div>
      </section>

      {/* Main Core Features Grid Section */}
      <section style={{ padding: '40px 0 80px', position: 'relative' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '20px' }}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '36px 32px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  height: '100%',
                }}
              >
                <div style={{
                  background: 'rgba(212, 175, 55, 0.06)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  color: 'var(--gold-primary)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '12px',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / Advanced Technical Section */}
      <section style={{ padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>
              Advanced Standards
            </div>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800,
              marginBottom: '16px',
            }}>
              Why Our Infrastructure <span className="text-gold-gradient">Wins</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)', fontSize: '16px',
              maxWidth: '560px', margin: '0 auto',
            }}>
              A prop trading environment built on transparency, scalability, and performance.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
            {highlights.map((hl, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(14,13,10,0.65)',
                  border: '1px solid rgba(212,175,55,0.12)',
                  borderRadius: '24px',
                  padding: '40px',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  display: 'flex',
                  gap: '32px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {/* Icon box */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(212,175,55,0.06)',
                  border: '1px solid rgba(212,175,55,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-primary)',
                  flexShrink: 0,
                }}>
                  {hl.icon}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--gold-primary)',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    {hl.tag}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '10px',
                  }}>
                    {hl.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                  }}>
                    {hl.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '60px 0 120px', position: 'relative', overflow: 'hidden',
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
                Ready to Experience <span className="text-gold-gradient">Elite Infrastructure</span>?
              </h2>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '17px',
                maxWidth: '520px', margin: '0 auto 32px', lineHeight: '1.7',
              }}>
                Choose from our flexible evaluation options, trade with maximum freedom, and secure splits up to 100%.
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
