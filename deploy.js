const HDWalletProvider = require("@truffle/hdwallet-provider"); //used to unlock accounts
const Web3 = require("web3"); //Constructor
const { interface, btyecode } = require("./compile"); //Import from the compiler

//TODO: Initiate the provider by unlocking the Ropsten account
//Mnemonic Phrase
//Infura API endpoints to connect to the hosted node in the Ropsten Network
const provider = new HDWalletProvider(
  "device estate hawk horn chapter silent click give ten turtle tomato inside",
  "https://ropsten.infura.io/v3/1bbbe5008bce44a3bda2f7af0af8dafb"
);

//TODO: Create web3 instance and pass in the provider
const web3 = new Web3(provider);

//TODO: Deploy the contract
const deploy = async () => {
  //* Get list of all accounts that has been unlocked
  const accounts = await web3.eth.getAccounts();

  //* Use one of those accounts to deploy the contract
  //line 1 => Teaches web3 about what methods an inbox contract has
  //line 2 => Tells web3 that we want to deploy a new copy of this contract
  //line 3 => Instructs web3 to send out a transaction that creates this contract
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({ from: accounts[0], gas: "1000000" });
};

deploy();

//node deploy.js