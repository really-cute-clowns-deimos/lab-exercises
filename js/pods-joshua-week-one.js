"use strict";
// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);


function getRandomQuote(){
    var quotes = ["May the force be with you", "No, I am your father", "NoooooOOoOOoooOOoOOooOOooo", "Never tell me the odds.", "Uttiiinnnniiiii!!"];
    var luckyNumber = Math.floor(Math.random() * (quotes.length));
    console.log(luckyNumber);
    return quotes[luckyNumber];
};
console.log(getRandomQuote());


// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

function getIndexesOf(x, str) {
    // function to return array: initialize empty array
    var arr = [];
    // iterates through length of string, finding each index
    for (var i = 0; i < str.length; ++i) {
        // if element at i equal to var input x, push element i into new array
        if(str[i] === x){
            arr.push(i);
        }
    }
    // return the new array
    return arr;
}
console.log(getIndexesOf('n', 'banana'));


// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]

function removeAll(arr, x){
    // initializing a new Array to return later
    var newArr = [];
    // if x exists in the array do this
    if(arr.indexOf(x) !== -1){
        // iterate through each element in the array
        arr.forEach(function(num){
            // if current num doesn't match x, add to new Array
            if(num !== x){
                newArr.push(num);
            }
        });
    }
    // var newArray = arr.splice(x);
    // console.log(arr.splice(2,1));
    console.log(arr);

    // return the new Array
    return newArr;
}
console.log(removeAll([1,2,3,3,3,4,5], 3));