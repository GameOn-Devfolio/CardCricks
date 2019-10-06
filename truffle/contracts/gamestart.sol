pragma solidity ^0.5.0;

import "./cardownership.sol";

contract GameStart is Ownership {
    
    mapping (uint256 => address) players;
    // bool public player1Flag = false;
    // bool public player2Flag = false;
    bool public gameStatus = false;
    uint public playerCount = 0;
    mapping (address => uint256) gambledCard;
    
    mapping (address => bool) playerFlag;
    
    // passing indexId of card being gambled, give contract address approval to transfer card to winner
    // both players need to call gameStart() individually
    function gameStart (address _player, uint256 _indexId) public {
        require(playerFlag[_player] != true, "Player already in game!");
        playerFlag[_player] = true;
        players[playerCount] = _player;
        playerCount = playerCount.add(1);
        gambledCard[_player] = _indexId;
        
        approve(address(this), _indexId);
        if (playerCount == 2) {
            gameStatus = true;
        }
    }
    
    function gameOver (address _player1, address _player2) public {
        require (gameStatus == true, "Game is not live, cannot end game!!");
        playerCount = 0;
        gameStatus = false;
        playerFlag[_player1] = false;
        playerFlag[_player2] = false;
    }
}
