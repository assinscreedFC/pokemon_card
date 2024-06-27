import { useState, useRef, useEffect } from 'react';

const useAudioPlayer = (src, autoReplay = false) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef(new Audio(src));

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      if (autoReplay) {
        audio.play();
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [autoReplay]);

  const play = () => {
    if (isPaused) {
      audioRef.current.play();
      setIsPlaying(true);
      setIsPaused(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const stop = () => {
    if (isPlaying || isPaused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  return {
    isPlaying,
    play,
    pause,
    stop,
  };
};

export default useAudioPlayer;
