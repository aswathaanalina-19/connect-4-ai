import React from 'react';
import type { SlideContent, TitleSlide, PointsSlide, DiagramSlide, FinalSlide } from '../types';

interface SlideProps {
  content: SlideContent;
  slideIndex: number;
}

const Chip = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-indigo-600/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">{children}</div>
);

const renderSlide = (content: SlideContent) => {
  switch (content.type) {
    case 'title':
      const titleContent = content as TitleSlide;
      return (
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 mb-4">{titleContent.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300">{titleContent.subtitle}</p>
        </div>
      );
    case 'points':
      const pointsContent = content as PointsSlide;
      return (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-8 text-center">{pointsContent.title}</h2>
          <ul className="space-y-6">
            {pointsContent.points.map((point, index) => (
              <li key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                {point.title && <h3 className="text-xl font-semibold text-indigo-300 mb-2">{point.title}</h3>}
                <p className="text-gray-300 text-lg">{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case 'diagram':
        const diagramContent = content as DiagramSlide;
        return (
            <div className="text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">{diagramContent.title}</h2>
                 <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto">{diagramContent.explanation}</p>
                 <div className="flex flex-col md:flex-row gap-6 justify-center">
                     {diagramContent.items.map((item, index) => (
                         <div key={index} className="flex-1 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                             <h3 className="text-xl font-semibold text-indigo-300 mb-2">{item.title}</h3>
                             <p className="text-gray-300">{item.text}</p>
                         </div>
                     ))}
                 </div>
            </div>
        );
    case 'final':
        const finalContent = content as FinalSlide;
        return (
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10 text-center">{finalContent.title}</h2>
                 <div className="grid md:grid-cols-3 gap-6 mb-8">
                     {finalContent.steps.map((step, index) => {
                         // Fix: Converted implicit return to explicit return in map function to prevent potential JSX parsing issues.
                         return (
                            <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 backdrop-blur-sm">
                                <Chip>{step.title}</Chip>
                                <p className="text-gray-300 mt-3">{step.text}</p>
                            </div>
                         );
                     })}
                 </div>
                 <div className="text-center bg-gray-800 p-6 rounded-lg border border-gray-700">
                     <p className="text-lg text-gray-200 font-medium">{finalContent.conclusion}</p>
                 </div>
            </div>
        )
    default:
      return null;
  }
};

export const Slide: React.FC<SlideProps> = ({ content, slideIndex }) => {
  return (
    <div key={slideIndex} className="w-full p-6 animate-fade-in">
        {renderSlide(content)}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out forwards;
          }
          .bg-grid-gray-700\\[\\/0\\.2\\] {
            background-image:
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 3rem 3rem;
          }
        `}</style>
    </div>
  );
};
