import React, { useState, ReactNode } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import {
  CHECK_WALLET_CONNECTED,
  CONNECT_WALLET,
  GET_BALANCE,
  CHECK_ACCOUNT_BALANCE,
  TOKEN_ICO_CONTRACT,
  ERC20,
  ERC20_CONTRACT,
  TOKEN_ADDRESS,
  addtokenToMetaMask,
} from "./constants";

interface TransferData {
  _receiver?: string;
  _amount: string;
  _tokenAddress?: string;
  _sendTo?: string;
}

interface TokenDetails {
  tokenBal: string;
  name: string;
  Symbol: string;
  supply: string;
  tokenPrice: string;
  tokenAddr: string;
  maticBal: string;
  address: string;
  owner: string;
  soldTokens: number;
}

interface TokenContextProps {
  TOKEN_ICO: () => Promise<TokenDetails | void>;
  BUY_TOKEN: (amount: number) => Promise<void>;
  TRANSFER_ETHER: (transfer: TransferData) => Promise<void>;
  DONATE: (amount: number) => Promise<void>;
  UPDATE_TOKEN: (address: string) => Promise<void>;
  UPDATE_TOKEN_PRICE: (price: number) => Promise<void>;
  TOKEN_WITHDRAW: () => Promise<void>;
  TRANSFER_TOKEN: (transfer: TransferData) => Promise<void>;
  CONNECT_WALLET: () => Promise<string | null>;
  ERC20: (address: string) => Promise<any>;
  CHECK_ACCOUNT_BALANCE: (address: string) => Promise<string>;
  setAccount: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  addtokenToMetaMask: () => Promise<string>;
  TOKEN_ADDRESS: string;
  loader: boolean;
  account?: string;
  currency: string;
}

export const TOKEN_ICO_Context = React.createContext<TokenContextProps | null>(null);

interface ProviderProps {
  children: ReactNode;
}

export const TOKEN_ICO_Provider: React.FC<ProviderProps> = ({ children }) => {
  const currency = "MATIC";

  const [loader, setLoader] = useState<boolean>(false);
  const [account, setAccount] = useState<string>();

  const notifySuccess = (msg: string) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg: string) => toast.error(msg, { duration: 2000 });

  const TOKEN_ICO = async (): Promise<TokenDetails | void> => {
    try {
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        setLoader(true);
        setAccount(address);
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const tokenDetails = await contract.getTokenDetails();
        const contractOwner = await contract.owner();
        const soldTokens = await contract.soldTokens();

        const ethBal = await GET_BALANCE();

        const token: TokenDetails = {
          tokenBal: ethers.utils.formatEther(tokenDetails.balance.toString()),
          name: tokenDetails.name,
          Symbol: tokenDetails.Symbol,
          supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
          tokenPrice: ethers.utils.formatEther(tokenDetails.tokenPrice.toString()),
          tokenAddr: tokenDetails.tokenAddr,
          maticBal: ethBal,
          address: address.toLowerCase(),
          owner: contractOwner.toLowerCase(),
          soldTokens: soldTokens.toNumber(),
        };

        setLoader(false);
        return token;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const BUY_TOKEN = async (amount: number): Promise<void> => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const tokenDetails = await contract.getTokenDetails();
        const availableToken = ethers.utils.formatEther(tokenDetails.balance.toString());

        if (parseFloat(availableToken) > 1) {
          const price = parseFloat(ethers.utils.formatEther(tokenDetails.tokenPrice.toString())) * amount;
          const payAmount = ethers.utils.parseUnits(price.toString(), "ether");

          const transaction = await contract.buyToken(amount, {
            value: payAmount.toString(),
            gasLimit: ethers.utils.hexlify(5000000),
          });

          await transaction.wait();
          await TOKEN_ICO();
          notifySuccess("Transfer completed successfully");
        }
      }
    } catch (error) {
      console.error(error);
      notifyError("Error. Please try again later.");
    } finally {
      setLoader(false);
    }
  };

  const TOKEN_WITHDRAW = async (): Promise<void> => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const tokenDetails = await contract.getTokenDetails();
        const availableToken = parseFloat(ethers.utils.formatEther(tokenDetails.balance.toString()));
        if (availableToken > 1) {
          const transaction = await contract.withdrawAllTokens();
          await transaction.wait();
          notifySuccess("Transaction Completed Successfully");
          window.location.reload();
        }
      }
    } catch (error) {
      console.error(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const UPDATE_TOKEN = async (_address: string): Promise<void> => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const transaction = await contract.updateToken(_address);
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const UPDATE_TOKEN_PRICE = async (price: number): Promise<void> => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const payAmount = ethers.utils.parseEther(price.toString());
        const transaction = await contract.updateTokenSalePrice(payAmount);
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const DONATE = async (AMOUNT: number): Promise<void> => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const payAmount = ethers.utils.parseEther(AMOUNT.toString());
        const transaction = await contract.transferToOwner(payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const TRANSFER_ETHER = async (transfer: TransferData): Promise<void> => {
    try {
      setLoader(true);
      const { _receiver, _amount } = transfer;
      if (!_receiver) throw new Error("Receiver is required");
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        if (!contract) throw new Error("Contract not found");

        const payAmount = ethers.utils.parseEther(_amount.toString());
        const transaction = await contract.transferEther(_receiver, payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const TRANSFER_TOKEN = async (transfer: TransferData): Promise<void> => {
    try {
      setLoader(true);
      const { _tokenAddress, _sendTo, _amount } = transfer;
      if (!_tokenAddress || !_sendTo) throw new Error("Token address and sendTo are required");
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await ERC20_CONTRACT(_tokenAddress);
        if (!contract) throw new Error("Contract not found");

        const payAmount = ethers.utils.parseEther(_amount.toString());
        const transaction = await contract.transfer(_sendTo, payAmount, {
          gasLimit: ethers.utils.hexlify(8000000),
        });
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  return (
    <TOKEN_ICO_Context.Provider
      value={{
        TOKEN_ICO,
        BUY_TOKEN,
        TRANSFER_ETHER,
        DONATE,
        UPDATE_TOKEN,
        UPDATE_TOKEN_PRICE,
        TOKEN_WITHDRAW,
        TRANSFER_TOKEN,
        CONNECT_WALLET,
        ERC20,
        CHECK_ACCOUNT_BALANCE,
        setAccount,
        setLoader,
        addtokenToMetaMask,
        TOKEN_ADDRESS,
        loader,
        account,
        currency,
      }}
    >
      {children}
    </TOKEN_ICO_Context.Provider>
  );
};