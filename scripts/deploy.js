const { ethers } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract . . . ");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.waitForDeployment();

  //ineract with contract

  const currentFavoriteNumber = await simpleStorage.retrieve();
  console.log(`current favorite number is : ${currentFavoriteNumber}`);

  const txResponse = await simpleStorage.store(7);
  await txResponse.wait(1);

  const updatedValue = await simpleStorage.retrieve();
  console.log(`updated favorite number is : ${updatedValue}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
