//TODO: STEP 1 ==> Read the content of the file to be compiled from the hard drive

const path = require("path");
//This will help build a path from the current "compile.js" file (cross-platform compatibility is achieved, meaning it will enable this code to run on any OS, windows, Linux, etc.)

const fs = require("fs");
//This is the "file system" module

const solc = require("solc");
const { compile } = require("solc");
//This is the module

//TODO: STEP 2 ==> Create a path to the "Inbox.sol" file
//"contracts" => Folder name
//"Inbox.sol" => File name

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");

//TODO: STEP 3 ==> Read the content of the file
//"utf8" => This is the type of encoding used
const source = fs.readFileSync(inboxPath, "utf8");

//TODO: STEP 4 ==> Write the compile statement & export it
// Number of contracts to be compiled is 1
//* ==> Since we are only compiling one contract, let's target it
module.exports = solc.compile(source, 1).contracts[":Inbox"];

//* ==> For multiple contracts
// module.exports = solc.compile(source, 16);

// Command to run the compiler in the terminal => node compile.js
