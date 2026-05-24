import React, { useState } from 'react';
import { ArrowRight, DollarSign, Users, Share2, Gift, TrendingUp, ChevronDown, HelpCircle, Copy, CheckCircle2, BarChart3, Link2, Wallet } from 'lucide-react';

const tiers = [
  {
    name: 'Bronze',
    commission: '8%',
    color: '#cd7f32',
    referrals: '1-10',
    perks: ['Personal referral link', 'Real-time dashboard', 'Monthly payouts'],
  },
  {
    name: 'Silver',
    commission: '10%',
    color: '#c0c0c0',
    referrals: '11-50',
    perks: ['Everything in Bronze', 'Priority support', 'Custom promo codes'],
    popular: false,
  },
  {
    name: 'Gold',
    commission: '12%',
    color: '#d4af37',
    referrals: '51-100',
    perks: ['Everything in Silver', 'Exclusive banners', 'Dedicated account manager'],
    popular: true,
  },
  {
    name: 'Diamond',
    commission: '15%',
    color: '#b9f2ff',
    referrals: '100+',
    perks: ['Everything in Gold', 'Custom commission rates', 'Co-branded landing pages', 'VIP events access'],
  },
];

const steps = [
  {
    num: '01',
    icon: <Link2 size={28} />,
    title: 'Sign Up & Get Your Link',
    desc: 'Register for the LordFunded Affiliate Program in seconds. Get your unique referral link instantly.',
  },
  {
    num: '02',
    icon: <Share2 size={28} />,
    title: 'Share With Your Audience',
    desc: 'Share your link on social media, YouTube, Discord, Telegram, or your website. Use our ready-made banners and creatives.',
  },
  {
    num: '03',
    icon: <Users size={28} />,
    title: 'Your Referrals Purchase',
    desc: 'When someone clicks your link and purchases a challenge account, you earn commission — automatically tracked.',
  },
  {
    num: '04',
    icon: <Wallet size={28} />,
    title: 'Get Paid Monthly',
    desc: 'Commissions are paid out every month. Withdraw via crypto, bank transfer, or your preferred method.',
  },
];

const faqs = [
  {
    q: 'How much can I earn as an affiliate?',
    a: 'You earn between 8% and 15% commission on every sale depending on your tier. There is no cap on earnings — top affiliates earn thousands monthly.',
  },
  {
    q: 'When do I get paid?',
    a: 'Affiliate commissions are paid out monthly. Once your balance reaches the minimum threshold ($50), you can request a payout.',
  },
  {
    q: 'Do I need to be a trader to join?',
    a: 'No! Anyone can join our affiliate program. Whether you\'re an influencer, content creator, or trader — you can earn by referring others.',
  },
  {
    q: 'How do I track my referrals?',
    a: 'You get access to a real-time affiliate dashboard where you can track clicks, signups, purchases, and earnings.',
  },
  {
    q: 'Is there a cookie duration?',
    a: 'Yes. Our tracking cookie lasts 60 days. If someone clicks your link and purchases within 60 days, you earn the commission.',
  },
  {
    q: 'Can I use paid ads to promote?',
    a: 'Yes, paid advertising is allowed. However, you cannot bid on our branded keywords (e.g., "LordFunded"). All other campaigns are welcome.',
  },
];

export default function AffiliatePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://lordfunded.com/?ref=YOUR_ID');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section style={{
        position: 'relative', padding: '160px 0 100px',
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
            <Gift size={14} /> Affiliate Program
          </div>

          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 58px)', fontWeight: 800,
            lineHeight: 1.1, marginBottom: '24px', maxWidth: '750px', margin: '0 auto 24px',
          }}>
            Earn Up To <span className="text-gold-gradient">15% Commission</span> On Every Referral
          </h1>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '18px',
            lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 36px',
          }}>
            Share LordFunded with your audience and earn recurring commissions on every challenge purchase. No cap, no limits.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#tiers" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
              Become an Affiliate <ArrowRight size={18} />
            </a>
            <a href="#how-it-works-aff" className="btn btn-secondary">
              How It Works
            </a>
          </div>

          {/* Quick stats */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '56px', flexWrap: 'wrap',
          }}>
            {[
              { val: '15%', label: 'Max Commission' },
              { val: '$0', label: 'Cost to Join' },
              { val: '60 Days', label: 'Cookie Duration' },
              { val: 'Monthly', label: 'Payouts' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '30px', fontWeight: 800, fontFamily: 'var(--font-heading)' }} className="text-gold-gradient">{s.val}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════ */}
      <section id="how-it-works-aff" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>How It Works</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>
              Start Earning in <span className="text-gold-gradient">4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid-4" style={{ gap: '20px' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{
                background: 'rgba(14,13,10,0.6)',
                border: '1px solid rgba(212,175,55,0.1)',
                borderRadius: '18px', padding: '32px 24px',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                position: 'relative', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Step number */}
                <div style={{
                  position: 'absolute', top: '16px', right: '16px',
                  fontSize: '48px', fontWeight: 900, fontFamily: 'var(--font-heading)',
                  color: 'rgba(212,175,55,0.06)', lineHeight: 1,
                }}>{step.num}</div>

                <div style={{
                  background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)',
                  width: '52px', height: '52px', borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold-primary)', marginBottom: '20px',
                }}>{step.icon}</div>

                <h4 style={{
                  fontFamily: 'var(--font-heading)', fontSize: '17px',
                  fontWeight: 700, color: 'white', marginBottom: '10px',
                }}>{step.title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COMMISSION TIERS
      ═══════════════════════════════════════ */}
      <section id="tiers" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>Commission Structure</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>
              The More You Refer, The <span className="text-gold-gradient">More You Earn</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '520px', margin: '0 auto' }}>
              Our tiered commission structure rewards your growth.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '20px' }}>
            {tiers.map((tier, idx) => (
              <div key={idx} style={{
                background: tier.popular ? 'rgba(212,175,55,0.04)' : 'rgba(14,13,10,0.6)',
                border: `1px solid ${tier.popular ? 'rgba(212,175,55,0.35)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '20px', padding: '36px 28px',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                position: 'relative', textAlign: 'center',
                boxShadow: tier.popular ? '0 0 30px rgba(212,175,55,0.1)' : 'none',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,55,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = tier.popular ? '0 0 30px rgba(212,175,55,0.1)' : 'none'; }}
              >
                {tier.popular && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #d4af37, #f0d060)',
                    color: '#000', fontSize: '11px', fontWeight: 800,
                    fontFamily: 'var(--font-heading)', padding: '4px 16px',
                    borderRadius: '20px', letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>Most Popular</div>
                )}

                {/* Tier name */}
                <div style={{
                  fontSize: '14px', fontWeight: 700, fontFamily: 'var(--font-heading)',
                  color: tier.color, textTransform: 'uppercase',
                  letterSpacing: '0.08em', marginBottom: '12px',
                }}>{tier.name}</div>

                {/* Commission */}
                <div style={{
                  fontSize: '48px', fontWeight: 900, fontFamily: 'var(--font-heading)',
                  color: tier.color, lineHeight: 1, marginBottom: '8px',
                  textShadow: `0 0 30px ${tier.color}44`,
                }}>{tier.commission}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  per sale • {tier.referrals} referrals
                </div>

                {/* Divider */}
                <div style={{
                  width: '60px', height: '2px', margin: '0 auto 20px',
                  background: `linear-gradient(90deg, transparent, ${tier.color}66, transparent)`,
                }} />

                {/* Perks */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                  {tier.perks.map((perk, pi) => (
                    <div key={pi} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} style={{ color: tier.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REFERRAL LINK DEMO
      ═══════════════════════════════════════ */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '600px', margin: '0 auto',
            background: 'rgba(14,13,10,0.7)',
            border: '1px solid rgba(212,175,55,0.15)',
            borderRadius: '20px', padding: '36px 32px',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            textAlign: 'center',
          }}>
            <BarChart3 size={28} className="text-gold" style={{ marginBottom: '16px' }} />
            <h3 style={{
              fontFamily: 'var(--font-heading)', fontSize: '22px',
              fontWeight: 700, marginBottom: '8px',
            }}>Your Referral Link</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
              Sign up to get your personalized referral link
            </p>

            {/* Link mock */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(212,175,55,0.12)',
              borderRadius: '12px', padding: '12px 16px',
            }}>
              <input
                readOnly
                value="https://lordfunded.com/?ref=YOUR_ID"
                style={{
                  flex: 1, background: 'none', border: 'none', outline: 'none',
                  color: 'var(--text-secondary)', fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                }}
              />
              <button
                onClick={handleCopy}
                style={{
                  background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(212,175,55,0.1)',
                  border: `1px solid ${copied ? 'rgba(16,185,129,0.3)' : 'rgba(212,175,55,0.25)'}`,
                  color: copied ? '#10b981' : 'var(--gold-primary)',
                  borderRadius: '8px', padding: '8px 14px',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-heading)',
                  transition: 'all 0.2s ease',
                }}
              >
                {copied ? <><CheckCircle2 size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AFFILIATE FAQ
      ═══════════════════════════════════════ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700,
              color: 'var(--gold-primary)', textTransform: 'uppercase',
              letterSpacing: '0.12em', marginBottom: '14px',
            }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px' }}>
              Affiliate <span className="text-gold-gradient">Questions</span>
            </h2>
          </div>

          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} onClick={() => setOpenFaq(isOpen ? null : idx)} style={{
                  background: isOpen ? 'rgba(212,175,55,0.04)' : 'rgba(14,13,10,0.6)',
                  border: `1px solid ${isOpen ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '14px', padding: '20px 24px', cursor: 'pointer',
                  backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                  transition: 'all 0.25s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <HelpCircle size={18} style={{ color: isOpen ? 'var(--gold-primary)' : '#555', flexShrink: 0 }} />
                      <span style={{
                        fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 600,
                        color: isOpen ? 'var(--gold-primary)' : 'white',
                      }}>{faq.q}</span>
                    </div>
                    <ChevronDown size={18} style={{
                      color: isOpen ? 'var(--gold-primary)' : '#444',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease', flexShrink: 0,
                    }} />
                  </div>
                  <div style={{
                    maxHeight: isOpen ? '300px' : '0', overflow: 'hidden',
                    transition: 'max-height 0.35s ease, opacity 0.3s ease, margin-top 0.25s ease',
                    opacity: isOpen ? 1 : 0, marginTop: isOpen ? '14px' : '0',
                  }}>
                    <p style={{
                      paddingLeft: '32px', fontSize: '14px', color: 'var(--text-secondary)',
                      lineHeight: '1.7', borderTop: '1px solid rgba(212,175,55,0.08)', paddingTop: '14px',
                    }}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA
      ═══════════════════════════════════════ */}
      <section style={{ padding: '60px 0 100px' }}>
        <div className="container">
          <div style={{
            background: 'rgba(14,13,10,0.7)',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '24px', padding: '64px 48px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
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
                Ready to Start <span className="text-gold-gradient">Earning</span>?
              </h2>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '17px',
                maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.7',
              }}>
                Join the LordFunded Affiliate Program today. It's free to join and takes less than 2 minutes.
              </p>
              <a href="#" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px' }}>
                Join Affiliate Program <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
