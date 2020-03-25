import React, { Component } from 'react'
import { CardContainer } from '../styles/CardStyles'
import Loader from 'react-loader-spinner'

export default class GCard extends Component {
  state = {
    gameNumbers: [],
    displayNumbers: false
  }

  getRandomNumber = arr => {
    let gameNumbers = []
    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * 15)
      gameNumbers.push(arr[randomNumber])
    }
    const distinctNumbers = [...new Set(gameNumbers)]
    if (distinctNumbers.length === 5) {
      this.setState({ gameNumbers: gameNumbers, displayNumbers: true })
    } else {
      this.getRandomNumber(this.props.numbers)
    }
  }

  componentDidMount() {
    this.getRandomNumber(this.props.numbers)
  }

  render() {
    return (
      <CardContainer>
        <div>
          <h1>G</h1>
        </div>
        <div className='card'>
          {this.state.displayNumbers ? (
            this.state.gameNumbers.map(num => {
              return (
                <div className='game-square'>
                  <p>{num}</p>
                </div>
              )
            })
          ) : (
            <Loader type='Oval' color='black' height={25} width={25} />
          )}
        </div>
      </CardContainer>
    )
  }
}
