import React, { Component } from 'react'
import { CardContainer } from '../styles/CardStyles'
import Loader from 'react-loader-spinner'

export default class ICard extends Component {
  state = {}

  render() {
    return (
      <CardContainer>
        <div className='title-card-letter'>
          <h1>I</h1>
        </div>
        <div className='card'>
          {this.props.displayNumbers ? (
            this.props.gameNumbers.map((num, i) => {
              return (
                <div
                  key={`I${i}`}
                  onClick={(e) => this.props.selected(e, `I${i}`)}
                  className={
                    'game-square ' +
                    (this.props.selectedCards.includes(`I${i}`)
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
