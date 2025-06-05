import React, { useEffect, useRef } from 'react';

const designPrinciples = [
  {
    title: "Simplicity",
    description: "We believe cryptocurrency should be accessible to everyone. Our interfaces are designed with simplicity in mind, eliminating unnecessary complexity.",
    icon: "✨"
  },
  {
    title: "Security",
    description: "Security is at the core of our design philosophy. Every interaction is built with multiple layers of protection for your assets.",
    icon: "🔒"
  },
  {
    title: "Engagement",
    description: "Cryptocurrency doesn't have to be boring. We integrate gamification and rewards to make using MECOIN a delightful experience.",
    icon: "🎮"
  },
  {
    title: "Transparency",
    description: "We believe in complete transparency. Our interfaces provide clear information about all transactions and fees.",
    icon: "👁️"
  }
];

const AboutUIUX: React.FC = () => {
  const designRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerDesign = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (designRef.current) {
            const items = designRef.current.querySelectorAll('.design-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('animate-slide-up');
              }, index * 150);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    const observerImage = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (imageRef.current) {
            imageRef.current.classList.remove('opacity-0');
            imageRef.current.classList.add('animate-fade-in');
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (designRef.current) {
      observerDesign.observe(designRef.current);
    }

    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }

    return () => {
      if (designRef.current) observerDesign.unobserve(designRef.current);
      if (imageRef.current) observerImage.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-600/30 text-purple-300 text-sm font-medium mb-4">
            Design Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our UI/UX Approach</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Creating intuitive, engaging, and secure experiences for cryptocurrency users.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div 
            ref={imageRef}
            className="lg:w-1/2 opacity-0 transition-opacity duration-1000"
          >
            <div className="relative p-4 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MECOIN UI/UX Design" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>
          
          <div 
            ref={designRef}
            className="lg:w-1/2"
          >
            <div className="space-y-8">
              {designPrinciples.map((principle, index) => (
                <div 
                  key={index} 
                  className="design-item opacity-0 transition-all duration-500 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-xl">{principle.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                    <p className="text-gray-300">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-blue-900/30 border border-blue-800 rounded-xl">
              <h4 className="text-lg font-semibold mb-3">Our Design Process</h4>
              <p className="text-gray-300 mb-4">
                Every feature undergoes rigorous user testing and iteration before release. We believe in a user-centered design approach that prioritizes usability and accessibility.
              </p>
              <div className="flex space-x-2">
                <div className="h-1 flex-grow bg-blue-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                </div>
                <div className="h-1 flex-grow bg-blue-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                <div className="h-1 flex-grow bg-blue-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
                <div className="h-1 flex-grow bg-blue-800 rounded-full overflow-hidden">
                  <div className="h-full w-1/4 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Research</span>
                <span>Design</span>
                <span>Testing</span>
                <span>Launch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-5"></div>
    </section>
  );
};

export default AboutUIUX;