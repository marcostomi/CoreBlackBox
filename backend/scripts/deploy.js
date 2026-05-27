import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
dotenv.config();

// Carrega o artefato usando require, pois é um arquivo JSON
const artifact = require("../artifacts/contracts/CoreBlackBox.sol/CoreBlackBox.json");

async function main() {
  console.log("🚀 Iniciando o deploy...");

  const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log(`👤 Deploy feito por: ${wallet.address}`);

  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
  const contract = await factory.deploy();

  await contract.waitForDeployment();
  console.log("🎉 Contrato implantado em:", await contract.getAddress());
}

main().catch(console.error);