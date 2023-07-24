"use strict";
function addNum(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   throw new Error("incorect input");
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResults = true;
let resultPhrase = "Result is: ";
addNum(number1, number2, printResults, resultPhrase);
