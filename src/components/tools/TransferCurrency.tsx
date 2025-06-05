import React, { useState, useEffect } from 'react';

const TransferCurrency = ({
  setTransferCurrency,
  TRANSFER_ETHER,
  detail,
  currency,
  CHECK_ACCOUNT_BALANCE,
  setLoader,
}) => {
  const [transfer, setTransfer] = useState({
    _amount: '',
    _receiver: '',
  });

  const [receiver, setReceiver] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    if (address) {
      const loadToken = async () => {
        try {
          setLoader(true);
          const balance = await CHECK_ACCOUNT_BALANCE(address);
          
          if (balance === undefined || balance === null) {
            console.log('Kindly paste the Token Address');
            setReceiver(null);
          } else {
            setReceiver(balance);
          }
        } catch (error) {
          console.error('Error checking balance:', error);
        } finally {
          setLoader(false);
        }
      };
      loadToken();
    }
  }, [address, CHECK_ACCOUNT_BALANCE, setLoader]);

  return (
    <div className="text-white">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Transfer {currency}</h3>
        <p className="text-gray-300">Send {currency} to another wallet address</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Receiver Address
              </label>
              {receiver ? (
                <input
                  type="text"
                  value={`Account Balance ${receiver.slice(0, 8)} ${currency}`}
                  className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  disabled
                />
              ) : (
                <input
                  type="text"
                  placeholder="Enter receiver address"
                  className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  onChange={(e) => {
                    setTransfer({ ...transfer, _receiver: e.target.value });
                    setAddress(e.target.value);
                  }}
                />
              )}
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
                  setTransfer({ ...transfer, _amount: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-300 mb-4">
              <span className="font-medium">Available Balance:</span>{' '}
              {detail?.maticBal} {currency}
            </p>
            <button
              onClick={() => TRANSFER_ETHER(transfer)}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Transfer {currency}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferCurrency;