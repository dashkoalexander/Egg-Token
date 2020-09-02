const HDWalletProvider = require("truffle-hdwallet-provider");

const fs = require("fs");
const infuraKey = fs.readFileSync("infura-api-key.txt").toString().trim();
const testnetPrivateKey = fs
  .readFileSync("private-key-testnet.txt")
  .toString()
  .trim();
const mainnetPrivateKey = fs
  .readFileSync("private-key-mainnet.txt")
  .toString()
  .trim();

module.exports = {
  networks: {
    ropsten: {
      provider: () => {
        return new HDWalletProvider(
          testnetPrivateKey,
          `https://ropsten.infura.io/v3/${infuraKey}`,
          0,
          6
        );
      },
      network_id: 3,
      gas: 8000000,
      gasPrice: 15000000000,
      confirmations: 3,
      timeoutBlocks: 500,
      skipDryRun: true,
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          testnetPrivateKey,
          `https://rinkeby.infura.io/v3/${infuraKey}`,
          0,
          6
        );
      },
      network_id: 4,
      gas: 8000000,
      gasPrice: 271000000000,
      confirmations: 3,
      timeoutBlocks: 500,
      skipDryRun: true,
    },

    mainnet: {
      provider: () => {
        return new HDWalletProvider(
          mainnetPrivateKey,
          `https://mainnet.infura.io/v3/${infuraKey}`
        );
      },
      network_id: 1,
      gas: 4000000,
      gasPrice: 15000000000,
      confirmations: 3,
      timeoutBlocks: 500,
      skipDryRun: true,
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.7.0",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};
