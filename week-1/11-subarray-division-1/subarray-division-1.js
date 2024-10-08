function birthday (s, d, m) {
  let subArray
  let posibleDivisions = 0

  for (let i = 0; i <= s.length - m; i++ ) {
    subArray = s.slice(i, i + m)

    let sumaArray = subArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )
    
    if (sumaArray === d) {
      posibleDivisions += 1
    }
  }

  return posibleDivisions
}


const chocolate1 = [2,2,1,3,2]

birthday(chocolate1, 4, 2)


