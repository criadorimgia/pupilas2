import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Paixão pela Estética",
      description: "Amamos o que fazemos e transmitimos essa paixão para cada aluno, inspirando excelência em cada procedimento."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Foco no Resultado",
      description: "Nosso objetivo é formar profissionais capacitados e preparados para o mercado de trabalho."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Acompanhamento Individual",
      description: "Cada aluno recebe atenção personalizada para garantir o melhor aproveitamento do curso."
    },
   {
      icon: <Award className="h-8 w-8" />,
      title: "Certificação Reconhecida",
      description: "Nossos certificados são reconhecidos no mercado e abrem portas para sua carreira."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tendências e técnicas do mercado da estética."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança e Qualidade",
      description: "Priorizamos a biossegurança e qualidade em todos os nossos procedimentos e ensinos."
    }
  ];

  const stats = [
    { number: "1000+", label: "Alunos Formados" },
    { number: "17", label: "Anos de Experiência" },
    { number: "98%", label: "Taxa de Empregabilidade" },
    { number: "10+", label: "Cursos Disponíveis" }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
            Quem Somos
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Pupilas da Daí
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma Clínica Escola especializada em qualificação profissional na área da estética, 
            comprometida em formar profissionais de excelência para o mercado da beleza.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="font-display text-3xl font-bold text-foreground">
              Nossa História e Missão
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A Pupilas da Daí nasceu da paixão pela estética e do desejo de compartilhar 
                conhecimento de qualidade. Fundada por profissionais experientes do setor, 
                nossa escola se tornou referência na formação de esteticistas na região.
              </p>
              <p>
                Acreditamos que a educação de qualidade é a base para o sucesso profissional. 
                Por isso, desenvolvemos uma metodologia única que combina teoria sólida com 
                prática intensiva, preparando nossos alunos para os desafios do mercado.
              </p>
              <p>
                Nossa missão é democratizar o acesso ao conhecimento em estética, oferecendo 
                cursos acessíveis sem comprometer a qualidade do ensino. Queremos ver cada 
                aluno alcançar seus objetivos e construir uma carreira sólida na área da beleza.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronta para Começar sua Jornada?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de profissionais que já transformaram suas vidas 
            através dos nossos cursos especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors">
              Falar com Consultora
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors">
              Conhecer Cursos 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;