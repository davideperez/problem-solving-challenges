
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
// -------------------------------------------------------------------------

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */


function flippingBits(n) {
  let myBinaryNumberArr = []
  let my32binaryNumber = []
  let myFlippedBinaryNumber = []
  let unsignedInteger
  
  // Converts the input integer from decimal to binary
  function dec2Bin(decimalInteger) {
      let binaryNumber = []
      
      while(decimalInteger !== 0) {
          // Anoto el resto de la division
          binaryNumber.push(Math.floor(decimalInteger % 2))
          // Actualizo n con el cociente de la division
          decimalInteger = Math.floor(decimalInteger / 2)
      }

      // Invertir el array
      function reverseArray(arr) {
          // Se crean 2 punteros, uno en cada extremo.
          let start = 0;
          let end = arr.length - 1;
          
          while (start < end) {
              // Swap elements
              let temp = arr[start];
              arr[start] = arr[end];
              arr[end] = temp;
      
              // Se mueven los punteros hacia el centro
              start++;
              end--;
          }
      
          return arr;
      }
      binaryNumber = reverseArray(binaryNumber)
      return binaryNumber
  }
  myBinaryNumberArr = dec2Bin(n)
  
  // Converts the binary number onto a 32 bit one
  function binaryTo32binary (binaryNumber) {
      if (binaryNumber.length < 32) {
          let remainingBits = 0
          
          remainingBits = 32 - binaryNumber.length
          for (let i = 0; i < remainingBits; i++) {
              binaryNumber.unshift(0)
          }
          return binaryNumber
      } else {
          return binaryNumber
      }
  }
  
  my32binaryNumber = binaryTo32binary(myBinaryNumberArr)
  
  // Flips the bits of the binary number
  function flipBinaryBits(binaryNumber) {
      for (let i = 0; i < binaryNumber.length; i++ ) {
          if(binaryNumber[i] === 0) {
              binaryNumber[i] = 1
          } else {
              binaryNumber[i] = 0
          }
      }
              
      return binaryNumber 
  }
  
  myFlippedBinaryNumber = flipBinaryBits(my32binaryNumber)
  
  // Converts a binary number to a decimal one
  function bin2dec(binaryNumber) {
      let decimalNumber = 0
      for (let i = 0; i < binaryNumber.length; i++) {
          decimalNumber = decimalNumber + binaryNumber[binaryNumber.length - 1 - i]*2**i
      }
      return decimalNumber
  }
  
  unsignedInteger = bin2dec(myFlippedBinaryNumber)
  
  return unsignedInteger
}

// -------------------------------------------------------------------------
/* 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
} */

// -------------------------------------------------------------------------

console.log(1 , ' flipped its bits, is: ', flippingBits(1))
console.log(2 , ' flipped its bits, is: ', flippingBits(2))
console.log(3 , ' flipped its bits, is: ', flippingBits(3))
console.log(4 , ' flipped its bits, is: ', flippingBits(4))
console.log(5 , ' flipped its bits, is: ', flippingBits(5))
console.log(6 , ' flipped its bits, is: ', flippingBits(6))
console.log(7 , ' flipped its bits, is: ', flippingBits(7))
console.log(8 , ' flipped its bits, is: ', flippingBits(8))
console.log(9 , ' flipped its bits, is: ', flippingBits(9))
console.log(10, ' flipped its bits, is: ', flippingBits(10))