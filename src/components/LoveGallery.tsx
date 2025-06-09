
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircleHeart } from "lucide-react";

const gallery = [
  {
    title: "Primeiras Declarações",
    description: "As mais antigas declarações de amor gravadas em pedra e papiro",
    quote: "Meu coração te escolheu para amar",
    period: "Antigo Egito",
    color: "from-amber-400 to-orange-500"
  },
  {
    title: "Poesia Medieval",
    description: "Versos de trovadores que ecoam através dos séculos",
    quote: "Minha senhora, vós sois meu sol e minha lua",
    period: "França Medieval",
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Sonetos de Shakespeare",
    description: "O bardo eternizou o amor em versos imortais",
    quote: "Devo comparar-te a um dia de verão?",
    period: "Inglaterra Elizabetana",
    color: "from-rose-400 to-red-500"
  },
  {
    title: "Cartas Românticas",
    description: "Correspondências apaixonadas que atravessaram oceanos",
    quote: "Minha alma reconheceu a tua antes mesmo de meus olhos te verem",
    period: "Era Vitoriana",
    color: "from-pink-400 to-rose-500"
  },
  {
    title: "Músicas de Amor",
    description: "Melodias que fizeram corações baterem em uníssono",
    quote: "All you need is love, love is all you need",
    period: "Século XX",
    color: "from-red-400 to-pink-500"
  },
  {
    title: "Amor Digital",
    description: "Mensagens que viajam na velocidade da luz",
    quote: "💕 Você é meu emoji favorito 💕",
    period: "Era Moderna",
    color: "from-violet-400 to-purple-500"
  }
];

const LoveGallery = () => {
  return (
    <section id="gallery" className="py-20 sunset-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">
            Galeria de Momentos Românticos
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Uma coleção de momentos, palavras e gestos que definiram o amor através dos tempos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item, index) => (
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
