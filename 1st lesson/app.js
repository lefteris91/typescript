"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'lefteris';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true){}
}
generateError('An error occured!', 500);
