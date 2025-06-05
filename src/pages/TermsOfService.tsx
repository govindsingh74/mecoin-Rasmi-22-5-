import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertCircle, FileText, Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-gray-300">Last updated: February 2024</p>
          </div>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-2 text-blue-400" />
                Agreement to Terms
              </h2>
              <p className="mb-4">
                By accessing or using MECOIN's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-400" />
                Service Description
              </h2>
              <p className="mb-4">MECOIN provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cryptocurrency trading services</li>
                <li>Digital wallet services</li>
                <li>Token swapping functionality</li>
                <li>Related blockchain services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-400" />
                User Responsibilities
              </h2>
              <p className="mb-4">Users must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information</li>
                <li>Maintain account security</li>
                <li>Comply with applicable laws</li>
                <li>Not engage in prohibited activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-blue-400" />
                Risks and Disclaimers
              </h2>
              <div className="bg-red-900/20 border border-red-500/20 rounded-xl p-6 space-y-4">
                <p>
                  Cryptocurrency trading involves substantial risk of loss and is not suitable for all investors. Users should:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Understand the risks involved</li>
                  <li>Never invest more than they can afford to lose</li>
                  <li>Be aware of market volatility</li>
                  <li>Consider seeking professional advice</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of MECOIN services are owned by MECOIN and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever.
              </p>
            </section>

            <section className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                Email: legal@mecoin.com<br />
                Address: 123 Blockchain Street, Crypto City
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;