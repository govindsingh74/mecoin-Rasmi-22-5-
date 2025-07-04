import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import AboutHero from '../components/about/AboutHero';
import AboutMission from '../components/about/AboutMission';
import AboutFeatures from '../components/about/AboutFeatures';
import AboutHistory from '../components/about/AboutHistory';
import AboutGoals from '../components/about/AboutGoals';
import AboutTeam from '../components/about/AboutTeam';
import AboutUIUX from '../components/about/AboutUIUX';
import AboutWhatWeDo from '../components/about/AboutWhatWeDo';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <SEOHead 
        title="About MECOIN - Our Mission & Vision | Revolutionary Cryptocurrency"
        description="Learn about MECOIN's mission to revolutionize digital finance. Discover our team, history, and vision for the future of blockchain technology."
        keywords="MECOIN about, cryptocurrency mission, blockchain team, DeFi vision, digital finance revolution"
        url="https://mecoin.com/about"
      />
      <AboutHero />
      <AboutMission />
      <AboutFeatures />
      <AboutWhatWeDo />
      <AboutHistory />
      <AboutGoals />
      <AboutUIUX />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;