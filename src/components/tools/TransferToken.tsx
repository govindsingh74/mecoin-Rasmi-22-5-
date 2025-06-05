import React, { useState, useEffect } from 'react';

const TransferToken = ({
  setTransferModel,
  TRANSFER_TOKEN,
  ERC20,
  setLoader,
}) => {
  const [token, setToken] = useState({
    _sendTo: '',
    _amount: '',
    _tokenAddress: '',
  });

  const [tokenDetails, setTokenDetails] = useState();
  const [transferToken, setTransferToken] = useState();

  useEffect(() => {
    if (transferToken) {
      const loadToken = async () => {
        setLoader(true);
        const token = await ERC20(transferToken);
        if (token == undefined) {
          console.log('Kindly paste the Token Address');
        } else {
          setTokenDetails(token);
        }
        setLoader(false);
      };
      loadToken();
    }
  }, [transferToken, ERC20, setLoader]);

  return (
    <div className="text-white">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Transfer Token</h3>
        <p className="text-gray-300">Send tokens to another wallet address</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Token Address
              </label>
              {tokenDetails?.name ? (
                <input
                  type="text"
                  value={`${tokenDetails?.name} (Balance: ${tokenDetails?.balance} ${tokenDetails?.symbol})`}
                  className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  disabled
                />
              ) : (
                <input
                  type="text"
                  placeholder="Enter token address"
                  className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  onChange={(e) => {
                    setToken({ ...token, _tokenAddress: e.target.value });
                    setTransferToken(e.target.value);
                  }}
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Recipient Address
              </label>
              <input
                type="text"
                placeholder="Enter recipient address"
                className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setToken({ ...token, _sendTo: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount
              </label>
              <input
                type="text"
                placeholder="Enter amount to send"
                className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setToken({ ...token, _amount: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => TRANSFER_TOKEN(token)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Transfer Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferToken;