import React from 'react';
import { DollarSign, ShieldCheck, Zap, Globe } from 'lucide-react';

const stats = [
  {
    value: 'Up to 90%',
    label: 'Profit Split',
    desc: 'Keep the lion\'s share of your gains',
    icon: <DollarSign className="text-gold" size={24} />,
  },
  {
    value: '$200,000',
    label: 'Max Account Size',
    desc: 'Scale up to $2M total funding',
    icon: <ShieldCheck className="text-gold" size={24} />,
  },
  {
    value: '24 Hours',
    label: 'Average Payout Time',
    desc: 'Bi-weekly requests processed fast',
    icon: <Zap className="text-gold" size={24} />,
  },
  {
    value: '$48M+',
    label: 'Simulated Paid Out',
    desc: 'Trusted by elite global traders',
    icon: <Globe className="text-gold" size={24} />,
  },
];

export default function Metrics() {
  return (
    <section
      id="metrics"
      style={{
        padding: '20px 0 80px 0',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            boxShadow: 'var(--gold-glow)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
          }}
        >
          <div className="grid-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '16px',
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                {/* Icon wrapper */}
                <div
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                    padding: '12px',
                    borderRadius: '50%',
                    marginBottom: '16px',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stat.icon}
                </div>

                {/* Value */}
                <div
                  style={{
                    fontSize: '32px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    marginBottom: '4px',
                  }}
                  className="text-gold-gradient"
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  {stat.label}
                </div>

                {/* Description */}
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    maxWidth: '220px',
                  }}
                >
                  {stat.desc}
                </div>

                {/* Vertical Divider for desktop */}
                {idx < stats.length - 1 && (
                  <div
                    className="desktop-divider"
                    style={{
                      position: 'absolute',
                      right: '-10px',
                      top: '20%',
                      height: '60%',
                      width: '1px',
                      background: 'linear-gradient(to bottom, transparent, rgba(212, 175, 55, 0.2), transparent)',
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-divider {
            display: none !important;
          }
          #metrics [style*="padding: 40px"] {
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
