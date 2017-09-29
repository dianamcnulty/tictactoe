// const gamelogic = require('./gamelogic')

const findWinner = function (cells) {
  // console.log(cells)
  // I know this is ugly and ridiculous! but I think it will work. This if statement checks if the winning combinations have the same player in those cells
  if (cells[0]) {
    if ((cells[0] === cells[1] && cells[0] === cells[2]) ||
    (cells[0] === cells[3] && cells[0] === cells[6])) {
      const player = cells[0]
      return player
    }
  }
  if (cells[4]) {
    if ((cells[3] === cells[4] && cells[3] === cells[5]) ||
      (cells[1] === cells[4] && cells[1] === cells[7]) ||
    (cells[6] === cells[4] && cells[6] === cells[2]) ||
    (cells[0] === cells[4] && cells[0] === cells[8])) {
      const player = cells[4]
      return player
    }
  }
  if (cells[8]) {
    if ((cells[6] === cells[7] && cells[8] === cells[7]) ||
    (cells[2] === cells[5] && cells[2] === cells[8])) {
      const player = cells[8]
      return player
    }
  }
  // if (cells[0]) {
  //   if (cells[0] === cells[3] && cells[0] === cells[6]) {
  //     const player = cells[0]
  //     return player
  //   }
  // }
  // if (cells[4]) {
  //   if (cells[1] === cells[4] && cells[1] === cells[7]) {
  //     const player = cells[1]
  //     return player
  //   }
  // }
  // if (cells[8]) {
  //   if (cells[2] === cells[5] && cells[2] === cells[8]) {
  //     const player = cells[8]
  //     return player
  //   }
  // }
  // if (cells[0]) {
  //   if (cells[0] === cells[4] && cells[0] === cells[8]) {
  //     const player = cells[0]
  //     return player
  //   }
  // }
  // if (cells[4]) {
  //   if (cells[6] === cells[4] && cells[6] === cells[2]) {
  //     const player = cells[6]
  //     return player
  //   }
  // }
}
module.exports = {
  findWinner
}
