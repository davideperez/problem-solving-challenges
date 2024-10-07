# Permuting 
There are two -element arrays of integers, A and B . Permute them into some  A' and B' such that the relation `A[i] + B'[i]` holds for all  where `0 <= i < n`.

There will be  queries consisting of A, B , and k. For each query, return `YES` if some permutation `A', B'`,  satisfying the relation exists. Otherwise, return `NO`.

**Example**  
  `A = [0,1]`
  `B = [0,2]`
  `k = 1`

A valid `A', B'` is `A' = [1,0]`  and `B = [0, 2]: `:  and . Return `YES`.

**Function Description**

Complete the _twoArrays_ function in the editor below. It should return a string, either `YES` or `NO`.

twoArrays has the following parameter(s):

- _int k:_ an integer
- _int A\[n\]:_ an array of integers
- _int B\[n\]:_ an array of integers

**Returns**  
- _string:_ either `YES` or `NO`

**Input Format**

The first line contains an integer *q*, the number of queries.

The next *q* sets of *3* lines are as follows:

- The first line contains two space-separated integers *n* and *k*, the size of both arrays A and B, and the relation variable.
- The second line contains  space-separated integers A[i].
- The third line contains  space-separated integers B[i].

**Constraints**
`1 <= q <= 10`
`1 <= n <= 1000`
`1 <= k <= 10^9`
`0 <= A[i], B[i] <= 10^9`
**Sample Input**

```
STDIN       Function
-----       --------
2           q = 2
3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]
4 5         A[] and B[] size n = 4, k = 5
1 2 2 1     A = [1, 2, 2, 1]
3 3 3 4     B = [3, 3, 3, 4]
```

**Sample Output**

```
YES
NO
```

**Explanation**

There are two queries:

1. Permute these into `A' = [1, 2, 3]` and  `B' = [9, 8, 7]` so that the following statements are true:
`A[0] + B[1] = 1 + 9 = 10 >= k`
`A[1] + B[1] = 2 + 8 = 10 >= k`
`A[2] + B[2] = 3 + 7 = 10 >= k`
    
2. `A = [1,2,2,1,], B = [3,3,3,4]`  and `k = 5`. To permute A and B into a valid A'  and B', there must be at least three numbers in A that are greater than 1.