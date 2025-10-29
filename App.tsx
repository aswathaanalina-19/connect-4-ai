
import React, { useState, useCallback, useEffect } from 'react';
import { SLIDES_DATA } from './constants';
import { Slide } from './components/Slide';

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"/></svg>
);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = SLIDES_DATA.length;

  const goToNext = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrev]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-100 font-sans p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      
      <main className="w-full max-w-5xl flex-grow flex items-center justify-center relative z-10">
         <Slide content={SLIDES_DATA[currentSlide]} slideIndex={currentSlide} />
      </main>

      <footer className="w-full max-w-5xl py-4 flex items-center justify-between fixed bottom-0 left-1/2 -translate-x-1/2 z-20 px-4 md:px-0">
        <span className="text-sm font-medium text-gray-400">
          Slide {currentSlide + 1} of {totalSlides}
        </span>
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrev}
            disabled={currentSlide === 0}
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

