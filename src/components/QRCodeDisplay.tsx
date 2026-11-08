import React from 'react';

interface QRCodeDisplayProps {
  value: string;
  brand: 'telebirr' | 'cbe' | 'stripe';
  size?: number;
  label?: string;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  value,
  brand,
  size = 180,
  label
}) => {
  // Brand color accents
  const brandColors = {
    telebirr: {
      primary: '#006643',
      badgeBg: '#006643',
      badgeText: '#ffffff',
      title: 'TeleBirr Pay',
      subtitle: 'Scan with TeleBirr SuperApp'
    },
    cbe: {
      primary: '#581c87',
      badgeBg: '#581c87',
      badgeText: '#ffffff',
      title: 'CBE Birr Pay',
      subtitle: 'Scan with CBE Mobile / CBE Birr'
    },
    stripe: {
      primary: '#635bff',
      badgeBg: '#635bff',
      badgeText: '#ffffff',
      title: 'Stripe Mobile Pay',
      subtitle: 'Scan with phone camera for Apple Pay / Card'
    }
  };

  const currentBrand = brandColors[brand];

  // Procedural deterministic SVG QR pattern based on payload hash
  const generateQRPattern = (seed: string) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash |= 0;
    }

    const gridSize = 25; // 25x25 QR grid
    const cells: { x: number; y: number }[] = [];

    for (let r = 0; r < gridSize; r++) {
      for (let c = 0; c < gridSize; c++) {
        // Corner locator squares (top-left, top-right, bottom-left)
        const isTopLeft = r < 7 && c < 7;
        const isTopRight = r < 7 && c >= gridSize - 7;
        const isBottomLeft = r >= gridSize - 7 && c < 7;

        if (isTopLeft || isTopRight || isBottomLeft) {
          // Locator border & core
          const localR = isBottomLeft ? r - (gridSize - 7) : r;
          const localC = isTopRight ? c - (gridSize - 7) : c;
          if (
            localR === 0 || localR === 6 || localC === 0 || localC === 6 ||
            (localR >= 2 && localR <= 4 && localC >= 2 && localC <= 4)
          ) {
            cells.push({ x: c, y: r });
          }
          continue;
        }

        // Center badge cutout (keep clear for logo badge)
        if (r >= 10 && r <= 14 && c >= 10 && c <= 14) {
          continue;
        }

        // Deterministic pseudorandom data cells
        const val = Math.sin(r * 13 + c * 37 + hash) * 10000;
        if (val - Math.floor(val) > 0.48) {
          cells.push({ x: c, y: r });
        }
      }
    }
    return { gridSize, cells };
  };

  const { gridSize, cells } = generateQRPattern(value);
  const cellSize = size / gridSize;

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-stone-200 shadow-2xs">
      <div className="relative p-2 bg-white rounded-lg border border-stone-100 shadow-xs">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="select-none"
        >
          {cells.map((cell, idx) => (
            <rect
              key={idx}
              x={cell.x * cellSize}
              y={cell.y * cellSize}
              width={cellSize + 0.15}
              height={cellSize + 0.15}
              fill={currentBrand.primary}
              rx={cellSize * 0.15}
            />
          ))}

          {/* Center Brand Badge */}
          <rect
            x={10 * cellSize - 1}
            y={10 * cellSize - 1}
            width={5 * cellSize + 2}
            height={5 * cellSize + 2}
            fill="#ffffff"
            rx="4"
          />
          <rect
            x={10 * cellSize + 1}
            y={10 * cellSize + 1}
            width={5 * cellSize - 2}
            height={5 * cellSize - 2}
            fill={currentBrand.badgeBg}
            rx="3"
          />
          <text
            x={size / 2}
            y={size / 2 + 3}
            textAnchor="middle"
            fill={currentBrand.badgeText}
            fontSize="8"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            {brand === 'telebirr' ? 'telebirr' : brand === 'cbe' ? 'CBE' : 'stripe'}
          </text>
        </svg>
      </div>

      <div className="mt-2 text-center">
        <div className="text-xs font-bold text-stone-800">{label || currentBrand.title}</div>
        <div className="text-[10px] text-stone-500">{currentBrand.subtitle}</div>
      </div>
    </div>
  );
};
