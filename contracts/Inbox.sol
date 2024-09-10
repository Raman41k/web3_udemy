pragma solidity ^0.4.17;

contract InBox {
    string public message;

    function InBox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}