import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { providers } from "ethers";

async function main() {
     

        const ROUTER = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
        const UNI = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
        const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
        const person = "0xd68B6e9fC4eab0f041C5D2bF1EE7c4fD87d4e99f";

        const receipient = "0xCBD6832Ebc203e49E2B771897067fce3c58575ac"
        console.log(receipient);

        const amountToSwapA = await ethers.utils.parseEther("100");
        const amountToSwapB = await ethers.utils.parseEther("100");

        const DEX = await ethers.getContractAt("IUniswap", ROUTER);

        //impersonate
        const helpers = require("@nomicfoundation/hardhat-network-helpers");
        await helpers.impersonateAccount(person);
        const impersonatedSigner = await ethers.getSigner(person);

        const tokenA = await ethers.getContractAt("IToken", UNI);
        const tokenB = await ethers.getContractAt("IToken", DAI);

        const holderBalance = await tokenB.balanceOf(person);
        console.log(`BUSD balance before ${holderBalance}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});