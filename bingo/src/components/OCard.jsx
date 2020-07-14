import React, { Component } from 'react'
import { CardContainer } from '../styles/CardStyles'
import Loader from 'react-loader-spinner'

export default class OCard extends Component {
  state = {}

  render() {
    return (
      <CardContainer>
        <div className='title-card-letter'>
          <h1>O</h1>
        </div>
        <div className='card'>
          {this.props.displayNumbers ? (
            this.props.gameNumbers.map((num, i) => {
              return (
                <div
                  key={`O${i}`}
                  onClick={(e) => this.props.selected(e, `O${i}`)}
                  className={
                    'game-square ' +
                    (this.props.selectedCards.includes(`O${i}`)
                      ? 'cover-square'
                      : null)
                  }
                >
                  {num}
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
