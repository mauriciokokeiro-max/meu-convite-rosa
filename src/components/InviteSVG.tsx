import React from "react";
import { Button } from "@/components/ui/button";

const CLUSTER_SRC = "/lovable-uploads/c9f2e9f4-ccaf-45b2-9fdf-506a6427f414.png";

// SVG responsivo que replica o convite sem usar imagem de fundo.
// Usa a flor recortada enviada para compor topo e base, com animações suaves.

const InviteSVG: React.FC = () => {
  const width = 750;
  const height = 1200;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto shadow-elegant rounded-lg"
      role="img"
      aria-label="Convite de casamento com flores rosé, nomes, monograma e informações"
    >
      {/* Papel de fundo */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        rx="18"
        fill="hsl(var(--background))"
      />

      {/* Cartão central (papel claro) */}
      <rect
        x="36"
        y="60"
        width={width - 72}
        height={height - 120}
        rx="12"
        fill="hsl(30 25% 98%)"
      />

      {/* Flores topo esquerda */}
      <g className="animate-sway-slow" opacity="0.98">
        <image
          href={CLUSTER_SRC}
          x={-1350}
          y={-1450}
          width={3000}
          height={3000}
        />
      </g>
      {/* Flores topo direita (espelhada) */}
      <g
        className="animate-sway-slow"
        style={{ animationDelay: "-2s" as any }}
        transform={`translate(${width}) scale(-1,1)`}
        opacity="0.98"
      >
        <image
          href={CLUSTER_SRC}
          x={-850}
          y={-1450}
          width={3000}
          height={3000}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* Flores base esquerda */}
      <g
        className="animate-sway-slow"
        style={{ animationDelay: "-1s" as any }}
        opacity="0.98"
      >
        <image
          href={CLUSTER_SRC}
          x={-700}
          y={-350}
          width={3000}
          height={3000}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
      {/* Flores base direita (espelhada) */}
      <g
        className="animate-sway-slow"
        style={{ animationDelay: "-3s" as any }}
        transform={`translate(${width}) scale(-1,1)`}
        opacity="0.98"
      >
        <image
          href={CLUSTER_SRC}
          x={-1390}
          y={-450}
          width={3000}
          height={3300}
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* Nomes superiores */}
      <text
        x={width * 0.3}
        y={height * 0.3}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontStyle="italic"
        fontSize="36"
      >
        Stephanie
      </text>
      <text
        x={width * 0.76}
        y={height * 0.3}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontStyle="italic"
        fontSize="36"
      >
        Mauricio
      </text>

      {/* Monograma fiel (duas letras sobrepostas e esguias) */}
      <g className="animate-breathe" opacity="0.9">
        <text
          x={width / 2}
          y={height * 0.32}
          textAnchor="middle"
          className="fill-current text-primary"
          fontFamily="var(--font-heading)"
          fontSize="180"
          fontWeight={500}
          letterSpacing="-0.05em"
        >
          S
        </text>
        <text
          x={width / 2}
          y={height * 0.35}
          textAnchor="middle"
          className="fill-current text-primary"
          fontFamily="var(--font-heading)"
          fontSize="185"
          fontWeight={500}
          letterSpacing="-0.06em"
        >
          M
        </text>
      </g>

      {/* Frase convite */}
      <text
        x={width / 2}
        y={height * 0.445}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontStyle="italic"
        fontSize="24"
      >
        Convidam para a celebração de seu casamento
      </text>

      {/* Divisor com coração */}
      <line
        x1={width * 0.18}
        y1={height * 0.47}
        x2={width * 0.42}
        y2={height * 0.47}
        stroke="hsl(var(--foreground))"
        strokeWidth="1"
      />
      <line
        x1={width * 0.58}
        y1={height * 0.47}
        x2={width * 0.82}
        y2={height * 0.47}
        stroke="hsl(var(--foreground))"
        strokeWidth="1"
      />
      <text
        x={width / 2}
        y={height * 0.472}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontSize="16"
      >
        ♥
      </text>

      {/* Data destacada com link para criar evento no Google Calendar */}
      <a
        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamento+Stephanie+e+Mauricio&dates=20260307T130000Z/20260307T190000Z&details=Cerim%C3%B4nia+e+festa+no+Buffet+do+Faustino&location=Av.+Pref.+Hirant+Sanazar+-+Jaguaribe,+Osasco+-+SP&sf=true&output=xml"
        target="_blank"
        rel="noopener noreferrer"
      >
        <text
          x={width / 2}
          y={height * 0.54}
          textAnchor="middle"
          className="fill-current text-foreground"
          fontFamily="var(--font-heading)"
          fontSize="40"
          style={{ cursor: "pointer" }}
        >
          07 de março de 2026
        </text>
        <text
          x={width / 2}
          y={height * 0.57}
          textAnchor="middle"
          className="fill-current text-foreground"
          fontFamily="var(--font-body)"
          fontSize="20"
          style={{ cursor: "pointer" }}
        >
          sábado às 10h
        </text>
      </a>

      {/* Local */}
      {/* Local com link */}
      <a
        href="https://maps.app.goo.gl/Rr9SHcQfscZZprhJ6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <text
          x={width / 2}
          y={height * 0.63}
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontStyle="italic"
          fontSize="42"
          fill="#D74C7F"
          style={{ cursor: "pointer" }}
        >
          Local
        </text>
      </a>

      {/* Local */}
      <text
        x={width / 2}
        y={height * 0.67}
        textAnchor="middle"
        className="fill-current text-primary"
        fontFamily="var(--font-body)"
        fontStyle="italic"
        fontSize="32"
        fill="#D74C7F"
      >
        Av. Pref. Hirant Sanazar, 1158 - Jaguaribe, Osasco
      </text>

      {/* Frase final */}
      <text
        x={width / 2}
        y={height * 0.71}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontSize="18"
      >
        Depois da cerimônia, os aguardamos com alegria
      </text>
      <text
        x={width / 2}
        y={height * 0.735}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontSize="18"
      >
        no mesmo local para celebrarmos juntos esse momento especial.
      </text>

      {/* Divisor inferior com coração */}
      <line
        x1={width * 0.2}
        y1={height * 0.76}
        x2={width * 0.8}
        y2={height * 0.76}
        stroke="hsl(var(--foreground))"
        strokeWidth="1"
      />
      <text
        x={width / 2}
        y={height * 0.764}
        textAnchor="middle"
        className="fill-current text-foreground"
        fontFamily="var(--font-body)"
        fontSize="16"
      >
        ♥
      </text>

      {/* Links de Confirmação e Lista de Presentes */}
      <a
        href="https://noivos.casar.com/stephanie-e-mauricio#/one-page/_start"
        target="_blank"
        rel="noopener noreferrer"
      >
        <text
          x={width / 2}
          y={980}
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontStyle="italic"
          fontSize="35"
          fill="#D74C7F" 
          style={{ cursor: "pointer" }}
        >
          Confirme sua Presença
        </text>
      </a>

       <a
        href="https://listas.casasbahia.com.br/stephanieemauricio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <text
          x={width / 2}
          y={1050}
          textAnchor="middle"
          fontFamily="var(--font-body)"
          fontStyle="italic"
          fontSize="35"
          fill="#D74C7F" 
          style={{ cursor: "pointer" }}
        >
          Lista de Presentes
        </text>
      </a>

      
    </svg>
  );
};

export default InviteSVG;
