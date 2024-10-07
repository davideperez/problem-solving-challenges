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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  console.log('arr: ', arr)
  let principalDiagonal = []
  let secondaryDiagonal = []
  
  // gets the principal diagonal array
  function getMatrixPrincipalDiagonal (aSquaredMatrix) {
    for (let i = 0; i < aSquaredMatrix.length; i++) {
      for (let j = 0; j < aSquaredMatrix.length; j++) {
        if (i === j) {
          principalDiagonal.push(aSquaredMatrix[i][j])
        }
      }
    }
    return principalDiagonal
  }

  principalDiagonal = getMatrixPrincipalDiagonal(arr)
  console.log('principalDiagonal: ', principalDiagonal)
  
  // gets the secondary diagonal array
  function getMatrixSecondaryDiagonal (aSquaredMatrix) {
    for (let i = 0; i < aSquaredMatrix.length; i++) {
      for (let j = aSquaredMatrix.length; j >= 0; j--) {
        if (j === aSquaredMatrix.length - 1 - i) {
          secondaryDiagonal.push(aSquaredMatrix[i][j])
        }
      }
    }
    return secondaryDiagonal
  }

  secondaryDiagonal = getMatrixSecondaryDiagonal(arr)
  console.log('secondaryDiagonal: ', secondaryDiagonal)
  
  // sums the diagonals values and returns its difference

  function differenceOfTheSumOfTwoArrays(arr1, arr2) {
    let sumOfArr1 = 0
    let sumOfArr2 = 0

    // sum with for
    for (let i =0; i < arr1.length; i++) {
      sumOfArr1 = sumOfArr1 + arr1[i]
    }

    // sum with reduce
    sumOfArr2 = arr2.reduce(
	    (accumulator, currentValue) => accumulator + currentValue,
	     0
	)

    let result = sumOfArr1 - sumOfArr2

    if (result < 0) {
      result = result * -1
    }
    
    return result
  }

  let differenceResult = differenceOfTheSumOfTwoArrays(principalDiagonal, secondaryDiagonal)
  return differenceResult
}

/* 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp =>  parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
 */

const myMatrix = [
  [10,9,3],
  [4,6,4],
  [10,9,7],
]

console.log(diagonalDifference(myMatrix))
