pragma solidity ^0.8.0;

contract Keeper {
    constructor (){

    }
    mapping (address => bytes32) public ipfs_hashes;

    function register(bytes32 hash_) public{
        ipfs_hashes[msg.sender] = hash_;
    }

    function getTest() public pure returns(uint num_){
        return 2038;
    }
}