import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Intradermopressurizada",
      description: "Curso completo, corporal, capilar e facial",
      duration: "1 dia de curso",
      students: "3 alunos",
      rating: "4.9",
      price: "R$ 600,00",
      level: "Iniciante",
      highlights: ["Certificado profissional", "Kit completo incluso", "Prática supervisionada", "Suporte pós-curso"]
    },
    {
      title: "Intradermoterapia",
      description: "skinbooster, flacidez, gordura, rejuvenescimento.",
      duration: "1 dia de curso",
      students: "3 alunos",
      rating: "4.8",
      price: "R$ 800",
      level: "Iniciante",
      highlights: ["Prática intensiva", "Materiais inclusos", "Certificação"]
    },
    {
      title: "Eletroterapia",
      description: "O que usar,  e quando usar",
      duration: "1 dia de curso ",
      students: "3 alunos",
      rating: "4.9",
      price: "R$ 400,00",
      level: "Intermediário",
      highlights: ["3 técnicas diferentes", "Kit profissional", "Modelo real"]
    },
    {
      title: "Microagulhamento",
      description: "Facial, hidragloss, corporal e capilar - com dermapen, dermaroller e técnica carimbo.",
      duration: "1 dia de curso",
      students: "3 alunos",
      rating: "5.0",
      price: "R$ 550,00",
      level: "Avançado",
      highlights: ["Anatomia facial", "Técnicas injetáveis", "Biossegurança"]
    },
    {
      title: "Limpeza de Pele Profissional",
      description: "Curso de limpeza de pele profunda com técnicas modernas e protocolos de tratamento.",
      duration: "30 horas",
      students: "25 alunos",
      rating: "4.7",
      price: "R$ 750",
      level: "Iniciante",
      highlights: ["Tipos de pele", "Equipamentos modernos", "Protocolos exclusivos", "Prática real"]
    },
    {
      title: "Massagem Relaxante",
      description: "Técnicas de massagem relaxante e terapêutica para bem-estar e alívio do estresse.",
      duration: "35 horas",
      students: "20 alunos",
      rating: "4.8",
      price: "R$ 980",
      level: "Iniciante",
      highlights: ["Anatomia básica", "Técnicas orientais", "Óleos essenciais", "Prática supervisionada"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Iniciante":
        return "bg-aqua-100 text-aqua-800";
      case "Intermediário":
        return "bg-accent/20 text-accent";
      case "Avançado":
        return "bg-primary/20 text-primary";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="cursos" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Nossos Cursos
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Qualificação Profissional
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              em Estética
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos cursos práticos e atualizados com as melhores técnicas 
            do mercado da estética e bem-estar.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Course Info */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">à vista</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                    >
                      --Saiba Mais
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Todos os Cursos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;