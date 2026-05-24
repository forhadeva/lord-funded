import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mohammed Al-Rashid',
    country: 'UAE',
    initials: 'M',
    color: '#d4af37',
    payout: '$8,400',
    account: '$100K Account',
    text: '"LordFunded changed my trading career. I passed Phase 1 in 12 days and got funded with $100K. The process is transparent and the support team is incredible."',
    stars: 5,
  },
  {
    name: 'Sarah Chen',
    country: 'Singapore',
    initials: 'S',
    color: '#10b981',
    payout: '$14,250',
    account: '$200K Account',
    text: '"I\'ve tried 4 different prop firms before LordFunded. The static drawdown rule is a game changer — no more losing accounts due to trailing stops. Got my first payout in 3 weeks."',
    stars: 5,
  },
  {
    name: 'Carlos Mendoza',
    country: 'Mexico',
    initials: 'C',
    color: '#8b5cf6',
    payout: '$6,750',
    account: '$50K Account',
    text: '"The Throne HFT account was perfect for my EA strategy. No minimum trading days, passed in one session. Lord Funded actually pays — received my withdrawal within 24 hours."',
    stars: 5,
  },
  {
    name: 'Aisha Kamara',
    country: 'Nigeria',
    initials: 'A',
    color: '#f59e0b',
    payout: '$3,200',
    account: '$25K Account',
    text: '"As a part-time swing trader, the no time limit rule was everything. I took my time, passed both stages, and now I\'m scaling up. The 90% profit split feels like a dream."',
    stars: 5,
  },
  {
    name: 'Dmitri Volkov',
    country: 'Russia',
    initials: 'D',
    color: '#ef4444',
    payout: '$22,800',
    account: '$200K Account',
    text: '"Started with a $50K Quest account, scaled up to $200K after 3 payouts. The scaling plan is real and fair. Best prop firm I have worked with in 6 years of trading."',
    stars: 5,
  },
  {
    name: 'James Okonkwo',
    country: 'UK',
    initials: 'J',
    color: '#3b82f6',
    payout: '$11,000',
    account: '$100K Account',
    text: '"The Lord Instant account is perfect for experienced traders. No challenge, no waiting — KYC approved, live capital in 24 hours. Withdrew $11K on my second month."',
    stars: 5,
  },
  {
    name: 'Lena Fischer',
    country: 'Germany',
    initials: 'L',
    color: '#d4af37',
    payout: '$5,600',
    account: '$50K Account',
    text: '"News trading allowed? Hedging allowed? No trailing drawdown? LordFunded gives you every advantage to succeed. The faith-inspired mission shows in how they treat traders."',
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef(null);

  const go = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive((idx + testimonials.length) % testimonials.length);
      setAnimating(false);
    }, 220);
  };

  // Auto-slide every 5s
  useEffect(() => {
    autoRef.current = setInterval(() => go(active + 1), 5000);
    return () => clearInterval(autoRef.current);
  }, [active]);

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(212,175,55,0.05), transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '100px',
            padding: '5px 18px',
            fontSize: '12px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            color: 'var(--gold-primary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}>
            Testimonials
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, marginBottom: '12px' }}>
            What Our <span className="text-gold-gradient">Traders Say</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
            Real traders, real results
          </p>
        </div>

        {/* Slider */}
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>

          {/* Card */}
          <div
            style={{
              background: 'rgba(14, 13, 10, 0.7)',
              border: '1px solid rgba(212,175,55,0.15)',
              borderRadius: '20px',
              padding: '40px 44px',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.06) inset',
              transition: 'opacity 0.22s ease, transform 0.22s ease',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(8px)' : 'translateY(0)',
              minHeight: '220px',
              position: 'relative',
            }}
          >
            {/* Giant quote mark */}
            <div style={{
              position: 'absolute', top: '20px', right: '32px',
              fontSize: '80px', lineHeight: 1,
              fontFamily: 'Georgia, serif',
              color: 'rgba(212,175,55,0.08)',
              userSelect: 'none', pointerEvents: 'none',
              fontWeight: 900,
            }}>
              "
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
              {Array.from({ length: t.stars }, (_, i) => (
                <Star key={i} size={17} fill="#d4af37" color="#d4af37"
                  style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.5))' }} />
              ))}
            </div>

            {/* Quote */}
            <p style={{
              fontSize: '16px', lineHeight: '1.75',
              color: 'rgba(255,255,255,0.88)',
              fontStyle: 'italic',
              marginBottom: '28px',
              fontFamily: 'var(--font-sans)',
            }}>
              {t.text}
            </p>

            {/* Footer row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              {/* Trader info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '16px',
                  fontFamily: 'var(--font-heading)',
                  color: '#000',
                  boxShadow: `0 0 14px ${t.color}66`,
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', fontFamily: 'var(--font-heading)', color: 'white' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {t.country}
                  </div>
                </div>
              </div>

              {/* Payout badge */}
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '20px', fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: '#d4af37',
                  textShadow: '0 0 20px rgba(212,175,55,0.3)',
                }}>
                  {t.payout}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {t.account}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '20px', marginTop: '32px',
          }}>
            {/* Prev */}
            <button
              onClick={() => { clearInterval(autoRef.current); go(active - 1); }}
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,175,55,0.2)',
                color: 'var(--gold-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { clearInterval(autoRef.current); go(i); }}
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === active ? '#d4af37' : 'rgba(255,255,255,0.15)',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                    boxShadow: i === active ? '0 0 8px rgba(212,175,55,0.5)' : 'none',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={() => { clearInterval(autoRef.current); go(active + 1); }}
              style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,175,55,0.2)',
                color: 'var(--gold-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Trader counter */}
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {active + 1} / {testimonials.length} traders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
