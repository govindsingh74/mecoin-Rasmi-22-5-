import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        137: 'https://rpc.ankr.com/polygon',
      },
    },
  },
  injected: {
    display: {
      name: 'MetaMask',
      description: 'Connect with the MetaMask browser extension',
    },
    package: null,
  },
};

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});
