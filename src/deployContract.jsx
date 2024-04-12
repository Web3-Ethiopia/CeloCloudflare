import { ethers } from "ethers";
import data from "../artifacts/contracts/WEB3ETH.sol/WEB3ETH.json";

export const deployContract = async ({ signerInitial }) => {
  const NewContract = new ethers.ContractFactory(
    data.abi,
    data.bytecode,
    signerInitial
  );

  const factoryContract = await NewContract.deploy(signerInitial.address).catch(
    (e) => console.log(e)
  );
};
