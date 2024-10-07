/* 'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Analizes the arr and counts the three types of numbers.
  let positiveNumbers = 0
  let negativeNumbers = 0
  let neutralNumbers = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]> 0) {
      positiveNumbers += 1
    } else if (arr[i] < 0) {
      negativeNumbers += 1
    } else {
      neutralNumbers += 1
    }
  }
  
  //calculates the ratios
  const ratioOfPositives = (positiveNumbers / arr.length).toFixed(6)
  const ratioOfNegatives = (negativeNumbers / arr.length).toFixed(6)
  const ratioOfNeutrals = (neutralNumbers / arr.length).toFixed(6)

  return console.log(ratioOfPositives,'\n', ratioOfNegatives, '\n', ratioOfNeutrals)

}

/* function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

main() */


/* ---   --- */

const myArr = [1,1,0,-1,-1]

plusMinus(myArr)