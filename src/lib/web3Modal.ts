import { configureChains, createConfig } from 'wagmi';
import { polygon } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { EthereumClient } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

const projectId = '8ac2aa51178f9d28b2c75c4950f697cb'; // 🔐 create at https://cloud.walletconnect.com

const { chains, publicClient } = configureChains([polygon], [publicProvider()]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: Web3Modal.connectors({ projectId, chains }),
  publicClient,
});

export const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const web3modal = (
  <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
);
