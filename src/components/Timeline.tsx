
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timelineData = [
  {
    era: "Antiguidade",
    period: "3000 a.C. - 500 d.C.",
    title: "Os Primeiros Sussurros do Amor",
    description: "Na antiga Mesopotâmia, Egito e Grécia, o amor era celebrado através de poesia épica, rituais sagrados e festivais dedicados às divindades do amor como Afrodite e Vênus.",
    color: "from-amber-400 to-orange-500"
  },
  {
    era: "Idade Média",
    period: "500 - 1500 d.C.",
    title: "O Amor Cortês",
    description: "Surgiu o conceito de amor cortês, onde cavaleiros dedicavam sua vida a uma dama idealizada. Os trovadores cantavam canções de amor em castelos por toda a Europa.",
    color: "from-purple-400 to-pink-500"
  },
  {
    era: "Renascimento",
    period: "1400 - 1600 d.C.",
    title: "A Arte do Romance",
    description: "Shakespeare imortalizou o amor em suas obras, enquanto artistas como Botticelli pintavam Vênus. O amor tornou-se uma forma de arte refinada e sublime.",
    color: "from-rose-400 to-red-500"
  },
  {
    era: "Era Moderna",
    period: "1600 - 1900 d.C.",
    title: "Cartas de Amor e Romantismo",
    description: "A era das cartas de amor elaboradas, jardins românticos e o movimento romântico na literatura. O amor ganhou profundidade emocional e expressão artística.",
    color: "from-pink-400 to-rose-500"
  },
  {
    era: "Século XX",
    period: "1900 - 2000 d.C.",
    title: "Cinema e Música do Amor",
    description: "Hollywood criou os filmes românticos, enquanto a música popular celebrava o amor. O Dia dos Namorados tornou-se uma celebração global.",
    color: "from-red-400 to-pink-500"
  },
  {
    era: "Era Digital",
    period: "2000 - Presente",
    title: "Amor na Era Conectada",
    description: "Apps de relacionamento, mensagens instantâneas e redes sociais transformaram como expressamos e encontramos o amor no mundo moderno.",
    color: "from-violet-400 to-purple-500"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Linha do Tempo do Amor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Viaje através dos séculos e descubra como o amor evoluiu, 
            desde as primeiras civilizações até os dias modernos.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full romantic-gradient rounded-full"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-4 bg-gradient-to-r ${item.color}`}>
                        {item.period}
                      </div>
                      <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground">
                        {item.era}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
