import React from 'react'
import './App.css'
import Board from './components/Board'
import Rules from './components/Rules'

function App() {
  return (
    <div className='App'>
      <div className='game-objects'>
        <div className='empty-div'></div>
        <Board />
        <Rules />
      </div>
    </div>
  )
}

export default App
