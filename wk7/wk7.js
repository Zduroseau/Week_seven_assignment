//Problem 1//
let firstProblem = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(firstProblem);

const getFirstAndLast = (arr) => {
  let firstElement = arr[0];
  let lastElement = arr[arr.length - 1];
  return { firstElement, lastElement };
};

const addFirstAndLast = (arr) => {
  const { firstElement, lastElement } = getFirstAndLast(arr);
  let firstProblemSum = lastElement - firstElement;
  return firstProblemSum;
};


let result = addFirstAndLast(firstProblem);

console.log(`Result: ${result}`);

// Adds my age
firstProblem.push(100);
console.log(`Updated: ${firstProblem}`);
getFirstAndLast(firstProblem)
let updatedResult = addFirstAndLast(firstProblem);
console.log(`Updated Solution: ${updatedResult}`);
//Adds all the ages and gets the avverage//
let sum = 0;
for (let i=0; i<firstProblem.length;i++){
    sum+=firstProblem[i];
};
let average= sum/firstProblem.length;
console.log(`All the ages together is: ${sum}`);
console.log(`Average age is: ${average}`);
// Problem 2//
const secondProblem = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(secondProblem)
// finds the average amount of letters//
let sumOfLengths = 0;
for(let i=0; i<secondProblem.length; i++){
    sumOfLengths += secondProblem[i].length;
}
let averageLength = sumOfLengths / secondProblem.length;
console.log(`Avverage length ${averageLength}`)
// concatenates the names// 
let concatenatedNames = ''
for (let i=0; i<secondProblem.length; i++){
    concatenatedNames += secondProblem[i] + ' ';
}
concatenatedNames = concatenatedNames.trim();
console.log(`All the names: ${concatenatedNames}`);
// Problem 3//
console.log (`Use the length property of the array and subtract 1 from it. Then, use the square bracket notation to access the element at that index to access the last element in an array`)
//Problem 4//
console.log(`you can simply use myArray[0] to access the first element of an array.`)
//Problem 5//
const fifthProblemNamesLength = [];
for (let i=0; i<secondProblem.length;i++){
    let namelength = secondProblem[i].length;
    fifthProblemNamesLength.push(namelength);
}
console.log(fifthProblemNamesLength)
//Problem 6 adds all the elements from the privious problem together//
let newSum= 0
for(let i=0; i<fifthProblemNamesLength.length;i++
){
    newSum += fifthProblemNamesLength[i]
}
console.log(newSum)
// Problem 7//
const problemSeven = (word,n) => Array(n+1).join(word)
let result7 = problemSeven("Zach",7)
console.log(result7)
// Problem 8 //
const problemEight = (firstName,lastName) => {
    console.log(`${firstName} ${lastName}`)
}
let newName = problemEight("Zach","duroseau")
// Problem 9// 
let numbers = [7,22,13,1,3,6]
const problemNine = (numbers) => {
    let sumTwo = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return sumTwo > 100;
}
let numbersArray = [40,68,22,33,87,90,74]
let resultNineA = problemNine(numbersArray)
console.log(resultNineA) 
let resuletNineB = problemNine(numbers)

// Problem 10 //
arrayTen = [25,30,42,8,13,53,7,5,2,18];
//first checks to see if the array is empty then if it is returns 0 to avaid divvision by 0
const problemTen = () =>{
    if(arrayTen.length ===0 ){
    return 0;
    }
const sumTen = arrayTen.reduce((accumulator, currentValue)=> accumulator+currentValue, 0);
let averageNumbers = sumTen/arrayTen.length;
return averageNumbers;
}
const resultTen= problemTen(arrayTen);
console.log(resultTen)

//Problem 11//
arrayA= [5,3,8,17,29]
arrayB=[4,9,10,18,76,54]
const calculateAverage = () => {
    if(numbers.length === 0){
        return 0;
    }
    let sumEleven = numbers.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
    return sumEleven / numbers.length;
}
const problemEleven = (arrayA, ArrayB) => {
    const average1 = calculateAverage(arrayA);
    const average2 = calculateAverage(arrayB);
    return average1>average2;
}
let resultEleven = problemEleven(arrayA, arrayB);
console.log(resultEleven)

//Problem 12//
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.50;
};
let isHotOutside = true;
let moneyInPocket = 20.00;
const canGetDrink = willBuyDrink(isHotOutside, moneyInPocket);
console.log(`Should i go buy a drink? ${canGetDrink}`);