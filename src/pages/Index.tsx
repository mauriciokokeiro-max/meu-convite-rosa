import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const INVITE_SRC = "/lovable-uploads/f2733be9-c56b-4c07-b3e2-701aec61af4d.png";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="sr-only">Convite de Casamento de Stephanie e Mauricio</h1>

      <section className="w-full max-w-[720px] animate-fade-in">
        <div className="relative shadow-elegant rounded-lg overflow-hidden">
          <AspectRatio ratio={0.7}>
            {/* Base artwork for perfect fidelity */}
            <img
              src={INVITE_SRC}
              alt="Convite de casamento com flores rosas, monograma SM e detalhes em tom rosé"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />

            {/* Animated floral layers (masked top and bottom for subtle sway) */}
            <div
              className="absolute inset-0 bg-center bg-cover pointer-events-none animate-sway-slow"
              style={{
                backgroundImage: `url(${INVITE_SRC})`,
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 60%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 40%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0 bg-center bg-cover pointer-events-none animate-sway-slow"
              style={{
                backgroundImage: `url(${INVITE_SRC})`,
                WebkitMaskImage:
                  "linear-gradient(to top, black 0%, black 38%, transparent 60%)",
                maskImage:
                  "linear-gradient(to top, black 0%, black 38%, transparent 60%)",
                animationDelay: "-2s",
              }}
            />

            {/* Monogram animation overlay (keeps the same look, adds life) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[22%] pointer-events-none select-none text-primary">
              <div className="font-heading tracking-tight text-[18vw] sm:text-[12rem] leading-none opacity-80 animate-breathe">
                SM
              </div>
            </div>

            {/* Intuitive interactive links positioned over the artwork */}
            <nav className="absolute left-1/2 -translate-x-1/2 bottom-[10%] flex flex-col items-center gap-3">
              <a href="#presenca" className="story-link text-foreground text-lg sm:text-xl">
                Presença
              </a>
              <a href="#lista" className="story-link text-foreground text-lg sm:text-xl">
                Lista de presente
              </a>
            </nav>
          </AspectRatio>
        </div>
      </section>

      {/* Extra-intuitive large CTAs below the card for mobile usability */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-md justify-center">
        <Button asChild className="w-full sm:w-auto">
          <a href="#presenca" aria-label="Confirmar presença">Confirmar presença</a>
        </Button>
        <Button asChild variant="secondary" className="w-full sm:w-auto">
          <a href="#lista" aria-label="Abrir lista de presentes">Lista de presentes</a>
        </Button>
      </div>

      {/* Target sections */}
      <section id="presenca" className="container mt-12 max-w-2xl text-center animate-fade-in">
        <h2 className="font-heading text-3xl mb-2">Confirmação de Presença</h2>
        <p className="text-muted-foreground">
          Toque em "Confirmar presença" para registrar sua presença. Se preferir, entre em
          contato diretamente conosco.
        </p>
      </section>

      <section id="lista" className="container mt-10 max-w-2xl text-center animate-fade-in">
        <h2 className="font-heading text-3xl mb-2">Lista de Presentes</h2>
        <p className="text-muted-foreground">
          Adicionaremos aqui o link da nossa lista de presentes. Você poderá acessá-la
          diretamente por este botão.
        </p>
      </section>
    </main>
  );
};

export default Index;
