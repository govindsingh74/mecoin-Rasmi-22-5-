import React, { useEffect, useRef } from 'react';

const features = [
  {
    name: "MeCoin NFTs",
    description: "Unique digital collectibles with real utility in our ecosystem",
    icon: "🖼️"
  },
  {
    name: "MeCoin WALLET",
    description: "Secure, easy-to-use wallet for managing your digital assets",
    icon: "👛"
  },
  {
    name: "MeCoin SWAP",
    description: "Seamless token exchanges with minimal fees and maximum security",
    icon: "🔄"
  },
  {
    name: "MeCoin GAMES",
    description: "Fun, interactive games where you can earn while you play",
    icon: "🎮"
  },
  {
    name: "MeCoin AIRDROPS",
    description: "Regular token giveaways for community members and active participants",
    icon: "🪂"
  },
  {
    name: "MeCoin ICOs",
    description: "Early access to promising new projects in our ecosystem",
    icon: "🚀"
  }
];

const AboutFeatures: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (featuresRef.current) {
            const featureItems = featuresRef.current.querySelectorAll('.feature-item');
            featureItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-fade-in-up');
                item.classList.remove('opacity-0');
              }, index * 100);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-600/30 text-indigo-300 text-sm font-medium mb-4">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Featured Products</h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Explore the complete MECOIN ecosystem, designed to provide maximum value and utility to our users.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item opacity-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-500 hover:bg-white/10 hover:translate-y-[-4px] hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
              <p className="text-indigo-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating elements in the background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutFeatures;