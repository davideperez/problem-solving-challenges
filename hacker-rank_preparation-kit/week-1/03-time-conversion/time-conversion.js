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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let newTime
  // case 12 and AM => sacar AM y remplazar 12 por 00
  if (s.startsWith('12') && s.endsWith('AM')) {
    newTime = "00" + s.slice(2, s.length - 2)
  }
  // case no 12 y AM, sacar AM
  if (!s.startsWith('12') && s.endsWith('AM')) {
    newTime = s.slice(0, s.length - 2)
  }
  // case 12 and PM =>
  if (s.startsWith('12') && s.endsWith('PM')) {
    newTime = s.slice(0, s.length - 2)
  }
  // case no 12 y PM => y sacar PM y sumarle 12 a los primeros 2 digitos.
  if (!s.startsWith('12') && s.endsWith('PM')) {
    newTime = Number(s.slice(0, 2)) + 12 + s.slice(2, s.length - 2)
  }

  return newTime
}

/* 
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

main() */

console.log(timeConversion("09:25:10AM"))
console.log(timeConversion("09:25:10PM"))
console.log(timeConversion("12:25:10AM"))
console.log(timeConversion("12:25:10PM"))
