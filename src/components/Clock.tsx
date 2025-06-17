import { useEffect, useState } from "react";
import { Clock4 } from "lucide-react";

type ClockProps = {
  lastOnline: number; 
};

export function Clock({ lastOnline }: ClockProps) {
  const [elapsedSeconds, setElapsedSeconds] = useState(
    Math.floor(Date.now() / 1000) - lastOnline
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) return `${hours}h ${minutes}m ${seconds}s`;
    if (minutes > 0) return `${minutes}m ${seconds}s`;
    return `${seconds}s`;
  };

  return (
    <div className="flex items-center gap-2 mt-4 text-sm text-gray-600 bg-gray-100 rounded px-3 py-2 shadow-sm w-fit">
      <Clock4 className="w-4 h-4 text-red-500" />
      <span>
        <span className="font-semibold text-gray-800">Last Online:</span>{" "}
        {formatTime(elapsedSeconds)} ago
      </span>
    </div>
  );
}
