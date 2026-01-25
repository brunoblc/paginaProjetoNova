import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import evoluaLogo from "@/assets/evolua-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={evoluaLogo} 
              alt="EVOLUA.VC" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80">
              Consultoria especializada em perfis profissionais. 
              Transformamos carreiras através do LinkedIn e currículos estratégicos.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Otimização de LinkedIn
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Currículos Profissionais
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Personal Branding
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Mentoria de Carreira
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a 
                  href="mailto:contato@evolua.vc" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contato@evolua.vc
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} EVOLUA.VC. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;