import React from 'react';

export default function Logo({ size = 28, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: 'drop-shadow(0 0 16px rgba(212, 175, 55, 0.7))',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <defs>
        {/* Premium Gold Gradient */}
        <linearGradient
          id="lfGoldGradient"
          gradientUnits="userSpaceOnUse"
          x1="10"
          y1="90"
          x2="90"
          y2="10"
        >
          <stop offset="0%" stopColor="#9A7432" />
          <stop offset="20%" stopColor="#CBA358" />
          <stop offset="50%" stopColor="#F7E5A9" />
          <stop offset="80%" stopColor="#D8B467" />
          <stop offset="100%" stopColor="#9A7432" />
        </linearGradient>

        {/* Box Background Gradient (Subtle dark gold / black) */}
        <linearGradient id="lfBoxBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(15, 14, 12, 0.95)" />
          <stop offset="50%" stopColor="rgba(8, 8, 10, 0.98)" />
          <stop offset="100%" stopColor="rgba(4, 4, 5, 1)" />
        </linearGradient>
      </defs>

      {/* Modern Gold Rounded Box */}
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        rx="22"
        stroke="url(#lfGoldGradient)"
        strokeWidth="4"
        fill="url(#lfBoxBg)"
      />

      {/* Subtle background glow centered behind the image */}
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="rgba(212, 175, 55, 0.32)"
        style={{ filter: 'blur(10px)' }}
      />

      {/* Lord Image (No circular clip or border, floats directly inside the box) */}
      <image
        href="/logo.png"
        x="12"
        y="10"
        width="76"
        height="80"
      />
    </svg>
  );
}
