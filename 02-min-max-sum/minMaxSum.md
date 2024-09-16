# Problem
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
**Example**
`arr=[1,3,5,7,9]`
The minimum sum is `1+3+5+7=16` and the maximum sum is `3+5+7+9=24` . The function prints

```
16 24
```

**Function Description**
Complete the _miniMaxSum_ function in the editor below.
miniMaxSum has the following parameter(s):
- _arr_: an array of 5 integers

**Print**
Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

**Input Format**

A single line of five space-separated integers.

**Constraints**
`1 <= arr[i] <= 10^9`
**Output Format**

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly _four_ of the five integers. (The output can be greater than a 32 bit integer.)

**Sample Input**

```
1 2 3 4 5
```

**Sample Output**

```
10 14
```

**Explanation**

The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

1. Sum everything except 1, the sum is `2+3+4+5=14`.
2. Sum everything except 2, the sum is `1+3+4+5=13`.
3. Sum everything except 3, the sum is `1+2+4+5=12`.
4. Sum everything except 4, the sum is `1+2+3+5=11`.
5. Sum everything except 5, the sum is `1+2+3+4=10`.

**Hints:** Beware of integer overflow! Use 64-bit Integer.
# Solution
```
# Solution
- *Sort* the array.
- Do an *iterative sum* of the sorted array except for the first value, to get the max sum. 
- Do an *iterative sum* of the sorted array except for the last value, to get the min sum.
```

```js
'use strict';

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

//--------------------------------------------------------

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

main()
```