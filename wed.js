// Wednesday Work 8

var favNumber = " 1  2  3  4";
console.log(favNumber);
// to remove spaces in string
console.log(favNumber.trim());

// Wednesday Work 9

function booleanNum(num) {
    return num % 10 === 0 ? true : false;
}

console.log(booleanNum(13));

// Wednesday Work 10

// program to count the number of vowels in a string

function countVowel(str) { 

 // Find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

// Return number of vowels
    return count;
}

// Take input

const string = prompt('What is your name: ');

const result = countVowel(string);

console.log(result);

// Have to run in HTML and check console for the final answer!