import { Link } from "@tanstack/react-router";

export function Logo({ size = 56 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/kayvora-logo.png"
        alt="Kayvora AI"
        width={size}
        height={size}
        className="object-contain"
        style={{ width: size, height: size }}
      />
    </Link>
  );
}