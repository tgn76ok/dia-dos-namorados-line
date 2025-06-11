
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
      
      {/* Enhanced floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Layer 1 - Large hearts */}
        <Heart className="absolute top-20 left-10 text-primary/20 w-8 h-8 animate-float-slow" style={{ animationDelay: '0s' }} />
        <Heart className="absolute top-32 right-16 text-primary/25 w-10 h-10 animate-float-medium" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-32 left-16 text-primary/15 w-12 h-12 animate-float-slow" style={{ animationDelay: '4s' }} />
        <Heart className="absolute bottom-16 right-12 text-primary/30 w-9 h-9 animate-float-fast" style={{ animationDelay: '1s' }} />
        
        {/* Layer 2 - Medium hearts */}
        <Heart className="absolute top-40 left-1/3 text-primary/20 w-6 h-6 animate-float-medium" style={{ animationDelay: '3s' }} />
        <Heart className="absolute top-60 right-1/4 text-primary/25 w-7 h-7 animate-float-slow" style={{ animationDelay: '5s' }} />
        <Heart className="absolute bottom-40 left-1/4 text-primary/15 w-8 h-8 animate-float-fast" style={{ animationDelay: '2.5s' }} />
        <Heart className="absolute bottom-60 right-1/3 text-primary/20 w-5 h-5 animate-float-medium" style={{ animationDelay: '1.5s' }} />
        
        {/* Layer 3 - Small hearts */}
        <Heart className="absolute top-24 left-1/2 text-primary/30 w-4 h-4 animate-float-fast" style={{ animationDelay: '4.5s' }} />
        <Heart className="absolute top-80 left-20 text-primary/25 w-5 h-5 animate-float-slow" style={{ animationDelay: '6s' }} />
        <Heart className="absolute top-96 right-20 text-primary/20 w-6 h-6 animate-float-medium" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-80 left-1/2 text-primary/15 w-4 h-4 animate-float-fast" style={{ animationDelay: '3.5s' }} />
        <Heart className="absolute bottom-96 right-1/2 text-primary/25 w-7 h-7 animate-float-slow" style={{ animationDelay: '5.5s' }} />
        
        {/* Layer 4 - Tiny hearts for sparkle effect */}
        <Heart className="absolute top-16 right-1/3 text-primary/40 w-3 h-3 animate-sparkle" style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-72 left-1/4 text-primary/35 w-3 h-3 animate-sparkle" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-24 right-1/4 text-primary/30 w-3 h-3 animate-sparkle" style={{ animationDelay: '5s' }} />
        <Heart className="absolute bottom-72 left-1/3 text-primary/40 w-3 h-3 animate-sparkle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-primary mr-4 animate-pulse-heart" />
            <span className="text-primary font-semibold text-lg">Para Você, Meu Amor</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
            Eu Te Amo Mais do que
            <span className="block text-gradient">Palavras Podem Expressar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Você é a luz que ilumina meus dias, a razão do meu sorriso e o amor da minha vida. 
            Esta página é dedicada a você, para mostrar o quanto você significa para mim.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToTimeline}
              size="lg" 
              className="romantic-gradient text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg"
            >
              Nossa História de Amor
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-4 text-lg"
            >
              Meus Sentimentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
