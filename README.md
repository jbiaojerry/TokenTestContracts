# TokenTestContracts
部署logic合约：
npx hardhat run scripts/deployLogic.js --network tbsc

验证logic合约:
npx hardhat verify  0x0A202A0d5e1C9218D73876D16aE6e6CfF775b38e --network tbsc

部署proxy合约：
npx hardhat run scripts/deployProxy.js --network tbsc

验证logic合约:
npx hardhat verify  0x4c4ba94aCC3FB350fDbcE2eDAc951155Fc0d7833 --network tbsc --constructor-args scripts/arg.js