
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircleHeart } from "lucide-react";

const whyILoveYou = [
  {
    title: "Sua Personalidade",
    subtitle: "Única e Especial",
    description: "Sua forma de ser, sua espontaneidade, sua capacidade de me fazer rir mesmo nos dias difíceis. Você tem o dom de tornar tudo mais leve e bonito.",
    icon: "✨",
    gradient: "from-amber-300 via-orange-400 to-red-500"
  },
  {
    title: "Seu Coração",
    subtitle: "Puro e Bondoso",
    description: "A forma como você cuida das pessoas que ama, sua compaixão, sua generosidade. Você tem o coração mais lindo que já conheci.",
    icon: "💝",
    gradient: "from-purple-400 via-pink-500 to-rose-600"
  },
  {
    title: "Sua Inteligência",
    subtitle: "Brilhante e Inspiradora",
    description: "Suas ideias, seus sonhos, a forma como você vê o mundo. Você me inspira a ser uma pessoa melhor todos os dias.",
    icon: "🌟",
    gradient: "from-rose-400 via-red-500 to-pink-600"
  },
  {
    title: "Sua Beleza",
    subtitle: "Dentro e Fora",
    description: "Você é a pessoa mais linda que existe, tanto por fora quanto por dentro. Sua beleza interior ilumina tudo ao seu redor.",
    icon: "🌹",
    gradient: "from-pink-400 via-rose-500 to-red-500"
  },
  {
    title: "Nosso Futuro",
    subtitle: "Juntos Para Sempre",
    description: "Você faz parte de todos os meus sonhos e planos. Não consigo imaginar minha vida sem você ao meu lado.",
    icon: "💫",
    gradient: "from-red-400 via-pink-500 to-rose-600"
  },
  {
    title: "Nosso Amor",
    subtitle: "Único e Verdadeiro",
    description: "O que sentimos é especial, é real, é para sempre. Nosso amor é a coisa mais bonita que já vivi e quero viver para sempre.",
    icon: "💖",
    gradient: "from-violet-400 via-purple-500 to-pink-600"
  }
];

const LoveEras = () => {
  return (
    <section id="eras" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Por Que Te Amo Tanto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            São tantas as razões que fazem meu coração bater mais forte por você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyILoveYou.map((reason, index) => (
            <Card 
              key={index} 
              className="group glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${reason.gradient} mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                
                <h4 className="text-primary font-semibold mb-4">
                  {reason.subtitle}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
                
                <div className="mt-6 flex justify-center">
                  <Heart className="w-5 h-5 text-primary animate-pulse-heart" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveEras;
