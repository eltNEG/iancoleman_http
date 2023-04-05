import {generate} from "./entry.js"
import networks from "./networks/index.js"

const req = {
    numWords: 15,
    language: "english",
    pbkdf2Rounds: 2048,
    passphrase: "", // optional password
    networkName: "",
    network: networks[20],
    bipSemantics: "p2wpkh", // p2wpkh,p2wpkh-p2sh,p2wsh,p2wsh-p2sh
    bip: {
        type: "bip44", //// bip44,bip49,bip84,bip32,bip141
        // purporse: 49,
        // coin: 0,
        // account: 0,
        // change: 0,
        // path: "m/44'/0'/0'",
    } 
}
const res = {
    phrase: "", // words
    entropyHex: "",
    bip32RootKey: "",
}

// phraseChanged: function phraseChanged() 288
generate(req, res)
console.log(res)

// setHdCoin\((\d+)\);
