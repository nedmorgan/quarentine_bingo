const gamePlayModes = require('../utils.js')
const gameModes = require('../utils.js')
const testSelectedSquares = require('../utils.js')
const checkBlackoutMode = require('../utils.js')
const checkFourCornersMode = require('../utils.js')
const checkLineMode = require('../utils.js')
const checkXMode = require('../utils.js')

test('Testing five in a row, Test 1', () => {
  expect(checkLineMode(testSelectedSquares.lineTest1, gamePlayModes.line, gameModes.line)).toBe(true)
})
