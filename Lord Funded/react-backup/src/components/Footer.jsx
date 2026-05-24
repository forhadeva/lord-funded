import React from 'react';
import { Send, Globe, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  const challengeLinks = [
    { label: t('footer1Step'), to: '/challenges' },
    { label: t('footer2Step'), to: '/challenges' },
    { label: t('footerFundingRules'), to: '/challenges' },
    { label: t('footerScaling'), to: '/challenges' },
  ];

  const infoLinks = [
    { label: t('footerFeatures'), to: '/features' },
    { label: t('footerHowItWorks'), to: '/how-it-works' },
    { label: t('footerFAQ'), to: '/faq' },
    { label: t('footerContact'), to: '/#contact-us', isHash: true },
  ];

  return (
    <footer
      style={{
        background: '#030304',
        borderTop: '1px solid var(--border-color)',
        padding: '80px 0 40px 0',
        textAlign: 'left',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div className="container">
        
        {/* Top Section */}
        <div className="grid-4" style={{ gap: '40px', marginBottom: '60px' }}>
          {/* Logo & Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Logo size={40} />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '22px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'white' }}>
                Lord <span className="text-gold-gradient">Funded</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: '1.6' }}>
              {t('footerDesc')}
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: (<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>), href: 'https://twitter.com' },
                { icon: <Send size={18} />, href: 'https://telegram.org' },
                { icon: <Globe size={18} />, href: '#' },
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                  style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', width: '38px', height: '38px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--gold-primary)'; e.currentTarget.style.borderColor = 'var(--gold-primary)'; e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'; }}
                >{social.icon}</a>
              ))}
            </div>
          </div>

          {/* Column 2: Challenge models */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
              {t('footerChallenges')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {challengeLinks.map((link, i) => (
                <Link key={i} to={link.to} style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
              {t('footerInfo')}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {infoLinks.map((link, i) => (
                link.isHash ? (
                  <a key={i} href={link.to} style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >{link.label}</a>
                ) : (
                  <Link key={i} to={link.to} style={{ fontSize: '13.5px', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >{link.label}</Link>
                )
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: 'white', fontSize: '16px', fontWeight: 600, marginBottom: '20px' }}>
              {t('footerStayUpdated')}
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '16px', lineHeight: '1.5' }}>
              {t('footerSubscribe')}
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '4px' }}>
              <input type="email" placeholder={t('footerEmail')} required
                style={{ background: 'none', border: 'none', outline: 'none', color: 'white', padding: '8px 12px', fontSize: '13px', width: '100%' }}
              />
              <button type="submit" style={{ background: 'var(--gold-gradient)', border: 'none', borderRadius: '6px', color: '#000', padding: '8px 12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginBottom: '32px' }} />

        {/* Regulatory Disclosure Section */}
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.6', textAlign: 'justify' }}>
            <strong>Regulatory Disclaimer:</strong> {t('footerDisclaimer')}
          </p>
        </div>

        {/* Bottom Section */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Lord Funded. {t('allRightsReserved')}
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[t('privacyPolicy'), t('termsOfService'), t('riskDisclosure')].map((legal, i) => (
              <a key={i} href="#" style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >{legal}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
