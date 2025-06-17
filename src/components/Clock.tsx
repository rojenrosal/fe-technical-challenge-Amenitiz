import { useEffect, useState } from 'react';

type ClockProps = {
  lastOnline: number; 
};

export function Clock({ lastOnline }: ClockProps) {
  const [elapsedSeconds, setElapsedSeconds] = useState(() => {
    return Math.floor(Date.now() / 1000) - lastOnline;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <p>
      <span className='text-red-500'
      >Last Online:</span> {formatTime(elapsedSeconds)} ago
    </p>
  );
}
