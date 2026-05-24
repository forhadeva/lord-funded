import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const faqs = [
  {
    q: 'What is a prop firm?',
    a: 'A prop firm (proprietary trading firm) provides traders with real capital to trade financial markets. Instead of risking your own money, you trade the firm\'s capital and keep a percentage of the profits. LordFunded evaluates traders through challenges, then funds those who demonstrate consistent, disciplined trading.',
  },
  {
    q: 'What is LordFunded?',
    a: 'LordFunded is a faith-inspired proprietary trading firm that empowers disciplined traders with up to $500,000 in real funded capital. We believe faithful stewardship of capital is a calling — our mission is to fund traders who trade with purpose, discipline, and integrity.',
  },
  {
    q: 'How does the LordFunded challenge work?',
    a: 'Choose your account type and size, pay the one-time challenge fee, and begin trading. Hit the profit target while respecting the drawdown and risk rules, and you pass. Once passed, you receive a live funded account with real capital. Your challenge fee is fully refunded on your first payout.',
  },
  {
    q: 'How many account types does LordFunded offer?',
    a: (
      <span>
        LordFunded offers four account types:<br /><br />
        <b>Trial (Step 1)</b> — Single phase, 10% profit target<br />
        <b>Quest (Step 2)</b> — Two stages, 10% then 5% profit target<br />
        <b>Throne (HFT)</b> — Single phase for algorithmic traders, no minimum days<br />
        <b>Lord (Instant)</b> — No challenge, live capital from day one
      </span>
    ),
  },
  {
    q: 'What are the drawdown rules?',
    a: 'All accounts have a 5% daily drawdown limit. Maximum drawdown is 10% for Trial, Quest, and Throne accounts, and 8% for the Lord Instant account. All drawdown on every LordFunded account type is calculated on a static basis from the initial account balance only. The drawdown floor never moves, never trails, and never tightens regardless of how much profit the account generates. Breaching either limit results in immediate account failure.',
  },
  {
    q: 'How much capital can I trade with?',
    a: 'LordFunded offers account sizes from $5,000 up to $500,000. The Lord (Instant) account starts at $100,000. After 3 consecutive profitable payout cycles, your account size increases by 25% (20% for Lord accounts), so your capital grows as you perform.',
  },
  {
    q: 'How much profit can traders keep?',
    a: 'Profit splits start between 75% and 80% depending on account type and scale up to 100% over time. After each withdrawal, your profit split increases by 5%. The Lord Instant account starts at 75% and all other accounts start at 80%.\n\nExample: Step 1 trader — Payout 1 = 80%, Payout 2 = 85%, Payout 3 = 90%... up to 100%.',
  },
  {
    q: 'How long does it take to get funded?',
    a: 'It depends on your account type. Step 1 requires minimum 5 trading days. Step 2 requires minimum 5 days in each stage. The Throne HFT account has no minimum days — you can pass in a single trading session. The Lord Instant account is activated within 24 hours of KYC approval — no challenge at all.',
  },
  {
    q: 'What happens if I fail the challenge?',
    a: 'If you breach a drawdown rule or violate any hard rules, your challenge account is closed. You may repurchase at full price or take advantage of our discounted reset option (50% of original price for Step 1 and Step 2, 60% for Lord accounts). Your challenge fee is not refunded on a failed account — only on your first successful payout.',
  },
  {
    q: 'Are trades executed with real money?',
    a: 'No. All trading accounts on LordFunded operate in a simulated trading environment. The challenge phase and funded accounts are both simulated and designed to evaluate trader performance under real market conditions. Traders receive payouts based on their performance according to LordFunded\'s payout structure and rules.',
  },
  {
    q: 'Is LordFunded a broker?',
    a: 'No. LordFunded is a proprietary trading firm, not a broker. We work with regulated third-party brokers to provide trading infrastructure. LordFunded funds traders — we do not hold client deposits, offer investment advice, or provide brokerage services.',
  },
  {
    q: 'Does LordFunded manage client money?',
    a: 'No. LordFunded does not manage any client funds. Traders manage their own accounts independently using our funded capital. All trading decisions are made solely by the funded trader. LordFunded does not place trades, advise on trades, or manage positions on behalf of any trader.',
  },
  {
    q: 'What is the profit target?',
    a: (
      <span>
        <b>Trial (Step 1):</b> 10% of initial account balance<br />
        <b>Quest (Step 2):</b> Stage 1 = 10%, Stage 2 = 5%<br />
        <b>Throne (HFT):</b> 10% of initial account balance<br />
        <b>Lord (Instant):</b> No challenge target. First withdrawal eligible after 5% profit generated.
      </span>
    ),
  },
  {
    q: 'What strategies are allowed?',
    a: 'Hedging and news trading are permitted across all accounts. The Throne HFT account also permits Expert Advisors, bots, scalping, and grid trading. Manual algorithmic assistance tools (alerts, indicators) are allowed on all accounts provided trades are manually executed.',
  },
  {
    q: 'What strategies are prohibited?',
    a: (
      <span>
        The following are prohibited on all accounts except where noted:<br /><br />
        ✗ Martingale Strategy<br />
        ✗ Layering <span style={{ color: '#ef4444', fontWeight: 600 }}>(Hard Breach — immediate termination)</span><br />
        ✗ Copy Trading<br />
        ✗ Third Party Signal Services<br />
        ✗ Account Sharing<br />
        ✗ Expert Advisors / Bots <span style={{ color: '#10b981' }}>(permitted on HFT only)</span><br />
        ✗ Scalping <span style={{ color: '#10b981' }}>(permitted on HFT only)</span>
      </span>
    ),
  },
];

const INITIAL_SHOW = 5;

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_SHOW);

  return (
    <section id="faq" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
            color: 'var(--gold-primary)', textTransform: 'uppercase',
            letterSpacing: '0.12em', marginBottom: '12px',
          }}>
            {t('faqTag')}
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '16px' }}>
            {t('faqTitle1')} <span className="text-gold-gradient">{t('faqTitle2')}</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '16px' }}>
            Everything you need to know about LordFunded challenges, payouts, and trading rules.
          </p>
        </div>

        {/* FAQ List */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                style={{
                  background: isOpen
                    ? 'rgba(212,175,55,0.04)'
                    : 'rgba(14,13,10,0.6)',
                  border: `1px solid ${isOpen ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '14px',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen ? '0 0 20px rgba(212,175,55,0.08)' : 'none',
                }}
              >
                {/* Question Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <HelpCircle
                      size={18}
                      style={{ color: isOpen ? 'var(--gold-primary)' : '#555', flexShrink: 0, transition: 'color 0.2s' }}
                    />
                    <span style={{
                      fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 600,
                      color: isOpen ? 'var(--gold-primary)' : 'white',
                      transition: 'color 0.2s ease',
                    }}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    style={{
                      color: isOpen ? 'var(--gold-primary)' : '#444',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, color 0.2s ease',
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, margin-top 0.25s ease',
                  opacity: isOpen ? 1 : 0,
                  marginTop: isOpen ? '14px' : '0',
                }}>
                  <div style={{
                    paddingLeft: '32px',
                    fontSize: '14.5px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.75',
                    borderTop: '1px solid rgba(212,175,55,0.08)',
                    paddingTop: '14px',
                  }}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / View Less Button */}
        {!showAll && faqs.length > INITIAL_SHOW && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(212,175,55,0.06)',
                border: '1px solid rgba(212,175,55,0.25)',
                color: 'var(--gold-primary)',
                padding: '13px 32px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600, fontSize: '15px',
                transition: 'all 0.25s ease',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(212,175,55,0.12)';
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(212,175,55,0.06)';
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              View More Questions
              <ChevronRight size={16} />
            </button>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '10px' }}>
              {faqs.length - INITIAL_SHOW} more questions available
            </p>
          </div>
        )}

        {showAll && (
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <button
              onClick={() => { setShowAll(false); setOpenIdx(null); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-secondary)',
                padding: '12px 28px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600, fontSize: '14px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; e.currentTarget.style.color = 'var(--gold-primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              <ChevronDown size={16} style={{ transform: 'rotate(180deg)' }} />
              Show Less
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
