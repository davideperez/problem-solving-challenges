const myNumbers = [1, 1, 2, 2, 9, 3, 3, 4, 4, 6, 6, 6, 2, 4, 5, 5];

function findUniqueInteger(arr) {
  let dict = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (!dict[arr[i]]) {
      dict[arr[i]] = 1;
    } else {
      dict[arr[i]] += 1;
    }
  }
  
  console.log('dict: ', dict)
  
  const returnUniqueInteger = () => {
    for (let key in dict) {
      if (dict[key] === 1) return key
    }
    return 'There are no unique integers in this array.'
  }

  const uniqueInteger = returnUniqueInteger()
  
  return uniqueInteger
}

console.log('The unique integer is: ', findUniqueInteger(myNumbers))
