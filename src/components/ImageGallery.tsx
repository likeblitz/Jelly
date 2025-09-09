import React from 'react';
import { Download } from 'lucide-react';

const ImageGallery: React.FC = () => {
  const images = [
    '/blob.png',
    '/blob (1).png',
    '/blob (2).png',
    '/blob (3).png',
    '/blob (4).png',
    '/blob (5).png',
    '/blob (6).png',
    '/blob (7).png',
    '/blob (8).png',
    '/blob (9).png',
    '/blob (10).png',
    '/blob (11).png',
    '/photo_2025-09-01_02-58-33.jpg.png',
    '/photo_2025-09-04 16.47.39.jpeg.png',
    '/wakeup.png.png',
    '/memes/blob.png',
    '/memes/blob (1).png',
    '/memes/blob (2).png',
    '/memes/blob (3).png',
    '/memes/ChatGPT Image 1 sep. 2025 01_11_42.png.png',
  ];

  const downloadImage = async (src: string, filename: string) => {
    try {
      // If your file names contain spaces or special chars, encode the URL:
      const response = await fetch(encodeURI(src));
      if (!response.ok) throw new Error(`Failed to fetch ${src}`);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const getFilename = (src: string) => {
    return src.split('/').pop() || 'jelly-meme.png';
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-pixel text-yellow-400 text-2xl sm:text-3xl md:text-4xl text-center mb-12">
          MEMES
        </h2>

        {/* Masonry grid (requires CSS in index.css, see note below) */}
        <div className="masonry-grid">
          {images.map((src, index) => (
            <div key={index} className="masonry-item group relative">
              <img
                src={src}
                alt={`Jelly meme ${index + 1}`}
                className="w-full h-auto object-contain transition-transform duration-200 hover:scale-105 hover:brightness-110 cursor-pointer"
                loading="lazy"
              />
              <button
                onClick={() => downloadImage(src, getFilename(src))}
                className="absolute top-2 right-2 bg-yellow-400 text-black p-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-yellow-300 hover:scale-110"
                title="Download image"
              >
                <Download size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
