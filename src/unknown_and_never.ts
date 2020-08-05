//UNKNOWN

let userInput: unknown;
let userName: string;

userInput = 5;

userInput = "Jeff";

//userName = userInput; // if userInput has a type of any, it will work
if (typeof userInput === "string") {
  userName = userInput;
}

//NEVER

const generateError = (msg: string, code: number): never => {
  throw { message: msg, errorCode: code };
  //while (true) {}
  //   throw new Error(msg);
};

//you can never get a return value or assign it to a variable... it is trashed, hence the throw

generateError("An error has occured", 500);
