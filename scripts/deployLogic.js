// 导入 ethers.js 库
const { ethers } = require("hardhat");

async function main() {
  // 获取部署者账户
  // const [deployer] = await ethers.getSigners();

  // 获取合约工厂
  const GameERC20Token = await ethers.getContractFactory("GameERC20Token");

  // 部署合约并传递构造函数参数
  const gameERC20Token = await GameERC20Token.deploy();

  // 等待合约部署完成
  await gameERC20Token.waitForDeployment();


  console.log("GameERC20Token deployed to:", await gameERC20Token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
