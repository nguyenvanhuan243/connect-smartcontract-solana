const anchor = require('@project-serum/anchor');
const { Connection, PublicKey, Keypair } = require('@solana/web3.js');
const fs = require('fs');

// Your program's IDL
const idl = {
	"version": "0.1.0",
	"name": "hello_world",
	"instructions": [
		{
			"name": "hello",
			"accounts": [],
			"args": []
		}
	]
};

async function main() {
	// Set up the connection to Devnet
	const connection = new Connection(anchor.web3.clusterApiUrl('devnet'), 'confirmed');

	// Load keypair from JSON file
	const rawKeypair = JSON.parse(fs.readFileSync('bosFCmp5qu8H7ecZF1y6kgY69cCcaZMXVpeFC4oYaZb.json', 'utf-8'));
	const keypair = Keypair.fromSecretKey(new Uint8Array(rawKeypair));
	const wallet = new anchor.Wallet(keypair);
	const provider = new anchor.AnchorProvider(connection, wallet, { commitment: "confirmed" });

	// Your program ID
	const programId = new PublicKey("HL9LBM6VssKsRVAtsZX1YBWheaHJYWYoSVDuzbsuPaDN");
	const program = new anchor.Program(idl, programId, provider);

	// Log wallet info
	console.log("My address:", wallet.publicKey.toString());
	const balance = await connection.getBalance(wallet.publicKey);
	console.log(`My balance: ${balance / anchor.web3.LAMPORTS_PER_SOL} SOL`);

	// Connect your client with smart contract
	try {
		const tx = await program.methods.hello().rpc();

		const txDetails = await connection.getTransaction(
			tx, {
			maxSupportedTransactionVersion: 0,
			commitment: 'confirmed'
		}
		)

		const message = txDetails.meta.logMessages.find(log => log.includes("Hello, World!"))

		console.log("####### message", message)

		// OK thank you
	} catch (error) {
		console.error("Error calling hello:", error);
	}
}

main();
