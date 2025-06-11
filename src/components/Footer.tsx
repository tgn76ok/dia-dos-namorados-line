
import { Heart, MessageCircleHeart, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary animate-pulse-heart" />
              <span className="text-xl font-playfair font-bold">
                História do Amor
              </span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Me emocinei fazendo esse site kkkk
            </p>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#timeline" className="text-background/80 hover:text-primary transition-colors">
                  Timeline do Amor
                </a>
              </li>
              <li>
                <a href="#eras" className="text-background/80 hover:text-primary transition-colors">
                  Eras Românticas
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-primary transition-colors">
                  Galeria de Momentos
                </a>
              </li>
              <li>
                <a href="#celebration" className="text-background/80 hover:text-primary transition-colors">
                  Celebre o Amor
                </a>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/80 text-sm mb-4 md:mb-0">
              © 2024 História do Amor. Feito com ❤️ para celebrar o romance eterno.
            </p>
            <div className="flex items-center space-x-4">
              <MessageCircleHeart className="w-5 h-5 text-primary" />
              <span className="text-background/80 text-sm">
                "O amor é eterno, enquanto dura." - Vinícius de Moraes
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
