import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import HeroSection from '../components/home/HeroSection';
import BlockchainTech from '../components/home/BlockchainTech';
import FutureMecoin from '../components/home/FutureMecoin';
import SecuritySection from '../components/home/SecuritySection';
import CommunitySection from '../components/home/CommunitySection';

const HomePage = () => {
  return (
    <div className="homepage">
      <SEOHead 
        title="MECOIN - The Future of Digital Finance | Polygon-Based Cryptocurrency"
        description="MECOIN is a revolutionary cryptocurrency built on Polygon technology. Trade, swap, and earn with our secure, fast, and innovative DeFi platform. Join 100K+ users worldwide."
        keywords="MECOIN, cryptocurrency, blockchain, DeFi, Polygon, token swap, digital finance, crypto trading, Web3"
        url="https://mecoin.com"
      />
      <HeroSection />
      <BlockchainTech />
      <FutureMecoin />
      <SecuritySection />
      <CommunitySection />
    </div>
  );
};

export default HomePage;