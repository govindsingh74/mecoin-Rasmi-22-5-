import React, { useState, useContext } from 'react';
import { useAccount, useBalance } from 'wagmi';
import { motion } from 'framer-motion';
import { ArrowDownUp, Info, Settings } from 'lucide-react';
import { TOKEN_ICO_Context } from '../../../context/index.tsx';

const SwapInterface: React.FC = () => {
  const context = useContext(TOKEN_ICO_Context);

  if (!context) {
    return <div className="text-white">Loading context...</div>;
  }

  const { BUY_TOKEN } = context;

  const { address, isConnected } = useAccount();
  const [meCoinAmount, setMeCoinAmount] = useState<string>('');
  const [polAmount, setPolAmount] = useState<string>('');

  const { data: polBalance } = useBalance({ address });
  const { data: mecoinBalance } = useBalance({
    address,
    token: '0x8724b07Cf098F753EC8a3A08E6063Be98CBbDD06',
  });

  const exchangeRate = 5; // 1 POL = 5 MECOIN

  const handleSwap = async () => {
    if (!isConnected) {
      alert('Please connect your wallet');
      return;
    }

    const amount = parseFloat(meCoinAmount);
    if (!amount || amount <= 0) {
      alert('Enter a valid MECOIN amount');
      return;
    }

    const tokensToBuy = amount; // In MECOIN
    const polToSend = tokensToBuy / exchangeRate;

    try {
      await BUY_TOKEN(tokensToBuy);
      alert('Swap complete!');
      setMeCoinAmount('');
      setPolAmount('');
    } catch (err) {
      console.error(err);
      alert('Swap failed.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-lg w-full max-w-md"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Buy Mecoin</h3>
        <Settings className="w-5 h-5 text-gray-300" />
      </div>

      {/* MECOIN (editable) */}
      <div className="bg-blue-900/30 rounded-xl p-4 mb-2">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Buy</span>
          <span>Balance: {mecoinBalance?.formatted || '0.00'} MECOIN</span>
        </div>
        <div className="flex items-center">
          <input
            type="number"
            value={meCoinAmount}
            onChange={(e) => {
              const input = e.target.value;
              setMeCoinAmount(input);
              const num = parseFloat(input);
              setPolAmount(!isNaN(num) && num > 0 ? (num / exchangeRate).toFixed(6) : '');
            }}
            placeholder="0.00"
            className="bg-transparent text-2xl text-white w-full outline-none"
            min="0"
            step="any"
          />
          <span className="bg-blue-800/50 text-white px-3 py-1 rounded-lg">MECOIN</span>
        </div>
      </div>

      {/* SWITCH */}
      <div className="flex justify-center -my-3">
        <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700" disabled>
          <ArrowDownUp className="text-white w-5 h-5" />
        </button>
      </div>

      {/* POL (calculated) */}
      <div className="bg-blue-900/30 rounded-xl p-4 mt-2">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Pay</span>
          <span>Balance: {polBalance?.formatted || '0.00'} POL</span>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={polAmount}
            readOnly
            placeholder="0.00"
            className="bg-transparent text-2xl text-white w-full outline-none"
          />
          <span className="bg-blue-800/50 text-white px-3 py-1 rounded-lg">POL</span>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 p-3 bg-blue-900/20 rounded-lg text-sm text-gray-300">
        <div className="flex justify-between">
          <span>Exchange Rate</span>
          <span>1 POL = {exchangeRate} MECOIN</span>
        </div>
        <div className="flex justify-between mt-1">
          <span>Price Impact</span>
          <span className="text-green-400">{'<0.01%'}</span>
        </div>
      </div>

      {/* Action */}
      <button
        onClick={handleSwap}
        disabled={!isConnected || !Number(meCoinAmount)}
        className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50"
      >
        {isConnected ? 'Buy Mecoin' : 'Connect Wallet to Buy'}
      </button>

      <div className="mt-4 text-center text-sm text-gray-400 flex justify-center items-center">
        <Info className="w-4 h-4 mr-1" />
        Slippage tolerance: 0.5%
      </div>
    </motion.div>
  );
};

export default SwapInterface;
