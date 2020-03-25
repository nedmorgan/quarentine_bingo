import React from 'react'
import './App.css'
import Board from './components/Board'
import Rules from './components/Rules'

function App() {
  return (
    <div className='App'>
      <h1 className='game-title'>Quarentine</h1>
      <Rules />
      <Board />
    </div>
  )
}

export default App
