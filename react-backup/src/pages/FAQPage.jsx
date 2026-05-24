import React, { useState, useMemo } from 'react';
import { ChevronDown, HelpCircle, Search, ArrowRight } from 'lucide-react';

const faqs = [
  // ── General ──
  { cat: 'General', q: 'What is a prop firm?', a: 'A prop firm (proprietary trading firm) provides traders with real capital to trade financial markets. Instead of risking your own money, you trade the firm\'s capital and keep a percentage of the profits. LordFunded evaluates traders through challenges, then funds those who demonstrate consistent, disciplined trading.' },
  { cat: 'General', q: 'What is LordFunded?', a: 'LordFunded is a faith-inspired proprietary trading firm that empowers disciplined traders with up to $500,000 in real funded capital. We believe faithful stewardship of capital is a calling — our mission is to fund traders who trade with purpose, discipline, and integrity.' },
  { cat: 'General', q: 'Is LordFunded a broker?', a: 'No. LordFunded is a proprietary trading firm, not a broker. We work with regulated third-party brokers to provide trading infrastructure. LordFunded funds traders — we do not hold client deposits, offer investment advice, or provide brokerage services.' },
  { cat: 'General', q: 'Does LordFunded manage client money?', a: 'No. LordFunded does not manage any client funds. Traders manage their own accounts independently using our funded capital. All trading decisions are made solely by the funded trader. LordFunded does not place trades, advise on trades, or manage positions on behalf of any trader.' },
  { cat: 'General', q: 'Are trades executed with real money?', a: 'No. All trading accounts on LordFunded operate in a simulated trading environment. The challenge phase and funded accounts are both simulated and designed to evaluate trader performance under real market conditions. Traders receive payouts based on their performance according to LordFunded\'s payout structure and rules.' },
  { cat: 'General', q: 'Why is LordFunded faith-inspired?', a: 'LordFunded is built on the belief that faithful stewardship of capital is a principle found throughout scripture. We believe disciplined, consistent trading reflects the same values of wisdom, patience, and integrity that guide a life of faith. Our name, our rules, and our culture reflect this foundation.' },

  // ── Challenge ──
  { cat: 'Challenge', q: 'How does the LordFunded challenge work?', a: 'Choose your account type and size, pay the one-time challenge fee, and begin trading. Hit the profit target while respecting the drawdown and risk rules, and you pass. Once passed, you receive a live funded account with real capital. Your challenge fee is fully refunded on your first payout.' },
  { cat: 'Challenge', q: 'How many account types does LordFunded offer?', a: (<span>LordFunded offers four account types:<br/><br/><b>Trial (Step 1)</b> — Single phase, 10% profit target<br/><b>Quest (Step 2)</b> — Two stages, 10% then 5% profit target<br/><b>Throne (HFT)</b> — Single phase for algorithmic traders, no minimum days<br/><b>Lord (Instant)</b> — No challenge, live capital from day one</span>) },
  { cat: 'Challenge', q: 'What is the profit target?', a: (<span><b>Trial (Step 1):</b> 10% of initial account balance<br/><b>Quest (Step 2):</b> Stage 1 = 10%, Stage 2 = 5%<br/><b>Throne (HFT):</b> 10% of initial account balance<br/><b>Lord (Instant):</b> No challenge target. First withdrawal eligible after 5% profit generated.</span>) },
  { cat: 'Challenge', q: 'How long does it take to get funded?', a: 'It depends on your account type. Step 1 requires minimum 5 trading days. Step 2 requires minimum 5 days in each stage. The Throne HFT account has no minimum days — you can pass in a single trading session. The Lord Instant account is activated within 24 hours of KYC approval — no challenge at all.' },
  { cat: 'Challenge', q: 'What happens if I fail the challenge?', a: 'If you breach a drawdown rule or violate any hard rules, your challenge account is closed. You may repurchase at full price or take advantage of our discounted reset option (50% of original price for Step 1 and Step 2, 60% for Lord accounts). Your challenge fee is not refunded on a failed account — only on your first successful payout.' },
  { cat: 'Challenge', q: 'Is my challenge fee refundable?', a: 'Yes — for Step 1, Step 2, and Throne HFT accounts, the full challenge fee is refunded on your first funded payout. The Lord Instant account fee is non-refundable as no challenge is completed.' },

  // ── Accounts & Capital ──
  { cat: 'Accounts', q: 'How much capital can I trade with?', a: 'LordFunded offers account sizes from $5,000 up to $500,000. The Lord (Instant) account starts at $100,000. After 3 consecutive profitable payout cycles, your account size increases by 25% (20% for Lord accounts), so your capital grows as you perform.' },
  { cat: 'Accounts', q: 'What is the Lord Instant Funded Account?', a: 'The Lord Instant account provides live funded capital from day one with zero evaluation. Purchase → complete KYC within 24 hours → begin trading real capital immediately. Available in $100K, $200K, and $500K sizes. Starting profit split is 75% scaling to 100%. Maximum drawdown is 8% static from initial balance — the floor never moves regardless of profit.' },
  { cat: 'Accounts', q: 'Can I have multiple accounts?', a: 'You may hold multiple challenge accounts simultaneously. However, only one active Lord Instant Funded Account is permitted per verified identity at any time. Running multiple accounts from the same IP address without prior written compliance approval will trigger a review of all accounts involved.' },
  { cat: 'Accounts', q: 'What leverage is available?', a: '1:100 leverage across all instruments and all account sizes on every LordFunded account type.' },
  { cat: 'Accounts', q: 'What instruments can I trade?', a: 'You can trade Forex pairs, Gold (XAUUSD), Indices, Commodities, and Cryptocurrencies. Crypto pairs such as BTCUSD and ETHUSD operate 24/7 and are exempt from overnight and weekend holding restrictions across all account types.' },

  // ── Rules ──
  { cat: 'Rules', q: 'What are the drawdown rules?', a: 'All accounts have a 5% daily drawdown limit. Maximum drawdown is 10% for Trial, Quest, and Throne accounts, and 8% for the Lord Instant account. All drawdown on every LordFunded account type is calculated on a static basis from the initial account balance only. The drawdown floor never moves, never trails, and never tightens regardless of how much profit the account generates. Breaching either limit results in immediate account failure.' },
  { cat: 'Rules', q: 'What is static drawdown?', a: 'Static drawdown means your drawdown floor is fixed at the initial account balance for the entire lifetime of the account and never changes. On the Lord Instant account, a $100,000 account always has a $92,000 floor (8% max drawdown) whether the account grows to $200,000 or stays flat. Your profits never tighten the floor against you.' },
  { cat: 'Rules', q: 'What is the consistency rule?', a: 'On funded accounts, no single trading day\'s profit may exceed 30% of your total accumulated profit. This rule ensures traders are generating consistent returns rather than gambling on one lucky session. It is NOT active during the challenge phase on any account.\n\nExample: Total profit $5,000 on funded account — no single day can show more than $1,500 profit.' },
  { cat: 'Rules', q: 'What is the inactivity rule?', a: 'If no trade is placed within any consecutive 20-day period, the account is automatically marked as failed with no recovery. Lord Instant accounts also require a minimum of 5 trading days with at least one trade each within every 30-day calendar period.' },
  { cat: 'Rules', q: 'What is the minimum holding time?', a: (<span><b>Step 2 funded:</b> 3 minutes minimum per trade<br/><b>Throne HFT funded:</b> 1 minute minimum per trade<br/><b>Lord Instant:</b> 3 minutes from the very first trade (no challenge phase exists)<br/><b>Challenge phases (Step 1 and Step 2):</b> No minimum holding time</span>) },
  { cat: 'Rules', q: 'Can I hold trades over the weekend?', a: 'Step 1 and Step 2 challenge accounts permit weekend holding. Funded accounts and Lord/HFT accounts do not permit weekend holding. Cryptocurrency pairs are always exempt as they trade 24/7.' },
  { cat: 'Rules', q: 'Can I hold trades overnight?', a: 'Overnight holding is not permitted on any LordFunded account type. All trades must be closed before the daily market close. Exception: Cryptocurrency pairs operate continuously and are fully exempt from this rule.' },
  { cat: 'Rules', q: 'Is a Stop Loss mandatory?', a: 'For Step 1, Step 2, HFT and Lord Instant accounts — Stop Loss is not mandatory. Traders may manage exits freely.' },

  // ── Strategies ──
  { cat: 'Strategies', q: 'What strategies are allowed?', a: 'Hedging and news trading are permitted across all accounts. The Throne HFT account also permits Expert Advisors, bots, scalping, and grid trading. Manual algorithmic assistance tools (alerts, indicators) are allowed on all accounts provided trades are manually executed.' },
  { cat: 'Strategies', q: 'What strategies are prohibited?', a: (<span>The following are prohibited on all accounts except where noted:<br/><br/>✗ Martingale Strategy<br/>✗ Layering <span style={{color:'#ef4444',fontWeight:600}}>(Hard Breach — immediate termination)</span><br/>✗ Copy Trading<br/>✗ Third Party Signal Services<br/>✗ Account Sharing<br/>✗ Expert Advisors / Bots <span style={{color:'#10b981'}}>(permitted on HFT only)</span><br/>✗ Scalping <span style={{color:'#10b981'}}>(permitted on HFT only)</span></span>) },
  { cat: 'Strategies', q: 'What is layering and why is it a Hard Breach?', a: 'Layering means placing multiple stacked orders at different price levels to manipulate market depth, exploit execution fills, or simulate martingale-style position building. It results in immediate account termination with no replacement, no refund, and no appeal — on both challenge and funded accounts.' },
  { cat: 'Strategies', q: 'Can I use a VPS?', a: 'Yes on HFT accounts — VPS is fully encouraged for algorithmic trading. On Lord Instant accounts, VPS is permitted for monitoring and alert tools only — not for running automated bots. Each account must operate from a unique IP address. If your IP changes, notify support within 48 hours.' },

  // ── Payouts ──
  { cat: 'Payouts', q: 'How much profit can traders keep?', a: 'Profit splits start between 75% and 80% depending on account type and scale up to 100% over time. After each withdrawal, your profit split increases by 5%. The Lord Instant account starts at 75% and all other accounts start at 80%.\n\nExample: Step 1 trader — Payout 1 = 80%, Payout 2 = 85%, Payout 3 = 90%... up to 100%.' },
  { cat: 'Payouts', q: 'When and how do I get paid?', a: 'Payouts are processed every 21 days from your funded account activation date. Minimum withdrawal is $100 and your account must have at least 10% profit. Supported payout methods are Bank Wire Transfer, USDT (TRC20/ERC20), Bitcoin (BTC), Wise, and Deel. All requests are processed within 3 to 5 business days.' },
  { cat: 'Payouts', q: 'What is the scaling plan?', a: (<span>After 3 consecutive profitable payout cycles, your funded account balance is automatically increased:<br/><br/><b>Step 1, Step 2, HFT:</b> +25% per qualifying period<br/><b>Lord Instant:</b> +20% per qualifying period<br/><br/>Example: $100,000 Step 1 funded account → 3 profitable cycles → $125,000 funded account.</span>) },
  { cat: 'Payouts', q: 'What is the Profit Protection Lock?', a: 'On Lord Instant accounts, once the account reaches 20% total profit, the drawdown floor locks at 5% below that peak equity level. Example: $100K account reaches $120K — the floor locks at $114,000. You cannot lose more than $6,000 from your best performance point, protecting your realized gains automatically.' },
  { cat: 'Payouts', q: 'What is the LordFunded Loyalty Tier?', a: 'Lord Instant account holders who maintain an active funded account for 12 consecutive months without any breach are elevated to Loyalty Tier status. Benefits include priority payout processing, a dedicated account manager, reduced account reset fee (40% instead of 60%), and access to exclusive higher account sizes not available through standard purchasing.' },

  // ── Technical ──
  { cat: 'Technical', q: 'What is KYC and when do I need it?', a: 'KYC (Know Your Customer) is identity verification. You need a valid government-issued ID (passport or national ID) and proof of address dated within 3 months. For Step 1, Step 2, and HFT accounts, KYC is required before your first payout. For the Lord Instant account, KYC must be completed before the account is activated.' },
  { cat: 'Technical', q: 'What happens if my broker account becomes invalid?', a: 'If a broker-side technical issue invalidates your account, LordFunded will issue a fresh replacement account at the same stage and level. Balance and trade history cannot be transferred between broker accounts. If you are in the funded stage, you do not restart from the challenge.' },
];

const CATEGORIES = ['All', 'General', 'Challenge', 'Accounts', 'Rules', 'Strategies', 'Payouts', 'Technical'];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(null);
  const [activeCat, setActiveCat] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return faqs.filter(f => {
      const matchCat = activeCat === 'All' || f.cat === activeCat;
      const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCat, search]);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section style={{
        position: 'relative', padding: '160px 0 60px',
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
            <HelpCircle size={14} /> Support Center
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800,
            lineHeight: 1.1, marginBottom: '18px',
          }}>
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '17px',
            maxWidth: '560px', margin: '0 auto 36px',
          }}>
            Everything you need to know about LordFunded challenges, payouts, rules, and trading.
          </p>

          {/* Search bar */}
          <div style={{
            maxWidth: '500px', margin: '0 auto',
            display: 'flex', alignItems: 'center', gap: '10px',
            background: 'rgba(14,13,10,0.7)',
            border: '1px solid rgba(212,175,55,0.15)',
            borderRadius: '14px', padding: '12px 18px',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          }}>
            <Search size={18} style={{ color: '#555', flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={e => { setSearch(e.target.value); setOpenIdx(null); }}
              style={{
                flex: 1, background: 'none', border: 'none', outline: 'none',
                color: 'white', fontSize: '15px', fontFamily: 'var(--font-sans)',
              }}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{
                background: 'none', border: 'none', color: '#666',
                cursor: 'pointer', fontSize: '16px', padding: '0 4px',
              }}>✕</button>
            )}
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES + FAQ LIST ═══ */}
      <section style={{ padding: '20px 0 100px' }}>
        <div className="container">

          {/* Category Pills */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '10px',
            justifyContent: 'center', marginBottom: '40px',
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCat(cat); setOpenIdx(null); }}
                style={{
                  padding: '8px 20px', borderRadius: '100px',
                  fontSize: '13px', fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: `1px solid ${activeCat === cat ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.06)'}`,
                  background: activeCat === cat ? 'rgba(212,175,55,0.1)' : 'rgba(14,13,10,0.5)',
                  color: activeCat === cat ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  boxShadow: activeCat === cat ? '0 0 12px rgba(212,175,55,0.1)' : 'none',
                }}
              >
                {cat} {cat !== 'All' && <span style={{ opacity: 0.5, marginLeft: '4px', fontSize: '11px' }}>({faqs.filter(f => f.cat === cat).length})</span>}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              {filtered.length} question{filtered.length !== 1 ? 's' : ''} found
            </span>
          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <HelpCircle size={40} style={{ color: '#333', marginBottom: '16px' }} />
                <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>No questions match your search.</p>
              </div>
            )}

            {filtered.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    background: isOpen ? 'rgba(212,175,55,0.04)' : 'rgba(14,13,10,0.6)',
                    border: `1px solid ${isOpen ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: '14px', padding: '20px 24px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 0 20px rgba(212,175,55,0.08)' : 'none',
                  }}
                >
                  {/* Question */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                      <HelpCircle size={18} style={{ color: isOpen ? 'var(--gold-primary)' : '#555', flexShrink: 0, transition: 'color 0.2s' }} />
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 600,
                        color: isOpen ? 'var(--gold-primary)' : 'white',
                        transition: 'color 0.2s ease',
                      }}>{faq.q}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                      <span style={{
                        fontSize: '10px', fontWeight: 600,
                        color: 'var(--gold-primary)', background: 'rgba(212,175,55,0.08)',
                        padding: '2px 10px', borderRadius: '20px',
                        fontFamily: 'var(--font-heading)', letterSpacing: '0.04em',
                      }}>{faq.cat}</span>
                      <ChevronDown size={18} style={{
                        color: isOpen ? 'var(--gold-primary)' : '#444',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease, color 0.2s ease',
                      }} />
                    </div>
                  </div>

                  {/* Answer */}
                  <div style={{
                    maxHeight: isOpen ? '600px' : '0', overflow: 'hidden',
                    transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease, margin-top 0.25s ease',
                    opacity: isOpen ? 1 : 0, marginTop: isOpen ? '14px' : '0',
                  }}>
                    <div style={{
                      paddingLeft: '32px', fontSize: '14.5px',
                      color: 'var(--text-secondary)', lineHeight: '1.75',
                      borderTop: '1px solid rgba(212,175,55,0.08)', paddingTop: '14px',
                      whiteSpace: 'pre-line',
                    }}>{faq.a}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <div style={{
              background: 'rgba(14,13,10,0.7)',
              border: '1px solid rgba(212,175,55,0.15)',
              borderRadius: '20px', padding: '48px 36px',
              maxWidth: '600px', margin: '0 auto',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                Still Have <span className="text-gold-gradient">Questions</span>?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
                Our support team is available 24/7 to help you.
              </p>
              <a href="mailto:support@lordfunded.com" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                Contact Support <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
