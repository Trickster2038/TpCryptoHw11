const KeeperABI = [
    {
        'inputs': [],
        'name': "constructor",
        'stateMutability': "nonpayable",
        'type': "constructor"
    },
    {
        'inputs': [],
        'name': "getTest",
        'outputs': [
            {
                'internalType': "uint256",
                'name': "num_",
                'type': "uint256"
            }
        ],
        'stateMutability': "pure",
        'type': "function"
    },
    {
        'inputs': [
            {
                'internalType': "address",
                'name': "",
                'type': "address"
            }
        ],
        'name': "ipfs_hashes",
        'outputs': [
            {
                'internalType': "bytes32",
                'name': "",
                'type': "bytes32"
            }
        ],
        'stateMutability': "view",
        'type': "function"
    },
    {
        'inputs': [
            {
                'internalType': "bytes32",
                'name': "hash_",
                'type': "bytes32"
            }
        ],
        'name': "register",
        'outputs': [],
        'stateMutability': "nonpayable",
        'type': "function"
    }
]

const KEEPER_ADRESS = "0x3194cBDC3dbcd3E11a07892e7bA5c3394048Cc87"

const web3 = new Web3("http://localhost:8545")

const KeeperContract = new web3.eth.Contract(KeeperABI, KEEPER_ADRESS)

const senderAddress = "0x4d10ae710Bd8D1C31bd7465c8CBC3add6F279E81"

function sendTestCustom(){
    KeeperContract.methods.getTest().call(function (err, res) {
        if (err) {
          console.log("An error occured", err)
          return
        }
        console.log("The value is: ", res)
      })
}