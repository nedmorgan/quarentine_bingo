import React, { Component } from 'react'
import { GameModesContainer } from '../styles/GameModesStyles'

const bingoGameModes = {
  line: 'five-mode',
  x: 'x-mode',
  blackout: 'blackout',
  fourCorners: 'four-mode',
}

export default class GameModes extends Component {
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
                className={
                  this.props.selectedGameMode === 'five-mode'
                    ? 'game-modes-btn button five-mode'
                    : 'game-modes-btn button'
                }
                onClick={(e) => this.props.setGameMode(e, bingoGameModes.line)}
              >
                Five in a Row
              </button>
              <button
                className={
                  this.props.selectedGameMode === 'x-mode'
                    ? 'game-modes-btn button x-mode'
                    : 'game-modes-btn button'
                }
                onClick={(e) => this.props.setGameMode(e, bingoGameModes.x)}
              >
                X
              </button>
              <button
                className={
                  this.props.selectedGameMode === 'blackout'
                    ? 'game-modes-btn button blackout-mode'
                    : 'game-modes-btn button'
                }
                onClick={(e) =>
                  this.props.setGameMode(e, bingoGameModes.blackout)
                }
              >
                Blackout
              </button>
              <button
                className={
                  this.props.selectedGameMode === 'four-mode'
                    ? 'game-modes-btn button four-mode'
                    : 'game-modes-btn button'
                }
                onClick={(e) =>
                  this.props.setGameMode(e, bingoGameModes.fourCorners)
                }
              >
                4 Corners
              </button>
            </div>
          </GameModesContainer>
        )}
      </div>
    )
  }
}
