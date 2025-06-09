
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircleHeart } from "lucide-react";

const eras = [
  {
    title: "Amor Épico",
    subtitle: "Antiguidade Clássica",
    description: "Helena de Troia, Cleópatra e Marco Antônio - amores que mudaram o curso da história e inspiraram lendas eternas.",
    icon: "💫",
    gradient: "from-amber-300 via-orange-400 to-red-500"
  },
  {
    title: "Romance Cortês",
    subtitle: "Idade Média",
    description: "Lancelote e Guinevere, trovadores medievais cantando serenatas sob a luz da lua em castelos encantados.",
    icon: "🏰",
    gradient: "from-purple-400 via-pink-500 to-rose-600"
  },
  {
    title: "Paixão Renascentista",
    subtitle: "Renascimento",
    description: "Romeu e Julieta de Shakespeare, o amor platônico, e a celebração da beleza através da arte e da poesia.",
    icon: "🎭",
    gradient: "from-rose-400 via-red-500 to-pink-600"
  },
  {
    title: "Era Romântica",
    subtitle: "Séculos XVIII-XIX",
    description: "Lord Byron, cartas de amor apaixonadas, encontros secretos em jardins e a idealização do amor verdadeiro.",
    icon: "💌",
    gradient: "from-pink-400 via-rose-500 to-red-500"
  },
  {
    title: "Hollywood Clássico",
    subtitle: "Século XX",
    description: "Casablanca, Gone with the Wind - o cinema criou os grandes romances que ainda suspiram nossos corações.",
    icon: "🎬",
    gradient: "from-red-400 via-pink-500 to-rose-600"
  },
  {
    title: "Amor Digital",
    subtitle: "Século XXI",
    description: "Relacionamentos virtuais, encontros online, e novas formas de expressar amor através da tecnologia moderna.",
    icon: "💻",
    gradient: "from-violet-400 via-purple-500 to-pink-600"
  }
];

const LoveEras = () => {
  return (
    <section id="eras" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Eras do Amor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada época trouxe sua própria definição de romance, 
            criando tradições que ainda celebramos hoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eras.map((era, index) => (
            <Card 
              key={index} 
              className="group glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${era.gradient} mb-6 text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {era.icon}
                </div>
                
                <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {era.title}
                </h3>
                
                <h4 className="text-primary font-semibold mb-4">
                  {era.subtitle}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {era.description}
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
