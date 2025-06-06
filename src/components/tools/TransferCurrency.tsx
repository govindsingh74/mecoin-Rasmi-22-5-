import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface TransferProps {
  setTransferCurrency: (state: boolean) => void;
  TRANSFER_ETHER: (params: { _amount: string; _receiver: string }) => Promise<void>;
  detail: {
    maticBal?: string;
  };
  currency: string;
  CHECK_ACCOUNT_BALANCE: (address: string) => Promise<string | null | undefined>;
  setLoader: (state: boolean) => void;
}

const TransferCurrency: React.FC<TransferProps> = ({
  setTransferCurrency,
  TRANSFER_ETHER,
  detail,
  currency,
  CHECK_ACCOUNT_BALANCE,
  setLoader,
}) => {
  const [transfer, setTransfer] = useState<{ _amount: string; _receiver: string }>({
    _amount: '',
    _receiver: '',
  });

  const [receiverBalance, setReceiverBalance] = useState<string | null>(null);

  useEffect(() => {
    const address = transfer._receiver;

    if (!ethers.utils.isAddress(address)) {
      setReceiverBalance(null);
      return;
    }

    const loadBalance = async () => {
      try {
        setLoader(true);
        const balance = await CHECK_ACCOUNT_BALANCE(address);
        setReceiverBalance(balance ?? null);
      } catch (error) {
        console.error('Error checking balance:', error);
      } finally {
        setLoader(false);
      }
    };

    loadBalance();
  }, [transfer._receiver, CHECK_ACCOUNT_BALANCE, setLoader]);

  const handleTransfer = async () => {
    if (!ethers.utils.isAddress(transfer._receiver)) {
      alert('Invalid receiver address');
      return;
    }

    if (!transfer._amount || isNaN(Number(transfer._amount))) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      setLoader(true);
      await TRANSFER_ETHER(transfer);
    } catch (error) {
      console.error('Transfer failed:', error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="text-white">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 flex justify-between items-center">
          Transfer {currency}
          <button
            className="text-gray-400 hover:text-red-500 text-sm font-semibold"
            onClick={() => setTransferCurrency(false)}
          >
            Close
          </button>
        </h3>
        <p className="text-gray-300">Send {currency} to another wallet address</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-500/20">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Receiver Address
              </label>
              <input
                type="text"
                placeholder="Enter receiver address"
                value={transfer._receiver}
                className="w-full bg-blue-900/50 border border-blue-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setTransfer({ ...transfer, _receiver: e.target.value })
                }
              />
              {receiverBalance && (
                <p className="text-sm text-green-400 mt-2">
                  Receiver Balance: {receiverBalance.slice(0, 8)} {currency}
                </p>
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
                value={transfer._amount}
                onChange={(e) =>
                  setTransfer({ ...transfer, _amount: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-300 mb-4">
              <span className="font-medium">Your Balance:</span>{' '}
              {detail?.maticBal} {currency}
            </p>
            <button
              onClick={handleTransfer}
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
// This code defines a React component for transferring cryptocurrency. It includes input fields for the receiver's address and the amount to transfer, checks the receiver's balance, and handles the transfer process. The component also provides feedback on the user's balance and allows closing the transfer interface.
// The component uses hooks for state management and side effects, ensuring a responsive user experience. It validates inputs and displays appropriate messages for errors or confirmations.