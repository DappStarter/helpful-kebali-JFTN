require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth pulse proof gesture globe equal giggle'; 
let testAccounts = [
"0xf1e4f1721038dd338ebc5b1f3e193d000ba8d1bebf14f9b22c77249628fcbd5d",
"0x93870d60e9add4907634ee59be34acdf7ea52048b885f54fabeaa26f207e29d0",
"0x4fe5a96b455bffd461727d928b0d4c7ab45759627a00f33015230eecc9e649c7",
"0xf50dad786dd317171c591666f46c34e9ec735dc6ee2204b5da9e2d5e2259c77b",
"0xae350ae13d25f009a94917ee8a7f7838b7939976a168a7a7966b025d576fb389",
"0xd41641e2ca5b3bd8aa8b689ebfbe56bb7fcb4edaebb00ec1431257d0b60f4d04",
"0x94264aa223dac129256433c3e0b7b357628d1831aae28bec108b4a36b14a688d",
"0x7a44229e13496097e9add6292d3a244494e36fa61d04b248c436077a386c23a1",
"0x4216c19c80035fcd19960e4c4ffe276e3417073b6e59a124c5bf81c347abe8da",
"0x177b22b82fb4bded4ebd5ee01a9577d7606cb5d75dea344b96c2c7f77cb346dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

