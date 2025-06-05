import React, { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    bio: "Blockchain visionary with 10+ years in fintech and cryptocurrency ventures.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Sophia Chen",
    role: "CTO",
    bio: "Former lead developer at major blockchain projects with expertise in smart contracts.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    bio: "Product strategist specializing in crypto and Web3 user experiences.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Elena Rodriguez",
    role: "Chief Marketing Officer",
    bio: "Marketing expert with a track record of building global crypto communities.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "David Kim",
    role: "Lead Blockchain Developer",
    bio: "Cryptography specialist with contributions to multiple open-source blockchain projects.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Olivia Martinez",
    role: "Head of Operations",
    bio: "Operations expert with experience scaling crypto startups from concept to million-user platforms.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const AboutTeam: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (teamRef.current) {
            const teamItems = teamRef.current.querySelectorAll('.team-member');
            teamItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove('opacity-0');
                item.classList.add('animate-fade-in');
              }, index * 100);
            });
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the Visionaries</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The talented individuals behind MECOIN's innovation and success.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={teamRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-member opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
                
                <div className="mt-6 flex space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span className="text-sm">in</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span className="text-sm">𝕏</span>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <span className="text-sm">G</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group">
            <span>View All Team Members</span>
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
    </section>
  );
};

export default AboutTeam;