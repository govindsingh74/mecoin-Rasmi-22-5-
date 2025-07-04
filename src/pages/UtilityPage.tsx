import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Wallet, Gamepad2, Trophy } from 'lucide-react';

const projects = [
  {
    title: "MECOIN ICO App(TokenIndex)",
    description: "Our Initial Coin Offering (ICO) platform provides a secure and transparent way to participate in the MECOIN token sale. Features include real-time token pricing, automated distribution, and detailed analytics.",
    icon: <img src="/public/tokenLaunch copy logo.png" alt="MECOIN Icon" className="w-12 h-12" />,
    features: [
      "Automated KYC/AML verification",
      "Multi-currency support",
      "Real-time token distribution",
      "Smart contract security",
      "Investment tracking dashboard"
    ],
    metrics: {
      raised: "$2.5M+",
      participants: "10,000+",
      countries: "50+"
    },
    link: "https://ico.mecoin.site/"
  },
  {
    title: "MEPay Payment Gateway",
    description: "A comprehensive payment solution that enables seamless cryptocurrency transactions. MEPay integrates with various blockchain networks to provide fast, secure, and low-cost transfers.",
    icon: <Wallet className="w-8 h-8" />,
    features: [
      "Cross-chain compatibility",
      "Instant settlements",
      "Merchant integration tools",
      "Transaction analytics",
      "Automated reconciliation"
    ],
    metrics: {
      processed: "$10M+",
      merchants: "500+",
      transactions: "100K+"
    },
    link: "https://mecoin.site/mepay"
  },
  {
    title: "LuxMeBet Number Game",
    description: "An exciting blockchain-based number prediction game where players can win MECOIN tokens. Features provably fair gameplay, instant payouts, and a dynamic reward system.",
    icon: <Gamepad2 className="w-8 h-8" />,
    features: [
      "Provably fair system",
      "Real-time multiplayer",
      "Instant crypto payouts",
      "Progressive jackpots",
      "Tournament mode"
    ],
    metrics: {
      players: "25,000+",
      totalPrizes: "$1M+",
      dailyGames: "5,000+"
    },
    link: "https://www.luxmebet.fun/"
  },
  {
    title: "CrickWin Fantasy Cricket",
    description: "A blockchain-powered fantasy cricket platform where users can create teams, compete in tournaments, and win MECOIN rewards. Features include live scoring, team analytics, and smart contract-based prize distribution.",
    icon: <Trophy className="w-8 h-8" />,
    features: [
      "Live match integration",
      "Advanced team analytics",
      "Automated scoring",
      "Prize pool transparency",
      "Social features"
    ],
    metrics: {
      users: "50,000+",
      tournaments: "1,000+",
      prizePool: "$500K+"
    },
    link: "https://www.crickwinmedia.site/"
  }
];

const UtilityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
              MECOIN Ecosystem
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Utility Projects
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive suite of blockchain-powered applications and services
              designed to provide real utility and value to our users.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl p-8 border border-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  {project.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              </div>

              <p className="text-gray-300 mb-6">{project.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 bg-blue-900/30 rounded-xl p-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-xl font-bold text-blue-400">{value}</p>
                    <p className="text-sm text-gray-400 capitalize">{key}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UtilityPage;
