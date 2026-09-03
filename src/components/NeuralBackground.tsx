const surfaceBackground = [
  "linear-gradient(130deg, rgba(3,4,5,0.95), rgba(8,10,13,0.98) 42%, rgba(17,21,26,0.95))",
  "linear-gradient(18deg, rgba(37,43,50,0.9), transparent 34%, rgba(140,150,163,0.6) 58%, transparent 72%)"
].join(", ");

const atmosphereBackground = [
  "radial-gradient(ellipse 92% 120% at -12% 64%, rgba(29,111,255,0.34) 0%, rgba(29,111,255,0.2) 34%, rgba(29,111,255,0) 70%)",
  "radial-gradient(ellipse 92% 120% at 112% 38%, rgba(243,199,67,0.24) 0%, rgba(243,199,67,0.16) 40%, rgba(243,199,67,0) 74%)",
  "linear-gradient(100deg, rgba(3,4,5,0.16) 0%, rgba(8,10,13,0.78) 38%, rgba(25,27,32,0.94) 52%, rgba(3,4,5,0.16) 100%)"
].join(", ");

const patternBackground = [
  "linear-gradient(rgba(140,150,163,0.1) 0.2px, transparent 0.2px)",
  "linear-gradient(90deg, rgba(140,150,163,0.08) 0.2px, transparent 0.2px)",
  "repeating-linear-gradient(135deg, transparent 0, transparent 7.6px, rgba(140,150,163,0.08) 7.8px, transparent 8px)"
].join(", ");

export function NeuralBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: surfaceBackground }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: atmosphereBackground }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: patternBackground,
          backgroundSize: "11.2px 11.2px, 11.2px 11.2px, auto"
        }}
      />
    </div>
  );
}
