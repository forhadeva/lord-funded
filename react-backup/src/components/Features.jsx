import React from 'react';
import { Calendar, Percent, ShieldCheck, Scale, Award, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: <Calendar size={28} className="text-gold" />, title: t('feat1Title'), desc: t('feat1Desc') },
    { icon: <ShieldCheck size={28} className="text-gold" />, title: t('feat2Title'), desc: t('feat2Desc') },
    { icon: <Percent size={28} className="text-gold" />, title: t('feat3Title'), desc: t('feat3Desc') },
    { icon: <RefreshCw size={28} className="text-gold" />, title: t('feat4Title'), desc: t('feat4Desc') },
    { icon: <Scale size={28} className="text-gold" />, title: t('feat5Title'), desc: t('feat5Desc') },
    { icon: <Award size={28} className="text-gold" />, title: t('feat6Title'), desc: t('feat6Desc') },
  ];

  return (
    <section
      id="features"
      style={{
        padding: '100px 0',
        position: 'relative',
        background: 'linear-gradient(to bottom, #050506 0%, #0a0a0c 50%, #050506 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="glow-overlay" style={{ width: '500px', height: '500px', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05 }}></div>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700, color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
            {t('featuresTag')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>
            {t('featuresTitle1')} <span className="text-gold-gradient">{t('featuresTitle2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
            {t('featuresDesc')}
          </p>
        </div>
        <div className="grid-3">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '36px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.06)', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '16px', borderRadius: '12px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
