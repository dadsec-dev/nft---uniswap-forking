import { ethers, network } from "hardhat";

async function main() {
  const [owner, holder1, holder2, holder3] = await ethers.getSigners();
  //deploy NFT contract, GETS THE BYTECODE OF MY CONTRACT
    const NFt = await ethers.getContractFactory("ONFT");

     const Onft = await NFt.deploy("ONFT", "NFT");
//   //WAIT FOR CONTRACT TO BE DEPLOYED
      await Onft.deployed();


//   //SAVE THE CONTRACT ADDRESS TO A VARIABLE
       const OnftAddr = Onft.address;

       console.log(`Oracle NFT has been deployed to ${OnftAddr}`);
//   console.log(`reward Token deployed to ${rewardAddress}`);

        const mint1 =  await Onft.balanceOf(owner.address);
        console.log(mint1)

        const mint1After = await Onft.safeMint("QmP3rHQVR1UxRY2gp5x6DVNkNghoEWBCtP3rwjkEs3cAn4");
        console.log(mint1After);

        const NFTbalance =  await Onft.balanceOf(owner.address);
        console.log(NFTbalance)

       // console.log(`Oracle NFT has been deployed to ${OnftAddr}`);

        const mint1After2 = await Onft.safeMint("https://ipfs://QmP3rHQVR1UxRY2gp5x6DVNkNghoEWBCtP3rwjkEs3cAn4");
        console.log(mint1After2);

        
        const NFTbalance2 =  await Onft.balanceOf(owner.address);
        console.log(NFTbalance2)

       const tokenuri = await Onft.tokenURI(1);
       console.log(tokenuri);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



