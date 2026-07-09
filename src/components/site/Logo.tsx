import { Link } from "@tanstack/react-router";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span
        className="relative inline-flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          background:
            "conic-gradient(from 210deg, #2563EB, #7C3AED, #EC4899, #F59E0B, #22D3EE, #2563EB)",
          padding: 2,
        }}
      >
        <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0B1224]">
          <span
            className="font-display font-bold text-white"
            style={{ fontSize: size * 0.5, lineHeight: 1 }}
          >
            K
          </span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[13px] font-bold tracking-[0.22em] text-white">
          KAYVORA
        </span>
        <span className="font-display text-[10px] font-medium tracking-[0.4em] text-brand-cyan/80">
          AI
        </span>
      </span>
    </Link>
  );
}