
import { Heart, Calendar, MessageCircleHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Celebration = () => {
  return (
    <section id="celebration" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Promessas do Meu Coração
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estas são as promessas que faço para você, meu amor, hoje e sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 romantic-gradient rounded-full flex items-center justify-center">
                <MessageCircleHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-foreground">
                Te Amar Todos os Dias
              </h3>
              <p className="text-muted-foreground">
                Prometo demonstrar meu amor por você em cada gesto, palavra e olhar.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 gold-gradient rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-foreground">
                Criar Memórias Juntos
              </h3>
              <p className="text-muted-foreground">
                Cada momento ao seu lado será uma nova aventura e uma memória preciosa.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 sunset-gradient rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3 text-foreground">
                Estar Sempre Aqui
              </h3>
              <p className="text-muted-foreground">
                Nos bons e maus momentos, você sempre terá meu apoio incondicional.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8 p-8 glass-effect rounded-2xl border border-primary/20">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse-heart" />
            <h3 className="text-2xl font-playfair font-bold mb-4 text-foreground">
              "Você é meu sol, minha lua, minha estrela. 
              Você é tudo o que eu sempre sonhei e muito mais."
            </h3>
            <p className="text-primary font-semibold">- Com todo meu amor ❤️</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="romantic-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg"
            >
              Eu Te Amo Para Sempre
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-4 text-lg"
            >
              Você É Meu Mundo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebration;
