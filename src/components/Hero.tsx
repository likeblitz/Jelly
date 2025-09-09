import React from 'react';
import { useState, useEffect } from 'react';
import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import ActionButtons from './ActionButtons';
import ContractAddress from './ContractAddress';

const Hero: React.FC = () => {
  const [bananaClicks, setBananaClicks] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [achievementText, setAchievementText] = useState('');

  // Load counts from localStorage
  useEffect(() => {
    const savedBananaCount = localStorage.getItem('bananaClickCount');
    if (savedBananaCount) setBananaClicks(parseInt(savedBananaCount, 10));
  }, []);

  // Save counts to localStorage
  useEffect(() => {
    localStorage.setItem('bananaClickCount', bananaClicks.toString());
  }, [bananaClicks]);

  // Achievement system
  const checkAchievements = (count: number, type: 'banana') => {
    const milestones = [10, 50, 100, 500, 1000, 5000];
    const milestone = milestones.find(m => count === m);
    
    if (milestone) {
      const messages = {
        banana: [
          '🍌 First Banana!',
          '🎪 Circus Performer!',
          '🎭 Dancing Master!',
          '🌟 Banana Superstar!',
          '🎊 Meme Legend!',
          '🔥 ULTIMATE BANANA GOD!'
        ]
      };
      
      const messageIndex = milestones.indexOf(milestone);
      setAchievementText(messages[type][messageIndex]);
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 3000);
    }
  };

  const handleBananaClick = () => {
    const newCount = bananaClicks + 1;
    setBananaClicks(newCount);
    checkAchievements(newCount, 'banana');
  };

  const totalClicks = bananaClicks;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-banana absolute top-20 left-10 text-4xl animate-bounce">🍌</div>
        <div className="floating-banana absolute top-40 right-20 text-3xl animate-pulse">🥜</div>
        <div className="floating-banana absolute bottom-32 left-20 text-5xl animate-bounce delay-1000">🍯</div>
        <div className="floating-banana absolute bottom-20 right-10 text-3xl animate-pulse delay-500">✨</div>
      </div>

      {/* Achievement Notification */}
      {showAchievement && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-pixel text-sm shadow-lg border-4 border-yellow-300">
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="animate-spin" />
              {achievementText}
              <Sparkles size={20} className="animate-spin" />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Animated Title */}
          <div className="mb-6 mt-12 sm:mt-16 lg:mt-20 relative">
            <h1 className="font-pixel text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight animate-pulse">
              IT'S PEANUT BUTTER
            </h1>
            <h1 className="font-pixel text-yellow-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mt-2 relative">
              <span className="relative z-10">JELLY TIME</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 blur-lg opacity-30 animate-pulse"></div>
            </h1>
          </div>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
            <div className="bg-gray-800 border border-yellow-400 rounded-lg px-3 py-2 flex items-center gap-2">
              <TrendingUp size={16} className="text-yellow-400" />
              <span className="font-pixel text-yellow-300 text-xs">TRENDING</span>
            </div>
            <div className="bg-gray-800 border border-yellow-400 rounded-lg px-3 py-2 flex items-center gap-2">
              <Users size={16} className="text-yellow-400" />
              <span className="font-pixel text-yellow-300 text-xs">{totalClicks.toLocaleString()} CLICKS</span>
            </div>
            <div className="bg-gray-800 border border-yellow-400 rounded-lg px-3 py-2 flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" />
              <span className="font-pixel text-yellow-300 text-xs">LIVE</span>
            </div>
          </div>
          
          <p className="font-pixel text-yellow-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            The legendary dancing banana meme that conquered the internet.
            <br />
            <span className="text-yellow-400">Join the revolution. Click to earn!</span>
          </p>
          
          {/* Enhanced Action Buttons */}
          <div className="mb-8">
            <ActionButtons />
          </div>
          
          {/* Interactive Click Counters */}
          <div className="flex justify-center lg:justify-start mb-8">
            {/* Banana Click Counter - Centered */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-yellow-400 rounded-lg p-4 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 max-w-sm w-full">
              <button
                onClick={handleBananaClick}
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-2 border-yellow-300 rounded-lg font-pixel text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/70 active:scale-95 hover:from-yellow-300 hover:to-yellow-400"
              >
                🍌 BANANA DANCE
              </button>
              <div className="font-pixel text-yellow-300 text-xs mt-2 text-center">
                Dance Moves: <span className="text-yellow-400 font-bold">{bananaClicks.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-yellow-600 to-orange-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((bananaClicks % 100) / 100 * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <ContractAddress />
          </div>
        </div>
        
        {/* Right GIF - Enhanced */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div 
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] relative z-10 cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={handleBananaClick}
            >
              <img 
                src="/wSQFSPb.gif" 
                alt="Dancing Banana - Peanut Butter Jelly Time"
                className="w-full h-full object-contain filter hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/0 via-transparent to-yellow-400/0 group-hover:from-yellow-400/10 group-hover:to-yellow-400/10 transition-all duration-300 rounded-full"></div>
            </div>
            {/* Click hint */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 font-pixel text-yellow-400 text-xs animate-bounce opacity-70">
              ↑ CLICK ME! ↑
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;