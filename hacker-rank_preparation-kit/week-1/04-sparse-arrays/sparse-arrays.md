# Sparse Array

There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

**Example**

  `strings = ['ab', 'ab', 'abc']`
  `queries = ['ab', 'abc', 'bc']`

There are 2 instances of 'ab',  of 'abc' and 0 of 'bc'. For each query, add an element to the return array,  `results = [2,1,0]`.

**Function Description**

Complete the function _matchingStrings_ in the editor below. The function must return an array of integers representing the frequency of occurrence of each query string in _strings_.

matchingStrings has the following parameters:

- _string strings[n]_ - an array of strings to search
- _string queries[q]_ - an array of query strings

**Returns**
- _int[q]:_ an array of results for each query

**Input Format**
The first line contains and integer , the size of `strings[]`.  
Each of the next  lines contains a string `strings[i]`.  
The next line contains , the size of `queries[]`.  
Each of the next  lines contains a string `queries[i]`.

**Constraints**
`1 <= n <= 1000`
`1 <= q <= 1000`
`1 <= |string[i]|, |queries[i]|,  <= 20`

## 1
**Sample Input 1**
`const string = ['aba', 'baba', 'aba', 'xzxb']`
`const queries = ['aba','xzxb', 'ab']`

**Sample Output 1**
 `[2, 1, 0 ]`

## 2
**Sample Input 2**
`const string = ['def', 'de', 'fgh', 'xzxb']`
`const queries = ['de','lmn', 'fgh']`
**Sample Output 2**
`[ 1, 0, 1 ]`

## 3
**Sample Input 3**
`const string = ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf']`
`const queries = ['abcde','sdaklfj', 'asdjf', 'na', 'basdn']`
**Sample Output 3**
`[ 1, 3, 4, 3, 2 ]`
