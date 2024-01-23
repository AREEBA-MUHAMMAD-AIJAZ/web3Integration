
export const Address = "0x8EB09da57E2F6a7d5FBa3e799cC09DACDFadA9D4"
export const Abi = [
  {
    inputs: [
      { internalType: "string", name: "name_", type: "string" },
      { internalType: "uint256", name: "age_", type: "uint256" },
      { internalType: "address", name: "myAddress_", type: "address" },
    ],
    name: "Set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },

  {
    inputs: [],
    name: "get",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "address", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  
];
 