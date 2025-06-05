import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-600/30 text-indigo-300 text-sm font-medium mb-4">
                Security
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Your assets are protected by multiple layers of security, including advanced 
                encryption and regular security audits.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-800/50 to-blue-800/50 rounded-2xl p-8 border border-indigo-500/20"
            >
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-indigo-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Smart Contract Security</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">Multiple independent security audits</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">Automated vulnerability scanning</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">Bug bounty program</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-2xl p-8 border border-blue-500/20"
            >
              <div className="flex items-center mb-6">
                <Lock className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-white">Asset Protection</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">Multi-signature wallets</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">Cold storage for majority of assets</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-300">Insurance coverage</p>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-xl border border-indigo-500/20"
            >
              <Eye className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h4>
              <p className="text-gray-300">Real-time threat detection and response</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/20"
            >
              <FileCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Regular Audits</h4>
              <p className="text-gray-300">Comprehensive security assessments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20"
            >
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">DDoS Protection</h4>
              <p className="text-gray-300">Advanced infrastructure security</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-pink-900/30 to-red-900/30 rounded-xl border border-pink-500/20"
            >
              <Lock className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Encryption</h4>
              <p className="text-gray-300">Military-grade data protection</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover opacity-5"></div>
      </div>
    </section>
  );
};

export default SecuritySection;