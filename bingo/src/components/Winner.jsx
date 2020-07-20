import React, { Component } from 'react'
import { WinnerContainer } from '../styles/WinnerStyles'

export default class Winner extends Component {
  componentDidMount() {
    const timer = setTimeout(() => {
      this.props.resetWinner()
    }, 3000)
    return () => clearTimeout(timer)
  }

  render() {
    return (
      <WinnerContainer>
        <h1 className='bingo-title'>BINGO!</h1>
      </WinnerContainer>
    )
  }
}
