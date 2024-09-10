const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const { interface, bytecode } = require('./compile');
require('dotenv').config();

const provider = new HDWalletProvider(
    process.env.MNEMONIC_PHRASE,
    process.env.INFURA_HOLESKY_API_KEY
);
const web3 = new Web3(provider);

const deploy = async () => {
    try {
        const accounts = await web3.eth.getAccounts();

        console.log('account', accounts[0]);
        
        const result = await new web3.eth.Contract(JSON.parse(interface))
            .deploy({ data: bytecode, arguments: ['Hello again!'] })
            .send({ gas: '1000000', from: accounts[0] });
    
        console.log('contract', result);
        provider.engine.stop();
    } catch (e) {
        console.log(e)
    }
};
deploy();