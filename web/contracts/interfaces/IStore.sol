// contracts/IStore.sol
pragma solidity ^0.4.24;


interface IStore {
  function get(address identifier) external view returns (bool);
  function put(address identifier) external returns (bool);
}
