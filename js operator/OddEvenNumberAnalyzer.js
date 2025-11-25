// Q9: OddEvenNumberAnalyzer

let numbersArray = [];
let resultArray = [];

// Loop 1–30
for (let num = 1; num <= 30; num++) {
    numbersArray.push(num);

    if (num % 3 === 0 && num % 5 === 0) {
        resultArray.push("FizzBuzz");
    } 
    else if (num % 2 === 0) {
        resultArray.push("Even");
    } 
    else {
        resultArray.push("Odd");
    }
}

console.log(resultArray);
