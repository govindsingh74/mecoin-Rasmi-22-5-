import { ethers } from "ethers";
import Web3Modal from "web3modal";

// INTERNAL IMPORTS
import tokenICO from "./TokenICO.json";
import erc20 from "./ERC20.json";

export const TOKEN_ADDRESS = "0x8724b07Cf098F753EC8a3A08E6063Be98CBbDD06";
export const ERC20_ABI = erc20.abi;
export const OWNER_ADDRESS = "0x4d886e2774763710a3D0E415296B9D26b3411A22";
export const CONTRACT_ADDRESS = "0x0B100ef01c11Bb29D7aD4edD7912E8126c82De9E";
export const CONTRACT_ABI = tokenICO.abi;

interface NetworkConfig {
  chainId: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
}

const networks: Record<string, NetworkConfig> = {
  sepolia: {
    chainId: `0x${Number(11155111).toString(16)}`,
    chainName: "Sepolia",
    nativeCurrency: {
      name: "SepoliaETH",
      symbol: "SepoliaETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.infura.io/v3/"],
    blockExplorerUrls: ["https://sepolia.etherscan.io"],
  },
  holesky: {
    chainId: `0x${Number(17000).toString(16)}`,
    chainName: "Holesky",
    nativeCurrency: {
      name: "holesky",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/eth_holesky"],
    blockExplorerUrls: ["https://holesky.etherscan.io/"],
  },
  polygon_amoy: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Amoy",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://www.oklink.com/amoy"],
  },
  polygon_mumbai: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Polygon Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/polygon_mumbai"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "POL",
      symbol: "POL",
      decimals: 18,
    },
    rpcUrls: ["https://polygon-mainnet.infura.io"],
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.ankr.com/bsc"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_mainnet: {
    chainId: `0x${Number(8453).toString(16)}`,
    chainName: "Base Mainnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.base.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  base_sepolia: {
    chainId: `0x${Number(84532).toString(16)}`,
    chainName: "Base Sepolia",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.base.org"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
  localhost: {
    chainId: `0x${Number(31337).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "GO",
      symbol: "GO",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://bscscan.com"],
  },
};

const changeNetwork = async ({ networkName }: { networkName: string }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [{ ...networks[networkName] }],
    });
  } catch (error: any) {
    console.error("Error changing network:", error.message);
  }
};

export const handleNetworkSwitch = async (networkName = "polygon") => {
  await changeNetwork({ networkName });
};

export const CHECK_WALLET_CONNECTED = async (): Promise<string | null> => {
  if (!window.ethereum) {
    console.log("Please install MetaMask");
    return null;
  }

  await handleNetworkSwitch();

  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  return accounts.length ? accounts[0] : null;
};

export const CONNECT_WALLET = async (): Promise<string | null> => {
  try {
    if (!window.ethereum) {
      console.log("Please install MetaMask");
      return null;
    }
    await handleNetworkSwitch();

    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    return accounts[0];
  } catch (error) {
    console.error("Error connecting wallet:", error);
    return null;
  }
};

const fetchContract = (address: string, abi: any, signer: ethers.Signer) => {
  return new ethers.Contract(address, abi, signer);
};

export const TOKEN_ICO_CONTRACT = async (): Promise<ethers.Contract | null> => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return fetchContract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  } catch (error) {
    console.error("Error connecting to contract:", error);
    return null;
  }
};


export const ERC20 = async (ADDRESS: string) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const network = await provider.getNetwork();
    const signer = provider.getSigner();

    const contract = fetchContract(ADDRESS, ERC20_ABI, signer);
    const userAddress = await signer.getAddress();

    const [balance, name, symbol, supply, decimals] = await Promise.all([
      contract.balanceOf(userAddress),
      contract.name(),
      contract.symbol(),
      contract.totalSupply(),
      contract.decimals(),
    ]);

    return {
      address: contract.address,
      name,
      symbol,
      decimals,
      supply: ethers.utils.formatUnits(supply, decimals),
      balance: ethers.utils.formatUnits(balance, decimals),
      chainId: network.chainId,
    };
  } catch (error: any) {
    console.error("Error fetching ERC20 token details:", error);
    return null;
  }
};

export const ERC20_CONTRACT = async (contractAddress: string) => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return fetchContract(contractAddress, ERC20_ABI, signer);
  } catch (error) {
    console.error("Error connecting to ERC20 contract:", error);
    return null;
  }
};

export const GET_BALANCE = async (): Promise<string> => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.error("Error getting balance:", error);
    return "0.00";
  }
};

export const CHECK_ACCOUNT_BALANCE = async (address: string): Promise<string> => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const balance = await provider.getBalance(address);
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.error("Error checking account balance:", error);
    return "0.00";
  }
};

export const addtokenToMetaMask = async () => {
  if (window.ethereum) {
    const tokenDetails = await ERC20(TOKEN_ADDRESS);
    const tokenDecimals = tokenDetails?.decimals;
    const tokenSymbol = tokenDetails?.symbol;
    const tokenImage = "https://www.daulathussain.com/wp-content/uploads/2024/05/theblockchaincoders.jpg";

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: TOKEN_ADDRESS,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });
      return wasAdded ? "Token Added Successfully" : "Something went wrong";
    } catch (error) {
      return "Failed to add";
    }
  } else {
    return "Metamask is not Installed";
  }
};