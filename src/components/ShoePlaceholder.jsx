import { motion } from 'framer-motion';

export const ShoePlaceholder = ({ className = '', parts = {}, animate = false }) => {
  return (
    <svg
      viewBox="0 0 900 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: 'drop-shadow(0 40px 80px rgba(217,254,0,0.25))' }}
    >
      {/* === OUTSOLE (bottom) === */}
      <motion.path
        animate={parts.sole || {}}
        d="M120 400 C80 400 60 385 60 370 C60 355 90 345 140 342 L740 330 C800 328 850 338 860 355 C870 372 840 390 790 398 Z"
        fill="#1a1a0a"
        stroke="#d9fe00"
        strokeWidth="2"
      />

      {/* === MIDSOLE (air unit) === */}
      <motion.ellipse
        animate={parts.airUnit || {}}
        cx="680"
        cy="362"
        rx="100"
        ry="22"
        fill="#d9fe00"
        opacity="0.9"
      />
      <motion.path
        animate={parts.airUnit || {}}
        d="M575 345 L785 340 L800 370 L570 375 Z"
        fill="rgba(217,254,0,0.2)"
        stroke="#d9fe00"
        strokeWidth="1.5"
      />

      {/* === MAIN UPPER BODY === */}
      <motion.path
        animate={parts.outline || {}}
        d="M130 345 C130 345 140 200 220 160 C280 130 350 120 440 118 C530 116 620 130 680 160 C730 185 760 220 760 260 C760 290 740 320 700 335 L140 350 Z"
        fill="#111111"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />

      {/* === HEEL COUNTER === */}
      <motion.path
        animate={parts.outline || {}}
        d="M680 160 C730 185 760 220 760 260 L750 335 C780 310 800 280 800 250 C800 200 765 165 710 150 Z"
        fill="#1c1c1c"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />

      {/* === TONGUE === */}
      <motion.path
        animate={parts.outline || {}}
        d="M340 118 C340 118 330 180 320 230 C315 260 320 280 340 290 L380 295 C400 290 415 275 415 250 L410 120 Z"
        fill="#1a1a1a"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
      />

      {/* === LACES === */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line
          key={i}
          animate={parts.outline || {}}
          x1={330 + i * 16}
          y1={150 + i * 26}
          x2={410 - i * 12}
          y2={148 + i * 26}
          stroke="#d9fe00"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity={0.8 - i * 0.1}
        />
      ))}

      {/* === COLLAR === */}
      <motion.path
        animate={parts.outline || {}}
        d="M130 345 C130 345 160 310 200 300 C240 290 280 295 310 300"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* === NIKE SWOOSH === */}
      <motion.path
        animate={parts.swoosh || {}}
        d="M220 280 C280 240 380 210 500 210 C580 210 650 225 700 250 C660 245 580 235 500 238 C400 242 300 265 240 295 Z"
        fill="#d9fe00"
        opacity="0.95"
      />

      {/* === UPPER MESH TEXTURE LINES === */}
      <motion.path
        animate={parts.outline || {}}
        d="M250 200 C280 185 350 170 440 165"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        fill="none"
      />
      <motion.path
        animate={parts.outline || {}}
        d="M260 225 C300 205 380 188 480 183"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        fill="none"
      />
      <motion.path
        animate={parts.outline || {}}
        d="M260 250 C310 225 400 205 510 200"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        fill="none"
      />

      {/* === REFLECTIVE LOGO DOT === */}
      <motion.circle
        animate={parts.outline || {}}
        cx="680"
        cy="190"
        r="8"
        fill="#d9fe00"
        opacity="0.7"
      />

      {/* === VOLT STRIPE ON SOLE === */}
      <motion.path
        animate={parts.sole || {}}
        d="M90 390 L840 378"
        stroke="#d9fe00"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* === GLOW HALO UNDER SHOE === */}
      <motion.ellipse
        cx="450"
        cy="420"
        rx="320"
        ry="25"
        fill="#d9fe00"
        opacity="0.08"
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
    </svg>
  );
};
