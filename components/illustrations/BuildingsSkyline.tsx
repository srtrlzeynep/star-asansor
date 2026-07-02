export function BuildingsSkyline({ className }: { className?: string }) {
  const buildings = [
    { x: 0, w: 60, h: 120 },
    { x: 64, w: 40, h: 170 },
    { x: 108, w: 54, h: 90 },
    { x: 166, w: 46, h: 150 },
    { x: 216, w: 62, h: 200 },
    { x: 282, w: 38, h: 110 },
    { x: 324, w: 50, h: 160 },
    { x: 378, w: 44, h: 95 },
    { x: 426, w: 58, h: 140 },
    { x: 488, w: 40, h: 180 },
    { x: 532, w: 48, h: 100 },
  ];

  return (
    <svg
      viewBox="0 0 600 200"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {buildings.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={200 - b.h}
          width={b.w}
          height={b.h}
          className="fill-current"
        />
      ))}
    </svg>
  );
}
