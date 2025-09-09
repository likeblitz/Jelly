import React from 'react';
import { Flame } from 'lucide-react';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <ImageGallery />
      <footer className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center space-x-3">
              <Flame className="w-6 h-6 text-orange-400" />
              <a
                href="https://blazeresults.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-white hover:opacity-80 transition-opacity cursor-pointer"
              >
                Designed By <span className="font-bold">
                  <span className="text-orange-400">B</span><span className="text-white">laze</span>
                </span>
              </a>
              <Flame className="w-6 h-6 text-orange-400" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
