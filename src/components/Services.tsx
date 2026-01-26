import { User, Target, TrendingUp, MessageSquare } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Marca Profissional",
    description: "Perfil claro, estratégico e otimizado para buscas",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Target,
    title: "Encontrar Pessoas Certas",
    description: "Conexões qualificadas com decisores e recrutadores",
    color: "from-primary to-primary/70",
  },
  {
    icon: TrendingUp,
    title: "Interagir com Insights",
    description: "Engajamento que aumenta alcance e autoridade",
    color: "from-secondary to-primary",
  },
  {
    icon: MessageSquare,
    title: "Criar Relacionamentos",
    description: "Abordagens que geram respostas e oportunidades",
    color: "from-primary to-secondary",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-medium text-secondary uppercase tracking-wide">Os 4 Pilares</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            O LinkedIn avalia perfis diariamente com base em{" "}
            <span className="text-gradient">4 pilares</span>.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Quem domina esses critérios ganha mais visibilidade.
          </p>
          <p className="text-lg md:text-xl font-semibold text-foreground">
            Entregamos personalização que{" "}
            <span className="text-gradient">gera entrevistas</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon container with animation */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                <span className="text-sm font-bold text-muted-foreground">{index + 1}</span>
              </div>
              
              {/* Bottom line accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
