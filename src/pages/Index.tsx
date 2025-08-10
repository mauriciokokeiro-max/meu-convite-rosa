import InviteSVG from "@/components/InviteSVG";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="sr-only">Convite de Casamento de Stephanie e Mauricio</h1>

      <section className="w-full max-w-[760px] animate-fade-in">
        <InviteSVG />
      </section>
    </main>
  );
};

export default Index;
