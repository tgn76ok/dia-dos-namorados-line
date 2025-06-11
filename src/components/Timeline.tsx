
import { Heart, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import firstDate from "../img/IMG-20250118-WA0063.jpg"; // Importe a imagem do poster do vídeo
import dating from "../img/IMG-20250102-WA0006.jpg"; // Importe a imagem do poster do vídeo
import firstMeeting from "../img/IMG-20250118-WA0082.jpg"; // Importe a imagem do poster do vídeo
import family from "../img/IMG-20250207-WA0069.jpeg"; // Importe a imagem do poster do vídeo
import family2 from "../img/20250207_223445.jpg"; // Importe a imagem do poster do vídeo
import family3 from "../img/IMG-20250210-WA0029.jpg"; // Importe a imagem do poster do vídeo
import MOVIE from "../img/IMG-20250127-WA0004.jpg"; // Importe a imagem do poster do vídeo
import specialVideo from "../video/videolindo.mp4"; // Importe a imagem do poster do vídeo
import Pedido1 from "../img/Foto de Thiago Germano.jpg"; // Importe a imagem do poster do vídeo
import Pedido2 from "../img/IMG-20250303-WA0015.jpg"; // Importe a imagem do poster do vídeo

interface MediaSource {
  original: string;
  thumbnail?: string;
  alt?: string;
}

interface VideoOptions {
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

interface TimelineItemData {
  era: string;
  period: string;
  title: string;
  description: string;
  color: string;
  mediaType?: 'SINGLE_IMAGE' | 'IMAGE_GALLERY' | 'GIF' | 'VIDEO';
  mediaSources?: string | string[] | MediaSource[];
  altText?: string;
  videoOptions?: VideoOptions;
}

// Configure aqui os caminhos das suas mídias (coloque os arquivos na pasta public/)
const MEDIA_CONFIG = {
  firstDate:firstDate,
  dating: firstMeeting, 
  firstMeeting: dating,
  family: family,
  family2: family2,
  family3: family3,
  MOVIE: MOVIE,
  specialVideo: specialVideo,
  Pedido1: Pedido1,
  Pedido2: Pedido2,
};

const ourTimeline: TimelineItemData[] = [
   {
    era: "Para mim aqui começou tudo",
    period: "O Início de Tudo",
    title: "Um dos primerios passos pro nosso relacionamento",
    description: "Lembro que eu te conheci numa data qualquer,\n Mas logo percebi que não era uma gata qualquer,Eu acho que tô te querendo pra sempre,Meu pra sempre é o agora, me contento com isso,Vamos fazer amor selvagem, sou leal e leão",
    color: "from-purple-400 to-cyan-500",
    mediaType: 'IMAGE_GALLERY',
    mediaSources: [
      MEDIA_CONFIG.firstMeeting,
    ],
    altText: "Fotos do nosso primeiro encontro"
  },
  {
    era: "O nosso primeiro encontro",
    period: "O dia que tive a certeza que era você",
    title: "O nosso primeiro encontro",
    description: "Lembro como se fosse ontem. O dia que nossos olhares se cruzaram e eu soube que algo especial estava prestes a acontecer. Seu sorriso iluminou meu mundo. quando a gente foi para a orla e pedimos para o senhores tirem uma foto nossa. ja presumindo que a gente ia ficar junto.",
    color: "from-blue-400 to-pink-500",
    mediaType: 'IMAGE_GALLERY',
    mediaSources: [
      MEDIA_CONFIG.firstDate,
      MEDIA_CONFIG.dating
    ],
    altText: "Fotos do nosso primeiro encontro"
  },
  {
    era: "O Dia Que Mudou Minha Vida",
    period: "Aprendendo a Te Amar",
    title: "Ainda lembro do dia desse beijo, sensação maravilhosa",
    description: "Veja o homem que sou, alguém me abençoou,Quando você me encontrou tudo clareou",
    color: "from-purple-400 to-pink-500",
    mediaType: 'VIDEO',
    mediaSources: MEDIA_CONFIG.specialVideo,
    videoOptions: { 
      autoplay: false, 
      controls: true, 
      loop: false, 
      poster: "/images/poster_video_namoro.jpg" 
    },
    altText: "Uma montagem em vídeo dos nossos dias de namoro"
  },
  {
    era: "O primeiro cinema",
    period: "O momento engrasado kkkk",
    title: "Escolhi o filme errado",
    description: "Foi um dia especial. Temos que repitir esse momento ",
    color: "from-pink-400 to-purple-500",
    mediaType: 'SINGLE_IMAGE',
    mediaSources: MEDIA_CONFIG.MOVIE,
    altText: "Uma montagem em vídeo dos nossos dias de namoro"
  },
  // {
  //   era: "Primeiro Encontro",
  //   period: "Quando Tudo Começou",
  //   title: "O Dia Que Mudou Minha Vida",
  //   description: "Naquele momento, eu soube que tinha encontrado algo especial. Você era ainda mais incrível do que eu imaginava. Meu coração disparou e não parou mais.",
  //   color: "from-pink-400 to-rose-500",
  //   mediaType: 'SINGLE_IMAGE',
  //   mediaSources: MEDIA_CONFIG.firstMeeting,
  //   altText: "Nossa primeira foto juntos"
  // },
  {
    era: "Conhecendo a Família",
    period: "Família e Amor",
    title: "O Dia Que Conheci Sua Família",
    description: "Conhecer sua família foi um passo importante. Sua mãe me recebeu de braços abertos e seu irmão se tornou um grande amigo. Senti que fazia parte de algo maior.",
    color: "from-pink-400 to-blue-500",
    mediaType: 'IMAGE_GALLERY',
    mediaSources: [MEDIA_CONFIG.family2, MEDIA_CONFIG.family,MEDIA_CONFIG.family3],
    altText: "Com a família"
  },
   {
    era: "Nosso Namoro Especial",
    period: "Aprendendo a Te Amar",
    title: "Quando Você Disse Sim",
    description: "O dia que você aceitou namorar comigo foi o mais feliz da minha vida. Desde então, cada dia ao seu lado é uma nova aventura cheia de amor e descobertas. Lembro o qual nervoso eu estava, tinha acabado de chover e a cadeira tava molhada, e o mlehor memto foi a gente tomando o sorvete no final",
    color: "from-blue-400 to-purple-500",
    mediaType: 'IMAGE_GALLERY',
    mediaSources: [MEDIA_CONFIG.Pedido1, MEDIA_CONFIG.Pedido2],
    altText: "Nosso pedido de namoro"
  },
  // {
  //   era: "Hoje e Sempre",
  //   period: "Nosso Amor Eterno",
  //   title: "Te Amando Mais a Cada Dia",
  //   description: "Cada dia ao seu lado é uma nova aventura. Nosso amor só cresce e você continua sendo a razão da minha felicidade e o motivo do meu sorriso.",
  //   color: "from-violet-400 to-purple-500",
  //   mediaType: 'SINGLE_IMAGE',
  //   mediaSources: MEDIA_CONFIG.recentPhoto,
  //   altText: "Nosso amor hoje"
  // }
];

// Componente para renderizar a mídia
const MediaDisplay: React.FC<{ item: TimelineItemData }> = ({ item }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const fallbackElement = target.parentElement?.querySelector('.fallback-media-placeholder');
    if (fallbackElement) {
      fallbackElement.classList.remove('hidden');
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Erro ao carregar vídeo:', e);
    const target = e.currentTarget;
    target.style.display = 'none';
    const fallbackElement = target.parentElement?.querySelector('.fallback-media-placeholder');
    if (fallbackElement) {
      fallbackElement.classList.remove('hidden');
    }
  };

  switch (item.mediaType) {
    case 'SINGLE_IMAGE':
      return (
        <>
          <img
            src={item.mediaSources as string}
            alt={item.altText || item.era}
            className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
            loading="lazy"
            onError={handleImageError}
          />
          <div className="hidden fallback-media-placeholder w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center bg-accent/20">
            <Heart className="w-8 h-8 text-primary mb-3" />
            <p className="text-center text-muted-foreground px-4">
              Imagem não encontrada. Configure o caminho em MEDIA_CONFIG.
            </p>
          </div>
        </>
      );

    case 'IMAGE_GALLERY':
      if (!Array.isArray(item.mediaSources)) return null;
      return (
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-64 rounded-lg shadow-lg"
        >
          {item.mediaSources.map((source, idx) => {
            const imgSrc = typeof source === 'string' ? source : source.original;
            const imgAlt = typeof source === 'string' ? `Slide ${idx + 1}` : source.alt || `Slide ${idx + 1}`;
            return (
              <SwiperSlide key={idx}>
                <img
                  src={imgSrc}
                  alt={imgAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={handleImageError}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      );

    case 'VIDEO':
      return (
        <>
          <video
            src={item.mediaSources as string}
            controls={item.videoOptions?.controls !== undefined ? item.videoOptions.controls : true}
            autoPlay={item.videoOptions?.autoplay || false}
            loop={item.videoOptions?.loop || false}
            muted={item.videoOptions?.autoplay ? true : (item.videoOptions?.muted || false)}
            playsInline
            poster={item.videoOptions?.poster}
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            aria-label={item.altText || item.title}
            preload="metadata"
            onError={handleVideoError}
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="hidden fallback-media-placeholder w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center bg-accent/20">
            <Heart className="w-8 h-8 text-primary mb-3" />
            <p className="text-center text-muted-foreground px-4">
              Vídeo não encontrado. Configure o caminho em MEDIA_CONFIG.
            </p>
          </div>
        </>
      );

    case 'GIF':
      return (
        <>
          <img
            src={item.mediaSources as string}
            alt={item.altText || item.era}
            className="w-full h-auto max-h-64 object-contain rounded-lg shadow-lg"
            onError={handleImageError}
          />
          <div className="hidden fallback-media-placeholder w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center bg-accent/20">
            <Heart className="w-8 h-8 text-primary mb-3" />
            <p className="text-center text-muted-foreground px-4">
              GIF não encontrado. Configure o caminho em MEDIA_CONFIG.
            </p>
          </div>
        </>
      );

    default:
      return (
        <div className="w-full h-64 border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center bg-accent/20">
          <Heart className="w-8 h-8 text-primary mb-3" />
          <p className="text-center text-muted-foreground px-4">
            Configure o tipo de mídia e o caminho em MEDIA_CONFIG.
          </p>
        </div>
      );
  }
};

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg">Nossa História de Amor</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-gradient">
            Nossa Timeline Especial
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
                  <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105">
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
                <div className="relative z-10 hidden md:block">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg animate-pulse-heart`}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Media section */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="relative group">
                    <MediaDisplay item={item} />
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
