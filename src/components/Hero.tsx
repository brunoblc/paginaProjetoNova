import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const steps = [
    {
      number: 1,
      title: "Diagnóstico estratégico",
      description: "Analisamos seu LinkedIn e ajustamos para ficar nas primeiras posições.",
    },
    {
      number: 2,
      title: "Sessão Individual",
      description: "Sessão de 1h30 para ajustes e treinamento focado nos 4 pilares.",
    },
    {
      number: 3,
      title: "Acompanhamento Estratégico",
      description: "Sessão de 30 minutos para eventuais ajustes e otimização.",
    },
  ];

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-medium">Consultoria Especializada</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Transforme seu{" "}
            <span className="text-gradient">perfil profissional</span>{" "}
            em uma marca de sucesso
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ajudamos você a se destacar no mercado com perfis de LinkedIn 
            estratégicos e currículos que conquistam recrutadores.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Quero Evoluir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary font-semibold text-lg px-8 py-6 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-border max-w-2xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gradient">500+</p>
              <p className="text-sm text-muted-foreground">Perfis otimizados</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gradient">95%</p>
              <p className="text-sm text-muted-foreground">Satisfação</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gradient">3x</p>
              <p className="text-sm text-muted-foreground">Mais visibilidade</p>
            </div>
          </div>
        </div>

        {/* Evolution Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col items-center">
                {/* Step Card */}
                <div className="bg-card rounded-2xl shadow-lg p-8 border border-border text-center w-full hover:shadow-xl transition-shadow">
                  {/* Number Circle */}
                  <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6 shadow-md">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
    </section>
  );
};

export default Hero;