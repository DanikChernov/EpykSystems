const surfaceBackground = [
  "linear-gradient(130deg, rgba(1,2,4,0.98), rgba(3,5,11,0.99) 42%, rgba(8,9,13,0.98))",
  "linear-gradient(18deg, rgba(18,24,34,0.72), transparent 34%, rgba(59,70,88,0.34) 58%, transparent 72%)"
].join(", ");

const atmosphereBackground = [
  "radial-gradient(ellipse 94% 122% at -13% 64%, rgba(11,73,215,0.36) 0%, rgba(15,62,162,0.26) 34%, rgba(4,12,31,0) 70%)",
  "radial-gradient(ellipse 94% 122% at 113% 38%, rgba(202,126,18,0.25) 0%, rgba(123,78,18,0.2) 40%, rgba(31,19,4,0) 74%)",
  "linear-gradient(100deg, rgba(0,0,0,0.22) 0%, rgba(3,5,12,0.84) 38%, rgba(8,10,16,0.96) 52%, rgba(0,0,0,0.24) 100%)"
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
