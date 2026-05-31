export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,7,11,0.1),rgba(8,13,20,0.72)),radial-gradient(circle_at_22%_12%,rgba(45,124,255,0.12),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(221,227,234,0.045),transparent_28%),radial-gradient(circle_at_48%_82%,rgba(45,124,255,0.065),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(221,227,234,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(221,227,234,0.026)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_34px,rgba(45,124,255,0.028)_35px,transparent_36px)]" />
      <svg
        className="absolute left-1/2 top-0 h-full min-h-[720px] w-[1280px] -translate-x-1/2 opacity-[0.18]"
        viewBox="0 0 1280 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="url(#line)" strokeWidth="1">
          <path d="M86 184L228 124L344 210L486 142L632 238L798 116L944 210L1154 146" />
          <path d="M144 452L292 348L456 404L604 310L746 390L914 308L1090 382" />
          <path d="M228 124L292 348L486 142L604 310L798 116L914 308L1154 146" />
          <path d="M344 210L456 404L632 238L746 390L944 210L1090 382" />
        </g>
        <g fill="url(#node)">
          {[
            [86, 184],
            [228, 124],
            [344, 210],
            [486, 142],
            [632, 238],
            [798, 116],
            [944, 210],
            [1154, 146],
            [144, 452],
            [292, 348],
            [456, 404],
            [604, 310],
            [746, 390],
            [914, 308],
            [1090, 382]
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
          ))}
        </g>
        <defs>
          <linearGradient id="line" x1="86" y1="124" x2="1154" y2="452">
            <stop stopColor="#2D7CFF" stopOpacity="0.18" />
            <stop offset="0.5" stopColor="#DDE3EA" stopOpacity="0.18" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="node" x1="86" y1="116" x2="1154" y2="452">
            <stop stopColor="#F4F7FB" stopOpacity="0.52" />
            <stop offset="1" stopColor="#2D7CFF" stopOpacity="0.55" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
