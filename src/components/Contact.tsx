import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
            Fale Conosco
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas, conheça nossos cursos e dê o primeiro passo 
            para transformar sua carreira profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Envie uma Mensagem
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato em até 24 horas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nome Completo
                  </label>
                  <Input 
                    placeholder="Seu nome completo"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    WhatsApp
                  </label>
                  <Input 
                    placeholder="(21) 96433-4113"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  E-mail
                </label>
                <Input 
                  type="email"
                  placeholder="seu@email.com"
                  className="border-border focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Curso de Interesse
                </label>
                <select className="w-full p-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-primary focus:outline-none">
                  <option value="">Selecione um curso</option>
                  <option value="micropigmentacao">Micropigmentação Profissional</option>
                  <option value="design-sobrancelhas">Design de Sobrancelhas</option>
                  <option value="extensao-cilios">Extensão de Cílios</option>
                  <option value="harmonizacao">Harmonização Facial</option>
                  <option value="limpeza-pele">Limpeza de Pele</option>
                  <option value="massagem">Massagem Relaxante</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos sobre seus objetivos e como podemos ajudar..."
                  rows={4}
                  className="border-border focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-3">(11) 99999-9999</p>
                 {/* Botão com link para WhatsApp */}
         <a
          href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20projeto!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Chamar Agora
          </Button>
        </a>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                  <p className="text-muted-foreground text-sm mb-3">@pupilasdadai</p>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Seguir
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <Card className="bg-gradient-card border-border shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Informações de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua das Flores, 123 - Centro<br />
                      São Paulo, SP - CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefones</h4>
                    <p className="text-muted-foreground">
                      (11) 3333-4444<br />
                      (11) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      contato@pupilasdadai.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 14h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex justify-center gap-4">
                  <Button size="sm" variant="secondary" className="bg-background/20 hover:bg-background/30">
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-background/20 hover:bg-background/30">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;