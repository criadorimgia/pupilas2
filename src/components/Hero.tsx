import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Ambiente de treinamento profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-card rounded-full px-4 py-2 mb-6 shadow-soft">
            <Star className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              #1 Escola de Estética da Região
            </span>
          </div>

          {/* Main Content */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transforme sua
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Paixão em Profissão
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Na Pupilas da Daí, oferecemos cursos para profissionais de estética 
            com foco em técnica e inovação. Prepare-se para uma carreira 
            de sucesso no mercado da beleza.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-2xl text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Alunos Formados</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-2xl text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-soft">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Star className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-2xl text-foreground">10 Anos</div>
                <div className="text-sm text-muted-foreground">de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;