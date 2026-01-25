import { Linkedin, FileText, Target, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Linkedin,
    title: "Otimização de LinkedIn",
    description: "Transformamos seu perfil em uma ferramenta poderosa de networking e oportunidades profissionais.",
    features: ["Headline estratégica", "Resumo persuasivo", "Palavras-chave SEO", "Banner personalizado"],
    highlight: true,
  },
  {
    icon: Target,
    title: "Posicionamento Estratégico",
    description: "Definimos sua proposta de valor única para se destacar no mercado competitivo.",
    features: ["Análise de mercado", "Diferenciação", "Mensagem clara", "Público-alvo"],
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Aumento de Visibilidade",
    description: "Estratégias para aumentar seu alcance e conexões relevantes no LinkedIn.",
    features: ["Conteúdo estratégico", "Engajamento", "Networking", "Algoritmo"],
    highlight: false,
  },
  {
    icon: FileText,
    title: "Currículos Profissionais",
    description: "Currículos modernos e ATS-friendly que passam pelos filtros automáticos.",
    features: ["Design moderno", "ATS otimizado", "Resultados mensuráveis", "Formatação profissional"],
    highlight: false,
  },
  {
    icon: Users,
    title: "Personal Branding",
    description: "Construa uma marca pessoal forte e memorável no ambiente digital.",
    features: ["Identidade visual", "Tom de voz", "Consistência", "Autoridade"],
    highlight: false,
  },
  {
    icon: Award,
    title: "Mentoria de Carreira",
    description: "Acompanhamento personalizado para atingir seus objetivos profissionais.",
    features: ["Plano de ação", "Feedback contínuo", "Metas claras", "Suporte dedicado"],
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold mb-2 uppercase tracking-wide">Nossos Serviços</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Soluções para impulsionar sua{" "}
            <span className="text-gradient">carreira</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos consultoria especializada para profissionais que querem 
            se destacar e conquistar novas oportunidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 border-2 ${
                service.highlight 
                  ? "border-secondary bg-gradient-to-br from-secondary/5 to-primary/5" 
                  : "border-transparent hover:border-secondary/20"
              }`}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  service.highlight ? "gradient-primary" : "bg-primary/10"
                }`}>
                  <service.icon className={`w-7 h-7 ${service.highlight ? "text-white" : "text-primary"}`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;