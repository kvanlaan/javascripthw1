/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */


var sumOfArray = function(arr) {
    var total = 0
    var index = 0
    while (index < arr.length) {
        var el = arr[index]
        total = total + el
        index = index + 1
        } return total

 }


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(arry) {
	var max = -9999999999
	for (var i=0; i<arry.length; i++) {
	    if (arry[i] > max) {
          max = arry[i]
        }
    }
    return max 
    
}



console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){

    var input = (symbol.toLowerCase) 

    if (input === "a"|| input === "e"|| input === "i"|| input === "o"|| input === 
    	"u") {
    	
    }
    return true
}
    

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


var reverse = function(old) {
  var newString = ""
	for (var i = old.length - 1; i>=0; i --) {
    	var letter = old[i]
    	newString = newString + letter
	}
	return newString
}
    
console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */


var fizzbuzz = function(num1) {
    var outputString = ""
	for (var n = 1; n <= num1; n++) {
if (n % 3 !== 0 && n % 5 !== 0 ) {
 outputString = outputString + "."
}
if (n % 3 === 0 && n % 5 !== 0 ) {
outputString = outputString + "fizz"
}
if (n % 3 !== 0 && n % 5 === 0 ) {   
outputString = outputString + "buzz"
}
if (n % 3 === 0 && n % 5 === 0 ) {	
outputString = outputString + "fizzbuzz"
		}
    
    }
    return outputString
}


console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

     
var contains = function(sequence, element) {
   for (var i =0; i <= sequence.length; i++){
        if (element === sequence[i]) {
            return true 
        }
   }
    return false
}


var alphabet = "abcdefghijklmnopqrstuvwxyz1234567890 "  
    
var stripPunct = function(inputString) {
     var newString = ""
    for (var i=0; i < inputString.length; i++) {
	var char = inputString[i]
    	var caseInsensitiveChar = char.toLowerCase() 
    if (contains(alphabet,caseInsensitiveChar)) {
	     newString = newString + char 
		 return newString
		}
	}
}
        

function findLongestWord(sentence){
    var arr = sentence.split(" ")
    var newString = ""
    for (var i = 0; i <arr.length; i++) {
       var word = arr[i]
       var cleanWord = stripPunct(word)

     	if (word.length >= 4) {
		newString = newString + " " + word
	}
    return newString   
    }
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */


var GCD = function(num1, num2) {
 var array = []
 var divisorA = num1
 
 if(num2 < num1 ) {
     divisorA = num2
     
 }
    for (var i = divisorA; i >= 1; i--) {
        if (num1 % i === 0 && num2 % i === 0){
            return i 
        }
    }
}




console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);