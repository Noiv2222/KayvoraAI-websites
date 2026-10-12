import { useId } from "react";
import { Link } from "@tanstack/react-router";

// Voltix mark: a neon "V" split by a lightning bolt inside a spinning electric ring.
// Animations live in styles.css (.voltix-*) and switch off for prefers-reduced-motion.
export function VoltixMark({ size = 44 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  const ring = `vx-ring-${id}`;
  const vee = `vx-vee-${id}`;
  const bolt = `vx-bolt-${id}`;
  const core = `vx-core-${id}`;
  const glow = `vx-glow-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Voltix AI logo"
      className="voltix-mark shrink-0 overflow-visible"
    >
      <defs>
        <linearGradient id={ring} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#F0ABFC" />
        </linearGradient>
        <linearGradient id={vee} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="55%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id={bolt} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="45%" stopColor="#FDE047" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <radialGradient id={core} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1E1B4B" />
          <stop offset="100%" stopColor="#0B1224" />
        </radialGradient>
        <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Core + spinning electric ring */}
      <circle cx="50" cy="50" r="42" fill={`url(#${core})`} />
      <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      <g className="voltix-spin" filter={`url(#${glow})`}>
        <circle
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke={`url(#${ring})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="46 10 8 10 22 12"
        />
      </g>

      {/* The V */}
      <polygon
        points="20,24 37,24 50,58 63,24 80,24 57,80 43,80"
        fill={`url(#${vee})`}
        filter={`url(#${glow})`}
      />

      {/* Bolt splitting the V: a dark cut, then the glowing bolt on top */}
      <polygon
        points="60,10 37,51 49,51 41,90 66,46 54,46 64,10"
        fill="none"
        stroke="#0B1224"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <polygon
        className="voltix-flicker"
        points="60,10 37,51 49,51 41,90 66,46 54,46 64,10"
        fill={`url(#${bolt})`}
        filter={`url(#${glow})`}
      />

      {/* Sparks */}
      <g fill="#FDE047" filter={`url(#${glow})`}>
        <circle className="voltix-spark" cx="14" cy="30" r="2" />
        <circle className="voltix-spark voltix-spark-2" cx="88" cy="68" r="2.2" />
        <circle className="voltix-spark voltix-spark-3" cx="82" cy="16" r="1.6" />
        <circle className="voltix-spark voltix-spark-4" cx="22" cy="84" r="1.6" />
      </g>
    </svg>
  );
}

export function Logo({ size = 44, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Voltix AI home">
      <VoltixMark size={size} />
      {withText && (
        <span
          className="font-['Sora'] font-extrabold tracking-tight text-white leading-none"
          style={{ fontSize: Math.round(size * 0.48) }}
        >
          VOLT
          <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
            IX
          </span>
          <span
            className="ml-1.5 rounded-md border border-cyan-300/40 bg-cyan-300/10 px-1.5 py-0.5 align-middle font-bold text-cyan-200"
            style={{ fontSize: Math.max(10, Math.round(size * 0.24)) }}
          >
            AI
          </span>
        </span>
      )}
    </Link>
  );
}
