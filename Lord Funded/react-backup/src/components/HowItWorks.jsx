import React from 'react';
import { ClipboardList, CheckSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { num: '01', icon: <ClipboardList size={32} className="text-gold" />, title: t('step1Title'), subtitle: t('step1Tag'), desc: t('step1Desc') },
    { num: '02', icon: <CheckSquare size={32} className="text-gold" />, title: t('step2Title'), subtitle: t('step2Tag'), desc: t('step2Desc') },
    { num: '03', icon: <ShieldCheck size={32} className="text-gold" />, title: t('step3Title'), subtitle: t('step3Tag'), desc: t('step3Desc') },
  ];

  return (
    <section id="how-it-works" style={{ padding: '100px 0', position: 'relative', background: 'linear-gradient(to bottom, #050506 0%, #0a0a0c 50%, #050506 100%)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            {t('howItWorksTag')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>
            {t('howItWorksTitle1')} <span className="text-gold-gradient">{t('howItWorksTitle2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
            {t('howItWorksDesc')}
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '24px', position: 'relative' }} className="stepper-row">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="glass-panel" style={{ flex: 1, padding: '40px 32px', textAlign: 'left', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '48px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'rgba(212, 175, 55, 0.08)', userSelect: 'none' }}>{step.num}</div>
                <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.15)', padding: '16px', borderRadius: '16px', marginBottom: '24px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)' }}>{step.icon}</div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-primary)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{step.subtitle}</span>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="step-connector" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(212, 175, 55, 0.2)' }}>
                  <ChevronRight size={32} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .stepper-row { flex-direction: column !important; gap: 32px !important; }
          .step-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
