
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary animate-pulse-heart" />
            <span className="text-xl font-playfair font-bold text-gradient">
              História do Amor
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('eras')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Eras do Amor
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <Button 
              onClick={() => scrollToSection('celebration')}
              className="romantic-gradient text-white hover:opacity-90 transition-opacity"
            >
              Celebre o Amor
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
