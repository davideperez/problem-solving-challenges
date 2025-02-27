// 

function bomberMan (n, grid) {
  let timer = n
  // 1. Initially, Bomberman arbitrarily plants bombs in some of the cells, the initial state.
  
  function plantBombs (myGrid, random) {
    let newGrid = myGrid.map((line)=> {
  
      let newLine = line.split('')
  
      let newLineBombed = newLine.map((position) => {
        if (random) {
          randomNumber = Math.random()
          
          if (position === '.' && randomNumber < 0.5) {
            position = 'O'
          }
          // console.log('randonNumber = ', randomNumber)
        } else {
          position = 'O'
        }

        return position
      })
      newLineBombed = newLineBombed.join('')
      return newLineBombed
    })

    return newGrid
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }



  function explodeGrid (gridToExplode) {

    for (let i = 0; i < gridToExplode.length; i++) {
      for (let j = 0; j < gridToExplode[i].length; j++) {
        if (gridToExplode[i][j] === '0') {
          gridToExplode[i][j] !== undefined ? gridToExplode[i][j].replace('0','.') : null
          gridToExplode[i - 1][j] !== undefined ? gridToExplode[i -1][j].replace('0','.') : null
          gridToExplode[i + 1][j] !== undefined ? gridToExplode[i +1][j] = '.' : null
          gridToExplode[i][j + 1] !== undefined ?  gridToExplode[i][j + 1] = '.' : null
          gridToExplode[i][j - 1] !== undefined ?  gridToExplode[i][j - 1] = '.' : null
        }
      }
    }

    return explodedGrid
  }

  let randomBombedGrid = plantBombs(grid, true)

  console.log('randomBombedGrid : ', randomBombedGrid)

  // 2. After one second, Bomberman does nothing.
  if (timer >= 1) {
    setTimeout(() => {
      console.log('1 seconds elapsed')
      timer = timer - 1
    }, '1000')
  } else {
    return randomBombedGrid
  }

  // 3. After one more second, Bomberman plants bombs in all cells without bombs, 
  // thus filling the whole grid with bombs. No bombs detonate at this point.
 
  if (timer >= 1) {
    setTimeout(() => {
      let fullBombedGrid = plantBombs(grid, false)
      console.log('fullBombedGrid full bombs:   ', fullBombedGrid)
      console.log('2 seconds elapsed')
    }, '1000')
  } else {
    return fullBombedGrid
  }

  // Fills the grid with bombs
  
}

// TESTS

function explodeGridTest (gridToExplode) {

  for (let i = 0; i < gridToExplode.length; i++) {
    let explodedGrid = []
    for (let j = 0; j < gridToExplode[i].length; j++) {
      // console.log('gridToExplode[i][j]: ', gridToExplode[i][j])
      if (gridToExplode[i][j] === '0') {
        gridToExplode[i][j] !== undefined ? gridToExplode[i].replace('0','.') : null
        // 1
        console.log('gridToExplode[i -1][j], pre: ', gridToExplode[i -1][j])
        gridToExplode[i - 1][j] !== undefined ? gridToExplode[i -1].replace('0','.') : null
        console.log('gridToExplode[i -1][j], post: ', gridToExplode[i -1][j])
        // 2
        gridToExplode[i + 1][j] !== undefined ? gridToExplode[i +1][j] = '.' : null
        gridToExplode[i][j + 1] !== undefined ?  gridToExplode[i][j + 1] = '.' : null
        gridToExplode[i][j - 1] !== undefined ?  gridToExplode[i][j - 1] = '.' : null
      } else {
        
      }
    }
  }

  return gridToExplode
}

const grid = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']
const grid2 = [
  '1234567',
  '1230567',
  '1200067',
  '1230567',
  '1234567',
  '1234567'
]

const grid3 = [
  '.......',
  '...0...',
  '..000..',
  '...0...',
  '.......',
  '.....0.'
]

console.log('Grid to explode: ', grid3)
console.log('Exploded grid: ', explodeGridTest(grid2))

// console.log('grid raw: ', grid)

// bomberMan(3, grid)
