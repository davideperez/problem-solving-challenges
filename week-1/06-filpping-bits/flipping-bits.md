
# Flipping Bits
You will be given a list of 32 bit unsigned integers. Flip all the bits (`1 --> 0`  and `0 --> 1` ) and return the result as an unsigned integer.

**Example**  
$$n = 09_{10}​​$$

$$09_{10} = 1001_{2}​​$$
- We're working with 32 bits, so:
$$00000000000000000000000000001001_{2}​​ = 09_{10}$$
$$11111111111111111111111111110110_{2}​​ = 4294967286_{10}$$
Return 4294967286.

**Function Description**

Complete the _flippingBits_ function in the editor below.

flippingBits has the following parameter(s):

- _int n:_ an integer

**Returns**

- _int:_ the unsigned decimal integer result

**Input Format**

The first line of the input contains , the number of queries.  
Each of the next  lines contain an integer, , to process.

**Constraints**
`1 <= q <= 100`
`0 <= n <= 2^32`

**Sample Input**
```
3 
2147483647 
1 
0
```

**Sample Output**
```
2147483648 
4294967294 
4294967295
```

**Explanation**
Take _1_ for example, as unsigned 32-bits is _00000000000000000000000000000001_ and doing the flipping we get _11111111111111111111111111111110_ which in turn is _4294967294_.
