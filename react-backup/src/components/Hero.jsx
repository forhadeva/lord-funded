import React from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import TradingVisual3D from './TradingVisual3D';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '160px 0 100px 0',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Backgrounds */}
      <div className="bg-grid"></div>
      
      {/* Gold Ambient Glows */}
      <div
        className="glow-overlay"
        style={{
          width: '500px',
          height: '500px',
          top: '-10%',
          right: '-10%',
        }}
      ></div>
      <div
        className="glow-overlay"
        style={{
          width: '400px',
          height: '400px',
          bottom: '-10%',
          left: '-10%',
          opacity: 0.1,
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Text Column */}
          <div style={{ textAlign: 'left' }}>
            {/* Tagline Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                padding: '8px 16px',
                borderRadius: '100px',
                fontSize: '13px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: 'var(--gold-primary)',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              <Award size={16} />
              {t('heroTag')}
            </div>

            <h1
              style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1.1,
                marginBottom: '20px',
                fontWeight: 800,
              }}
            >
              {t('heroTitle1')}<br />
              {t('heroTitle2')} <span className="text-gold-gradient">90% {t('heroTitle3')}</span>
            </h1>

            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '540px',
              }}
            >
              {t('heroDesc')} <strong className="text-gold">$500,000</strong>{t('heroDesc2')}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              <a href="#challenges" className="btn btn-primary">
                {t('heroBtn1')}
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                {t('heroBtn2')}
              </a>
            </div>

            {/* Trust Markers */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[t('heroBullet1'), t('heroBullet2'), t('heroBullet3')].map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} className="text-gold" />
                  <span style={{ fontSize: '15px', color: 'var(--text-primary)' }}>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column — Pure CSS 3D */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TradingVisual3D />
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          #hero {
            padding: 120px 0 60px 0;
            text-align: center;
          }
          #hero [style*="text-align: left"] {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #hero [style*="display: inline-flex"] {
            margin-left: auto;
            margin-right: auto;
          }
          #hero [style*="max-width: 540px"] {
            margin-left: auto;
            margin-right: auto;
          }
          .grid-2 {
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
