import React, { useEffect, useRef } from 'react';

const AboutMission: React.FC = () => {
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="mission-section" 
      className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div 
          ref={missionRef}
          className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Is MECOIN</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="text-lg leading-relaxed text-gray-200 space-y-6">
            <p>
              At MECOIN, we are building the future of decentralized finance and digital entertainment.
              Combining the viral power of meme culture with real-world utility, MECOIN is more than just 
              a cryptocurrency—it's a fully immersive ecosystem.
            </p>
            <p>
              Our mission is to revolutionize how people interact with blockchain technology by providing
              seamless, fun, and profitable experiences for all users. We believe in the power of community,
              innovation, and accessibility.
            </p>
            <p>
              Through our comprehensive ecosystem of products and services, we aim to bridge the gap between
              traditional finance and the exciting world of cryptocurrency, making digital assets approachable
              for everyone from blockchain veterans to complete beginners.
            </p>
          </div>
          
          <div className="mt-12 p-8 bg-blue-800/30 rounded-2xl border border-blue-700/50">
            <h3 className="text-xl font-semibold mb-6 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Accessibility</h4>
                <p className="text-gray-300 text-sm">Making crypto accessible to everyone, regardless of technical background</p>
              </div>
              <div className="p-4 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Security</h4>
                <p className="text-gray-300 text-sm">Prioritizing the safety and security of our users' assets and data</p>
              </div>
              <div className="p-4 text-center">
                <div className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Innovation</h4>
                <p className="text-gray-300 text-sm">Constantly pushing the boundaries of what's possible in the crypto space</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-500/10 to-transparent"></div>
    </section>
  );
};

export default AboutMission;