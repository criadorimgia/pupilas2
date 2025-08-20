import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { label: "Micropigmentação", href: "#cursos" },
      { label: "Design de Sobrancelhas", href: "#cursos" },
      { label: "Extensão de Cílios", href: "#cursos" },
      { label: "Harmonização Facial", href: "#cursos" },
      { label: "Limpeza de Pele", href: "#cursos" },
      { label: "Massagem Relaxante", href: "#cursos" }
    ],
    company: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Nossa História", href: "#sobre" },
      { label: "Depoimentos", href: "#depoimentos" },
      { label: "Contato", href: "#contato" }
    ],
    support: [
      { label: "Central de Ajuda", href: "#contato" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Certificados", href: "#" }
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoImage} alt="Pupilas da Daí" className="h-10 w-auto brightness-0 invert" />
              <h3 className="font-display font-bold text-xl">
                Pupilas da Daí
              </h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Transformando paixão em profissão através da educação de qualidade 
              em estética e bem-estar.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-background/10 rounded-lg hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nossos Cursos</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Av. Dom Hélder Câmara, 5200</p>
                  <p>Cachambi, Rio de Janeiro - RJ</p>
                  <p>CEP: 20771-004</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-background/80">
                  <p>(21) 99999-9999</p>
                  <p>(21) 99859-6102</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">
                  contato@pupilasdadai.com.br
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-bold text-lg mb-4">
              Receba Novidades e Ofertas Especiais
            </h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Pupilas da Daí. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                CNPJ: 00.000.000/0001-00
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;