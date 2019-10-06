pragma solidity ^0.5.0;

import "./ownable.sol";
import "./safemath.sol";

contract CardFactory is Ownable {
    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;
    
    event NewCard (uint cardId, string name, uint tokenId, uint16 totalMatches, uint16 totalCatches, uint16 totalRuns, uint16 strikeRate, uint16 totalCenturies, uint16 totalWickets, uint16 totalOvers, uint16 totalFourWickets);
    uint tokenDigits = 16;
    uint tokenModulus = 10 ** tokenDigits;
    
    struct Card {
        string name;
        uint tokenId;
        uint16 totalMatches;
        uint16 totalCatches;
        uint16 totalRuns;
        uint16 strikeRate;
        uint16 totalCenturies;
        uint16 totalWickets;
        uint16 totalOvers;
        uint16 totalFourWickets;
    }
    
    Card[] public cards;
    
    mapping (uint => address) public cardOwner;
    mapping (address => uint) public ownerCardCount;
    mapping (address => uint) public ownerLevel;
    mapping (address => uint) ownerWins;
    mapping (address => uint) ownerLosses;
    mapping (address => uint) public ownerScore;
    uint public roundsCounter = 0;
    
    function _createCard (string memory _name, uint _tokenId, uint16 _totalMatches, uint16 _totalCatches, uint16 _totalRuns, uint16 _strikeRate, uint16 _totalCenturies, uint16 _totalWickets, uint16 _totalOvers, uint16 _totalFourWickets) internal {
        uint indexId = cards.push(Card(_name, _tokenId, _totalMatches, _totalCatches, _totalRuns, _strikeRate, _totalCenturies, _totalWickets, _totalOvers, _totalFourWickets)) - 1;
        cardOwner[indexId] = msg.sender;
        ownerCardCount[msg.sender] = ownerCardCount[msg.sender].add(1);
        emit NewCard(indexId, _name, _tokenId, _totalMatches, _totalCatches, _totalRuns, _strikeRate, _totalCenturies, _totalWickets, _totalOvers, _totalFourWickets);
    }
    
    function _generateRandomToken (string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % tokenModulus;
    }
    
    function createRandomCard (string memory _name, uint16 _totalMatches, uint16 _totalCatches, uint16 _totalRuns, uint16 _strikeRate, uint16 _totalCenturies, uint16 _totalWickets, uint16 _totalOvers, uint16 _totalFourWickets) public {
        uint randToken = _generateRandomToken(_name);
        randToken = randToken - randToken % 100;
        _createCard(_name, randToken, _totalMatches, _totalCatches, _totalRuns, _strikeRate, _totalCenturies, _totalWickets, _totalOvers, _totalFourWickets);
    }
}
