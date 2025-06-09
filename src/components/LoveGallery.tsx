
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircleHeart } from "lucide-react";

const loveMessages = [
  {
    title: "Seu Sorriso",
    description: "A coisa mais linda que existe no meu mundo",
    quote: "Quando você sorri, meu coração para de bater por um segundo",
    period: "Todos os Dias",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Seus Olhos",
    description: "Onde encontro paz e me perco de amor",
    quote: "Nos seus olhos vejo meu futuro e toda felicidade que desejo",
    period: "Sempre",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Sua Risada",
    description: "A música mais bonita que já escutei",
    quote: "Sua risada é capaz de curar qualquer tristeza no meu coração",
    period: "Para Sempre",
    color: "from-rose-400 to-red-500"
  },
  {
    title: "Seu Abraço",
    description: "Meu lugar favorito no mundo inteiro",
    quote: "Em seus braços encontro minha casa, meu refúgio, minha paz",
    period: "Eternamente",
    color: "from-pink-400 to-rose-500"
  },
  {
    title: "Sua Voz",
    description: "As palavras mais doces que chegam aos meus ouvidos",
    quote: "Quando você fala meu nome, sinto que sou a pessoa mais especial do mundo",
    period: "Infinitamente",
    color: "from-red-400 to-pink-500"
  },
  {
    title: "Seu Amor",
    description: "O presente mais precioso que a vida me deu",
    quote: "Seu amor me fez descobrir quem eu realmente sou e quem posso ser",
    period: "Por Toda Vida",
    color: "from-violet-400 to-purple-500"
  }
];

const LoveGallery = () => {
  return (
    <section id="gallery" className="py-20 sunset-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">
            Tudo o Que Amo em Você
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Cada pequeno detalhe seu me faz te amar ainda mais a cada dia que passa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loveMessages.map((item, index) => (
            <Card 
              key={index}
              className="group glass-effect border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 bg-gradient-to-r ${item.color}`}>
                  {item.period}
                </div>
                
                <h3 className="text-xl font-playfair font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/90 text-lg font-medium">
                  "{item.quote}"
                </blockquote>
                
                <div className="mt-6 flex justify-center">
                  <MessageCircleHeart className="w-6 h-6 text-primary animate-pulse-heart" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveGallery;
