import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SwapInterface from './SwapInterface';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-900 to-black flex items-center">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [100, -100, 100],
          y: [50, -50, 50],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
              Welcome to MECOIN
            </span>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              The Future of Digital Finance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Built on Polygon technology, MECOIN combines security, speed, and innovation 
              to revolutionize the way you interact with digital assets.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://icopol.mecoin.site/" // 🔗 your external link
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <Link
                to="/about"
                className="px-8 py-4 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-400">$50M+</h3>
                <p className="text-gray-400">Trading Volume</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-400">100K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-pink-400">150+</h3>
                <p className="text-gray-400">Countries</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-indigo-400">1M+</h3>
                <p className="text-gray-400">Transactions</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <SwapInterface />
          </motion.div>
        </div>
      </div>

      {/* Data flow animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;