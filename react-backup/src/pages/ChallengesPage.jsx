import React, { useState } from 'react';
import { Crown, ArrowRight, CheckCircle2, Star, ChevronDown, Shield, Zap, TrendingUp, AlertTriangle, XCircle } from 'lucide-react';

const ACCOUNT_TYPES = [
  { key: 'step1', label: 'Trial', sub: 'Step 1', color: '#d4af37', tagline: 'Single-phase evaluation — 10% profit target' },
  { key: 'step2', label: 'Quest', sub: 'Step 2', color: '#10b981', tagline: 'Two-stage evaluation — 10% then 5% target' },
  { key: 'hft',   label: 'Throne', sub: 'HFT', color: '#8b5cf6', tagline: 'Built for algorithmic traders — no minimum days' },
  { key: 'lord',  label: 'Lord', sub: 'Instant', color: '#ef4444', tagline: 'Zero challenge — live funded capital from day one' },
];

const PLANS = {
  step1: [
    { size: '$5,000',   orig: '$49',  disc: '$19',  daily: '$250',    max: '$500' },
    { size: '$10,000',  orig: '$79',  disc: '$29',  daily: '$500',    max: '$1,000' },
    { size: '$25,000',  orig: '$99',  disc: '$39',  daily: '$1,250',  max: '$2,500' },
    { size: '$50,000',  orig: '$149', disc: '$59',  daily: '$2,500',  max: '$5,000', popular: true },
    { size: '$100,000', orig: '$179', disc: '$79',  daily: '$5,000',  max: '$10,000' },
    { size: '$200,000', orig: '$299', disc: '$119', daily: '$10,000', max: '$20,000' },
    { size: '$500,000', orig: '$599', disc: '$249', daily: '$25,000', max: '$50,000' },
  ],
  step2: [
    { size: '$5,000',   orig: '$29',  disc: '$14',  daily: '$250',    max: '$500' },
    { size: '$10,000',  orig: '$49',  disc: '$24',  daily: '$500',    max: '$1,000' },
    { size: '$25,000',  orig: '$69',  disc: '$34',  daily: '$1,250',  max: '$2,500' },
    { size: '$50,000',  orig: '$99',  disc: '$49',  daily: '$2,500',  max: '$5,000', popular: true },
    { size: '$100,000', orig: '$129', disc: '$64',  daily: '$5,000',  max: '$10,000' },
    { size: '$200,000', orig: '$219', disc: '$109', daily: '$10,000', max: '$20,000' },
    { size: '$500,000', orig: '$449', disc: '$224', daily: '$25,000', max: '$50,000' },
  ],
  hft: [
    { size: '$5,000',   orig: '$59',  disc: '$29',  daily: '$250',    max: '$500' },
    { size: '$10,000',  orig: '$89',  disc: '$44',  daily: '$500',    max: '$1,000' },
    { size: '$25,000',  orig: '$119', disc: '$59',  daily: '$1,250',  max: '$2,500' },
    { size: '$50,000',  orig: '$169', disc: '$84',  daily: '$2,500',  max: '$5,000', popular: true },
    { size: '$100,000', orig: '$199', disc: '$99',  daily: '$5,000',  max: '$10,000' },
    { size: '$200,000', orig: '$329', disc: '$164', daily: '$10,000', max: '$20,000' },
    { size: '$500,000', orig: '$649', disc: '$324', daily: '$25,000', max: '$50,000' },
  ],
  lord: [
    { size: '$100,000', orig: '$249', disc: '$124', daily: '$5,000',  max: '$8,000' },
    { size: '$200,000', orig: '$349', disc: '$174', daily: '$10,000', max: '$16,000', popular: true },
    { size: '$500,000', orig: '$899', disc: '$449', daily: '$25,000', max: '$40,000' },
  ],
};

const RULES = {
  step1: {
    challenge: [
      'Profit Target — 10% of initial account balance',
      'Minimum Trading Days — 5 calendar days (days without trades don\'t count)',
      'Minimum Trades — 5 trades must be executed',
      'Trading Period — Unlimited, no time cap',
      'Daily Drawdown — Max 5% loss per day (from highest balance/equity that day)',
      'Maximum Drawdown — 10% from initial or peak balance (hard limit)',
      'Max Position Size — No more than 5% of account per single trade',
    ],
    funded: [
      'Profit Split — Starts at 80%, increases 5% per payout up to 100%',
      'Payout Cycle — Every 21 days from activation date',
      'Minimum Withdrawal — $100 per request',
      'Min Withdrawal Threshold — 10% profit required before withdrawal',
      'Purchase Fee Refund — Full refund on your first payout',
      'Consistency Rule — No single day\'s profit > 30% of total profit',
      'Min Trade Hold — 3 minutes minimum on funded account',
      'Scaling — +25% account size after 3 consecutive profitable payouts',
      'KYC required before first payout',
    ],
    allowed: ['Hedging', 'News Trading', 'Crypto Trading (24/7, exempt from overnight/weekend rules)', 'Weekend Holding (challenge phase)', 'Overnight Holding — NOT permitted (except crypto)'],
    prohibited: ['Copy Trading', 'Expert Advisors / Bots', 'Scalping', 'Martingale Strategy', 'Layering (Hard Breach — immediate termination)', 'Third Party Signal Services'],
  },
  step2: {
    challenge: [
      'Stage 1 Target — 10% profit, Stage 2 Target — 5% profit',
      'Same account continues — no second purchase needed',
      'Min Trading Days — 5 days per stage (don\'t carry over)',
      'Minimum Trades — 5 per stage',
      'Trading Period — Unlimited for both stages',
      'Daily Drawdown — Max 5% per day',
      'Maximum Drawdown — 10% from initial/peak (hard limit)',
      'Max Position Size — 5% of account per trade',
      'Consistency Rule — NOT active during challenge',
    ],
    funded: [
      'Profit Split — Starts at 80%, +5% per payout up to 100%',
      'Payout Cycle — Every 21 days',
      'Minimum Withdrawal — $100 per request',
      'Full purchase fee refunded on first payout',
      'Min Trade Hold — 3 minutes on funded account',
      'Consistency Rule — Active on funded account',
      'Scaling — +25% after 3 consecutive profitable payouts',
      'KYC required before first payout',
    ],
    allowed: ['Hedging', 'News Trading', 'Weekend Holding (both stages)', 'Overnight Holding — Allowed in Stage 1 & 2', 'Crypto Trading (24/7)'],
    prohibited: ['Expert Advisors / Bots', 'Scalping', 'Martingale Strategy', 'Copy Trading', 'Third Party Signal Services', 'Layering (Hard Breach)'],
  },
  hft: {
    challenge: [
      'Profit Target — 10% of initial balance',
      'Minimum Trading Days — NONE (can pass in one session)',
      'Minimum Trades — 20 trades',
      'Trading Period — Unlimited',
      'Daily Drawdown — Max 5% per day',
      'Maximum Drawdown — 10% from initial/peak',
      'Max Open Positions — 20 simultaneous positions',
      'Max Position Size — 5% of account per trade',
      'News Blackout — No new trades 60 sec before/after high-impact news',
      'Consistency Rule — NOT active during challenge',
    ],
    funded: [
      'Profit Split — 80% starting, +5% per payout to 100%',
      'Payout Cycle — Every 21 days',
      'Min Trade Hold — 1 minute (vs 3 min on other accounts)',
      'Consistency Rule — Active (no day > 30% of total profit)',
      'Max 20 open positions',
      'Full purchase fee refunded on first payout',
      'Scaling — +25% after 3 consecutive profitable payouts',
      'News blackout window remains active',
      'No weekend/overnight holding (except crypto)',
    ],
    allowed: ['Expert Advisors & Bots (fully encouraged)', 'Scalping (no min hold in challenge)', 'High Frequency Execution', 'Hedging', 'Grid Trading', 'Statistical Arbitrage', 'Crypto Trading (24/7)', 'VPS usage (encouraged)'],
    prohibited: ['Martingale Strategy', 'Latency Arbitrage (Hard Breach)', 'Tick Scalping / Data Manipulation', 'Layering (Hard Breach)', 'Copy Trading', 'Third Party Signal Services', 'Account Sharing'],
  },
  lord: {
    challenge: [
      'NO CHALLENGE REQUIRED — Live capital from day one',
      'KYC must be completed BEFORE account activation',
      'Activated within 24 hours of KYC approval',
      'Age requirement — Minimum 18 years',
      'One active Instant account per trader',
      'Purchase fee is NON-REFUNDABLE',
    ],
    funded: [
      'Profit Split — 75% starting (lower due to no evaluation)',
      '+5% per payout, scales up to 100%',
      'First Withdrawal — After 5% profit generated',
      'Payout Cycle — Every 21 days',
      'Min Withdrawal — $100',
      'Max Withdrawal — 20% of profit per cycle',
      'Daily Drawdown — 5% (breach = permanent closure)',
      'Max Drawdown — 8% static from initial balance',
      'Profit Protection Lock — At 20% profit, floor locks 5% below peak',
      'Scaling — +20% after 3 profitable cycles',
      'Max 10 open positions, max 2 per pair per direction',
      'Min Trade Hold — 3 minutes',
    ],
    allowed: ['Hedging', 'News Trading', 'Crypto Trading (24/7)', 'Manual trading only', 'VPS for monitoring/alerts only'],
    prohibited: ['Expert Advisors / Bots', 'Scalping (3-min hold required)', 'Martingale Strategy', 'Copy Trading', 'Account Sharing', 'Layering (Hard Breach)', 'Third Party Signal Services', 'Revenge Trading Pattern', 'Gambling Behavior'],
  },
};

const SPECS = {
  step1: { target: '10%', daily: '5%', maxDD: '10%', minDays: '5', split: '80%→100%', leverage: '1:100', fee: 'Refundable' },
  step2: { target: '10% / 5%', daily: '5%', maxDD: '10%', minDays: '5+5', split: '80%→100%', leverage: '1:100', fee: 'Refundable' },
  hft:   { target: '10%', daily: '5%', maxDD: '10%', minDays: 'None', split: '80%→100%', leverage: '1:100', fee: 'Refundable' },
  lord:  { target: 'None', daily: '5%', maxDD: '8%', minDays: 'None', split: '75%→100%', leverage: '1:100', fee: 'Non-refundable' },
};

export default function ChallengesPage() {
  const [activeType, setActiveType] = useState('step1');
  const [openRule, setOpenRule] = useState(null);
  const currentType = ACCOUNT_TYPES.find(t => t.key === activeType);
  const plans = PLANS[activeType];
  const rules = RULES[activeType];
  const specs = SPECS[activeType];

  const rulesSections = [
    { key: 'challenge', title: activeType === 'lord' ? 'Activation & Eligibility' : 'Challenge Phase Rules', items: rules.challenge },
    { key: 'funded', title: 'Funded Account Rules', items: rules.funded },
    { key: 'allowed', title: 'Allowed Strategies ✅', items: rules.allowed },
    { key: 'prohibited', title: 'Prohibited Strategies ❌', items: rules.prohibited },
  ];

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', padding: '160px 0 60px', textAlign: 'center', overflow: 'hidden' }}>
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
            <Crown size={14} /> Trading Challenges
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '18px' }}>
            Choose Your <span className="text-gold-gradient">Challenge</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '580px', margin: '0 auto 20px' }}>
            Pick an account type, select your size, and start your journey to becoming a funded trader.
          </p>

          {/* 50% OFF Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(16,185,129,0.04))',
            border: '1px solid rgba(16,185,129,0.3)',
            padding: '8px 20px', borderRadius: '100px',
            fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)',
            color: '#10b981', marginBottom: '40px',
          }}>
            🔥 50% OFF — Limited Time Offer
          </div>

          {/* Account Type Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            {ACCOUNT_TYPES.map(t => (
              <button key={t.key} onClick={() => { setActiveType(t.key); setOpenRule(null); }}
                style={{
                  padding: '14px 28px', borderRadius: '14px', cursor: 'pointer',
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px',
                  transition: 'all 0.25s ease', letterSpacing: '0.02em',
                  border: `1px solid ${activeType === t.key ? `${t.color}66` : 'rgba(255,255,255,0.06)'}`,
                  background: activeType === t.key ? `${t.color}14` : 'rgba(14,13,10,0.5)',
                  color: activeType === t.key ? t.color : 'var(--text-secondary)',
                  boxShadow: activeType === t.key ? `0 0 20px ${t.color}20` : 'none',
                }}>
                {t.label} <span style={{ opacity: 0.5, fontWeight: 500, fontSize: '12px', marginLeft: '4px' }}>{t.sub}</span>
              </button>
            ))}
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{currentType.tagline}</p>
        </div>
      </section>

      {/* ═══ QUICK SPECS BAR ═══ */}
      <section style={{ padding: '0 0 40px' }}>
        <div className="container">
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',
            maxWidth: '900px', margin: '0 auto',
          }}>
            {[
              { l: 'Profit Target', v: specs.target },
              { l: 'Daily DD', v: specs.daily },
              { l: 'Max DD', v: specs.maxDD },
              { l: 'Min Days', v: specs.minDays },
              { l: 'Profit Split', v: specs.split },
              { l: 'Leverage', v: specs.leverage },
              { l: 'Fee', v: specs.fee },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(14,13,10,0.6)', border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '12px', padding: '12px 18px', textAlign: 'center',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{s.l}</div>
                <div style={{ fontSize: '15px', fontWeight: 800, fontFamily: 'var(--font-heading)', color: s.v === 'None' || s.v === 'Refundable' ? '#10b981' : s.v === 'Non-refundable' ? '#ef4444' : 'white' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING GRID (Cards) ═══ */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div className="challenges-grid" style={{
            display: 'grid',
            gridTemplateColumns: plans.length <= 3 ? `repeat(${plans.length}, 1fr)` : 'repeat(4, 1fr)',
            gap: '20px', maxWidth: '1200px', margin: '0 auto',
          }}>
            {plans.map((plan, idx) => (
              <div
                key={idx}
                style={{
                  background: plan.popular ? `${currentType.color}08` : 'rgba(14,13,10,0.65)',
                  border: `1px solid ${plan.popular ? `${currentType.color}40` : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '20px', padding: '32px 24px',
                  backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                  position: 'relative', textAlign: 'center',
                  boxShadow: plan.popular ? `0 0 35px ${currentType.color}15` : 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 0 35px ${currentType.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = plan.popular ? `0 0 35px ${currentType.color}15` : 'none'; }}
              >
                {plan.popular && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: `linear-gradient(135deg, ${currentType.color}, ${currentType.color}cc)`,
                    color: '#000', fontSize: '11px', fontWeight: 800,
                    fontFamily: 'var(--font-heading)', padding: '4px 16px',
                    borderRadius: '20px', letterSpacing: '0.06em', textTransform: 'uppercase',
                    display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap',
                  }}><Star size={10} /> Most Popular</div>
                )}

                {/* Account size label */}
                <div style={{
                  fontSize: '13px', color: currentType.color, fontWeight: 700,
                  fontFamily: 'var(--font-heading)', textTransform: 'uppercase',
                  letterSpacing: '0.06em', marginBottom: '6px',
                }}>
                  {currentType.label}
                </div>
                <div style={{
                  fontSize: '24px', fontWeight: 900, fontFamily: 'var(--font-heading)',
                  color: 'white', marginBottom: '12px',
                }}>{plan.size}</div>

                {/* Price */}
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ fontSize: '16px', color: 'var(--text-muted)', textDecoration: 'line-through', marginRight: '8px' }}>{plan.orig}</span>
                  <span style={{ fontSize: '32px', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#10b981' }}>{plan.disc}</span>
                </div>

                {/* Divider */}
                <div style={{ width: '50px', height: '2px', margin: '0 auto 18px', background: `linear-gradient(90deg, transparent, ${currentType.color}44, transparent)` }} />

                {/* Specs list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', marginBottom: '24px' }}>
                  {[
                    { label: 'Profit Target', val: specs.target },
                    { label: 'Daily DD (5%)', val: plan.daily },
                    { label: 'Max DD', val: plan.max },
                    { label: 'Min. Days', val: specs.minDays },
                    { label: 'Profit Split', val: specs.split },
                    { label: 'Leverage', val: specs.leverage },
                  ].map((spec, si) => (
                    <div key={si} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '5px 0',
                      borderBottom: si < 5 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{spec.label}</span>
                      <span style={{
                        fontSize: '12px', fontWeight: 700, fontFamily: 'var(--font-heading)',
                        color: spec.val === 'None' ? '#10b981' : 'white',
                      }}>{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Fee info */}
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  one-time fee {activeType !== 'lord' && '• 100% refundable'}
                </div>

                {/* CTA */}
                <button className="btn btn-primary" style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '8px',
                  background: plan.popular ? `linear-gradient(135deg, ${currentType.color}, ${currentType.color}cc)` : undefined,
                }}>
                  Get Started <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DETAILED RULES ═══ */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800 }}>
              <span style={{ color: currentType.color }}>{currentType.label}</span> Account <span className="text-gold-gradient">Rules</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px' }}>Click each section to expand full details</p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {rulesSections.map((section, sIdx) => {
              const isOpen = openRule === sIdx;
              const isProhibited = section.key === 'prohibited';
              const isAllowed = section.key === 'allowed';
              return (
                <div key={sIdx} onClick={() => setOpenRule(isOpen ? null : sIdx)} style={{
                  background: isOpen ? `${currentType.color}06` : 'rgba(14,13,10,0.6)',
                  border: `1px solid ${isOpen ? `${currentType.color}35` : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '16px', padding: '20px 24px', cursor: 'pointer',
                  backdropFilter: 'blur(12px)', transition: 'all 0.25s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {isProhibited ? <XCircle size={18} style={{ color: '#ef4444' }} /> :
                       isAllowed ? <CheckCircle2 size={18} style={{ color: '#10b981' }} /> :
                       <Shield size={18} style={{ color: isOpen ? currentType.color : '#555' }} />}
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700,
                        color: isOpen ? currentType.color : 'white',
                      }}>{section.title}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.04)', padding: '2px 8px', borderRadius: '8px' }}>{section.items.length} rules</span>
                    </div>
                    <ChevronDown size={18} style={{
                      color: isOpen ? currentType.color : '#444',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease',
                    }} />
                  </div>

                  <div style={{
                    maxHeight: isOpen ? '2000px' : '0', overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s, margin-top 0.25s',
                    opacity: isOpen ? 1 : 0, marginTop: isOpen ? '16px' : '0',
                  }}>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {section.items.map((item, iIdx) => (
                        <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', paddingLeft: '4px' }}>
                          {isProhibited ?
                            <XCircle size={14} style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }} /> :
                            <CheckCircle2 size={14} style={{ color: isAllowed ? '#10b981' : currentType.color, marginTop: '3px', flexShrink: 0 }} />
                          }
                          <span style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ LORD INSTANT HIGHLIGHTS (only on Lord tab) ═══ */}
      {activeType === 'lord' && (
        <section style={{ padding: '20px 0 60px' }}>
          <div className="container">
            <div style={{
              maxWidth: '820px', margin: '0 auto',
              background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '20px', padding: '36px 32px',
              backdropFilter: 'blur(12px)',
            }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: '#ef4444' }}>
                ⚡ Instant Funded Account — Key Highlights
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  { l: 'Profit Split', v: '75% → 100%' },
                  { l: 'Payout Cycle', v: 'Every 21 days' },
                  { l: 'Max Drawdown', v: '8% static' },
                  { l: 'Daily Drawdown', v: '5%' },
                  { l: 'Leverage', v: '1:100' },
                  { l: 'Min Withdrawal', v: '$100' },
                  { l: 'Scaling', v: '+20% / 3 cycles' },
                  { l: 'First Withdrawal', v: 'After 5% profit' },
                ].map((h, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{h.l}</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'white' }}>{h.v}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <Shield size={14} style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}><b style={{color:'white'}}>Profit Protection Lock</b> — At 20% profit, drawdown floor locks 5% below peak equity. Gains protected automatically.</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <Crown size={14} style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}><b style={{color:'white'}}>Loyalty Tier</b> — 12 months without breach → priority payouts, dedicated manager, 40% reset fee, exclusive account sizes.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ WHY LORDFUNDED ═══ */}
      <section style={{ padding: '40px 0 60px' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { icon: <Shield size={28} />, title: 'Static Drawdown', desc: 'Floor never moves, never trails, never tightens. Trade freely.' },
              { icon: <Zap size={28} />, title: 'Fast Payouts', desc: 'Bank wire, USDT, BTC, Wise, Deel. 3-5 business days.' },
              { icon: <TrendingUp size={28} />, title: 'Scaling Plan', desc: 'Account grows 25% (20% Lord) after 3 profitable cycles.' },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(14,13,10,0.6)', border: '1px solid rgba(212,175,55,0.1)',
                borderRadius: '18px', padding: '32px 24px', textAlign: 'center',
                backdropFilter: 'blur(12px)', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', margin: '0 auto 18px' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '20px 0 100px' }}>
        <div className="container">
          <div style={{
            background: 'rgba(14,13,10,0.7)', border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '24px', padding: '64px 48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
            backdropFilter: 'blur(16px)',
          }}>
            <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '200px', background: 'radial-gradient(ellipse, rgba(212,175,55,0.12), transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '18px' }}>
                Ready to Get <span className="text-gold-gradient">Funded</span>?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '17px', maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.7' }}>
                Choose your challenge, prove your discipline, and trade with our capital.
              </p>
              <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                Start Your Challenge <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .challenges-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .challenges-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .challenges-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
