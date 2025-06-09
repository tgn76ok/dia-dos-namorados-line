
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ourTimeline = [
  {
    era: "Primeiro Olhar",
    period: "O Início de Tudo",
    title: "Quando Te Vi Pela Primeira Vez",
    description: "Naquele momento, o mundo parou. Meu coração disparou e eu soube que algo especial estava começando. Você era a pessoa mais linda que eu já tinha visto.",
    color: "from-amber-400 to-orange-500"
  },
  {
    era: "Primeiras Conversas",
    period: "Descobrindo Você",
    title: "Conhecendo Sua Alma",
    description: "A cada conversa, eu me apaixonava mais. Sua inteligência, seu humor, sua forma única de ver o mundo. Você era ainda mais incrível do que imaginei.",
    color: "from-purple-400 to-pink-500"
  },
  {
    era: "Primeiro Beijo",
    period: "Magia Pura",
    title: "O Momento Mais Doce",
    description: "Quando nossos lábios se tocaram pela primeira vez, senti que estava vivendo um sonho. Foi perfeito, foi mágico, foi o início da nossa história.",
    color: "from-rose-400 to-red-500"
  },
  {
    era: "Namorando",
    period: "Aprendendo a Amar",
    title: "Construindo Nossa História",
    description: "Cada dia ao seu lado é uma nova aventura. Descobrindo seus gostos, suas manias, seus sonhos. Me apaixonando mais e mais a cada momento.",
    color: "from-pink-400 to-rose-500"
  },
  {
    era: "Hoje",
    period: "Amor Crescendo",
    title: "Te Amando Mais a Cada Dia",
    description: "Nosso amor só cresce. Você continua me surpreendendo, me fazendo rir, me fazendo sentir a pessoa mais sortuda do mundo por ter você.",
    color: "from-red-400 to-pink-500"
  },
  {
    era: "Futuro",
    period: "Para Sempre",
    title: "Nossos Sonhos Juntos",
    description: "Quero construir uma vida inteira ao seu lado. Compartilhar sonhos, superar desafios, criar memórias inesquecíveis. Você é meu para sempre.",
    color: "from-violet-400 to-purple-500"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Nossa História de Amor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada momento vivido com você é especial e merece ser lembrado para sempre.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full romantic-gradient rounded-full"></div>

          <div className="space-y-16">
            {ourTimeline.map((item, index) => (
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
