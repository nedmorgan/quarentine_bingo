import React, { Component } from 'react'
import { ResetContainer } from '../styles/ResetStyles'

export default class Reset extends Component {
  render() {
    return (
      <ResetContainer>
        <button className='myButton' onClick={e => this.props.resetGame(e)}>
          RESET
        </button>
      </ResetContainer>
    )
  }
}
