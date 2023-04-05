import crypto from 'crypto'
import Mnemonic from './lib/jsbip39.js';
import wordLists from './wordLists/index.js';
import libs from './lib/bip39-libs.cjs'


function uint8ArrayToHex(a) {
    var s = ""
    for (var i=0; i<a.length; i++) {
        var h = a[i].toString(16);
        while (h.length < 2) {
            h = "0" + h;
        }
        s = s + h;
    }
    return s;
}

function phraseToWordArray(phrase) {
    var words = phrase.split(/\s/g);
    var noBlanks = [];
    for (var i=0; i<words.length; i++) {
        var word = words[i];
        if (word.length > 0) {
            noBlanks.push(word);
        }
    }
    return noBlanks;
}

function findPhraseErrors(req, _res, phrase) {
    const language = req.language
    // Preprocess the words
    const mnemonic = new Mnemonic(language, req.pbkdf2Rounds)
    phrase = mnemonic.normalizeString(phrase);
    var words = phraseToWordArray(phrase);
    // Detect blank phrase
    if (words.length == 0) {
        return "Blank mnemonic";
    }
    // Check each word
    for (var i=0; i<words.length; i++) {
        var word = words[i];
        if (wordLists[language].indexOf(word) == -1) {
            console.log("Finding closest match to " + word);
            var nearestWord = findNearestWord(word, language);
            return word + " not in wordlist, did you mean " + nearestWord + "?";
        }
    }
    // Check the words are valid
    var properPhrase = wordArrayToPhrase(words, language);
    var isValid = mnemonic.check(properPhrase);
    if (!isValid) {
        return "Invalid mnemonic";
    }
    return false;
}

function wordArrayToPhrase(words, language) {
    var phrase = words.join(" ");
    if (language == "japanese") {
        phrase = words.join("\u3000");
    }
    return phrase;
}

function findNearestWord(word, language) {
    var words = wordLists[language];
    var minDistance = 99;
    var closestWord = words[0];
    for (var i=0; i<words.length; i++) {
        var comparedTo = words[i];
        if (comparedTo.indexOf(word) == 0) {
            return comparedTo;
        }
        var distance = libs.levenshtein.get(word, comparedTo);
        if (distance < minDistance) {
            closestWord = comparedTo;
            minDistance = distance;
        }
    }
    return closestWord;
}

function generateRandomPhrase(req, res) {
    // get the amount of entropy to use
    const numWords = parseInt(req.numWords);
    const strength = numWords / 3 * 32;
    const buffer = new Uint8Array(strength / 8);
    // create secure entropy
    const data = crypto.getRandomValues(buffer);
    // show the words
    const mnemonic = new Mnemonic(req.language, req.pbkdf2Rounds)
    const words = mnemonic.toMnemonic(data);
    res.phrase = words
    // show the entropy
    const entropyHex = uint8ArrayToHex(data);
    res.entropyHex = entropyHex
    return res;
}

function isGRS(networkName) {
    return networkName == "GRS - Groestlcoin" || networkName == "GRS - Groestlcoin Testnet";
}

function calcBip32RootKeyFromSeed(phrase, passphrase, networkName, mnemonic) {
    const seed = mnemonic.toSeed(phrase, passphrase);
    const _network = libs.bitcoin.networks.bitcoin;
    console.log({_network: libs.bitcoin.networks.asiacoin})
    let bip32RootKey = libs.bitcoin.HDNode.fromSeedHex(seed, _network);
    if(isGRS(networkName)){
        bip32RootKey = libs.groestlcoinjs.HDNode.fromSeedHex(seed, _network);
    }
    return bip32RootKey
}

function networkHasSegwit(network,bipSemantics) {
    let n = network;
    if ("baseNetwork" in network) {
        n = libs.bitcoin.networks[network.baseNetwork];
    }
    // check if only p2wpkh params are required
    if (bipSemantics === "p2wpkh") {
        return "p2wpkh" in n;
    }
    // check if only p2wpkh-in-p2sh params are required
    else if (bipSemantics === "p2wpkhInP2sh") {
        return "p2wpkhInP2sh" in n;
    }
    // require both if it's unclear which params are required
    return "p2wpkh" in n && "p2wpkhInP2sh" in n;
}

function parseIntNoNaN(val, defaultVal) {
    var v = parseInt(val);
    if (isNaN(v)) {
        return defaultVal;
    }
    return v;
}

function getDerivationPath(bip, res) {
    const {
        type: bipTab,
        purpose: _purpose,
        coin: _coin,
        account: _account,
        change: _change,
        path: _path,
    } = bip;
    res.derivationPath = _path
    if (bipTab === "bip44") {
        var purpose = parseIntNoNaN(_purpose, 44);
        var coin = parseIntNoNaN(_coin, 0);
        var account = parseIntNoNaN(_account, 0);
        var change = parseIntNoNaN(_change, 0);
        var path = "m/";
        path += purpose + "'/";
        path += coin + "'/";
        path += account + "'/";
        path += change;
        res.derivationPath = path
        var derivationPath = path;
        console.log("Using derivation path from BIP44 tab: " + derivationPath);
        return derivationPath;
    }
    else if (bipTab === "bip49") {
        var purpose = parseIntNoNaN(_purpose, 49);
        var coin = parseIntNoNaN(_coin, 0);
        var account = parseIntNoNaN(_account, 0);
        var change = parseIntNoNaN(_change, 0);
        var path = "m/";
        path += purpose + "'/";
        path += coin + "'/";
        path += account + "'/";
        path += change;
        res.derivationPath = path
        var derivationPath = path;
        console.log("Using derivation path from BIP49 tab: " + derivationPath);
        return derivationPath;
    }
    else if (bipTab === "bip84") {
        var purpose = parseIntNoNaN(_purpose, 84);
        var coin = parseIntNoNaN(_coin, 0);
        var account = parseIntNoNaN(_account, 0);
        var change = parseIntNoNaN(_change, 0);
        var path = "m/";
        path += purpose + "'/";
        path += coin + "'/";
        path += account + "'/";
        path += change;
        res.derivationPath = path
        var derivationPath = path;
        console.log("Using derivation path from BIP84 tab: " + derivationPath);
        return derivationPath;
    }
    else if (bipTab === "bip32") {
        var derivationPath = _path;
        console.log("Using derivation path from BIP32 tab: " + derivationPath);
        return derivationPath;
    }
    else if (bipTab === "bip141") {
        var derivationPath = _path;
        console.log("Using derivation path from BIP141 tab: " + derivationPath);
        return derivationPath;
    }
    else {
        console.log("Unknown derivation path");
    }
}

// function findDerivationPathErrors(path) {
//     // TODO is not perfect but is better than nothing
//     // Inspired by
//     // https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#test-vectors
//     // and
//     // https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki#extended-keys
//     var maxDepth = 255; // TODO verify this!!
//     var maxIndexValue = Math.pow(2, 31); // TODO verify this!!
//     if (path[0] != "m") {
//         return "First character must be 'm'";
//     }
//     if (path.length > 1) {
//         if (path[1] != "/") {
//             return "Separator must be '/'";
//         }
//         var indexes = path.split("/");
//         if (indexes.length > maxDepth) {
//             return "Derivation depth is " + indexes.length + ", must be less than " + maxDepth;
//         }
//         for (var depth = 1; depth<indexes.length; depth++) {
//             var index = indexes[depth];
//             var invalidChars = index.replace(/^[0-9]+'?$/g, "")
//             if (invalidChars.length > 0) {
//                 return "Invalid characters " + invalidChars + " found at depth " + depth;
//             }
//             var indexValue = parseInt(index.replace("'", ""));
//             if (isNaN(depth)) {
//                 return "Invalid number at depth " + depth;
//             }
//             if (indexValue > maxIndexValue) {
//                 return "Value of " + indexValue + " at depth " + depth + " must be less than " + maxIndexValue;
//             }
//         }
//     }
//     // Check root key exists or else derivation path is useless!
//     if (!bip32RootKey) {
//         return "No root key";
//     }
//     // Check no hardened derivation path when using xpub keys
//     var hardenedPath = path.indexOf("'") > -1;
//     var hardenedAddresses = bip32TabSelected() && DOM.hardenedAddresses.prop("checked");
//     var hardened = hardenedPath || hardenedAddresses;
//     var isXpubkey = bip32RootKey.isNeutered();
//     if (hardened && isXpubkey) {
//         return "Hardened derivation path is invalid with xpub key";
//     }
//     return false;
// }

function calcBip32ExtendedKey(bip32RootKey, path) {
    // Check there's a root key to derive from
    if (!bip32RootKey) {
        return bip32RootKey;
    }
    var extendedKey = bip32RootKey;
    // Derive the key from the path
    var pathBits = path.split("/");
    for (var i=0; i<pathBits.length; i++) {
        var bit = pathBits[i];
        var index = parseInt(bit);
        if (isNaN(index)) {
            continue;
        }
        var hardened = bit[bit.length-1] == "'";
        var isPriv = !(extendedKey.isNeutered());
        var invalidDerivationPath = hardened && !isPriv;
        if (invalidDerivationPath) {
            extendedKey = null;
        }
        else if (hardened) {
            extendedKey = extendedKey.deriveHardened(index);
        }
        else {
            extendedKey = extendedKey.derive(index);
        }
    }
    return extendedKey;
}

function TableRow(index, isLast) {

    var self = this;
    this.shouldGenerate = true;
    var useHardenedAddresses = DOM.hardenedAddresses.prop("checked");
    var useBip38 = DOM.useBip38.prop("checked");
    var bip38password = DOM.bip38Password.val();
    var isSegwit = segwitSelected();
    var segwitAvailable = networkHasSegwit();
    var isP2wpkh = p2wpkhSelected();
    var isP2wpkhInP2sh = p2wpkhInP2shSelected();
    var isP2wsh = p2wshSelected();
    var isP2wshInP2sh = p2wshInP2shSelected();

    function init() {
        calculateValues();
    }

    function calculateValues() {
        setTimeout(function() {
            if (!self.shouldGenerate) {
                return;
            }
            // derive HDkey for this row of the table
            var key = "NA";
            if (useHardenedAddresses) {
                key = bip32ExtendedKey.deriveHardened(index);
            }
            else {
                key = bip32ExtendedKey.derive(index);
            }
            // bip38 requires uncompressed keys
            // see https://github.com/iancoleman/bip39/issues/140#issuecomment-352164035
            var keyPair = key.keyPair;
            var useUncompressed = useBip38;
            if (useUncompressed) {
                keyPair = new libs.bitcoin.ECPair(keyPair.d, null, { network: network, compressed: false });
                if(isGRS())
                    keyPair = new libs.groestlcoinjs.ECPair(keyPair.d, null, { network: network, compressed: false });

            }
            // get address
            var address = keyPair.getAddress().toString();
            // get privkey
            var hasPrivkey = !key.isNeutered();
            var privkey = "NA";
            if (hasPrivkey) {
                privkey = keyPair.toWIF();
                // BIP38 encode private key if required
                if (useBip38) {
                    if(isGRS())
                        privkey = libs.groestlcoinjsBip38.encrypt(keyPair.d.toBuffer(), false, bip38password, function(p) {
                            console.log("Progressed " + p.percent.toFixed(1) + "% for index " + index);
                        }, null, networks[DOM.network.val()].name.includes("Testnet"));
                    else
                        privkey = libs.bip38.encrypt(keyPair.d.toBuffer(), false, bip38password, function(p) {
                            console.log("Progressed " + p.percent.toFixed(1) + "% for index " + index);
                        });
                }
            }
            // get pubkey
            var pubkey = keyPair.getPublicKeyBuffer().toString('hex');
            var indexText = getDerivationPath() + "/" + index;
            if (useHardenedAddresses) {
                indexText = indexText + "'";
            }
            // Ethereum values are different
            if (networkIsEthereum()) {
                var pubkeyBuffer = keyPair.getPublicKeyBuffer();
                var ethPubkey = libs.ethUtil.importPublic(pubkeyBuffer);
                var addressBuffer = libs.ethUtil.publicToAddress(ethPubkey);
                var hexAddress = addressBuffer.toString('hex');
                var checksumAddress = libs.ethUtil.toChecksumAddress(hexAddress);
                address = libs.ethUtil.addHexPrefix(checksumAddress);
                pubkey = libs.ethUtil.addHexPrefix(pubkey);
                if (hasPrivkey) {
                    privkey = libs.ethUtil.bufferToHex(keyPair.d.toBuffer(32));
                }
            }
            //TRX is different
            if (networks[DOM.network.val()].name == "TRX - Tron") {
                keyPair = new libs.bitcoin.ECPair(keyPair.d, null, { network: network, compressed: false });
                var pubkeyBuffer = keyPair.getPublicKeyBuffer();
                var ethPubkey = libs.ethUtil.importPublic(pubkeyBuffer);
                var addressBuffer = libs.ethUtil.publicToAddress(ethPubkey);
                address = libs.bitcoin.address.toBase58Check(addressBuffer, 0x41);
                if (hasPrivkey) {
                    privkey = keyPair.d.toBuffer().toString('hex');
                }
            }

            // RSK values are different
            if (networkIsRsk()) {
                var pubkeyBuffer = keyPair.getPublicKeyBuffer();
                var ethPubkey = libs.ethUtil.importPublic(pubkeyBuffer);
                var addressBuffer = libs.ethUtil.publicToAddress(ethPubkey);
                var hexAddress = addressBuffer.toString('hex');
                // Use chainId based on selected network
                // Ref: https://developers.rsk.co/rsk/architecture/account-based/#chainid
                var chainId;
                var rskNetworkName = networks[DOM.network.val()].name;
                switch (rskNetworkName) {
                    case "R-BTC - RSK":
                        chainId = 30;
                        break;
                    case "tR-BTC - RSK Testnet":
                        chainId = 31;
                        break;
                    default:
                        chainId = null;
                }
                var checksumAddress = toChecksumAddressForRsk(hexAddress, chainId);
                address = libs.ethUtil.addHexPrefix(checksumAddress);
                pubkey = libs.ethUtil.addHexPrefix(pubkey);
                if (hasPrivkey) {
                    privkey = libs.ethUtil.bufferToHex(keyPair.d.toBuffer());
                }
            }

            // Handshake values are different
            if (networks[DOM.network.val()].name == "HNS - Handshake") {
                var ring = libs.handshake.KeyRing.fromPublic(keyPair.getPublicKeyBuffer())
                address = ring.getAddress().toString();
            }

            // Stellar is different
            if (networks[DOM.network.val()].name == "XLM - Stellar") {
                var purpose = parseIntNoNaN(DOM.bip44purpose.val(), 44);
                var coin = parseIntNoNaN(DOM.bip44coin.val(), 0);
                var path = "m/";
                    path += purpose + "'/";
                    path += coin + "'/" + index + "'";
                var keypair = libs.stellarUtil.getKeypair(path, seed);
                indexText = path;
                privkey = keypair.secret();
                pubkey = address = keypair.publicKey();
            }

            // Nano currency
            if (networks[DOM.network.val()].name == "NANO - Nano") {
                var nanoKeypair = libs.nanoUtil.getKeypair(index, seed);
                privkey = nanoKeypair.privKey;
                pubkey = nanoKeypair.pubKey;
                address = nanoKeypair.address;
            }

            if ((networks[DOM.network.val()].name == "NAS - Nebulas")) {
                var privKeyBuffer = keyPair.d.toBuffer(32);
                var nebulasAccount = libs.nebulas.Account.NewAccount();
                nebulasAccount.setPrivateKey(privKeyBuffer);
                address = nebulasAccount.getAddressString();
                privkey = nebulasAccount.getPrivateKeyString();
                pubkey = nebulasAccount.getPublicKeyString();
            }
            // Ripple values are different
            if (networks[DOM.network.val()].name == "XRP - Ripple") {
                privkey = convertRipplePriv(privkey);
                address = convertRippleAdrr(address);
            }
            // Jingtum values are different
            if (networks[DOM.network.val()].name == "SWTC - Jingtum") {
                privkey = convertJingtumPriv(privkey);
                address = convertJingtumAdrr(address);
            }
            // CasinoCoin values are different
            if (networks[DOM.network.val()].name == "CSC - CasinoCoin") {
                privkey = convertCasinoCoinPriv(privkey);
                address = convertCasinoCoinAdrr(address);
            }
            // Bitcoin Cash address format may vary
            if (networks[DOM.network.val()].name == "BCH - Bitcoin Cash") {
                var bchAddrType = DOM.bitcoinCashAddressType.filter(":checked").val();
                if (bchAddrType == "cashaddr") {
                    address = libs.bchaddr.toCashAddress(address);
                }
                else if (bchAddrType == "bitpay") {
                    address = libs.bchaddr.toBitpayAddress(address);
                }
            }
             // Bitcoin Cash address format may vary
             if (networks[DOM.network.val()].name == "SLP - Simple Ledger Protocol") {
                 var bchAddrType = DOM.bitcoinCashAddressType.filter(":checked").val();
                 if (bchAddrType == "cashaddr") {
                     address = libs.bchaddrSlp.toSlpAddress(address);
                 }
             }

            // ZooBC address format may vary
            if (networks[DOM.network.val()].name == "ZBC - ZooBlockchain") {

                var purpose = parseIntNoNaN(DOM.bip44purpose.val(), 44);
                var coin = parseIntNoNaN(DOM.bip44coin.val(), 0);
                var path = "m/";
                    path += purpose + "'/";
                    path += coin + "'/" + index + "'";
                var result = libs.zoobcUtil.getKeypair(path, seed);

                let publicKey = result.pubKey.slice(1, 33);
                let privateKey = result.key;

                privkey = privateKey.toString('hex');
                pubkey = publicKey.toString('hex');

                indexText = path;
                address = libs.zoobcUtil.getZBCAddress(publicKey, 'ZBC');
            }

            // Segwit addresses are different
            if (isSegwit) {
                if (!segwitAvailable) {
                    return;
                }
                if (isP2wpkh) {
                    var keyhash = libs.bitcoin.crypto.hash160(key.getPublicKeyBuffer());
                    var scriptpubkey = libs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
                    address = libs.bitcoin.address.fromOutputScript(scriptpubkey, network)
                }
                else if (isP2wpkhInP2sh) {
                    var keyhash = libs.bitcoin.crypto.hash160(key.getPublicKeyBuffer());
                    var scriptsig = libs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash);
                    var addressbytes = libs.bitcoin.crypto.hash160(scriptsig);
                    var scriptpubkey = libs.bitcoin.script.scriptHash.output.encode(addressbytes);
                    address = libs.bitcoin.address.fromOutputScript(scriptpubkey, network)
                }
                else if (isP2wsh) {
                    // https://github.com/libs.bitcoinjs-lib/blob/v3.3.2/test/integration/addresses.js#L71
                    // This is a 1-of-1
                    var witnessScript = libs.bitcoin.script.multisig.output.encode(1, [key.getPublicKeyBuffer()]);
                    var scriptPubKey = libs.bitcoin.script.witnessScriptHash.output.encode(libs.bitcoin.crypto.sha256(witnessScript));
                    address = libs.bitcoin.address.fromOutputScript(scriptPubKey, network);
                }
                else if (isP2wshInP2sh) {
                    // https://github.com/libs.bitcoinjs-lib/blob/v3.3.2/test/integration/transactions.js#L183
                    // This is a 1-of-1
                    var witnessScript = libs.bitcoin.script.multisig.output.encode(1, [key.getPublicKeyBuffer()]);
                    var redeemScript = libs.bitcoin.script.witnessScriptHash.output.encode(libs.bitcoin.crypto.sha256(witnessScript));
                    var scriptPubKey = libs.bitcoin.script.scriptHash.output.encode(libs.bitcoin.crypto.hash160(redeemScript));
                    address = libs.bitcoin.address.fromOutputScript(scriptPubKey, network)
                }
            }

            if ((networks[DOM.network.val()].name == "CRW - Crown")) {
                address = libs.bitcoin.networks.crown.toNewAddress(address);
            }

          if (networks[DOM.network.val()].name == "EOS - EOSIO") {
                address = ""
                pubkey = EOSbufferToPublic(keyPair.getPublicKeyBuffer());
                privkey = EOSbufferToPrivate(keyPair.d.toBuffer(32));
            }

            if (networks[DOM.network.val()].name == "FIO - Foundation for Interwallet Operability") {
                address = ""
                pubkey = FIObufferToPublic(keyPair.getPublicKeyBuffer());
                privkey = FIObufferToPrivate(keyPair.d.toBuffer(32));
            }

            if (networks[DOM.network.val()].name == "ATOM - Cosmos Hub") {
                const hrp = "cosmos";
                address = CosmosBufferToAddress(keyPair.getPublicKeyBuffer(), hrp);
                pubkey = CosmosBufferToPublic(keyPair.getPublicKeyBuffer(), hrp);
                privkey = keyPair.d.toBuffer().toString("base64");
            }

            if (networks[DOM.network.val()].name == "RUNE - THORChain") {
                 const hrp = "thor";
                 address = CosmosBufferToAddress(keyPair.getPublicKeyBuffer(), hrp);
                 pubkey = keyPair.getPublicKeyBuffer().toString("hex");
                 privkey = keyPair.d.toBuffer().toString("hex");
            }

            if (networks[DOM.network.val()].name == "XWC - Whitecoin"){
                address = XWCbufferToAddress(keyPair.getPublicKeyBuffer());
                pubkey = XWCbufferToPublic(keyPair.getPublicKeyBuffer());
                privkey = XWCbufferToPrivate(keyPair.d.toBuffer(32));
            }

            if (networks[DOM.network.val()].name == "LUNA - Terra") {
                const hrp = "terra";
                address = CosmosBufferToAddress(keyPair.getPublicKeyBuffer(), hrp);
                pubkey = keyPair.getPublicKeyBuffer().toString("hex");
                privkey = keyPair.d.toBuffer().toString("hex");
            }

            if (networks[DOM.network.val()].name == "IOV - Starname") {
              const hrp = "star";
              address = CosmosBufferToAddress(keyPair.getPublicKeyBuffer(), hrp);
              pubkey = CosmosBufferToPublic(keyPair.getPublicKeyBuffer(), hrp);
              privkey = keyPair.d.toBuffer().toString("base64");
            }

          //Groestlcoin Addresses are different
            if(isGRS()) {

                if (isSegwit) {
                    if (!segwitAvailable) {
                        return;
                    }
                    if (isP2wpkh) {
                        address = libs.groestlcoinjs.address.fromOutputScript(scriptpubkey, network)
                    }
                    else if (isP2wpkhInP2sh) {
                        address = libs.groestlcoinjs.address.fromOutputScript(scriptpubkey, network)
                    }
                }
                //non-segwit addresses are handled by using groestlcoinjs for bip32RootKey
            }

            if (isELA()) {
                let elaAddress = calcAddressForELA(
                    seed,
                    parseIntNoNaN(DOM.bip44coin.val(), 0),
                    parseIntNoNaN(DOM.bip44account.val(), 0),
                    parseIntNoNaN(DOM.bip44change.val(), 0),
                    index
                );
                address = elaAddress.address;
                privkey = elaAddress.privateKey;
                pubkey = elaAddress.publicKey;
            }

            addAddressToList(indexText, address, pubkey, privkey);
            if (isLast) {
                hidePending();
                updateCsv();
            }
        }, 50)
    }

    init();

}

export function generate(req, res){
    const mnemonic = new Mnemonic(req.language, req.pbkdf2Rounds)
    console.log("running")
    generateRandomPhrase(req, res)
    res.phraseError = findPhraseErrors(req, res, res.phrase)
    console.log(findPhraseErrors(req, res, res.phrase+"qq"))
    const bip32RootKey = calcBip32RootKeyFromSeed(res.phrase, req.passphrase, req.networkName, mnemonic)
    console.log(bip32RootKey.isNeutered())
    // console.log("networkHasSegwit",networkHasSegwit(req.network, req.bipSemantics))
    res.bip32RootKey = bip32RootKey.toBase58()
    getDerivationPath(req.bip, res)
    const bip32ExtendedKey = calcBip32ExtendedKey(bip32RootKey, res.derivationPath)
    res.accountXprv = bip32ExtendedKey.toBase58()
    res.accountXpub = bip32ExtendedKey.neutered().toBase58()

}