import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, RefreshCw, Database } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure Infrastructure",
    description: "Built on Polygon's proven blockchain technology, ensuring maximum security for your assets."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Experience near-instant transactions with minimal fees thanks to Polygon's Layer 2 scaling."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Cross-Chain Bridge",
    description: "Seamlessly bridge assets between Ethereum and Polygon networks."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Smart Contracts",
    description: "Powered by audited, secure smart contracts for reliable operations."
  }
];

const BlockchainTech = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
              Technology
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powered by Polygon
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Leveraging the power of Polygon's blockchain technology to deliver a fast, 
              secure, and scalable cryptocurrency platform.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-2xl font-bold text-blue-400">45,000</p>
                <p className="text-sm text-gray-400">TPS</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">&lt; 2s</p>
                <p className="text-sm text-gray-400">Block Time</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-400">$0.01</p>
                <p className="text-sm text-gray-400">Avg. Fee</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-400">99.9%</p>
                <p className="text-sm text-gray-400">Uptime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-900 to-transparent"></div>
    </section>
  );
};

export default BlockchainTech;