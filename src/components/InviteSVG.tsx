import React from "react";

const CLUSTER_SRC = "/lovable-uploads/c9f2e9f4-ccaf-45b2-9fdf-506a6427f414.png";

// SVG responsivo que replica o convite sem usar imagem de fundo.
// Usa a flor recortada enviada para compor topo e base, com animações suaves.

const InviteSVG: React.FC = () => {
  const width = 750;
  const height = 1100;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto shadow-elegant rounded-lg"
      role="img"
      aria-label="Convite de casamento com flores rosé, nomes, monograma e informações"
    >
      {/* Papel de fundo */}
      <rect x="0" y="0" width={width} height={height} rx="18" fill="hsl(var(--background))" />

      {/* Cartão central (papel claro) */}
      <rect x="36" y="60" width={width - 72} height={height - 120} rx="12" fill="hsl(30 25% 98%)" />

      {/* Flores topo esquerda */}
      <g className="animate-sway-slow" opacity="0.98">
        <image href={CLUSTER_SRC} x={-30} y={-10} width={360} height={360} preserveAspectRatio="xMidYMid meet" />
      </g>
      {/* Flores topo direita (espelhada) */}
      <g className="animate-sway-slow" style={{ animationDelay: "-2s" as any }} transform={`translate(${width}) scale(-1,1)`} opacity="0.98">
        <image href={CLUSTER_SRC} x={-330} y={-10} width={360} height={360} preserveAspectRatio="xMidYMid meet" />
      </g>

      {/* Flores base esquerda */}
      <g className="animate-sway-slow" style={{ animationDelay: "-1s" as any }} opacity="0.98">
        <image href={CLUSTER_SRC} x={-20} y={height - 330} width={360} height={360} preserveAspectRatio="xMidYMid meet" />
      </g>
      {/* Flores base direita (espelhada) */}
      <g className="animate-sway-slow" style={{ animationDelay: "-3s" as any }} transform={`translate(${width}) scale(-1,1)`} opacity="0.98">
        <image href={CLUSTER_SRC} x={-340} y={height - 330} width={360} height={360} preserveAspectRatio="xMidYMid meet" />
      </g>

      {/* Nomes superiores */}
      <text x={width * 0.24} y={height * 0.23} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="36">
        Stephanie
      </text>
      <text x={width * 0.76} y={height * 0.23} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="36">
        Mauricio
      </text>

      {/* Monograma fiel (duas letras sobrepostas e esguias) */}
      <g className="animate-breathe" opacity="0.9">
        <text x={width / 2 - 24} y={height * 0.38} textAnchor="middle" className="fill-current text-primary" fontFamily="var(--font-heading)" fontSize="180" fontWeight={500} letterSpacing="-0.05em">
          S
        </text>
        <text x={width / 2 + 28} y={height * 0.39} textAnchor="middle" className="fill-current text-primary" fontFamily="var(--font-heading)" fontSize="185" fontWeight={500} letterSpacing="-0.06em">
          M
        </text>
      </g>

      {/* Frase convite */}
      <text x={width / 2} y={height * 0.445} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontStyle="italic" fontSize="24">
        Convidam para a celebração de seu casamento
      </text>

      {/* Divisor com coração */}
      <line x1={width * 0.18} y1={height * 0.47} x2={width * 0.42} y2={height * 0.47} stroke="hsl(var(--foreground))" strokeWidth="1" />
      <line x1={width * 0.58} y1={height * 0.47} x2={width * 0.82} y2={height * 0.47} stroke="hsl(var(--foreground))" strokeWidth="1" />
      <text x={width / 2} y={height * 0.472} textAnchor="middle" className="fill-current text-foreground" fontFamily="var(--font-body)" fontSize="16">
        ♥
      </text>

      {/* Data destacada */}
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
    </svg>
  );
};

export default InviteSVG;
