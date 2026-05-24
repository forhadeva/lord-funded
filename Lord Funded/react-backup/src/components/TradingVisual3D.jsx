import React from 'react';

export default function TradingVisual3D() {
  return (
    <div className="ht-root">
      {/* ── Ambient glow blobs (no outline, pure radial) ── */}
      <div className="ht-blob ht-blob-1" />
      <div className="ht-blob ht-blob-2" />

      {/* ── Lord Background Image ── */}
      <div className="ht-lord-bg-container">
        <div className="ht-lord-wrapper">
          <img src="/lord.png" alt="Lord Jesus Christ" className="ht-lord-bg-img" />
          <div className="ht-lord-text-overlay">
            <div className="ht-lord-title">Guided by Faith</div>
            <div className="ht-lord-subtitle">Powered by Capital</div>
          </div>
        </div>
      </div>

      {/* ── Floating particles ── */}
      <svg className="ht-particles" viewBox="0 0 500 480">
        {Array.from({ length: 24 }, (_, i) => (
          <circle key={i}
            cx={30 + (i * 73) % 440}
            cy={20 + (i * 47) % 440}
            r={1 + (i % 3) * 0.8}
            fill="#d4af37" opacity="0">
            <animate attributeName="opacity" values="0;0.7;0"
              dur={`${4 + (i % 3)}s`} begin={`${(i * 0.4) % 5}s`} repeatCount="indefinite"/>
            <animate attributeName="cy"
              values={`${20 + (i * 47) % 440};${10 + (i * 47) % 440};${20 + (i * 47) % 440}`}
              dur={`${4 + (i % 3)}s`} begin={`${(i * 0.4) % 5}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </svg>

      <style>{`
        /* ── Root ── */
        .ht-root {
          position: relative;
          width: 100%;
          height: 650px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* ── Ambient glows (no border/outline) ── */
        .ht-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .ht-blob-1 {
          width: 400px; height: 320px;
          background: radial-gradient(ellipse, rgba(212,175,55,0.18), transparent 70%);
          top: 15%; right: 10%;
          filter: blur(40px);
        }
        .ht-blob-2 {
          width: 300px; height: 250px;
          background: radial-gradient(ellipse, rgba(212,175,55,0.1), transparent 70%);
          bottom: 15%; left: 10%;
          filter: blur(35px);
        }

        /* ── Particles SVG ── */
        .ht-particles {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          pointer-events: none; 
          z-index: 3;
        }

        /* ── Lord Background Image ── */
        .ht-lord-bg-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 2;
          animation: breathing 8s ease-in-out infinite;
        }
        .ht-lord-wrapper {
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ht-lord-bg-img {
          height: 100%;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 35px rgba(212, 175, 55, 0.4));
          clip-path: inset(0 0 19% 0);
          mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%);
          -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%);
        }
        .ht-lord-text-overlay {
          position: absolute;
          bottom: 12%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          padding: 0 10px;
        }
        .ht-lord-title {
          font-family: 'Cinzel', 'Playfair Display', 'Georgia', serif;
          font-size: 24px;
          font-weight: 500;
          color: #d4af37;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-shadow: 0 0 12px rgba(212, 175, 55, 0.6);
          margin: 0;
          line-height: 1.2;
        }
        .ht-lord-subtitle {
          font-family: 'Montserrat', 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #e2e8f0;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-top: 6px;
          opacity: 0.9;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
        }
        @keyframes breathing {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.85; }
          50% { transform: scale(1.03) translateY(-8px); opacity: 0.98; }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .ht-root { height: 520px; }
          .ht-lord-title { font-size: 20px; }
          .ht-lord-subtitle { font-size: 11px; }
          .ht-lord-text-overlay { bottom: 10%; }
        }
        @media (max-width: 640px) {
          .ht-root { height: 420px; }
          .ht-lord-title { font-size: 16px; }
          .ht-lord-subtitle { font-size: 9px; }
          .ht-lord-text-overlay { bottom: 8%; }
        }
      `}</style>
    </div>
  );
}
