import React, { Component } from 'react'
import { GameModesContainer } from '../styles/GameModesStyles'

const bingoGameModes = {
  line: 'five-mode',
  x: 'x-mode',
  blackout: 'blackout',
  fourCorners: 'four-mode',
}

let numbers = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'B9',
  'B10',
  'B11',
  'B12',
  'B13',
  'B14',
  'B15',
  'I16',
  'I17',
  'I18',
  'I19',
  'I20',
  'I21',
  'I22',
  'I23',
  'I24',
  'I25',
  'I26',
  'I27',
  'I28',
  'I29',
  'I30',
  'N31',
  'N32',
  'N33',
  'N34',
  'N35',
  'N36',
  'N37',
  'N38',
  'N39',
  'N40',
  'N41',
  'N42',
  'N43',
  'N44',
  'N45',
  'G46',
  'G47',
  'G48',
  'G49',
  'G50',
  'G51',
  'G52',
  'G53',
  'G54',
  'G55',
  'G56',
  'G57',
  'G58',
  'G59',
  'G60',
  'O61',
  'O62',
  'O63',
  'O64',
  'O65',
  'O66',
  'O67',
  'O68',
  'O69',
  'O70',
  'O71',
  'O72',
  'O73',
  'O74',
  'O75',
]

export default class GameModes extends Component {
  state = {
    bingoBall: '',
  }

  getBingoBalls = async (e, arr) => {
    e.preventDefault()
    let ballToPull = this.state.bingoBall
    if (arr.length === 0) {
      ballToPull = 'All Done!'
    } else {
      let randomNumber = await Math.floor(Math.random() * arr.length)
      ballToPull = await numbers[randomNumber]
      arr.splice(randomNumber, 1)
    }
    this.setState({
      bingoBall: ballToPull,
    })
  }

  resetBingoBalls = (e) => {
    e.preventDefault()
    let ballToPull = ''
    const bingoNumbers = [
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'B8',
      'B9',
      'B10',
      'B11',
      'B12',
      'B13',
      'B14',
      'B15',
      'I16',
      'I17',
      'I18',
      'I19',
      'I20',
      'I21',
      'I22',
      'I23',
      'I24',
      'I25',
      'I26',
      'I27',
      'I28',
      'I29',
      'I30',
      'N31',
      'N32',
      'N33',
      'N34',
      'N35',
      'N36',
      'N37',
      'N38',
      'N39',
      'N40',
      'N41',
      'N42',
      'N43',
      'N44',
      'N45',
      'G46',
      'G47',
      'G48',
      'G49',
      'G50',
      'G51',
      'G52',
      'G53',
      'G54',
      'G55',
      'G56',
      'G57',
      'G58',
      'G59',
      'G60',
      'O61',
      'O62',
      'O63',
      'O64',
      'O65',
      'O66',
      'O67',
      'O68',
      'O69',
      'O70',
      'O71',
      'O72',
      'O73',
      'O74',
      'O75',
    ]
    numbers = bingoNumbers
    this.setState({
      bingoBall: ballToPull,
    })
  }

  render() {
    return (
      <div>
        {this.props.haveYouWon ? (
          <div></div>
        ) : (
          <GameModesContainer>
            <h1 className='game-modes-title'>Game Modes</h1>
            <div className='game-modes-div'>
              <button
                className={this.props.selectedGameMode === 'five-mode' ? 'game-modes-btn button five-mode' : 'game-modes-btn button'}
                onClick={(e) => this.props.setGameMode(e, bingoGameModes.line)}
              >
                Five in a Row
              </button>
              <button className={this.props.selectedGameMode === 'x-mode' ? 'game-modes-btn button x-mode' : 'game-modes-btn button'} onClick={(e) => this.props.setGameMode(e, bingoGameModes.x)}>
                X
              </button>
              <button
                className={this.props.selectedGameMode === 'blackout' ? 'game-modes-btn button blackout-mode' : 'game-modes-btn button'}
                onClick={(e) => this.props.setGameMode(e, bingoGameModes.blackout)}
              >
                Blackout
              </button>
              <button
                className={this.props.selectedGameMode === 'four-mode' ? 'game-modes-btn button four-mode' : 'game-modes-btn button'}
                onClick={(e) => this.props.setGameMode(e, bingoGameModes.fourCorners)}
              >
                4 Corners
              </button>
            </div>
            <div className='bingo-jefe-container'>
              <h1 className='game-modes-title'>You the BINGO Jefe?</h1>
              <div>
                <button className='button shuffle-btn' onClick={(e) => this.getBingoBalls(e, numbers)}>
                  SHUFFLE!
                </button>
                <button className='button shuffle-btn' onClick={(e) => this.resetBingoBalls(e)}>
                  Reset SHUFFLE!
                </button>
              </div>
              <p className='bingo-ball'>{this.state.bingoBall}</p>
            </div>
          </GameModesContainer>
        )}
      </div>
    )
  }
}
