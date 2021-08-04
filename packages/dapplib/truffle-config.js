require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind concert hunt merry forward source'; 
let testAccounts = [
"0x6fe76fd058d4e09c7fd46af5e5248018bdd5cc4276109c423756394490d2a41a",
"0x85adb0d2644fab5b59fe94c3fcf533d01bcdc61a2898e1043c2534d8e866dd64",
"0x34802293172292cf46a24ba846a00720783beeb523ff72bd2e79f5935899970b",
"0x6ada8d5096ea3ec3d619178b1a63df00aa4efb81b236a05a38cd1df8bc07c037",
"0x594e6e25eee1e2b51731bf41a0d59dc0394811ea9dcc6dfdf7416e1e9b98507f",
"0x479ba39efd7b1e21cd62162ce4d9861e8915f2743a4019f494ef2560be5ebcf7",
"0xb9954b27389bf3b85122bc5a14335e022636db6287fef3fb954428ee1612c581",
"0xdaed3b25f3503b6515c35d7afe2963396e524a1b1cd5d07a5a104442562ff632",
"0xb8fc5d54baf414895421071da8529fc42163eab884337cbee86bba087c91eb3d",
"0x19f27bad12946437ebb2a253761ac93e2a83633f9d343cbfaf719691df30806d"
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

