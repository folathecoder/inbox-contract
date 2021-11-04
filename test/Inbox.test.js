const assert = require("assert");
//"assert" is used to make assertions about tests
const ganache = require("ganache-cli");
const Web3 = require("web3");
//"Web3" should be in uppercase because it is a constructor of the Web3 library used to create instances

//TODO: Create an instance of Web3 constructor
//Web3(<== input the network you wanna access ==>)
const web3 = new Web3(ganache.provider());









/////////// MOCHA TESTING ///////////////////////////

//TODO: Mocha Testing ==> Functions
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
