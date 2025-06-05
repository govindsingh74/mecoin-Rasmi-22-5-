import React, { useState, useEffect } from 'react';
import { shortenAddress } from '../../Utils/index';

const UpdateAddress = ({
  detail,
  currency,
  setOpenUpdateAddress,
  UPDATE_TOKEN,
  ERC20,
  setLoader,
}) => {
  const [address, setAddress] = useState();
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
        <h3 className="text-2xl font-bold mb-2">Update Token Address</h3>
        <p className="text-gray-300">Update the contract address for your token</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                New Token Address
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
                  placeholder="Enter new token address"
                  className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setTransferToken(e.target.value);
                  }}
                />
              )}
            </div>

            <div className="bg-blue-900/20 rounded-lg p-4 space-y-2">
              <p className="text-sm">
                <span className="text-gray-400">Current Price:</span>{' '}
                <span className="font-medium">
                  {detail?.tokenPrice} {currency}
                </span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Token Balance:</span>{' '}
                <span className="font-medium">
                  {detail?.tokenBal} {detail?.symbol}
                </span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Current Address:</span>{' '}
                <span
                  className="font-medium cursor-pointer hover:text-blue-400"
                  onClick={() => navigator.clipboard.writeText(detail?.tokenAddr)}
                  title="Click to copy"
                >
                  {shortenAddress(detail?.tokenAddr)}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => UPDATE_TOKEN(address)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Update Token Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAddress;