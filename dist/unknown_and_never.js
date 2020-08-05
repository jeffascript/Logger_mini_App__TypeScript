"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "Jeff";
if (typeof userInput === "string") {
    userName = userInput;
}
var generateError = function (msg, code) {
    throw { message: msg, errorCode: code };
};
generateError("An error has occured", 500);
