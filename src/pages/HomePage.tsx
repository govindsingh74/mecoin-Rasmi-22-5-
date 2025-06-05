import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BlockchainTech from '../components/home/BlockchainTech';
import FutureMecoin from '../components/home/FutureMecoin';
import SecuritySection from '../components/home/SecuritySection';
import CommunitySection from '../components/home/CommunitySection';

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <BlockchainTech />
      <FutureMecoin />
      <SecuritySection />
      <CommunitySection />
    </div>
  );
};

export default HomePage;