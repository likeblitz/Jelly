import React from 'react';

const ActionButtons: React.FC = () => {
  const buttons = [
    {
      label: 'BUY',
      url: 'https://dexscreener.com/solana/dqwhre7ess2lb5npx8f8hfynshwfjea4jfftk5ml8m1r',
      primary: true
    },
    {
      label: 'X',
      url: 'https://x.com/jellytime_sol',
      primary: false
    },
    {
      label: 'COINGECKO',
      url: 'https://www.coingecko.com/en/coins/jelly-time',
      primary: false
    }
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      {buttons.map((button) => (
        <a
          key={button.label}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            font-pixel px-6 py-3 border-2 transition-all duration-200 text-sm sm:text-base
            ${button.primary 
              ? 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300 hover:border-yellow-300' 
              : 'bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black'
            }
            hover:scale-105 active:scale-95
          `}
        >
          {button.label}
        </a>
      ))}
    </div>
  );
};

export default ActionButtons;