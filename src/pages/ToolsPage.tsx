import React, { useState, useContext } from 'react';
import SEOHead from '../components/SEO/SEOHead';
import { TOKEN_ICO_Context } from '../../context/index';
import TokenInfo from '../components/tools/TokenInfo';
import TransferCurrency from '../components/tools/TransferCurrency';
import TransferToken from '../components/tools/TransferToken';
import UpdateAddress from '../components/tools/UpdateAddress';
import UpdatePrice from '../components/tools/UpdatePrice';

const ToolsPage = () => {
  const [activeTab, setActiveTab] = useState('token-info');
  const [transferCurrency, setTransferCurrency] = useState(false);
  const [transferModel, setTransferModel] = useState(false);
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);

  const {
    TOKEN_ICO,
    TRANSFER_ETHER,
    TRANSFER_TOKEN,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    CHECK_ACCOUNT_BALANCE,
    ERC20,
    loader,
    setLoader,
    currency
  } = useContext(TOKEN_ICO_Context);

  // Mock data for demonstration - replace with actual TOKEN_ICO data
  const mockDetail = {
    supply: 1000000,
    symbol: 'MECOIN',
    soldTokens: 500000,
    tokenPrice: 0.1,
    tokenBal: 1000,
    maticBal: 100,
    tokenAddr: '0x8724b07Cf098F753EC8a3A08E6063Be98CBbDD06'
  };

  const tabs = [
    { id: 'token-info', label: 'Token Info' },
    { id: 'transfer-currency', label: 'Transfer Currency' },
    { id: 'transfer-token', label: 'Transfer Token' },
    { id: 'update-address', label: 'Update Address' },
    { id: 'update-price', label: 'Update Price' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 py-24 px-4">
      <SEOHead 
        title="MECOIN Tools - Manage Your Cryptocurrency | Token Transfer & Swap"
        description="Access powerful MECOIN tools to manage your tokens, transfer currency, update addresses, and more. Professional-grade cryptocurrency management platform."
        keywords="MECOIN tools, token transfer, cryptocurrency management, blockchain tools, token swap, crypto utilities"
        url="https://mecoin.com/tools"
      />
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/30 text-blue-300 text-sm font-medium mb-4">
            MECOIN Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Manage Your MECOIN</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Access powerful tools to manage your MECOIN tokens and transactions.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-blue-900/50 text-gray-300 hover:bg-blue-800 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-blue-900/50 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 shadow-xl relative">
          {loader && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl z-10">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {activeTab === 'token-info' && (
            <TokenInfo detail={mockDetail} currency={currency} />
          )}
          {activeTab === 'transfer-currency' && (
            <TransferCurrency
              setTransferCurrency={setTransferCurrency}
              TRANSFER_ETHER={TRANSFER_ETHER}
              detail={mockDetail}
              currency={currency}
              CHECK_ACCOUNT_BALANCE={CHECK_ACCOUNT_BALANCE}
              setLoader={setLoader}
            />
          )}
          {activeTab === 'transfer-token' && (
            <TransferToken
              setTransferModel={setTransferModel}
              TRANSFER_TOKEN={TRANSFER_TOKEN}
              ERC20={ERC20}
              setLoader={setLoader}
            />
          )}
          {activeTab === 'update-address' && (
            <UpdateAddress
              detail={mockDetail}
              currency={currency}
              setOpenUpdateAddress={setOpenUpdateAddress}
              UPDATE_TOKEN={UPDATE_TOKEN}
              ERC20={ERC20}
              setLoader={setLoader}
            />
          )}
          {activeTab === 'update-price' && (
            <UpdatePrice
              detail={mockDetail}
              currency={currency}
              setOpenUpdatePrice={setOpenUpdatePrice}
              UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
            />
          )}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-indigo-900/30 to-transparent"></div>
    </div>
  );
};

export default ToolsPage;