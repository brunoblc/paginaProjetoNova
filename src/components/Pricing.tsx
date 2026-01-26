import { MessageCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Substitua pelo número real

const Pricing = () => {
  const benefits = [
    "Diagnóstico estratégico completo",
    "2 sessões individuais de 1h",
    "Acompanhamento estratégico",
    "Otimização para os 4 pilares do LinkedIn",
    "Suporte via WhatsApp"
  ];

  return (
    <section id="precos" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Invista no seu <span className="text-gradient">futuro profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Um pequeno investimento para grandes resultados na sua carreira
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 gradient-primary rounded-3xl blur-lg opacity-30"></div>
            
            {/* Card */}
            <div className="relative bg-card rounded-3xl border border-border shadow-xl overflow-hidden">
              {/* Header */}
              <div className="gradient-primary p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Consultoria Completa
                </h3>
                <p className="text-white/80">
                  Tudo que você precisa para se destacar
                </p>
              </div>

              {/* Pricing */}
              <div className="p-8 text-center border-b border-border">
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">12x</span>
                  <span className="text-2xl md:text-3xl font-bold text-foreground"> de R$ 37,96</span>
                </div>
                <p className="text-muted-foreground">
                  ou <span className="font-semibold text-foreground">R$ 367,00</span> à vista
                </p>
              </div>

              {/* Benefits */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full gradient-primary text-white font-semibold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                  asChild
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero Começar Agora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
