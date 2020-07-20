import React, { Component } from 'react'
import './App.css'
import Board from './components/Board'
import Rules from './components/Rules'
import GameModes from './components/GameModes'

export default class App extends Component {
  state = {
    selectedCards: [],
    selectedGameMode: '',
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

  render() {
    return (
      <div className='App'>
        <div className='game-objects'>
          <GameModes
            selectedGameMode={this.state.selectedGameMode}
            setGameMode={this.setGameMode}
          />
          <Board getBoardState={this.getBoardState} />
          <Rules />
        </div>
      </div>
    )
  }
}
