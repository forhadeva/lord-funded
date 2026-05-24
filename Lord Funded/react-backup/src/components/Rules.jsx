import React from 'react';
import { CheckCircle2, XCircle, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const allowed = [
  { title: 'News Trading', desc: 'Execute trades freely before, during, and after high-impact economic news releases.' },
  { title: 'Expert Advisors (EAs)', desc: 'Deploy automated trading bots, indicators, and copy-traders configured to your own accounts.' },
  { title: 'Weekend Holding', desc: 'Hold open swing positions through weekends without forced closures.' },
  { title: 'Hedging Positions', desc: 'Hedge positions on the same currency pair to manage risk directionally.' },
];

const prohibited = [
  { title: 'Latency Arbitrage', desc: 'Exploiting pricing feed latency between platforms is strictly forbidden.' },
  { title: 'HFT Manipulation', desc: 'High-frequency algorithms designed to spam orders or exploit demo server vulnerabilities.' },
  { title: 'Multi-Account Hedging', desc: 'Opposing positions across multiple accounts to guarantee payouts.' },
  { title: 'Third-Party Management', desc: 'Account sharing or utilizing public pass-key services violates rules.' },
];

export default function Rules() {
  const { t } = useLanguage();
  return (
    <section
      id="rules"
      style={{
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div className="bg-grid"></div>

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px',
            }}
          >
            {t('rulesTag')}
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              marginBottom: '16px',
            }}
          >
            {t('rulesTitle1')} <span className="text-gold-gradient">{t('rulesTitle2')}</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '16px',
            }}
          >
            {t('rulesDesc')}
          </p>
        </div>

        {/* Rules Comparison Grid */}
        <div className="grid-2" style={{ gap: '32px', alignItems: 'stretch' }}>
          
          {/* Allowed Column */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              border: '1px solid rgba(16, 185, 129, 0.15)', // Subtle green/emerald theme for success
              background: 'rgba(10, 10, 12, 0.4)',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '10px',
                  borderRadius: '10px',
                  color: '#10b981',
                }}
              >
                <CheckCircle2 size={24} />
              </div>
              <h3 style={{ fontSize: '22px', color: 'white', fontFamily: 'var(--font-heading)' }}>Allowed Strategies</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {allowed.map((rule, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ color: 'white', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{rule.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: '1.5' }}>{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibited Column */}
          <div
            className="glass-panel"
            style={{
              padding: '40px',
              border: '1px solid rgba(239, 68, 68, 0.15)', // Muted red for warning
              background: 'rgba(10, 10, 12, 0.4)',
              textAlign: 'left',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  padding: '10px',
                  borderRadius: '10px',
                  color: '#ef4444',
                }}
              >
                <ShieldAlert size={24} />
              </div>
              <h3 style={{ fontSize: '22px', color: 'white', fontFamily: 'var(--font-heading)' }}>Prohibited Actions</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {prohibited.map((rule, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <XCircle size={18} style={{ color: '#ef4444', flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h4 style={{ color: 'white', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{rule.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: '1.5' }}>{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
