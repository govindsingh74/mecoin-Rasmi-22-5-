import React, { useEffect, useRef } from 'react';

const goals = [
  {
    title: "Global Accessibility",
    description: "Make cryptocurrency accessible to 100 million users worldwide by creating intuitive interfaces and educational resources.",
    icon: "🌎",
    timeframe: "2025"
  },
  {
    title: "Ecosystem Expansion",
    description: "Develop a comprehensive ecosystem with seamless integration between all MECOIN products and services.",
    icon: "🔄",
    timeframe: "2025"
  },
  {
    title: "Technological Innovation",
    description: "Continue pushing the boundaries of blockchain technology with faster, more secure, and more energy-efficient solutions.",
    icon: "⚡",
    timeframe: "2026"
  },
  {
    title: "Sustainable Growth",
    description: "Build a self-sustaining economy within the MECOIN ecosystem that provides long-term value for all stakeholders.",
    icon: "🌱",
    timeframe: "2027"
  }
];

const AboutGoals: React.FC = () => {
  const goalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (goalsRef.current) {
            const goalItems = goalsRef.current.querySelectorAll('.goal-item');
            goalItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('animate-zoom-in');
              }, index * 150);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (goalsRef.current) {
      observer.observe(goalsRef.current);
    }

    return () => {
      if (goalsRef.current) {
        observer.unobserve(goalsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-900 to-blue-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-600/30 text-indigo-300 text-sm font-medium mb-4">
            Vision & Goals
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Strategic Roadmap</h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Where we're headed and how we plan to revolutionize the cryptocurrency landscape.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={goalsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {goals.map((goal, index) => (
            <div 
              key={index} 
              className="goal-item opacity-0 bg-gradient-to-br from-blue-800/40 to-indigo-800/40 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-gradient-to-bl from-indigo-500/20 to-transparent w-32 h-32 transform rotate-12 -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{goal.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{goal.title}</h3>
                    <p className="text-indigo-300 text-sm">Target: {goal.timeframe}</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-6">{goal.description}</p>
                
                <div className="w-full bg-indigo-900/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-full rounded-full" style={{ width: `${25 * (index + 1)}%` }}></div>
                </div>
                <div className="mt-2 text-right text-sm text-indigo-300">
                  Progress: {25 * (index + 1)}%
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Our Complete Roadmap
          </a>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-5"></div>
      <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-indigo-900/50"></div>
    </section>
  );
};

export default AboutGoals;