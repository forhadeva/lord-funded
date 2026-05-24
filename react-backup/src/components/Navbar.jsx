import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, LogIn, ArrowRight, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, currentLang, t, LANGUAGES } = useLanguage();
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navItems = [
    { label: t('about'), key: 'About' },
    { label: t('features'), key: 'Features' },
    { label: t('howItWorks'), key: 'How it Works' },
    { label: t('challenges'), key: 'Challenges' },
    { label: t('rules'), key: 'Rules' },
    { label: t('faq'), key: 'FAQ' },
    { label: t('affiliate'), key: 'Affiliate' },
  ];

  const routeMap = { 'About': '/about', 'Features': '/features', 'Affiliate': '/affiliate', 'FAQ': '/faq', 'Challenges': '/challenges', 'How it Works': '/how-it-works' };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 5, 6, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : '1px solid transparent',
        padding: scrolled ? '16px 0' : '24px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Logo size={40} />
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '22px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Lord <span className="text-gold-gradient">Funded</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className="desktop-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navItems.map((item) => {
            return routeMap[item.key] ? (
              <Link
                key={item.key}
                to={routeMap[item.key]}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.key}
                href={`/#${item.key.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Language + Action Buttons */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Language Dropdown */}
          <div ref={langRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: 'none', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '7px 12px',
                cursor: 'pointer', color: 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              <Globe size={14} />
              <span>{currentLang.flag} {lang.toUpperCase()}</span>
              <ChevronDown size={12} style={{
                transform: langOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }} />
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: 'rgba(14,13,10,0.97)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '14px', padding: '6px',
                minWidth: '160px',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                animation: 'fadeIn 0.15s ease',
              }}>
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      width: '100%', padding: '10px 14px', borderRadius: '10px',
                      border: 'none', cursor: 'pointer',
                      background: lang === l.code ? 'rgba(212,175,55,0.1)' : 'transparent',
                      color: lang === l.code ? 'var(--gold-primary)' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 600,
                      transition: 'all 0.15s',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => { if (lang !== l.code) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                    onMouseLeave={e => { if (lang !== l.code) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span style={{ fontSize: '16px' }}>{l.flag}</span>
                    <span>{l.label}</span>
                    {lang === l.code && <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--gold-primary)' }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', gap: '6px' }}>
            <LogIn size={15} />
            {t('login')}
          </a>
          <a href="/challenges" className="btn btn-primary btn-sm" style={{ display: 'inline-flex', gap: '6px' }}>
            {t('getStarted')}
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 10, 12, 0.98)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: 'var(--gold-glow)',
          }}
        >
          {navItems.map((item) => {
            return routeMap[item.key] ? (
              <Link
                key={item.key}
                to={routeMap[item.key]}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  padding: '8px 0',
                }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.key}
                href={`/#${item.key.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  padding: '8px 0',
                }}
              >
                {item.label}
              </a>
            );
          })}

          {/* Mobile Language Selector */}
          <div style={{
            display: 'flex', gap: '8px', padding: '8px 0',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            marginTop: '4px',
          }}>
            {LANGUAGES.map(l => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  flex: 1, padding: '10px 8px', borderRadius: '10px',
                  border: `1px solid ${lang === l.code ? 'rgba(212,175,55,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  background: lang === l.code ? 'rgba(212,175,55,0.1)' : 'rgba(14,13,10,0.5)',
                  color: lang === l.code ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer', fontFamily: 'var(--font-heading)',
                  fontSize: '12px', fontWeight: 600,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                }}
              >
                <span>{l.flag}</span> {l.label}
              </button>
            ))}
          </div>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="btn btn-secondary"
            style={{ width: '100%', marginTop: '10px' }}
          >
            <LogIn size={18} />
            {t('login')}
          </a>
          <a
            href="/challenges"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            {t('getStarted')}
            <ArrowRight size={18} />
          </a>
        </div>
      )}

      {/* Media query styling injection */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
