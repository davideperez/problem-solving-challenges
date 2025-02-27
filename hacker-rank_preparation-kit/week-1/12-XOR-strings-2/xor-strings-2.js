function xorString(input) {
  let xorArray = []
  
  let stringLines = input.split('\n')

  let s = stringLines[0]
  let t = stringLines[1]

  for (let i = 0; i <= s.length -1; i++) {
    s[i] !== t[i] ? xorArray.push(1) : xorArray.push(0)
  }
  
  return xorArray.join('').toString()
}

const input = '10101\n00101'

console.log(xorString(input))