import { validateWord } from "./utitls.js";
var myNumber =  12;
const myFloat = 3.1416;
let myString = "HelloWorld"

// const newUtils =  new myUtils();


console.log(`${myString.length}`);
console.log(`${myString.toLowerCase()}`);
console.log(`${myString.indexOf("o")}`);



if(validateWord(myString, "haha")){
        console.log("Hi everyone");
}

const mySubstring =  myString.substring(5,  myString.indexOf("r") );
console.log(mySubstring);

const newString = myString.padEnd(50, ".");
console.log(newString);
