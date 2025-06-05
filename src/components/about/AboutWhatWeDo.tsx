import React, { useEffect, useRef } from 'react';

const services = [
  {
    title: "Decentralized Finance",
    description: "Our DeFi solutions provide accessible financial services without intermediaries, allowing users to earn, borrow, and lend crypto assets.",
    icon: "💹"
  },
  {
    title: "NFT Marketplace",
    description: "Create, buy, sell, and trade unique digital collectibles on our secure and user-friendly NFT marketplace.",
    icon: "🖼️"
  },
  {
    title: "Play-to-Earn Gaming",
    description: "Enjoy immersive blockchain games where you can earn MECOIN tokens while having fun and competing with others.",
    icon: "🎮"
  },
  {
    title: "Crypto Education",
    description: "Access comprehensive learning resources to understand blockchain technology and cryptocurrency investments.",
    icon: "📚"
  }
];

const AboutWhatWeDo: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerServices = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (servicesRef.current) {
            const serviceItems = servicesRef.current.querySelectorAll('.service-item');
            serviceItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('animate-fade-in-right');
              }, index * 200);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    const observerStats = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (statsRef.current) {
            const statItems = statsRef.current.querySelectorAll('.stat-item');
            statItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('animate-fade-in-up');

                // Animate the number
                const numberEl = item.querySelector('.number');
                if (numberEl) {
                  const target = parseInt(numberEl.getAttribute('data-target') || '0', 10);
                  let current = 0;
                  const increment = target / 50; // Dividing by the number of steps
                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                      numberEl.textContent = target.toLocaleString();
                      clearInterval(timer);
                    } else {
                      numberEl.textContent = Math.floor(current).toLocaleString();
                    }
                  }, 30);
                }
              }, index * 150);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (servicesRef.current) {
      observerServices.observe(servicesRef.current);
    }

    if (statsRef.current) {
      observerStats.observe(statsRef.current);
    }

    return () => {
      if (servicesRef.current) observerServices.unobserve(servicesRef.current);
      if (statsRef.current) observerStats.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transforming the cryptocurrency landscape with innovative solutions and services.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item opacity-0 flex space-x-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <a href="#" className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group">
                  <span>Learn more</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">By the Numbers</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our impact in the cryptocurrency ecosystem and beyond.
            </p>
          </div>
          
          <div 
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            <div className="stat-item opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">👥</span>
              </div>
              <div className="number text-4xl font-bold text-blue-400 mb-2" data-target="1500000">0</div>
              <p className="text-gray-300">Active Users</p>
            </div>
            
            <div className="stat-item opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🔄</span>
              </div>
              <div className="number text-4xl font-bold text-blue-400 mb-2" data-target="50000000">0</div>
              <p className="text-gray-300">Transactions</p>
            </div>
            
            <div className="stat-item opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🌎</span>
              </div>
              <div className="number text-4xl font-bold text-blue-400 mb-2" data-target="150">0</div>
              <p className="text-gray-300">Countries</p>
            </div>
            
            <div className="stat-item opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🖼️</span>
              </div>
              <div className="number text-4xl font-bold text-blue-400 mb-2" data-target="75000">0</div>
              <p className="text-gray-300">NFTs Minted</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
    </section>
  );
};

export default AboutWhatWeDo;