require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: ["SUA_CHAVE_PRIVADA_AQUI"],  // Use .env para segurança
      chainId: 84532
    },
    base: {
      url: "https://developer-access-mainnet.base.org",
      accounts: ["SUA_CHAVE_PRIVADA_AQUI"],
      chainId: 8453
    }
  }
};
