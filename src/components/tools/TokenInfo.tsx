import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import TokenICO from '../../../context/TokenICO.json';


const TOKEN_ICO_ADDRESS = "0x0B100ef01c11Bb29D7aD4edD7912E8126c82De9E";

const TokenInfo = ({ currency = "MATIC" }) => {
  const [detail, setDetail] = useState<any>(null);

  const fetchTokenInfo = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask not detected");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(TOKEN_ICO_ADDRESS, TokenICO.abi, signer);

      const [tokenDetails, owner, soldTokens] = await Promise.all([
        contract.getTokenDetails(),
        contract.owner(),
        contract.soldTokens()
      ]);

      const tokenData = {
        tokenAddr: tokenDetails.tokenAddr,
        supply: ethers.utils.formatEther(tokenDetails.supply),
        tokenPrice: ethers.utils.formatEther(tokenDetails.tokenPrice),
        balance: ethers.utils.formatEther(tokenDetails.balance),
        name: tokenDetails.name,
        symbol: tokenDetails.Symbol,
        owner,
        soldTokens: soldTokens.toString()
      };

      setDetail(tokenData);
    } catch (error) {
      console.error("Error fetching token data:", error);
    }
  };

  useEffect(() => {
    fetchTokenInfo();
  }, []);

  if (!detail) return <p className="text-gray-300">Loading token data...</p>;

  return (
    <div className="text-white">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">MECOIN Token Details</h3>
        <p className="text-gray-300 mb-4">Contract Address: {detail.tokenAddr}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/20">
            <h4 className="text-lg font-semibold mb-2">Supply Information</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Total Supply</p>
                <p className="text-xl font-medium">{detail.supply} {detail.symbol}</p>
              </div>
              <div>
                <p className="text-gray-400">Sold Tokens</p>
                <p className="text-xl font-medium">{detail.soldTokens} {detail.symbol}</p>
              </div>
              <div>
                <p className="text-gray-400">Minimum Transaction</p>
                <p className="text-xl font-medium">5 Tokens / Transaction</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/20">
            <h4 className="text-lg font-semibold mb-2">Market Information</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Market Valuation</p>
                <p className="text-xl font-medium">
                  {Number(detail.supply) * Number(detail.tokenPrice)} {currency}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Funds Raised</p>
                <p className="text-xl font-medium">
                  {Number(detail.soldTokens) * Number(detail.tokenPrice)} {currency}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Acceptable Currency</p>
                <p className="text-xl font-medium">POL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/20">
        <h4 className="text-lg font-semibold mb-4">Token Statistics</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-400">24hr</p>
            <p className="text-sm text-gray-400">Volume</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">+2.5%</p>
            <p className="text-sm text-gray-400">Price Change</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">10K+</p>
            <p className="text-sm text-gray-400">Holders</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-400">5M+</p>
            <p className="text-sm text-gray-400">Market Cap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
