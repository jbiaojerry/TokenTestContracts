const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // 编码初始化调用数据
    // const AbiCoder = new ethers.AbiCoder()
    const abiCoder = ethers.utils.defaultAbiCoder
    const initializationCalldata = abiCoder.encode(
        ["string", "string", "uint256", "address"],
        ["Archtoken", "BART", "1000000000000000000000000000", deployer.address]
    );

    console.log("Initialization calldata params:", initializationCalldata);

    // GameErc20Token合约地址
    const tokenddress = "0x0A202A0d5e1C9218D73876D16aE6e6CfF775b38e";
    // 部署 GameErc20Proxy 合约并传入初始化调用数据
    const GameErc20ProxyFactory = await ethers.getContractFactory("GameErc20Proxy");
    const gameErc20Proxy = await GameErc20ProxyFactory.deploy(tokenddress, initializationCalldata);
    await gameErc20Proxy.waitForDeployment();
    console.log("GameErc20Proxy deployed to:", await gameErc20Proxy.getAddress());

}

// 确保以异步方式运行 main 函数
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
