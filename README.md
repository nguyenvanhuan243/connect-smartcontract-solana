# Solana Hello World Client

A simple client application to interact with a Solana Hello World program.

## Prerequisites

- Node.js (v14 or higher)
- Yarn (Package Manager)
- A Solana wallet keypair JSON file

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Initialize yarn and install dependencies:
```bash
yarn init -y
yarn add @project-serum/anchor @solana/web3.js
```

3. Place your wallet keypair file in the project root:
- Copy your wallet keypair JSON file to the project directory
- Make sure it's named `bosFCmp5qu8H7ecZF1y6kgY69cCcaZMXVpeFC4oYaZb.json`

## Configuration

The program is configured to connect to Solana's devnet. Make sure your wallet has some SOL for transactions. You can get devnet SOL using:

```bash
solana airdrop 1 <YOUR_WALLET_ADDRESS> --url devnet
```

## Running the Application

Execute the program with:

```bash
yarn node index.js
```

## Expected Output

The program will:
1. Display your wallet address
2. Show your current SOL balance
3. Execute the hello instruction
4. Display "Hello, World!" message from the program

## Program Details

- Program ID: `HL9LBM6VssKsRVAtsZX1YBWheaHJYWYoSVDuzbsuPaDN`
- Network: Solana Devnet 