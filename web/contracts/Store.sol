// contracts/Storage.sol
pragma solidity ^0.4.24;

import "./interfaces/IStore.sol";
import "@aragon/abis/os/contracts/apps/AragonApp.sol";

/**
  * Implementation of the store.
  */
contract Store is AragonApp {
  string private _name;

  mapping (bytes => bool) private _identifiers;

  bytes32 constant public CONTRIBUTER_ROLE = keccak256("CONTRIBUTER_ROLE");

  function initialize(string name) public onlyInit {
      _name = name;

      initialized();
  }

  function get(bytes cid) external view returns (bool) {
    return _identifiers[cid];
  }

  function put(bytes cid) external auth(CONTRIBUTER_ROLE) returns (bool) {
    _identifiers[cid] = true;
    return true;
  }

  function verify(bytes cid) external view returns (bool) {
    if (_identifiers[cid]) {
      return true;
    }
    return false;
  }
}
