pragma solidity ^0.5.0;

import "./gamestart.sol";
import "./safemath.sol";

contract Battle is GameStart {
    using SafeMath for uint256;
    // uint16 public roundCount = 0;
    function battleRound (address _player, string memory _playerChoice, uint _player1Card, uint _player2Card) public {
        require(gameStatus == true, "Game is not live!");
        require(roundsCounter < 6, "6 rounds completed, battle over!!");
        if (cards[_player1Card]._playerChoice > cards[_player2Card]._playerChoice) {
            ownerScore[players[0]] = ownerScore[players[0]].add(1);
            roundsCounter = roundsCounter.add(1);
        }
        else {
            ownerScore[players[1]] = ownerScore[players[1]].add(1);
            roundsCounter = roundsCounter.add(1);
        }
        if (roundsCounter == 6) {
            checkWinner();
        }
    }
    
    function checkWinner () internal {
        if (ownerScore[players[0]] > ownerScore[players[1]]) {
            ownerWins[players[0]] = ownerWins[players[0]].add(1);
            ownerLosses[players[1]] = ownerLosses[players[1]].add(1);
            transferFrom(players[1], players[0], gambledCard[players[1]]);
        }
        else {
            ownerWins[players[1]] = ownerWins[players[1]].add(1);
            ownerLosses[players[0]] = ownerLosses[players[0]].add(1);
            transferFrom(players[0], players[1], gambledCard[players[0]]);
        }
    }
    // function matchplayers ()
}
