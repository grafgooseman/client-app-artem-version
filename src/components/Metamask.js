import React, { Component } from 'react';

import ERC20_ABI from "./ERC20_ABI.json";

import { ethers, Wallet } from "ethers";

class Metamask extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componentDidMount() {
		this.connectToMetamask();
	}

	async connectToMetamask() {
		const provider = new ethers.providers.AlchemyProvider("rinkeby", "jr7geQ17FBFpcrTepaQ1kGaNqsXzE9wL");
		const privateKey = "3288b2fce8563381ff2e07a779a032616a674e4cdc11e9ef408c3e2a77c16449";
		const signer = new Wallet(privateKey, provider);
		const hashContract = new ethers.Contract('0x5E6D299Ef573812cb456BAf45c08f35970BCAA46', ERC20_ABI, signer);
		// console.log(await hashContract.hasValue("b7f4239c5495959e23fc1ff80bb95db0d5a14b28ea307e2fd03b3ecf6426b532"));
		let result = await hashContract.hasValue("b7f4239c5495959e23fc1ff80bb95db0d5a14b28ea307e2fd03b3ecf6426b532");
		localStorage.setItem("result", result);
		console.log(result);
	}

	renderMetamask() {
		// if (!this.state.selectedAddress) {
		// 	return (
		// 		<button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal" onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
		// 	)
		// } else {
		// 	return (
		// 		<div>

		// 		</div>
		// 	);
		// }
	}

	render() {
		return (
			<div>
				{this.renderMetamask()}
			</div>
		)
	}
}

export default Metamask;