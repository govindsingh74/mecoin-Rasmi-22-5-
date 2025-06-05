import React from 'react';
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