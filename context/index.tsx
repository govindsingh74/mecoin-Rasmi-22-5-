import React, { useState, createContext, ReactNode } from "react";
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

interface TokenICOContextProps {
  children: ReactNode;
}

export const TOKEN_ICO_Context = createContext<any>(null);

export const TOKEN_ICO_Provider = ({ children }: TokenICOContextProps) => {
  const DAPP_NAME = "evmico";
  const currency = "POL";
  const network = "Polygon Mainnet";

  const [loader, setLoader] = useState(false);
  const [account, setAccount] = useState<string | undefined>();

  const notifySuccess = (msg: string) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg: string) => toast.error(msg, { duration: 2000 });

  const formatBalance = (balance: string, decimals = 4) => Number.parseFloat(balance).toFixed(decimals);

  const TOKEN_ICO = async () => {
  try {
    const address = await CHECK_WALLET_CONNECTED();
    if (!address) return;

    setLoader(true);
    setAccount(address);

    const contract = await TOKEN_ICO_CONTRACT();
    if (!contract) throw new Error("Failed to connect to the ICO contract");

    const tokenDetails = await contract.getTokenDetails();
    const contractOwner = await contract.owner();
    const soldTokens = await contract.soldTokens();
    const ethBal = await GET_BALANCE();

    const token = {
      tokenBal: ethers.utils.formatEther(tokenDetails.balance.toString()),
      name: tokenDetails.name,
      Symbol: tokenDetails.Symbol,
      supply: ethers.utils.formatEther(tokenDetails.supply.toString()),
      tokenPrice: ethers.utils.formatEther(tokenDetails.tokenPrice.toString()),
      tokenAddr: tokenDetails.tokenAddr,
      polBal: ethBal,
      address: address.toLowerCase(),
      owner: contractOwner.toLowerCase(),
      soldTokens: soldTokens.toNumber(),
    };

    setLoader(false);
    return token;
  } catch (error) {
    console.log(error);
    setLoader(false); // Ensure loader is reset even on failure
  }
};


  const BUY_TOKEN = async (amount: number | string) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (!address) throw new Error("Wallet not connected");

      const contract = await TOKEN_ICO_CONTRACT();
      if (!contract) throw new Error("Contract instance is null");

      const tokenDetails = await contract.getTokenDetails();
      const availableToken = parseFloat(
        ethers.utils.formatEther(tokenDetails.balance.toString())
      );
      if (availableToken <= 1) {
        notifyError("Not enough tokens available for purchase");
        return;
      }

      const pricePerToken = tokenDetails.tokenPrice; // BigNumber already
      const tokenAmount = ethers.BigNumber.from(Math.floor(Number(amount)));
      const totalCost = pricePerToken.mul(tokenAmount); // BigNumber × BigNumber

      const tx = await contract.buyToken(tokenAmount, {
        value: totalCost, // correct value in wei
        gasLimit: ethers.utils.hexlify(5000000),
      });

      await tx.wait();
      await TOKEN_ICO();
      notifySuccess("Transfer completed successfully");
    } catch (error) {
      console.error(error);
      notifyError("Transaction failed");
    } finally {
      setLoader(false);
    }
  };



  const TOKEN_WITHDRAW = async () => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
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
      console.log(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const UPDATE_TOKEN = async (_address: string) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const transaction = await contract.updateToken(_address);
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const UPDATE_TOKEN_PRICE = async (price: number) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(price.toString(), "ether");
        const transaction = await contract.updateTokenSalePrice(payAmount);
        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const DONATE = async (AMOUNT: number) => {
    try {
      setLoader(true);
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(AMOUNT.toString(), "ether");

        const transaction = await contract.transferToOwner(payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const TRANSFER_ETHER = async (transfer: { _receiver: string; _amount: string }) => {
    try {
      setLoader(true);
      const { _receiver, _amount } = transfer;
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await TOKEN_ICO_CONTRACT();
        const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");

        const transaction = await contract.transferEther(_receiver, payAmount, {
          value: payAmount.toString(),
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      notifyError("Error Please try again later");
    } finally {
      setLoader(false);
    }
  };

  const TRANSFER_TOKEN = async (transfer: { _tokenAddress: string; _sendTo: string; _amount: string }) => {
    try {
      setLoader(true);
      const { _tokenAddress, _sendTo, _amount } = transfer;
      const address = await CHECK_WALLET_CONNECTED();
      if (address) {
        const contract = await ERC20_CONTRACT(_tokenAddress);
        const payAmount = ethers.utils.parseUnits(_amount.toString(), "ether");

        const transaction = await contract.transfer(_sendTo, payAmount, {
          gasLimit: ethers.utils.hexlify(8000000),
        });

        await transaction.wait();
        notifySuccess("Transaction Completed Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
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
