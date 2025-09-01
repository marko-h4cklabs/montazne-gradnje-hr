import { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

interface CountdownTimerProps {
  endDate?: Date;
  showDays?: boolean;
  urgentText?: string;
  discountText?: string;
  variant?: 'hero' | 'light';
}

const CountdownTimer = ({ 
  endDate = new Date('2025-09-30T23:59:59'), 
  showDays = true, 
  urgentText = "OGRANIČENA PONUDA",
  discountText = "10% POPUST",
  variant = 'hero'
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const totalSeconds = Math.max(0, differenceInSeconds(endDate, now));
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const totalSeconds = Math.max(0, differenceInSeconds(endDate, now));
      
      if (totalSeconds <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(totalSeconds / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const isLight = variant === 'light';

  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-6 animate-pulse">
      <div className="text-center">
        <div className={`font-bold text-sm tracking-wider mb-1 ${isLight ? 'text-red-600' : 'text-red-400'}`}>
          {urgentText}
        </div>
        <div className={`font-bold text-lg ${isLight ? 'text-red-700' : 'text-white'}`}>
          {discountText}
        </div>
      </div>
      
      <div className={`flex items-center gap-2 rounded-lg p-3 ${isLight ? 'bg-red-50 border border-red-200' : 'bg-black/30 backdrop-blur-sm'}`}>
        {showDays && (
          <>
            <div className="flex flex-col items-center">
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <span className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-white/80'}`}>DANA</span>
            </div>
            <span className={`font-bold text-xl ${isLight ? 'text-red-600' : 'text-white'}`}>:</span>
          </>
        )}
        
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <span className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-white/80'}`}>SATI</span>
        </div>
        
        <span className={`font-bold text-xl ${isLight ? 'text-red-600' : 'text-white'}`}>:</span>
        
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <span className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-white/80'}`}>MIN</span>
        </div>
        
        <span className={`font-bold text-xl ${isLight ? 'text-red-600' : 'text-white'}`}>:</span>
        
        <div className="flex flex-col items-center">
          <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl min-w-[50px] text-center shadow-lg">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <span className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-white/80'}`}>SEC</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;