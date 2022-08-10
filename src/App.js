import 'bootstrap/dist/css/bootstrap.css';
import '@rainbow-me/rainbowkit/dist/index.css';
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import './App.css';
import Metamask from './components/Metamask';
import './custom.scss';
import { SHA256, enc } from 'crypto-js';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { createHash } from "crypto-browserify";
// import { fs } from "file-system";
import fileToHash from "./oc.png";
import successSvg from "./images/Success.svg";
import failSvg from "./images/Fail.svg";

import { Container, Image } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

import { Contract, providers, Signer } from 'ethers';


const { chains, provider } = configureChains(
    [chain.localhost, chain.rinkeby, chain.ropsten],
    [
        alchemyProvider({ apiKey: "jr7geQ17FBFpcrTepaQ1kGaNqsXzE9wL" }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})


// window.addEventListener("load", function () {

// });

//Hashing/////////////////////////////////////////////////////////////////
function generateHashFromPath() {
    console.log(SHA256(fileToHash.toString()).toString(enc.Hex));
}
/////////////////////////////////////////////////////////////////////////

function viewBlockChainData(){
    let signer = new Signer(wagmiClient.web3.currentProvider);
    let contract = new Contract(wagmiClient.contractAddress, wagmiClient.abi, signer);

    console.log(contract);
}


function App() {
    useEffect(() => {
        console.log('OnLoad');
        generateHashFromPath();
    
        let tt = setTimeout(function () {
            console.log(document.getElementById('loading'));
            console.log(document.getElementById('loading'));
            document.getElementById('loading').style.display = "none";
            document.getElementById('secondary').style.display = "block";
        }, 2000);
        // clearTimeout(tt);
    }, []);

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <div className="App">
                    <header className="App-header" >
                        <div className="row">
                            <div className="jumbotron">
                                <h1 className="display-4">Hello, lawyer!</h1>
                                <p className="lead">The DAPP to verify the ownership</p>
                                <hr className="my-4" />
                                <p>We make life easier</p>
                            </div>

                            <Metamask/>

                            {/* <div>
                                <button onClick={() => {
                                    generateHashFromPath();
                                }} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">
                                    Generate Hash
                                </button>
                            </div> */}

                            <div className="container">
                                <div className="row justify-content-around">
                                    <div id="loading" className="col">
                                        <Image src="./807.gif" />
                                    </div>
                                </div>
                                <div className="row justify-content-around">
                                    <div id="secondary" className="col">
                                        <Image src={successSvg} />
                                        <br/><br/>
                                        <p>Document validation successful</p>
                                    </div>
                                </div>
                                {/* <div className="row justify-content-around">
                                    <div className="col">
                                        <Image src="./oc.png" id="secondary" hidden />
                                    </div>
                                </div> */}
                            </div>
                            <div id="footer" className="row">
                                <footer className="bg-light text-center text-lg-start">
                                    <div className="text-center p-3">
                                        <a className="text-dark" href="https://ethtoronto.ca">ETHToronto Competition</a>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </header>
                </div>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;
