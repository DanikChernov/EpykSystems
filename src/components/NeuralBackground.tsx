export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(3,4,5,0.1),rgba(8,10,13,0.86)_42%,rgba(17,21,26,0.72)),linear-gradient(18deg,rgba(37,43,50,0.24),transparent_34%,rgba(140,150,163,0.08)_58%,transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,150,163,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,150,163,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_38px,rgba(140,150,163,0.026)_39px,transparent_40px)]" />
      <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(90deg,transparent,rgba(29,111,255,0.08),transparent_65%,rgba(243,199,67,0.045),transparent)]" />
      <svg
        className="absolute left-1/2 top-0 h-full min-h-[720px] w-[1280px] -translate-x-1/2 opacity-[0.16]"
        viewBox="0 0 1280 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="url(#silver)" strokeWidth="1">
          <path d="M68 120H1210" />
          <path d="M118 248H1162" />
          <path d="M36 492H1228" />
          <path d="M224 42V674" />
          <path d="M548 0V720" />
          <path d="M936 64V686" />
          <path d="M60 622L1180 102" />
          <path d="M132 62L1134 612" />
        </g>
        <g stroke="url(#accent)" strokeWidth="1.25">
          <path d="M224 248H548V120H936V492H1210" />
          <path d="M118 492H548V622H936" />
        </g>
        <defs>
          <linearGradient id="silver" x1="36" y1="0" x2="1228" y2="720">
            <stop stopColor="#8C96A3" stopOpacity="0.2" />
            <stop offset="0.48" stopColor="#252B32" stopOpacity="0.22" />
            <stop offset="1" stopColor="#8C96A3" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="accent" x1="118" y1="120" x2="1210" y2="622">
            <stop stopColor="#1D6FFF" stopOpacity="0.36" />
            <stop offset="0.68" stopColor="#8C96A3" stopOpacity="0.22" />
            <stop offset="1" stopColor="#F3C743" stopOpacity="0.26" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
