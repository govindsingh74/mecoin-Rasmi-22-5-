import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Globe, Shield, Wallet, MessageSquare, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tools', path: '/tools' },
    { name: 'Utility', path: '/utility' },
    { name: 'Contact', path: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/mecoin' },
    { name: 'Telegram', icon: <MessageSquare className="w-5 h-5" />, url: 'https://t.me/mecoin' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/mecoin' },
    { name: 'Website', icon: <Globe className="w-5 h-5" />, url: 'https://mecoin.com' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-blue-900/20"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              MECOIN
            </h3>
            <p className="text-gray-300 mb-6">
              Revolutionizing digital finance through blockchain innovation, security, and community-driven development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center hover:bg-blue-700/50 transition-colors group"
                >
                  {link.icon}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 absolute -top-1 -right-1 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors">
                <Shield className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Secure Transactions</span>
              </li>
              <li className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors">
                <Wallet className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Multi-Wallet Support</span>
              </li>
              <li className="flex items-center text-gray-300 group hover:text-blue-400 transition-colors">
                <Globe className="w-5 h-5 mr-3 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Global Access</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-blue-900/30 rounded-lg border border-blue-700/50 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-1.5 rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MECOIN. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:contact@mecoin.com"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;