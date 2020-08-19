import React, { Component } from 'react'
import './App.css'
import Board from './components/Board'
import Rules from './components/Rules'
import GameModes from './components/GameModes'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    selectedCards: [],
    selectedGameMode: '',
    gamePlayModes: {
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
    },
    haveYouWon: false,
  }

  resetWinner = () => {
    let haveYouWon = this.state.haveYouWon
    haveYouWon = false
    this.setState({ haveYouWon })
  }

  resetGameMode = () => {
    let currentGameMode = this.state.selectedGameMode
    currentGameMode = ''
    this.setState({ selectedGameMode: currentGameMode })
  }

  getBoardState = (cards) => {
    let boardCards = cards
    this.setState({ selectedCards: boardCards })
  }

  setGameMode = (e, mode) => {
    e.preventDefault()
    let gameMode = this.state.selectedGameMode
    gameMode = mode
    this.setState({ selectedGameMode: gameMode })
  }

  checkGameStatus = async (selectedSquares, winningSquares, gameMode) => {
    let hasWon = false
    if (gameMode === 'five-mode') {
      for (let i = 0; i < winningSquares.line.length; i++) {
        hasWon = await winningSquares.line[i].every((square) => selectedSquares.includes(square))
        this.setState((state) => {
          return { haveYouWon: hasWon }
        })
        if (hasWon === true) {
          return
        }
      }
    } else if (gameMode === 'x-mode') {
      hasWon = await winningSquares.x.every((square) => selectedSquares.includes(square))
      this.setState((state) => {
        return { haveYouWon: hasWon }
      })
    } else if (gameMode === 'blackout') {
      hasWon = await winningSquares.blackout.every((square) => selectedSquares.includes(square))
      this.setState((state) => {
        return { haveYouWon: hasWon }
      })
    } else if (gameMode === 'four-mode') {
      hasWon = await winningSquares.fourCorners.every((square) => selectedSquares.includes(square))
      this.setState((state) => {
        return { haveYouWon: hasWon }
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='game-objects'>
          <GameModes selectedGameMode={this.state.selectedGameMode} setGameMode={this.setGameMode} haveYouWon={this.state.haveYouWon} />
          <Board
            getBoardState={this.getBoardState}
            checkGameStatus={this.checkGameStatus}
            resetWinner={this.resetWinner}
            resetGameMode={this.resetGameMode}
            gamePlayModes={this.state.gamePlayModes}
            selectedGameMode={this.state.selectedGameMode}
            haveYouWon={this.state.haveYouWon}
          />
          <Rules haveYouWon={this.state.haveYouWon} />
        </div>
        <Footer haveYouWon={this.state.haveYouWon} />
      </div>
    )
  }
}
