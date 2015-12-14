'use strict';
//For testing I used jasmine. Run hwk-tester -j to test function
//recursive function to find factorial
function factorial(num) {
  if (num === 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

function palindromeFactorial(someArray) {
  var amountPalindromes = 0;
  //check if someArray is an Array
  if ((Object.prototype.toString.call(someArray) === '[object Array]') && (someArray.length !== 0)) {
    for (var i = 0; i < someArray.length; i++) {
      //remove whitespaces from words:
      var word = someArray[i].replace(/\s/g, "");
      var wordLength = word.length;
      for (var j = 0; j < Math.floor(wordLength / 2); j++) {
        if (word[j] !== word[wordLength - 1 - j]) {
          console.log("Word  '" + someArray[i] + "' is not a palindrome!");
          j = Math.floor(wordLength / 2);
        } else if (j === Math.floor(wordLength / 2) - 1) {
          amountPalindromes += 1;
        }
      }
    }
    console.log('There are ' + amountPalindromes + ' palindromes in an array. And factorial of ' + amountPalindromes + ' is ' + factorial(amountPalindromes) + '!');
    return factorial(amountPalindromes);
  } else throw 'Argument must be an Array of strings!';
}
palindromeFactorial(['mom', 'dad', 'race car', 'florence healthcare', 'noon', 'sunny']);
// We export so that we can run unit tests.
exports.palindromeFactorial = palindromeFactorial;
