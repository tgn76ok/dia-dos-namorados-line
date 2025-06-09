
import { Heart, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Configure aqui os caminhos das suas fotos
const PHOTOS_CONFIG = {
  0: "/path/to/first-date.jpg",     // Foto do primeiro encontro
  1: "/path/to/dating.jpg",         // Foto do namoro
  2: "/path/to/engagement.jpg",     // Foto do noivado
  3: "/path/to/wedding.jpg",        // Foto do casamento
  4: "/path/to/recent.jpg"          // Foto recente
};

const ourTimeline = [
  {
    era: "Primeiro Encontro",
    period: "Quando Tudo Começou",
    title: "O Dia Que Mudou Minha Vida",
    description: "Naquele momento, eu soube que tinha encontrado algo especial. Você era ainda mais incrível do que eu imaginava. Meu coração disparou e não parou mais.",
    color: "from-pink-400 to-rose-500"
  },
  {
    era: "Nosso Namoro", 
    period: "Aprendendo a Te Amar",
    title: "Quando Você Disse Sim",
    description: "O dia que você aceitou namorar comigo foi o mais feliz da minha vida. Finalmente podia te chamar de minha e construir nossa história juntos.",
    color: "from-purple-400 to-pink-500"
  },
  {
    era: "Noivado",
    period: "O Pedido Mais Importante",
    title: "Quando Te Pedi em Casamento",
    description: "Com o coração batendo forte, te pedi para ser minha esposa. Ver suas lágrimas de felicidade foi o momento mais lindo da minha vida.",
    color: "from-rose-400 to-red-500"
  },
  {
    era: "Casamento",
    period: "Para Sempre",
    title: "O Dia Mais Especial",
    description: "O dia que nos tornamos marido e mulher. Prometemos nos amar para sempre, na alegria e na tristeza, na saúde e na doença.",
    color: "from-amber-400 to-orange-500"
  },
  {
    era: "Hoje",
    period: "Nosso Amor Eterno",
    title: "Te Amando Mais a Cada Dia",
    description: "Cada dia ao seu lado é uma nova aventura. Nosso amor só cresce e você continua sendo a razão da minha felicidade.",
    color: "from-violet-400 to-purple-500"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg">Dia dos Namorados</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Nossa História de Amor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada momento vivido com você é especial e merece ser lembrado para sempre.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full romantic-gradient rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {ourTimeline.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300">
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

                {/* Timeline dot - hidden on mobile */}
                <div className="relative z-10 hidden md:block">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Image section */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="relative group">
                    <img 
                      src={PHOTOS_CONFIG[index as keyof typeof PHOTOS_CONFIG]} 
                      alt={item.era}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      onError={(e) => {
                        // Fallback para quando a imagem não for encontrada
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center bg-accent/20">
                      <Heart className="w-8 h-8 text-primary mb-3" />
                      <p className="text-center text-muted-foreground px-4">
                        Configure o caminho da foto em PHOTOS_CONFIG no arquivo Timeline.tsx
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
