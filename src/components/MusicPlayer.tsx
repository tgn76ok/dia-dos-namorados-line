
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Music, SkipBack, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Configure aqui o caminho da sua música (coloque o arquivo na pasta public/)
const MUSIC_CONFIG = {
  url: "/music/Marisa Monte - Ainda Bem.mp3", // Caminho relativo à pasta public
  title: "Ainda Bem - Marisa Monte",
  artist: "Nossa Música Especial"
};

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };
    const handleLoadStart = () => setIsLoading(true);
    const handleError = () => {
      setHasError(true);
      setIsLoading(false);
      console.error('Erro ao carregar música:', MUSIC_CONFIG.url);
    };
    const handleCanPlay = () => {
      setHasError(false);
      setIsLoading(false);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    // Set initial volume
    audio.volume = volume;

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
    };
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio || hasError) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Erro ao reproduzir música:', error);
      setHasError(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const skipTime = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = Math.max(0, Math.min(duration, currentTime + seconds));
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="glass-effect border-primary/20 w-80 shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Music className="w-5 h-5 text-primary animate-float" />
            <h3 className="font-semibold text-foreground">Player de Música</h3>
          </div>

          <div className="mb-3">
            <p className="text-sm font-medium text-foreground truncate">{MUSIC_CONFIG.title}</p>
            <p className="text-xs text-muted-foreground">{MUSIC_CONFIG.artist}</p>
            <p className="text-xs text-muted-foreground">
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </div>

          {hasError && (
            <div className="mb-3 p-2 bg-destructive/10 border border-destructive/20 rounded text-xs text-destructive">
              Erro ao carregar música. Verifique se o arquivo está na pasta public/music/
            </div>
          )}

          {/* Progress bar */}
          <div className="mb-3">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleTimeChange}
              disabled={isLoading || hasError}
              className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => skipTime(-10)}
                disabled={isLoading || hasError}
              >
                <SkipBack className="w-4 h-4" />
              </Button>

              <Button
                size="sm"
                onClick={togglePlay}
                disabled={isLoading || hasError}
                className="romantic-gradient text-white hover:opacity-90"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </Button>
              
              <Button
                size="sm"
                variant="outline"
                onClick={() => skipTime(10)}
                disabled={isLoading || hasError}
              >
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={toggleMute}
              disabled={isLoading || hasError}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
          </div>

          {/* Volume control */}
          <div className="flex items-center gap-2">
            <Volume2 className="w-3 h-3 text-muted-foreground" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              disabled={isLoading || hasError}
              className="flex-1 h-1 bg-muted rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-xs text-muted-foreground w-8">
              {Math.round(volume * 100)}%
            </span>
          </div>

          <audio
            ref={audioRef}
            src={MUSIC_CONFIG.url}
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default MusicPlayer;
