"use strict";
exports.__esModule = true;
// https://edabit.com/challenge/wPNzJEJebN2mewcqY
// Reverse the Order of Words with Five Letters or More
// Published by Matt in 
// formattingsortingstrings
// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples
// reverse("Reverse") ➞ "esreveR"
// reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
// reverse("The dog is big.") ➞ "The dog is big."
// Notes
var reverse = function (str) {
    var str1 = [];
    var str2 = str.split(' ');
    for (var i = 0; i < str2.length; i++) {
        if (str2[i].length > 4) {
            str1.push(str2[i].split('').reverse().join(''));
        }
        else {
            str1.push(str2[i]);
        }
    }
    return str1.join(' ');
};
console.log(reverse("This is a typical sentence."));
// Hello; Hello World; World
// Published by Matt in 
// conditionsmathstrings
// Write a function that takes an integer and:
// •	If the number is a multiple of 3, return "Hello".
// •	If the number is a multiple of 5, return "World".
// •	If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
// helloWorld(3) ➞ "Hello"
// helloWorld(5) ➞ "World"
// helloWorld(15) ➞ "Hello World"
var helloWorld = function (num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "Hello World";
    }
    else if (num % 5 == 0) {
        return "World";
    }
    else if (num % 3 == 0) {
        return "Hello";
    }
};
console.log(helloWorld(3)); //➞ "Hello"
console.log(helloWorld(5)); //➞ "World"
console.log(helloWorld(15)); // ➞ "Hello World"
// https://edabit.com/challenge/L65zKSJKaDAj6JGyt
// Fraction Greater Than One
// Published by Matt in 
// language_fundamentalsmathstringsvalidation
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
// Examples
// greaterThanOne("1/2") ➞ false
// greaterThanOne("7/4") ➞ true
// greaterThanOne("10/10") ➞ false
var greaterThanOne = function (frac) {
    return eval(frac) > 1;
};
console.log(greaterThanOne("1/2")); //➞ false
console.log(greaterThanOne("7/4")); //➞ true
console.log(greaterThanOne("10/10")); //) ➞ false
// https://edabit.com/challenge/y6dMjvNaPXXNKeBRQ
// Get the Sum of All Array Elements
// Published by felixjoykind in 
// arrayslanguage_fundamentalsmathnumbers
// Create a function that takes an array and returns the sum of all numbers in the array.
// Examples
// getSumOfItems([2, 7, 4]) ➞ 13
// getSumOfItems([45, 3, 0]) ➞ 48
// getSumOfItems([-2, 84, 23]) ➞ 105
var getSumOfItems = function (arr) {
    return arr.reduce(function (accum, cValue) { return accum + cValue; });
};
console.log(getSumOfItems([2, 7, 4])); //➞ 13
console.log(getSumOfItems([45, 3, 0])); // ➞ 48
console.log(getSumOfItems([-2, 84, 23])); //]) ➞ 105
// https://edabit.com/challenge/R3649PDvoFf6wGxyg
// Return the Middle Character(s) of a String
// Published by Matt in 
// formattingmathstrings
// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
// Examples
// getMiddle("test") ➞ "es"
// getMiddle("testing") ➞ "t"
// getMiddle("middle") ➞ "dd"
var getMiddle = function (str) {
    if (str.length == 1) {
        return str;
    }
    else if (str.length % 2 == 1) {
        return str.substring(str.length / 2, (str.length / 2) + 1);
    }
    else {
        return str.substring((str.length / 2) - 1, (str.length / 2) + 1);
    }
};
console.log(getMiddle("testing")); // ➞ "t"
console.log(getMiddle("middle")); // ➞ "dd"
