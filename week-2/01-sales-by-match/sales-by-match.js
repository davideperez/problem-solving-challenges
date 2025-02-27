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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

// const myArr = [1,2,1,2,1,3,2]

function sockMerchant(n, ar) {
  // Write your code here
  let pairFounds = {}

  // 1. Create a dictionary where its keys are the unique numbers on the
  // array. And its values are the amount of times the number is repeated on the array.
  // 2. Iterate over the original array and count over the dictionary
  // the amount of times each number appear on the array.
  // 3. Iterate over the dictionary and add the result of applying module
  //  two of every value.

  // Por cada numero chequear

  for (let i = 0; i <= ar.length; i++) {
    if (pairFounds[ar[i]] === ar[i]) {
      pairFounds[ar[i]] += 1;
    } else {
      pairFounds[ar[i]] = 1;
    }
  }

  console.log('Cuenta final: ', pairFounds)
  return pairFounds;
}


/* function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
} */

// 

const myArr = [1,2,1,2,1,3,2]

sockMerchant(myArr.length, myArr)