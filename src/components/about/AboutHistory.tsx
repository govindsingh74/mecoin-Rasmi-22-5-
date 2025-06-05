import React, { useEffect, useRef } from 'react';

const timelineEvents = [
  {
    year: "2021",
    quarter: "Q3",
    title: "Concept Development",
    description: "The initial concept for MECOIN was developed by our founding team, focusing on creating a meme coin with real utility."
  },
  {
    year: "2021",
    quarter: "Q4",
    title: "Team Formation",
    description: "Our core team of blockchain experts, developers, and marketing specialists was assembled to bring MECOIN to life."
  },
  {
    year: "2022",
    quarter: "Q1",
    title: "Initial Development",
    description: "Development of the MECOIN token and core infrastructure began, with a focus on security and scalability."
  },
  {
    year: "2022",
    quarter: "Q3",
    title: "Private Beta Launch",
    description: "MECOIN launched in private beta with early adopters testing our wallet and swap features."
  },
  {
    year: "2023",
    quarter: "Q1",
    title: "Public Launch",
    description: "MECOIN officially launched to the public, with our token becoming available on major exchanges."
  },
  {
    year: "2023",
    quarter: "Q4",
    title: "Ecosystem Expansion",
    description: "Launch of MECOIN NFTs and the first version of our gaming platform, expanding our ecosystem."
  },
  {
    year: "2024",
    quarter: "Q2",
    title: "Global Adoption",
    description: "Reaching over 1 million users worldwide, with continuous improvements to our platform and services."
  }
];

const AboutHistory: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (timelineRef.current) {
            const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-timeline-item');
              }, index * 200);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The MECOIN History</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From concept to global adoption, discover the key milestones that have shaped MECOIN's evolution.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={timelineRef}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item opacity-0 mb-16 flex items-start ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-blue-400">{event.year} | {event.quarter}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12">
                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
    </section>
  );
};

export default AboutHistory;