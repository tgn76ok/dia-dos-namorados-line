
import { Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToTimeline = () => {
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 sunset-gradient opacity-20"></div>
      
      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 text-primary/30 w-6 h-6 animate-float" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-40 right-20 text-primary/30 w-8 h-8 animate-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-40 left-20 text-primary/30 w-5 h-5 animate-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-20 right-10 text-primary/30 w-7 h-7 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-12 h-12 text-primary mr-4" />
            <span className="text-primary font-semibold text-lg">14 de Fevereiro</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
            Uma Jornada Através da
            <span className="block text-gradient">História do Amor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Desde os primeiros sussurros de romance na antiguidade até as declarações modernas, 
            descubra como o amor evoluiu através dos séculos e continua a nos inspirar hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToTimeline}
              size="lg" 
              className="romantic-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg"
            >
              Começar a Jornada
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-4 text-lg"
            >
              Descobrir Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
