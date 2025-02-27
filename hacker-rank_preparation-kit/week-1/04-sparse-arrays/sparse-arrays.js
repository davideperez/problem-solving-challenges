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
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
  let results = []
  
  for (let i = 0; i <= queries.length - 1; i++){
      results.push(0)
  }

  // 
  for (let i = 0; i < queries.length; i++) {
      for (let j =0; j < strings.length; j++) {
          if (queries[i] === strings[j]) {
              results[i] += 1
          }
      }
  }
  
  return results
}
/* 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
} */

const strings01 = ['aba', 'baba', 'aba', 'xzxb']
const queries01 = ['aba','xzxb', 'ab']
// result: [ 2, 1, 0 ]

const strings02 = ['def', 'de', 'fgh', 'xzxb']
const queries02 = ['de','lmn', 'fgh']
// result: [ 1, 0, 1 ]

const strings03 = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf']
const queries03 = ['abcde','sdaklfj', 'asdjf', 'na', 'basdn']
// result: [ 1, 3, 4, 3, 2 ]

console.log(matchingStrings(strings01, queries01))
console.log(matchingStrings(strings02, queries02))
console.log(matchingStrings(strings03, queries03))
