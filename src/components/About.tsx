import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Especialistas em LinkedIn com experiência comprovada",
  "Metodologia própria baseada em resultados reais",
  "Atendimento personalizado para cada perfil",
  "Suporte contínuo durante todo o processo",
  "Técnicas atualizadas com as melhores práticas do mercado",
  "Foco em resultados mensuráveis e duradouros",
];

const About = () => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-secondary font-semibold mb-2 uppercase tracking-wide">Sobre Nós</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ajudamos você a{" "}
                <span className="text-gradient">evoluir</span>{" "}
                profissionalmente
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                A EVOLUA.VC nasceu da paixão por ajudar profissionais a alcançarem 
                seu potencial máximo. Com foco em LinkedIn e currículos, 
                transformamos carreiras através de estratégias personalizadas.
              </p>
              <p className="text-lg text-muted-foreground">
                Nossa equipe de consultores especializados trabalha lado a lado 
                com você para criar uma presença profissional que abre portas 
                e gera oportunidades reais.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl shadow-2xl p-8 border border-border">
              <div className="space-y-8">
                {/* Mission */}
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10">
                  <h3 className="text-2xl font-bold text-primary mb-2">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Capacitar profissionais a construírem carreiras extraordinárias 
                    através de posicionamento estratégico e presença digital impactante.
                  </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <p className="text-3xl font-bold text-gradient">80%</p>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted/50">
                    <p className="text-3xl font-bold text-gradient">20%</p>
                    <p className="text-sm text-muted-foreground">Currículos</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-secondary pl-4 italic text-muted-foreground">
                  "Seu perfil profissional é sua vitrine no mundo digital. 
                  Faça dele um convite irresistível para oportunidades."
                </blockquote>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 -top-4 -left-4 w-full h-full gradient-primary rounded-3xl opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;