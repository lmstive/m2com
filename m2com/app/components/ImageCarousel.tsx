'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageCarousel = () => {
  const images = [
    { src: '/carousel/image1.jpg', alt: 'Marketing Digital' },
    { src: '/carousel/image2.jpg', alt: 'Design Gráfico' },
    { src: '/carousel/image3.jpg', alt: 'Redes Sociais' },
    { src: '/carousel/image4.jpg', alt: 'SEO e Performance' }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Automaticamente alterna para a próxima imagem a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  // Funções de navegação
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-300">
      {/* Container principal com tamanho fixo */}
      <div className="w-full h-96 bg-indigo-100 rounded-lg relative overflow-hidden">
        {/* Container da imagem sem posicionamento absoluto */}
        <div className="w-full h-full">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={100}
            priority
          />
        </div>
        
        {/* Controles de navegação */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button 
            onClick={prevSlide}
            className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none transition-colors z-10"
            aria-label="Imagem anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="bg-black/30 text-white p-2 rounded-full hover:bg-black/50 focus:outline-none transition-colors z-10"
            aria-label="Próxima imagem"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        {/* Indicadores */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-3 h-3' : 'bg-white/50'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;