require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY ="xxxxxx"

module.exports = {
  solidity: "0.8.4",
  networks: {
    tbsc: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [PRIVATE_KEY]
    },
    bscmainnet: {
      url: `https://bsc.nodereal.io`,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    // BSC KEY
    apiKey: "xxxxxxxxxxxx",
    
  },
  sourcify: {
    enabled: true
  }
};