import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown, Wallet, Coins, RefreshCw, Settings, DollarSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const tools = [
    { name: 'Token Info', icon: <Coins className="w-5 h-5" />, id: 'token-info' },
    { name: 'Transfer Currency', icon: <Wallet className="w-5 h-5" />, id: 'transfer-currency' },
    { name: 'Transfer Token', icon: <RefreshCw className="w-5 h-5" />, id: 'transfer-token' },
    { name: 'Update Address', icon: <Settings className="w-5 h-5" />, id: 'update-address' },
    { name: 'Update Price', icon: <DollarSign className="w-5 h-5" />, id: 'update-price' }
  ];

  const handleToolClick = (toolId) => {
    navigate('/tools');
    // Add any additional logic for handling tool selection
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-b border-blue-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="https://i.ibb.co/xVCF5vm/t-info-img.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <Link
              to="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              MECOIN
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/utility" className="hover:text-blue-400 transition-colors">Utility</Link>
            
            {/* Tools Dropdown */}
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center hover:text-blue-400 transition-colors">
                Tools
                <ChevronDown className="ml-1 w-4 h-4" />
              </Menu.Button>
              
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-blue-900 border border-blue-700 rounded-lg shadow-lg">
                  <div className="p-2">
                    {tools.map((tool) => (
                      <Menu.Item key={tool.name}>
                        {({ active }) => (
                          <button
                            onClick={() => handleToolClick(tool.id)}
                            className={`${
                              active ? 'bg-blue-800' : ''
                            } flex items-center w-full px-4 py-2 text-sm rounded-lg transition-colors`}
                          >
                            {tool.icon}
                            <span className="ml-3">{tool.name}</span>
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            
            {/* Connect Wallet Button */}
            <ConnectButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ConnectButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <div className="h-6 w-6 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">About</Link>
              <Link to="/utility" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Utility</Link>
              <div className="px-3 py-2">
                <div className="font-medium">Tools</div>
                {tools.map((tool) => (
                  <button
                    key={tool.name}
                    onClick={() => handleToolClick(tool.id)}
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-blue-800 rounded-md transition-colors"
                  >
                    {tool.icon}
                    <span className="ml-3">{tool.name}</span>
                  </button>
                ))}
              </div>
              <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;