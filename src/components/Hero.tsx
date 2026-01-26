import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-evolua.png";
const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Substitua pelo número real

const Hero = () => {
  const steps = [{
    number: 1,
    title: "Diagnóstico estratégico",
    description: "Analisamos seu LinkedIn e ajustamos para ficar nas primeiras posições."
  }, {
    number: 2,
    title: "Sessões Individuais",
    description: "2 sessões de 1h para ajustes e treinamento focado nos 4 pilares."
  }, {
    number: 3,
    title: "Acompanhamento Estratégico",
    description: "Sessão de 30 minutos para eventuais ajustes e otimização."
  }];
  return <section id="inicio" className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="Evolua.VC" className="h-16 md:h-20 w-auto" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-medium text-secondary">Consultoria Especializada</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Transforme seu perfil profissional em uma{" "}
            <span className="text-gradient">marca que atrai entrevistas</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ajudamos você a se destacar no mercado com perfis de LinkedIn estratégicos e currículos que conquistam recrutadores.
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="gradient-primary text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero Evoluir
              </a>
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-border max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient">150+</p>
              <p className="text-sm text-muted-foreground">Perfis otimizados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient">95%</p>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient">15x</p>
              <p className="text-sm text-muted-foreground">Mais visibilidade*</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            *Pode variar para + ou para - de acordo com cada perfil
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center h-full">
                {/* Step Card */}
                <div className="bg-card rounded-2xl shadow-lg p-8 border border-border text-center w-full hover:shadow-xl transition-shadow h-[280px] flex flex-col">
                  {/* Number Circle */}
                  <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 shadow-md flex-shrink-0">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 flex-shrink-0">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow flex items-center justify-center">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-5 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;