import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Gift, Trophy } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-blue-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
                Community
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Be part of a vibrant ecosystem of traders, developers, and crypto enthusiasts 
                shaping the future of digital finance.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl p-6 border border-blue-500/20 text-center"
            >
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">100K+</h4>
              <p className="text-gray-300">Community Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-500/20 text-center"
            >
              <MessageCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">50K+</h4>
              <p className="text-gray-300">Active Discussions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/20 text-center"
            >
              <Gift className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">1M+</h4>
              <p className="text-gray-300">Rewards Distributed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-xl p-6 border border-pink-500/20 text-center"
            >
              <Trophy className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-2">200+</h4>
              <p className="text-gray-300">Community Events</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Join Our Community</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all duration-300"
                >
                  Telegram
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium transition-all duration-300"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-medium transition-all duration-300"
                >
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-5"></div>
      </div>
    </section>
  );
};

export default CommunitySection;