import { useState, useRef, useEffect } from 'react';

const useAudioPlayer = (srcArray) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const audioRef = useRef(new Audio(srcArray[0]));

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      if (nextIndex !== null) {
        playByIndex(nextIndex);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [nextIndex]);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
    setIsPaused(false);
  };

  const pause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const stop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
    setIsPaused(false);
  };

  const playNext = () => {
    const nextIndex = (currentIndex + 1) % srcArray.length;
    playByIndex(nextIndex);
  };

  const playPrevious = () => {
    const prevIndex = (currentIndex - 1 + srcArray.length) % srcArray.length;
    playByIndex(prevIndex);
  };

  const playByIndex = (index) => {
    if (index >= 0 && index < srcArray.length) {
      setCurrentIndex(index);
      audioRef.current.src = srcArray[index];
      play();
    }
  };

  const setNextTrack = (index) => {
    if (index >= 0 && index < srcArray.length) {
      setNextIndex(index);
    }
  };

  return {
    isPlaying,
    play,
    pause,
    stop,
    playNext,
    playPrevious,
    playByIndex,
    setNextTrack,
    currentIndex,
  };
};

export default useAudioPlayer;
