import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialDays?: number;
  showDays?: boolean;
  urgentText?: string;
  discountText?: string;
}

const CountdownTimer = ({ 
  initialDays = 7, 
  showDays = true, 
  urgentText = "OGRANIČENA PONUDA",
  discountText = "10% POPUST"
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const totalSeconds = initialDays * 24 * 60 * 60;
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const totalSeconds = prevTime.days * 24 * 3600 + prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;
        
        if (totalSeconds <= 1) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        const newTotalSeconds = totalSeconds - 1;
        const days = Math.floor(newTotalSeconds / (24 * 3600));
        const hours = Math.floor((newTotalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((newTotalSeconds % 3600) / 60);
        const seconds = newTotalSeconds % 60;
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-6 animate-pulse">
      <div className="text-center">
        <div className="text-red-400 font-bold text-sm tracking-wider mb-1">{urgentText}</div>
        <div className="text-white font-bold text-lg">{discountText}</div>
      </div>
      
      <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-3">
        {showDays && (
          <>
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className="text-white/80 text-xs mt-1 font-medium">DANA</span>
            </div>
            <span className="text-white font-bold text-xl">:</span>
          </>
        )}
        
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <span className="text-white/80 text-xs mt-1 font-medium">SATI</span>
        </div>
        
        <span className="text-white font-bold text-xl">:</span>
        
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <span className="text-white/80 text-xs mt-1 font-medium">MIN</span>
        </div>
        
        <span className="text-white font-bold text-xl">:</span>
        
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <span className="text-white/80 text-xs mt-1 font-medium">SEK</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;