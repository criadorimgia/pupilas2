import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Micropigmentadora",
      course: "Micropigmentação Profissional",
      image: "/placeholder.svg",
      rating: 5,
      text: "O curso da Pupilas da Daí mudou minha vida! Hoje tenho meu próprio estúdio e uma clientela fidelizada. A qualidade do ensino é excepcional e o suporte pós-curso é incrível."
    },
    {
      name: "Ana Costa",
      role: "Designer de Sobrancelhas",
      course: "Design de Sobrancelhas",
      image: "/placeholder.svg",
      rating: 5,
      text: "Sempre sonhei em trabalhar com estética. O curso me deu toda a base técnica e confiança que eu precisava. Em 3 meses já estava atendendo clientes e hoje tenho agenda lotada!"
    },
    {
      name: "Juliana Santos",
      role: "Esteticista",
      course: "Limpeza de Pele + Extensão de Cílios",
      image: "/placeholder.svg",
      rating: 5,
      text: "Fiz dois cursos na escola e posso dizer que foi o melhor investimento da minha vida. As professoras são muito experientes e o material didático é completo."
    },
    {
      name: "Carla Oliveira",
      role: "Harmonização Facial",
      course: "Harmonização Facial",
      image: "/placeholder.svg",
      rating: 5,
      text: "O curso de harmonização facial é simplesmente fantástico! Aprendi técnicas avançadas que me diferenciaram no mercado. Recomendo de olhos fechados!"
    },
    {
      name: "Fernanda Lima",
      role: "Massagista Terapêutica",
      course: "Massagem Relaxante",
      image: "/placeholder.svg",
      rating: 5,
      text: "Curso muito bem estruturado! Aprendi técnicas que uso diariamente no meu trabalho. O ambiente é acolhedor e as aulas são muito práticas."
    },
    {
      name: "Patrícia Rocha",
      role: "Micropigmentadora",
      course: "Micropigmentação + Design",
      image: "/placeholder.svg",
      rating: 5,
      text: "Depois do curso consegui triplicar minha renda! A metodologia é excelente e você sai realmente preparada para o mercado. Super indico!"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            Depoimentos
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Dizem Nossas
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Alunas Formadas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de transformação e sucesso profissional através dos nossos cursos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card border-border relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl font-bold text-foreground mb-4">
              Resultados que Comprovam nossa Excelência
            </h3>
            <p className="text-muted-foreground">
              Números que mostram o impacto positivo em nossas alunas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Aumento de Renda</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-sm text-muted-foreground">Empregabilidade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;