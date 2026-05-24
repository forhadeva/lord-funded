import React, { useState } from 'react';
import { Check, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const challengeData = {
  '1-step': {
    title: '1-Step Evaluation',
    steps: 1,
    sizes: [
      { size: '$10,000', fee: '$89', profit: '9%', dailyLoss: '5% ($500)', maxLoss: '8% ($800)' },
      { size: '$25,000', fee: '$179', profit: '9%', dailyLoss: '5% ($1,250)', maxLoss: '8% ($2,000)' },
      { size: '$50,000', fee: '$299', profit: '9%', dailyLoss: '5% ($2,500)', maxLoss: '8% ($4,000)' },
      { size: '$100,000', fee: '$499', profit: '9%', dailyLoss: '5% ($5,000)', maxLoss: '8% ($8,000)' },
      { size: '$200,000', fee: '$949', profit: '9%', dailyLoss: '5% ($10,000)', maxLoss: '8% ($16,000)' },
    ],
  },
  '2-step': {
    title: '2-Step Evaluation',
    steps: 2,
    sizes: [
      { size: '$10,000', fee: '$99', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($500)', maxLoss: '10% ($1,000)' },
      { size: '$25,000', fee: '$189', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($1,250)', maxLoss: '10% ($2,500)' },
      { size: '$50,000', fee: '$289', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($2,500)', maxLoss: '10% ($5,000)' },
      { size: '$100,000', fee: '$479', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($5,000)', maxLoss: '10% ($10,000)' },
      { size: '$200,000', fee: '$899', profit: 'P1: 8% | P2: 5%', dailyLoss: '5% ($10,000)', maxLoss: '10% ($20,000)' },
    ],
  },
};

export default function ChallengeCalculator() {
  const [model, setModel] = useState('2-step');
  const [activeSizeIdx, setActiveSizeIdx] = useState(3); // Default to $100,000

  const currentModelData = challengeData[model];
  const currentPlan = currentModelData.sizes[activeSizeIdx];
  const { t } = useLanguage();

  return (
    <section id="challenges" style={{ padding: '100px 0', position: 'relative' }}>
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
            {t('challengesTag')}
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              marginBottom: '16px',
            }}
          >
            {t('challengesTitle1')} <span className="text-gold-gradient">{t('challengesTitle2')}</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: '16px',
            }}
          >
            Choose between our 1-Step or 2-Step funding evaluation challenges. Pass the targets to trade simulated capital.
          </p>
        </div>

        {/* Challenge Interactive Widget Container */}
        <div
          className="grid-2"
          style={{
            background: 'rgba(10, 10, 12, 0.4)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: 'var(--gold-glow)',
            alignItems: 'stretch',
            gap: '40px',
          }}
        >
          {/* Left Controls Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
            <div>
              {/* Model Toggle Buttons */}
              <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '16px' }}>
                1. Select Evaluation Phase Model
              </h3>
              <div
                style={{
                  display: 'inline-flex',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '100px',
                  padding: '4px',
                  marginBottom: '32px',
                  width: '100%',
                }}
              >
                {Object.keys(challengeData).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setModel(key);
                    }}
                    style={{
                      flex: 1,
                      border: 'none',
                      background: model === key ? 'var(--gold-gradient)' : 'transparent',
                      color: model === key ? '#000000' : 'var(--text-secondary)',
                      padding: '12px 24px',
                      borderRadius: '100px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontFamily: 'var(--font-heading)',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {challengeData[key].title}
                  </button>
                ))}
              </div>

              {/* Account Size Selectors */}
              <h3 style={{ fontSize: '18px', fontFamily: 'var(--font-heading)', color: 'white', marginBottom: '16px' }}>
                2. Choose Account Size
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: '12px',
                  marginBottom: '32px',
                }}
              >
                {currentModelData.sizes.map((item, idx) => (
                  <button
                    key={item.size}
                    onClick={() => setActiveSizeIdx(idx)}
                    style={{
                      border: activeSizeIdx === idx ? '2px solid var(--gold-primary)' : '1px solid var(--border-color)',
                      background: activeSizeIdx === idx ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                      color: activeSizeIdx === idx ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      padding: '16px 8px',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      transition: 'all 0.2s ease',
                      boxShadow: activeSizeIdx === idx ? 'var(--gold-glow)' : 'none',
                    }}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Rules Info Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                padding: '20px',
                borderRadius: '14px',
                background: 'rgba(212, 175, 55, 0.04)',
                border: '1px dashed rgba(212, 175, 55, 0.25)',
              }}
            >
              <ShieldCheck size={24} className="text-gold" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: 'white', fontSize: '14px', fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '4px' }}>
                  No Time Limit Challenge
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: '1.4' }}>
                  Trade as calmly as you wish. There is no maximum duration. The registration fee is fully refunded upon reaching the funded stage.
                </p>
              </div>
            </div>
          </div>

          {/* Right Rules Card Panel (Invoice Style) */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              boxShadow: 'var(--gold-glow-strong)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'left',
            }}
          >
            <div>
              {/* Account Title & Price tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {currentModelData.title}
                  </span>
                  <h3 style={{ fontSize: '28px', color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
                    {currentPlan.size} Account
                  </h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Refundable Fee</span>
                  <div style={{ fontSize: '36px', color: 'var(--gold-primary)', fontFamily: 'var(--font-heading)', fontWeight: 800 }}>
                    {currentPlan.fee}
                  </div>
                </div>
              </div>

              {/* Dividers */}
              <hr style={{ border: 'none', borderTop: '1px solid rgba(212, 175, 55, 0.15)', marginBottom: '24px' }} />

              {/* Plan Rules List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  { label: 'Profit Target', value: currentPlan.profit },
                  { label: 'Daily Drawdown Limit (Balance-based)', value: currentPlan.dailyLoss },
                  { label: 'Max Overall Drawdown (Static)', value: currentPlan.maxLoss },
                  { label: 'Minimum Trading Days', value: '0 Days' },
                  { label: 'Profit Split Split', value: 'Up to 90%' },
                  { label: 'Leverage Limit', value: '1:100 Forex' },
                ].map((rule, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} className="text-gold" />
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{rule.label}</span>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>{rule.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Order CTA */}
            <button className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
              Buy Evaluation Challenge
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          #challenges [style*="padding: 32px"] {
            padding: 20px !important;
          }
          #challenges .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
