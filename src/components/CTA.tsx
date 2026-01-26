import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-evolua.png";

const WHATSAPP_LINK = "https://wa.me/5511999999999"; // Substitua pelo número real

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 md:p-16">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src={logo} 
                alt="Evolua.VC" 
                className="h-12 md:h-16 w-auto brightness-0 invert"
              />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para dar o próximo passo na sua carreira?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              Agende uma consultoria e descubra como podemos
              transformar seu perfil profissional em uma máquina de oportunidades.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white mb-8">
              🎁 Agende uma conversa de 15 minutos gratuita
            </p>

            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-xl shadow-lg"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
