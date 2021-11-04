// deploy code will go here
const interface = [
  {
    constant: false,
    inputs: [{ name: "newMessage", type: "string" }],
    name: "setMessage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "message",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "initialMessage", type: "string" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];
