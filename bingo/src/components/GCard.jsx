import React, { Component } from 'react'
import { CardContainer } from '../styles/CardStyles'
import Loader from 'react-loader-spinner'

export default class GCard extends Component {
  state = {}

  render() {
    return (
      <CardContainer>
        <div className='title-card-letter'>
          <h1>G</h1>
        </div>
        <div className='card'>
          {this.props.displayNumbers ? (
            this.props.gameNumbers.map((num, i) => {
              return (
                <div
                  key={`G${i}`}
                  onClick={(e) => this.props.selected(e, `G${i}`)}
                  className={
                    'game-square ' +
                    (this.props.selectedCards.includes(`G${i}`)
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
