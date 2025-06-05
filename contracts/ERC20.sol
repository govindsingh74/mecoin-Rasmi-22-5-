// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MECOIN is ERC20 {
    constructor() ERC20("Mecoin", "MECOIN"){
        _mint(msg.sender, 6251990000000000000000000000);
    }
}