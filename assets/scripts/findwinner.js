const gamelogic = require('./gamelogic')
const cells = gamelogic.cells
const findWinner = function () {
  // I know this is ugly and ridiculous! but I think it will work. This if statement checks if the winning combinations have the same player in those cells
  if (cells[0] === cells[1] && cells[0] === cells[2]) { // ||
// (cells[1] === cells[4] && cells[5] === cells[4]) ||
// (cells[6] === cells[7] && cells[8] === cells[7]) ||
// (cells[0] === cells[3] && cells[6] === cells[3]) ||
// (cells[1] === cells[4] && cells[7] === cells[4]) ||
// (cells[2] === cells[5] && cells[8] === cells[5]) ||
// (cells[0] === cells[4] && cells[8] === cells[4]) ||
// (cells[6] === cells[4] && cells[2] === cells[4]))
    const player = cells[0]
    console.log('Winner is ' + player + '!!')
    return player
  }
}

module.exports = {
  findWinner
}
