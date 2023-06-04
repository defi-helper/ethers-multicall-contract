require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    avax: {
      url: process.env.AVAX_MAIN_NODE || "http://127.0.0.1:8545",
      chainId: 43114,
      gasPrice: 25_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: process.env.AVAX_MAIN_DEPLOYER ? [process.env.AVAX_MAIN_DEPLOYER] : [],
    },
    avaxTest: {
      url: process.env.AVAX_TEST_NODE || "http://127.0.0.1:8545",
      chainId: 43113,
      gasPrice: 25_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: process.env.AVAX_TEST_DEPLOYER ? [process.env.AVAX_TEST_DEPLOYER] : [],
    },
    moonbeam: {
      url: process.env.MOONBEAM_NODE || "http://127.0.0.1:8545",
      chainId: 1284,
      gasPrice: 110_000_000_000,
      blockGasLimit: 15_000_000,
      accounts: process.env.MOONBEAM_DEPLOYER ? [process.env.MOONBEAM_DEPLOYER] : [],
    },
    moonriver: {
      url: process.env.MOONRIVER_NODE || "http://127.0.0.1:8545",
      chainId: 1285,
      gasPrice: 2_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: process.env.MOONRIVER_DEPLOYER ? [process.env.MOONRIVER_DEPLOYER] : [],
    },
    optimistic: {
      url: process.env.OPTIMISTIC_NODE || "http://127.0.0.1:8545",
      chainId: 10,
      gasPrice: 1_000_000,
      blockGasLimit: 6_000_000,
      accounts: process.env.OPTIMISTIC_DEPLOYER ? [process.env.OPTIMISTIC_DEPLOYER] : [],
    },
    arbitrum: {
      url: process.env.ARBITRUM_NODE || "http://127.0.0.1:8545",
      chainId: 42161,
      gasPrice: 100_000_000,
      blockGasLimit: 15_000_000,
      accounts: process.env.ARBITRUM_DEPLOYER ? [process.env.ARBITRUM_DEPLOYER] : [],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1285: 0,
      43114: 0,
    },
  },
};
