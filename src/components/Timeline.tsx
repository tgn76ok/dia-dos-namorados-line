
import { Heart, Upload, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ourTimeline = [
  {
    era: "Primeiro Encontro",
    period: "Quando Tudo Começou",
    title: "O Dia Que Mudou Minha Vida",
    description: "Naquele momento, eu soube que tinha encontrado algo especial. Você era ainda mais incrível do que eu imaginava. Meu coração disparou e não parou mais.",
    color: "from-pink-400 to-rose-500",
    placeholder: "Adicione uma foto do nosso primeiro encontro"
  },
  {
    era: "Nosso Namoro", 
    period: "Aprendendo a Te Amar",
    title: "Quando Você Disse Sim",
    description: "O dia que você aceitou namorar comigo foi o mais feliz da minha vida. Finalmente podia te chamar de minha e construir nossa história juntos.",
    color: "from-purple-400 to-pink-500",
    placeholder: "Nossa foto quando começamos a namorar"
  },
  {
    era: "Noivado",
    period: "O Pedido Mais Importante",
    title: "Quando Te Pedi em Casamento",
    description: "Com o coração batendo forte, te pedi para ser minha esposa. Ver suas lágrimas de felicidade foi o momento mais lindo da minha vida.",
    color: "from-rose-400 to-red-500",
    placeholder: "A foto do nosso noivado"
  },
  {
    era: "Casamento",
    period: "Para Sempre",
    title: "O Dia Mais Especial",
    description: "O dia que nos tornamos marido e mulher. Prometemos nos amar para sempre, na alegria e na tristeza, na saúde e na doença.",
    color: "from-amber-400 to-orange-500",
    placeholder: "Nossa foto de casamento"
  },
  {
    era: "Hoje",
    period: "Nosso Amor Eterno",
    title: "Te Amando Mais a Cada Dia",
    description: "Cada dia ao seu lado é uma nova aventura. Nosso amor só cresce e você continua sendo a razão da minha felicidade.",
    color: "from-violet-400 to-purple-500",
    placeholder: "Uma foto recente nossa"
  }
];

const Timeline = () => {
  const [images, setImages] = useState<{[key: number]: string}>({});

  const handleImageUpload = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages(prev => ({
          ...prev,
          [index]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

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
                    {images[index] ? (
                      <div className="relative">
                        <img 
                          src={images[index]} 
                          alt={item.era}
                          className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <label className="cursor-pointer bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg transition-colors">
                            <Upload className="w-4 h-4 inline mr-2" />
                            Trocar Foto
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(index, e)}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center bg-accent/20 hover:bg-accent/30 transition-colors">
                        <Upload className="w-8 h-8 text-primary mb-3" />
                        <p className="text-center text-muted-foreground mb-4 px-4">
                          {item.placeholder}
                        </p>
                        <label className="cursor-pointer bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
                          Adicionar Foto
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(index, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    )}
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
