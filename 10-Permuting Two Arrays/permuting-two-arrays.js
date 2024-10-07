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
}
 */
/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
  let answer
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b).reverse()
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) { 
      return answer = 'NO'
    } 
  }
  return answer = 'YES' 
}

/* function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const k = parseInt(firstMultipleInput[1], 10);

        const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

        const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

        const result = twoArrays(k, A, B);

        ws.write(result + '\n');
    }

    ws.end();
}
 */

const array1 = [2, 1, 3]
const array2 = [7, 8, 9]
const k1 = 10

const array3 = [1, 2, 2, 1]
const array4 = [3, 3, 3, 4]
const k2 = 5

console.log(twoArrays(k1, array1, array2))
console.log(twoArrays(k2, array3, array4))