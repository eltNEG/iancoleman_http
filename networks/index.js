import libs from '../lib/bip39-libs.cjs'

export default [
    {
        name: "AC - Asiacoin",
        network: libs.bitcoin.networks.asiacoin,
        hdCoind: 51,
    },
    {
        name: "ACC - Adcoin",
        network: libs.bitcoin.networks.adcoin,
        hdCoind: 161,
    },
    {
        name: "AGM - Argoneum",
        network: libs.bitcoin.networks.argoneum,
        hdCoind: 421,
    },
    {
        name: "ARYA - Aryacoin",
        network: libs.bitcoin.networks.aryacoin,
        hdCoind: 357,
    },
    {
        name: "ATOM - Cosmos Hub",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 118,
    },
    {
        name: "AUR - Auroracoin",
        network: libs.bitcoin.networks.auroracoin,
        hdCoind: 85,
    },
    {
        name: "AXE - Axe",
        network: libs.bitcoin.networks.axe,
        hdCoind: 4242,
    },
    {
        name: "ANON - ANON",
        network: libs.bitcoin.networks.anon,
        hdCoind: 220,
    },
    {
        name: "BOLI - Bolivarcoin",
        network: libs.bitcoin.networks.bolivarcoin,
        hdCoind: 278,
    },
    {
        name: "BCA - Bitcoin Atom",
        network: libs.bitcoin.networks.atom,
        hdCoind: 185,
    },
    {
        name: "BCH - Bitcoin Cash",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 145,
    },
    {
        name: "BEET - Beetlecoin",
        network: libs.bitcoin.networks.beetlecoin,
        hdCoind: 800,
    },
    {
        name: "BELA - Belacoin",
        network: libs.bitcoin.networks.belacoin,
        hdCoind: 73,
    },
    {
        name: "BLK - BlackCoin",
        network: libs.bitcoin.networks.blackcoin,
        hdCoind: 10,
    },
    {
        name: "BND - Blocknode",
        network: libs.bitcoin.networks.blocknode,
        hdCoind: 2941,
    },
    {
        name: "tBND - Blocknode Testnet",
        network: libs.bitcoin.networks.blocknode_testnet,
        hdCoind: 1,
    },
    {
        name: "BRIT - Britcoin",
        network: libs.bitcoin.networks.britcoin,
        hdCoind: 70,
    },
    {
        name: "BSD - Bitsend",
        network: libs.bitcoin.networks.bitsend,
        hdCoind: 91,
    },
    {
        name: "BST - BlockStamp",
        network: libs.bitcoin.networks.blockstamp,
        hdCoind: 254,
    },
    {
        name: "BTA - Bata",
        network: libs.bitcoin.networks.bata,
        hdCoind: 89,
    },
    {
        name: "BTC - Bitcoin",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 0,
    },
    {
        name: "BTC - Bitcoin RegTest",
        network: libs.bitcoin.networks.regtest,
        // Using hd coin value 1 based on bip44_coin_type
        // https://github.com/chaintope/bitcoinrb/blob/f1014406f6b8f9b4edcecedc18df70c80df06f11/lib/bitcoin/chainparams/regtest.yml
        hdCoind: 1,
    },
    {
        name: "BTC - Bitcoin Testnet",
        network: libs.bitcoin.networks.testnet,
        hdCoind: 1,
    },
    {
        name: "BITG - Bitcoin Green",
        network: libs.bitcoin.networks.bitcoingreen,
        hdCoind: 222,
    },
    {
        name: "BTCP - Bitcoin Private",
        network: libs.bitcoin.networks.bitcoinprivate,
        hdCoind: 183,
    },
    {
        name: "BTCPt - Bitcoin Private Testnet",
        network: libs.bitcoin.networks.bitcoinprivatetestnet,
        hdCoind: 1,
    },
    {
        name: "BSC - Binance Smart Chain",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 60,
    },
    {
        name: "BSV - BitcoinSV",
        network: libs.bitcoin.networks.bitcoinsv,
        hdCoind: 236,
    },
    {
        name: "BTCZ - Bitcoinz",
        network: libs.bitcoin.networks.bitcoinz,
        hdCoind: 177,
    },
    {
        name: "BTDX - BitCloud",
        network: libs.bitcoin.networks.bitcloud,
        hdCoind: 218,
    },
    {
        name: "BTG - Bitcoin Gold",
        network: libs.bitcoin.networks.bgold,
        hdCoind: 156,
    },
    {
        name: "BTX - Bitcore",
        network: libs.bitcoin.networks.bitcore,
        hdCoind: 160,
    },
    {
        name: "CCN - Cannacoin",
        network: libs.bitcoin.networks.cannacoin,
        hdCoind: 19,
    },
    {
        name: "CESC - Cryptoescudo",
        network: libs.bitcoin.networks.cannacoin,
        hdCoind: 111,
    },
    {
        name: "CDN - Canadaecoin",
        network: libs.bitcoin.networks.canadaecoin,
        hdCoind: 34,
    },
    {
        name: "CLAM - Clams",
        network: libs.bitcoin.networks.clam,
        hdCoind: 23,
    },
    {
        name: "CLO - Callisto",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 820,
    },
    {
        name: "CLUB - Clubcoin",
        network: libs.bitcoin.networks.clubcoin,
        hdCoind: 79,
    },
    {
        name: "CMP - Compcoin",
        network: libs.bitcoin.networks.compcoin,
        hdCoind: 71,
    },
    {
        name: "CPU - CPUchain",
        network: libs.bitcoin.networks.cpuchain,
        hdCoind: 363,
    },
    {
        name: "CRAVE - Crave",
        network: libs.bitcoin.networks.crave,
        hdCoind: 186,
    },
    {
        name: "CRP - CranePay",
        network: libs.bitcoin.networks.cranepay,
        hdCoind: 2304,
    },
    {
        name: "CRW - Crown (Legacy)",
        network: libs.bitcoin.networks.crown,
        hdCoind: 72,
    },
    {
        name: "CRW - Crown",
        network: libs.bitcoin.networks.crown,
        hdCoind: 72,
    },
    {
        name: "CSC - CasinoCoin",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 359,
    },
    {
        name: "DASH - Dash",
        network: libs.bitcoin.networks.dash,
        hdCoind: 5,
    },
    {
        name: "DASH - Dash Testnet",
        network: libs.bitcoin.networks.dashtn,
        hdCoind: 1,
    },
    {
        name: "DFC - Defcoin",
        network: libs.bitcoin.networks.defcoin,
        hdCoind: 1337,
    },
    {
        name: "DGB - Digibyte",
        network: libs.bitcoin.networks.digibyte,
        hdCoind: 20,
    },
    {
        name: "DGC - Digitalcoin",
        network: libs.bitcoin.networks.digitalcoin,
        hdCoind: 18,
    },
    {
        name: "DIVI - DIVI",
        network: libs.bitcoin.networks.divi,
        hdCoind: 301,
    },
    {
        name: "DIVI - DIVI Testnet",
        network: libs.bitcoin.networks.divitestnet,
        hdCoind: 1,
    },
    {
        name: "DMD - Diamond",
        network: libs.bitcoin.networks.diamond,
        hdCoind: 152,
    },
    {
        name: "DNR - Denarius",
        network: libs.bitcoin.networks.denarius,
        hdCoind: 116,
    },
    {
        name: "DOGE - Dogecoin",
        network: libs.bitcoin.networks.dogecoin,
        hdCoind: 3,
    },
    {
        name: "DOGEt - Dogecoin Testnet",
        network: libs.bitcoin.networks.dogecointestnet,
        hdCoind: 1,
    },
    {
        name: "DXN - DEXON",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 237,
    },
    {
        name: "ECN - Ecoin",
        network: libs.bitcoin.networks.ecoin,
        hdCoind: 115,
    },
    {
        name: "EDRC - Edrcoin",
        network: libs.bitcoin.networks.edrcoin,
        hdCoind: 56,
    },
    {
        name: "EFL - Egulden",
        network: libs.bitcoin.networks.egulden,
        hdCoind: 78,
    },
    {
        name: "ELA - Elastos",
        network: libs.bitcoin.networks.elastos,
        hdCoind: 2305,
    },
    {
        name: "ELLA - Ellaism",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 163,
    },
    {
        name: "EMC2 - Einsteinium",
        network: libs.bitcoin.networks.einsteinium,
        hdCoind: 41,
    },
    {
        name: "ERC - Europecoin",
        network: libs.bitcoin.networks.europecoin,
        hdCoind: 151,
    },
    {
        name: "EOS - EOSIO",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 194,
    },
    {
        name: "ERE - EtherCore",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 466,
    },
    {
        name: "ESN - Ethersocial Network",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 31102,
    },
    {
        name: "ETC - Ethereum Classic",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 61,
    },
    {
        name: "ETH - Ethereum",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 60,
    },
    {
        name: "EWT - EnergyWeb",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 246,
    },
    {
        name: "EXCL - Exclusivecoin",
        network: libs.bitcoin.networks.exclusivecoin,
        hdCoind: 190,
    },
    {
        name: "EXCC - ExchangeCoin",
        network: libs.bitcoin.networks.exchangecoin,
        hdCoind: 0,
    },
    {
        name: "EXP - Expanse",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 40,
    },
    {
        name: "FIO - Foundation for Interwallet Operability",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 235,
    },
    {
        name: "FIRO - Firo (Zcoin rebrand)",
        network: libs.bitcoin.networks.firo,
        hdCoind: 136,
    },
    {
        name: "FIX - FIX",
        network: libs.bitcoin.networks.fix,
        hdCoind: 336,
    },
    {
        name: "FIX - FIX Testnet",
        network: libs.bitcoin.networks.fixtestnet,
        hdCoind: 1,
    },
    {
        name: "FJC - Fujicoin",
        network: libs.bitcoin.networks.fujicoin,
        hdCoind: 75,
    },
    {
        name: "FLASH - Flashcoin",
        network: libs.bitcoin.networks.flashcoin,
        hdCoind: 120,
    },
    {
        name: "FRST - Firstcoin",
        network: libs.bitcoin.networks.firstcoin,
        hdCoind: 167,
    },
    {
        name: "FTC - Feathercoin",
        network: libs.bitcoin.networks.feathercoin,
        hdCoind: 8,
    },
    {
        name: "GAME - GameCredits",
        network: libs.bitcoin.networks.game,
        hdCoind: 101,
    },
    {
        name: "GBX - Gobyte",
        network: libs.bitcoin.networks.gobyte,
        hdCoind: 176,
    },
    {
        name: "GCR - GCRCoin",
        network: libs.bitcoin.networks.gcr,
        hdCoind: 79,
    },
    {
        name: "GRC - Gridcoin",
        network: libs.bitcoin.networks.gridcoin,
        hdCoind: 84,
    },
    {
        name: "GRS - Groestlcoin",
        network: libs.bitcoin.networks.groestlcoin,
        hdCoind: 17,
    },
    {
        name: "GRS - Groestlcoin Testnet",
        network: libs.bitcoin.networks.groestlcointestnet,
        hdCoind: 1,
    },
    {
        name: "HNS - Handshake",
        hdCoind: 5353,
    },
    {
        name: "HNC - Helleniccoin",
        network: libs.bitcoin.networks.helleniccoin,
        hdCoind: 168,
    },
    {
        name: "HUSH - Hush (Legacy)",
        network: libs.bitcoin.networks.hush,
        hdCoind: 197,
    },
    {
        name: "HUSH - Hush3",
        network: libs.bitcoin.networks.hush3,
        hdCoind: 197,
    },
    {
        name: "INSN - Insane",
        network: libs.bitcoin.networks.insane,
        hdCoind: 68,
    },
    {
        name: "IOP - Iop",
        network: libs.bitcoin.networks.iop,
        hdCoind: 66,
    },
    {
        name: "IOV - Starname",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 234,
    },
    {
        name: "IXC - Ixcoin",
        network: libs.bitcoin.networks.ixcoin,
        hdCoind: 86,
    },
    {
        name: "JBS - Jumbucks",
        network: libs.bitcoin.networks.jumbucks,
        hdCoind: 26,
    },
    {
        name: "KMD - Komodo",
        bip49available: false,
        network: libs.bitcoin.networks.komodo,
        hdCoind: 141,
    },
    {
        name: "KOBO - Kobocoin",
        bip49available: false,
        network: libs.bitcoin.networks.kobocoin,
        hdCoind: 196,
    },
    {
        name: "LBC - Library Credits",
        network: libs.bitcoin.networks.lbry,
        hdCoind: 140,
    },
    {
        name: "LCC - Litecoincash",
        network: libs.bitcoin.networks.litecoincash,
        hdCoind: 192,
    },
    {
        name: "LDCN - Landcoin",
        network: libs.bitcoin.networks.landcoin,
        hdCoind: 63,
    },
    {
        name: "LINX - Linx",
        network: libs.bitcoin.networks.linx,
        hdCoind: 114,
    },
    {
        name: "LKR - Lkrcoin",
        segwitAvailable: false,
        network: libs.bitcoin.networks.lkrcoin,
        hdCoind: 557,
    },
    {
        name: "LTC - Litecoin",
        network: libs.bitcoin.networks.litecoin,
        hdCoind: 2,
    },
    {
        name: "LTCt - Litecoin Testnet",
        network: libs.bitcoin.networks.litecointestnet,
        hdCoind: 1,
    },
    {
        name: "LTZ - LitecoinZ",
        network: libs.bitcoin.networks.litecoinz,
        hdCoind: 221,
    },
    {
        name: "LUNA - Terra",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 330,
    },
    {
        name: "LYNX - Lynx",
        network: libs.bitcoin.networks.lynx,
        hdCoind: 191,
    },
    {
        name: "MAZA - Maza",
        network: libs.bitcoin.networks.maza,
        hdCoind: 13,
    },
    {
        name: "MEC - Megacoin",
        network: libs.bitcoin.networks.megacoin,
        hdCoind: 217,
    },
    {
        name: "MIX - MIX",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 76,
    },
    {
        name: "MNX - Minexcoin",
        network: libs.bitcoin.networks.minexcoin,
        hdCoind: 182,
    },
    {
        name: "MONA - Monacoin",
        network: libs.bitcoin.networks.monacoin,
        hdCoind: 22,
    },
    {
        name: "MONK - Monkey Project",
        network: libs.bitcoin.networks.monkeyproject,
        hdCoind: 214,
    },
    {
        name: "MOAC - MOAC",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 314,
    },
    {
        name: "MUSIC - Musicoin",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 184,
    },
    {
        name: "NANO - Nano",
        network: libs.nanoUtil.dummyNetwork,
        hdCoind: 165,
    },
    {
        name: "NAV - Navcoin",
        network: libs.bitcoin.networks.navcoin,
        hdCoind: 130,
    },
    {
        name: "NAS - Nebulas",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 2718,
    },
    {
        name: "NEBL - Neblio",
        network: libs.bitcoin.networks.neblio,
        hdCoind: 146,
    },
    {
        name: "NEOS - Neoscoin",
        network: libs.bitcoin.networks.neoscoin,
        hdCoind: 25,
    },
    {
        name: "NIX - NIX Platform",
        network: libs.bitcoin.networks.nix,
        hdCoind: 400,
    },
    {
        name: "NLG - Gulden",
        network: libs.bitcoin.networks.gulden,
        hdCoind: 87,
    },
    {
        name: "NMC - Namecoin",
        network: libs.bitcoin.networks.namecoin,
        hdCoind: 7,
    },
    {
        name: "NRG - Energi",
        network: libs.bitcoin.networks.energi,
        hdCoind: 204,
    },
    {
        name: "NRO - Neurocoin",
        network: libs.bitcoin.networks.neurocoin,
        hdCoind: 110,
    },
    {
        name: "NSR - Nushares",
        network: libs.bitcoin.networks.nushares,
        hdCoind: 11,
    },
    {
        name: "NYC - Newyorkc",
        network: libs.bitcoin.networks.newyorkc,
        hdCoind: 179,
    },
    {
        name: "NVC - Novacoin",
        network: libs.bitcoin.networks.novacoin,
        hdCoind: 50,
    },
    {
        name: "OK - Okcash",
        network: libs.bitcoin.networks.okcash,
        hdCoind: 69,
    },
    {
        name: "OMNI - Omnicore",
        network: libs.bitcoin.networks.omnicore,
        hdCoind: 200,
    },
    {
        name: "ONION - DeepOnion",
        network: libs.bitcoin.networks.deeponion,
        hdCoind: 305,
    },
    {
        name: "ONX - Onixcoin",
        network: libs.bitcoin.networks.onixcoin,
        hdCoind: 174,
    },
    {
        name: "PART - Particl",
        network: libs.bitcoin.networks.particl,
        hdCoind: 44,
    },
    {
        name: "PHR - Phore",
        network: libs.bitcoin.networks.phore,
        hdCoind: 444,
    },
    {
        name: "PINK - Pinkcoin",
        network: libs.bitcoin.networks.pinkcoin,
        hdCoind: 117,
    },
    {
        name: "PIRL - Pirl",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 164,
    },
    {
        name: "PIVX - PIVX",
        network: libs.bitcoin.networks.pivx,
        hdCoind: 119,
    },
    {
        name: "PIVX - PIVX Testnet",
        network: libs.bitcoin.networks.pivxtestnet,
        hdCoind: 1,
    },
    {
        name: "POA - Poa",
        segwitAvailable: false,
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 178,
    },
    {
        name: "POSW - POSWcoin",
        network: libs.bitcoin.networks.poswcoin,
        hdCoind: 47,
    },
    {
        name: "POT - Potcoin",
        network: libs.bitcoin.networks.potcoin,
        hdCoind: 81,
    },
    {
        name: "PPC - Peercoin",
        network: libs.bitcoin.networks.peercoin,
        hdCoind: 6,
    },
    {
        name: "PRJ - ProjectCoin",
        network: libs.bitcoin.networks.projectcoin,
        hdCoind: 533,
    },
    {
        name: "PSB - Pesobit",
        network: libs.bitcoin.networks.pesobit,
        hdCoind: 62,
    },
    {
        name: "PUT - Putincoin",
        network: libs.bitcoin.networks.putincoin,
        hdCoind: 122,
    },
    {
        name: "RPD - Rapids",
        network: libs.bitcoin.networks.rapids,
        hdCoind: 320,
    },
    {
        name: "RVN - Ravencoin",
        network: libs.bitcoin.networks.ravencoin,
        hdCoind: 175,
    },
    {
        name: "R-BTC - RSK",
        network: libs.bitcoin.networks.rsk,
        hdCoind: 137,
    },
    {
        name: "tR-BTC - RSK Testnet",
        network: libs.bitcoin.networks.rsktestnet,
        hdCoind: 37310,
    },
    {
        name: "RBY - Rubycoin",
        network: libs.bitcoin.networks.rubycoin,
        hdCoind: 16,
    },
    {
        name: "RDD - Reddcoin",
        network: libs.bitcoin.networks.reddcoin,
        hdCoind: 4,
    },
    {
        name: "RITO - Ritocoin",
        network: libs.bitcoin.networks.ritocoin,
        hdCoind: 19169,
    },
    {
        name: "RUNE - THORChain",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 931,
    },
    {
        name: "RVR - RevolutionVR",
        network: libs.bitcoin.networks.revolutionvr,
        hdCoind: 129,
    },
    {
        name: "SAFE - Safecoin",
        network: libs.bitcoin.networks.safecoin,
        hdCoind: 19165,
    },
    {
        name: "SCRIBE - Scribe",
        network: libs.bitcoin.networks.scribe,
        hdCoind: 545,
    },
    {
        name: "SLS - Salus",
        network: libs.bitcoin.networks.salus,
        hdCoind: 63,
    },
    {
        name: "SDC - ShadowCash",
        network: libs.bitcoin.networks.shadow,
        hdCoind: 35,
    },
    {
        name: "SDC - ShadowCash Testnet",
        network: libs.bitcoin.networks.shadowtn,
        hdCoind: 1,
    },
    {
        name: "SLM - Slimcoin",
        network: libs.bitcoin.networks.slimcoin,
        hdCoind: 63,
    },
    {
        name: "SLM - Slimcoin Testnet",
        network: libs.bitcoin.networks.slimcointn,
        hdCoind: 111,
    },
    {
        name: "SLP - Simple Ledger Protocol",
        hdCoind: 245,
    },
    {
        name: "SLR - Solarcoin",
        network: libs.bitcoin.networks.solarcoin,
        hdCoind: 58,
    },
    {
        name: "SMLY - Smileycoin",
        network: libs.bitcoin.networks.smileycoin,
        hdCoind: 59,
    },
    {
        name: "STASH - Stash",
        network: libs.bitcoin.networks.stash,
        hdCoind: 0xC0C0,
    },
    {
        name: "STASH - Stash Testnet",
        network: libs.bitcoin.networks.stashtn,
        hdCoind: 0xCAFE,
    },
    {
        name: "STRAT - Stratis",
        network: libs.bitcoin.networks.stratis,
        hdCoind: 105,
    },
    {
        name: "SUGAR - Sugarchain",
        network: libs.bitcoin.networks.sugarchain,
        hdCoind: 408,
    },
    {
        name: "TUGAR - Sugarchain Testnet",
        network: libs.bitcoin.networks.sugarchaintestnet,
        hdCoind: 408,
    },
    {
        name: "SWTC - Jingtum",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 315,
    },
    {
        name: "TSTRAT - Stratis Testnet",
        network: libs.bitcoin.networks.stratistest,
        hdCoind: 105,
    },
    {
        name: "SYS - Syscoin",
        network: libs.bitcoin.networks.syscoin,
        hdCoind: 57,
    },
    {
        name: "THC - Hempcoin",
        network: libs.bitcoin.networks.hempcoin,
        hdCoind: 113,
    },
    {
        name: "THT - Thought",
        network: libs.bitcoin.networks.thought,
        hdCoind: 1618,
    },
    {
        name: "TOA - Toa",
        network: libs.bitcoin.networks.toa,
        hdCoind: 159,
    },
    {
        name: "TRX - Tron",
        hdCoind: 195,
    },
    {
        name: "TWINS - TWINS",
        network: libs.bitcoin.networks.twins,
        hdCoind: 970,
    },
    {
        name: "TWINS - TWINS Testnet",
        network: libs.bitcoin.networks.twinstestnet,
        hdCoind: 1,
    },
    {
        name: "USC - Ultimatesecurecash",
        network: libs.bitcoin.networks.ultimatesecurecash,
        hdCoind: 112,
    },
    {
        name: "USNBT - NuBits",
        network: libs.bitcoin.networks.nubits,
        hdCoind: 12,
    },
    {
        name: "UNO - Unobtanium",
        network: libs.bitcoin.networks.unobtanium,
        hdCoind: 92,
    },
    {
        name: "VASH - Vpncoin",
        network: libs.bitcoin.networks.vpncoin,
        hdCoind: 33,
    },
    {
        name: "VET - VeChain",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 818,
    },
    {
        name: "VIA - Viacoin",
        network: libs.bitcoin.networks.viacoin,
        hdCoind: 14,
    },
    {
        name: "VIA - Viacoin Testnet",
        network: libs.bitcoin.networks.viacointestnet,
        hdCoind: 1,
    },
    {
        name: "VIVO - Vivo",
        network: libs.bitcoin.networks.vivo,
        hdCoind: 166,
    },
    {
        name: "VTC - Vertcoin",
        network: libs.bitcoin.networks.vertcoin,
        hdCoind: 28,
    },
    {
        name: "WGR - Wagerr",
        network: libs.bitcoin.networks.wagerr,
        hdCoind: 7825266,
    },
    {
        name: "WC - Wincoin",
        network: libs.bitcoin.networks.wincoin,
        hdCoind: 181,
    },
    {
        name: "XAX - Artax",
        network: libs.bitcoin.networks.artax,
        hdCoind: 219,
    },
    {
        name: "XBC - Bitcoinplus",
        network: libs.bitcoin.networks.bitcoinplus,
        hdCoind: 65,
    },
    {
        name: "XLM - Stellar",
        network: libs.stellarUtil.dummyNetwork,
        hdCoind: 148,
    },
    {
        name: "XMY - Myriadcoin",
        network: libs.bitcoin.networks.myriadcoin,
        hdCoind: 90,
    },
    {
        name: "XRP - Ripple",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 144,
    },
    {
        name: "XVC - Vcash",
        network: libs.bitcoin.networks.vcash,
        hdCoind: 127,
    },
    {
        name: "XVG - Verge",
        network: libs.bitcoin.networks.verge,
        hdCoind: 77,
    },
    {
        name: "XUEZ - Xuez",
        segwitAvailable: false,
        network: libs.bitcoin.networks.xuez,
        hdCoind: 225,
    },
    {
        name: "XWCC - Whitecoin Classic",
        network: libs.bitcoin.networks.whitecoin,
        hdCoind: 155,
    },
    {
        name: "XZC - Zcoin (rebranded to Firo)",
        network: libs.bitcoin.networks.zcoin,
        hdCoind: 136,
    },
    {
        name: "ZBC - ZooBlockchain",
        network: libs.bitcoin.networks.zoobc,
        hdCoind: 883,
    },
    {
        name: "ZCL - Zclassic",
        network: libs.bitcoin.networks.zclassic,
        hdCoind: 147,
    },
    {
        name: "ZEC - Zcash",
        network: libs.bitcoin.networks.zcash,
        hdCoind: 133,
    },
    {
        name: "ZEN - Horizen",
        network: libs.bitcoin.networks.zencash,
        hdCoind: 121,
    },
    {
        name: "XWC - Whitecoin",
        network: libs.bitcoin.networks.bitcoin,
        hdCoind: 559,
    }
]
