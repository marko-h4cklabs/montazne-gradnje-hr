import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        
        if (totalSeconds <= 1) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        const newTotalSeconds = totalSeconds - 1;
        const hours = Math.floor(newTotalSeconds / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <div className="flex items-center gap-2">
        <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg font-bold text-xl min-w-[60px] text-center">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <span className="text-foreground font-semibold">:</span>
        <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg font-bold text-xl min-w-[60px] text-center">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <span className="text-foreground font-semibold">:</span>
        <div className="bg-destructive text-destructive-foreground px-3 py-2 rounded-lg font-bold text-xl min-w-[60px] text-center">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;