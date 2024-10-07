/* 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
} */

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isAPangram(s) {
  let lettersMap = {}
  
  // transforms the string to lowercase
  s = s.toLowerCase()
  
  // builds a map that should have a length of 27
  let key
  for (let i = 0; i < s.length; i++) {
    key = s[i]
    lettersMap[key] = true
  }
  
  const isPangram = Object.keys(lettersMap).length === 27
  
 if (isPangram) {
    return 'pangram'
  } else {
    return 'not pangram'
  }
}

/* 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
 */

const string1 = 'We promptly judged antique ivory buckles for the next prize'
const string2 = 'We promptly judged antique ivory buckles for the prize'

console.log(isAPangram(string1))
console.log(isAPangram(string2))
