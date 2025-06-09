
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import LoveEras from "@/components/LoveEras";
import LoveGallery from "@/components/LoveGallery";
import Celebration from "@/components/Celebration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <Timeline />
      <LoveEras />
      <LoveGallery />
      <Celebration />
      <Footer />
    </div>
  );
};

export default Index;
