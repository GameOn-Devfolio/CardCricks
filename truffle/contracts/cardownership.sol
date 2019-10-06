pragma solidity ^0.5.0;

import "./erc721.sol";
import "./ownable.sol";
import "./safemath.sol";
import "./cardfactory.sol";

contract Ownership is ERC721, CardFactory {
    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;
    
    mapping (uint => address) cardApprovals;
    
    
    
    function balanceOf (address _owner) external view returns (uint256) {
        return ownerCardCount[_owner];
    }
    
    function ownerOf (uint256 _tokenId) external view returns (address) {
        return cardOwner[_tokenId];
    }
    
    function _transfer (address _from, address _to, uint256 _tokenId) private {
        ownerCardCount[_to] = ownerCardCount[_to].add(1);
        ownerCardCount[msg.sender] = ownerCardCount[msg.sender].sub(1);
        cardOwner[_tokenId] = _to;
        emit Transfer (_from, _to, _tokenId);
    }
    
    function transferFrom (address _from, address _to, uint256 _tokenId) external payable {
        require (cardOwner[_tokenId] == msg.sender || cardApprovals[_tokenId] == msg.sender);
        _transfer(_from, _to, _tokenId);
    }
    // _tokenId is _indexId in the array
    function approve (address _approved, uint256 _tokenId) public payable {
        require(msg.sender == cardOwner[_tokenId], "Only owner can set approval!!");
        cardApprovals[_tokenId] = _approved;
        emit Approval (msg.sender, _approved, _tokenId);
    }
}
