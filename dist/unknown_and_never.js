"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Jeff";
if (typeof userInput === "string") {
    userName = userInput;
}
const generateError = (msg, code) => {
    throw { message: msg, errorCode: code };
};
generateError("An error has occured", 500);
