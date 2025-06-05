import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const AboutHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('mission-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      <div 
        ref={heroRef}
        className="container mx-auto z-10 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About MECOIN
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Revolutionizing the future of decentralized finance through innovation, community, and cutting-edge technology.
          </p>
          <div className="mt-8">
            <button 
              onClick={scrollToNextSection}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Story
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-10"></div>
      
      {/* Animated coin elements */}
      <div className="absolute w-20 h-20 rounded-full bg-yellow-400 opacity-20 top-1/4 left-1/4 animate-float"></div>
      <div className="absolute w-16 h-16 rounded-full bg-blue-400 opacity-20 top-2/3 right-1/4 animate-float-delay"></div>
      <div className="absolute w-24 h-24 rounded-full bg-purple-400 opacity-20 bottom-1/4 left-1/3 animate-float-delay-long"></div>
    </div>
  );
};

export default AboutHero;