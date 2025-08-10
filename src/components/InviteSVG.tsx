import React from "react";

const INVITE_SRC = "/lovable-uploads/f2733be9-c56b-4c07-b3e2-701aec61af4d.png";

// SVG totalmente responsivo que replica a composição do convite
// - Recortes das flores (topo e base) a partir da imagem enviada
// - Tipografia Cinzel/Cormorant
// - Animações suaves nas flores e no monograma
// - Links clicáveis dentro do cartão

export const InviteSVG: React.FC = () => {
  const width = 750; // base
  const height = 1100; // base
  const topClipH = 280;
  const bottomClipY = 820;
  const bottomClipH = height - bottomClipY;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto shadow-elegant rounded-lg"
      role="img"
      aria-label="Convite de casamento de Stephanie e Mauricio com flores rosas"
    >
      <defs>
        <clipPath id="clipTop">
          <rect x="0" y="0" width={width} height={topClipH} rx="8" />
        </clipPath>
        <clipPath id="clipBottom">
          <rect x="0" y={bottomClipY} width={width} height={bottomClipH} rx="8" />
        </clipPath>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="hsl(338 22% 24% / 0.15)" />
        </filter>
      </defs>

      {/* Papel de fundo */}
      <rect x="0" y="0" width={width} height={height} rx="16" fill="hsl(var(--background))" />

      {/* Cartão interno */}
      <rect
        x="36"
        y="60"
        width={width - 72}
        height={height - 120}
        rx="10"
        fill="hsl(30 25% 98%)"
        filter="url(#softShadow)"
      />

      {/* Flores - topo (recorte) */}
      <g clipPath="url(#clipTop)" className="animate-sway-slow">
        <image href={INVITE_SRC} x="0" y="0" width={width} height={height} preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Flores - base (recorte) */}
      <g clipPath="url(#clipBottom)" className="animate-sway-slow" style={{ animationDelay: "-2s" as any }}>
        <image href={INVITE_SRC} x="0" y="0" width={width} height={height} preserveAspectRatio="xMidYMid slice" />
      </g>

      {/* Nomes superiores */}
      <text x={width * 0.22} y={height * 0.24} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="36">
        Stephanie
      </text>
      <text x={width * 0.78} y={height * 0.24} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="36">
        Mauricio
      </text>

      {/* Monograma central animado */}
      <g className="animate-breathe" aria-hidden="true">
        <text
          x={width / 2}
          y={height * 0.38}
          textAnchor="middle"
          className="fill-current text-primary"
          fontFamily="var(--font-heading)"
          fontSize="170"
          opacity="0.85"
        >
          SM
        </text>
      </g>

      {/* Frase convite */}
      <text x={width / 2} y={height * 0.44} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="24">
        Convidam para a celebração de seu casamento
      </text>

      {/* Divisor com coração */}
      <line x1={width * 0.18} y1={height * 0.47} x2={width * 0.42} y2={height * 0.47} stroke="hsl(var(--foreground))" strokeWidth="1" />
      <line x1={width * 0.58} y1={height * 0.47} x2={width * 0.82} y2={height * 0.47} stroke="hsl(var(--foreground))" strokeWidth="1" />
      <text x={width / 2} y={height * 0.472} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontSize="16">
        ♥
      </text>

      {/* Data em destaque */}
      <text x={width / 2} y={height * 0.54} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-heading)" fontSize="40">
        07 de março de 2026
      </text>
      <text x={width / 2} y={height * 0.57} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontSize="20">
        sábado às 10h
      </text>

      {/* Local */}
      <text x={width / 2} y={height * 0.63} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="24">
        Buffet do Faustino
      </text>
      <text x={width / 2} y={height * 0.66} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="22">
        Rua Alegre, 123 - Cidade Brasileira.
      </text>

      {/* Frase final */}
      <text x={width / 2} y={height * 0.71} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontSize="18">
        Depois da cerimônia, os aguardamos com alegria
      </text>
      <text x={width / 2} y={height * 0.735} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontSize="18">
        no mesmo local para celebrarmos juntos esse momento especial.
      </text>

      {/* Divisor inferior com coração */}
      <line x1={width * 0.2} y1={height * 0.76} x2={width * 0.8} y2={height * 0.76} stroke="hsl(var(--foreground))" strokeWidth="1" />
      <text x={width / 2} y={height * 0.764} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontSize="16">
        ♥
      </text>

      {/* Links no cartão (clicáveis) */}
      <a href="https://noivos.casar.com/stephanie-e-mauricio#/one-page/_start" target="_blank" rel="noopener noreferrer">
        <text x={width / 2} y={height * 0.80} textAnchor="middle" className="fill-current text-primary" fontFamily="var(--font-body)" fontSize="22" textDecoration="underline">
          Presença
        </text>
      </a>
      <a href="https://listas.casasbahia.com.br/stephanieemauricio" target="_blank" rel="noopener noreferrer">
        <text x={width / 2} y={height * 0.84} textAnchor="middle" className="fill-current text-primary" fontFamily="var(--font-body)" fontSize="22" textDecoration="underline">
          Lista de presente
        </text>
      </a>
    </svg>
  );
};

export default InviteSVG;
