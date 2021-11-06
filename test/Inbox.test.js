const assert = require("assert");
const ganache = require("ganache-cli"); //Local Test Network
const Web3 = require("web3"); //Constructor
const web3 = new Web3(ganache.provider()); //Instance
const { interface, bytecode } = require("../compile"); //Import from compiler
const INITIAL_STRING = "Hi there!";

//TODO: SMART CONTRACT TEST

//STEP 1 => Mocha Starts (npm run test)

//STEP 2 => Deploy a new contract (beforeEach)
let accounts;
let inbox;

beforeEach(async () => {
  //* Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //* Use one of those accounts to deploy the contract
  //line 1 => Teaches web3 about what methods an inbox contract has
  //line 2 => Tells web3 that we want to deploy a new copy of this contract
  //line 3 => Instructs web3 to send out a transaction that creates this contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

//STEP 3 => Manipulate the contract (it)
//STEP 4 => Make an assertion about the contract (it)

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });
  
  //use a call method when attempting to extract information from the contract (gas fee is not paid)
  it("has an initial message", async () => {
    const message = await inbox.methods.message().call(); //calling a function
    assert.equal(message, INITIAL_STRING);
  });

  //use a send method with account address when attempting to modify a contract (gas fee is paid)
  it("updates the message", async () => {
    const newMessage = "Folarin is a blockchain developer";
    await inbox.methods.setMessage(newMessage).send({ from: accounts[0] }); //modifying a function
    const message = await inbox.methods.message().call();
    assert.equal(message, newMessage);
  });
});

/////////// MOCHA TESTING ///////////////////////////

//!: Mocha Testing ==> Functions
//it => used to run a test and make an assertion
//describe => groups together related "it" function <Organisational purpose>
//beforeEach => execute some general setup code

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

//TODO: Create a beforeEach funtion that runs before each "it" function. This is generally used to avoid code repetition

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe("Car", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it("can drive", () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });

//TODO: To run Mocha, you need to add sript to package.json file, then run "npm run test"
