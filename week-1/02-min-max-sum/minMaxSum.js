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
}
 */


/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let sortedArray = []
  let minSum = 0
  let maxSum = 0
  
  // sorts the array
  function bubbleSort (arr) {
      let sortedArray = arr
      for (let i = sortedArray.length; i > 0; i--) {
          let noSwap = true
          for (let j = 0; j < i - 1; j++) {
              if (sortedArray[j] > sortedArray[j+1]) {
                  [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]]
                  noSwap = false
              }
          }
          if (noSwap) {
              break
          }
      }
      return sortedArray
  }
  
  sortedArray = bubbleSort(arr)

  // calculates the min sum
  for (let i = 0; i < sortedArray.length - 1; i++) {
      minSum = minSum + sortedArray[i]
  }
  
  // calculates the max sum
  for (let i = 1; i < sortedArray.length; i++) {
      maxSum = maxSum + sortedArray[i]
  }
  
  console.log(minSum, maxSum)
}
/* 
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

main()
 */



const myArr = [1,2,3,4,5]

miniMaxSum(myArr)