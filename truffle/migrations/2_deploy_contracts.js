const EggToken = artifacts.require("EggToken");

const TOKEN_NAME = "EGG";
const TOKEN_SYMBOL = "EGG";

const DECIMALS = "000000000000000000";
const TOTAL_SUPPLY = "6039065000" + DECIMALS;

module.exports = async (deployer) => {
  return deployer
    .deploy(EggToken, TOKEN_NAME, TOKEN_SYMBOL, TOTAL_SUPPLY)
    .then((EggTokenInstance) => {
      console.log("***** DEPLOYED ***** EggToken at address: ", EggTokenInstance.address);
    });
};
