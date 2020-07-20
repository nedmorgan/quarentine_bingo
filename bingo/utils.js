export const gamePlayModes = {
  line: [
    ['B0', 'B1', 'B2', 'B3', 'B4'],
    ['I0', 'I1', 'I2', 'I3', 'I4'],
    ['N0', 'N1', 'N2', 'N3', 'N4'],
    ['G0', 'G1', 'G2', 'G3', 'G4'],
    ['O0', 'O1', 'O2', 'O3', 'O4'],
    ['B0', 'I0', 'N0', 'G0', 'O0'],
    ['B1', 'I1', 'N1', 'G1', 'O1'],
    ['B2', 'I2', 'N2', 'G2', 'O2'],
    ['B3', 'I3', 'N3', 'G3', 'O3'],
    ['B4', 'I4', 'N4', 'G4', 'O4'],
    ['B0', 'I1', 'N2', 'G3', 'O4'],
    ['B4', 'I3', 'N2', 'G1', 'O0'],
  ],
  x: ['B0', 'I1', 'N2', 'G3', 'O4', 'O0', 'G1', 'I3', 'B4'],
  blackout: ['B0', 'B1', 'B2', 'B3', 'B4', 'I0', 'I1', 'I2', 'I3', 'I4', 'N0', 'N1', 'N2', 'N3', 'N4', 'B0', 'G1', 'G2', 'G3', 'G4', 'O0', 'O1', 'O2', 'O3', 'O4'],
  fourCorners: ['B0', 'B4', 'O0', 'O4'],
}

export const gameModes = {
  line: 'five-mode',
  x: 'x-mode',
  blackout: 'blackout',
  fourCorners: 'four-mode',
}

export const testSelectedSquares = {
  lineTest1: ['B0', 'B1', 'B2', 'B3', 'B4', 'N2'], // True
  lineTest2: ['G1', 'B1', 'B2', 'B3', 'B4', 'I2', 'N2', 'O3'], // False
  lineTest3: ['G1', 'B1', 'B3', 'I2', 'N2', 'O3', 'O4', 'G3', 'I1', 'B0'], // True
  blackoutTest1: ['B0', 'B1', 'B2', 'B3', 'B4', 'I0', 'I1', 'I2', 'I3', 'I4', 'N0', 'N1', 'N2', 'N3', 'N4', 'B0', 'G1', 'G2', 'G3', 'G4', 'O0', 'O1', 'O2', 'O3', 'O4'], // True
  blackoutTest2: ['B0', 'B1', 'B2', 'B3', 'B4', 'I0', 'I2', 'I3', 'I4', 'N0', 'N1', 'N2', 'N4', 'B0', 'G1', 'G2', 'G3', 'G4', 'O0', 'O2', 'O3', 'O4'], // False
  blackoutTest3: ['B0', 'B1', 'B2', 'G1', 'G2', 'G3', 'G4', 'O0', 'O2', 'O3', 'O4'], // False
  xModeTest1: ['B1', 'O1', 'B0', 'I1', 'N2', 'G3', 'O4', 'O0', 'G1', 'I3', 'B4', 'N0', 'N4', 'G0', 'I4'], // True
  xModeTest2: ['B1', 'O1', 'B0', 'I1'], // False
  xModeTest3: ['B1', 'O1', 'B0', 'I1', 'N2', 'G3', 'O4', 'O0', 'G1', 'I3', 'B4', 'N0', 'N4', 'G0', 'I4', 'I2', 'N3'], // True
  fourCornersTest1: ['N2', 'G2', 'I4', 'O2', 'B0', 'B4', 'O0', 'O4'], // True
  fourCornersTest2: ['N2', 'G2', 'I4', 'O2', 'B0', 'B4', 'O0', 'O4', 'N4', 'I1', 'N0', 'G4'], // True
  fourCornersTest3: ['N2', 'G2', 'I4', 'O2', 'B0', 'B4', 'I2', 'B3', 'G2', 'N3'], // False
}

export const checkLineMode = async (selectedSquares, winningSquares, gameMode) => {
  if (gameMode === 'five-mode') {
    let hasWon
    for (let i = 0; i < winningSquares.line.length; i++) {
      hasWon = await winningSquares.line[i].every((square) => selectedSquares.includes(square))
      return hasWon
    }
  }
}

export const checkXMode = async (selectedSquares, winningSquares, gameMode) => {
  if (gameMode === 'x-mode') {
    let hasWon
    hasWon = await winningSquares.x.every((square) => selectedSquares.includes(square))
    return hasWon
  }
}

export const checkBlackoutMode = async (selectedSquares, winningSquares, gameMode) => {
  if (gameMode === 'blackout') {
    let hasWon
    hasWon = await winningSquares.blackout.every((square) => selectedSquares.includes(square))
    return hasWon
  }
}

export const checkFourCornersMode = async (selectedSquares, winningSquares, gameMode) => {
  if (gameMode === 'four-mode') {
    let hasWon
    hasWon = await winningSquares.fourCorners.every((square) => selectedSquares.includes(square))
    return hasWon
  }
}
