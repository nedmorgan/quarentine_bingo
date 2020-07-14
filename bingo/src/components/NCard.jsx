import React, { Component } from 'react'
import { CardContainer } from '../styles/CardStyles'
import Loader from 'react-loader-spinner'

export default class NCard extends Component {
  state = {}

  render() {
    return (
      <CardContainer>
        <div className='title-card-letter'>
          <h1>N</h1>
        </div>
        <div className='card'>
          {this.props.displayNumbers ? (
            this.props.gameNumbers.map((num, i) => {
              return (
                <div
                  key={`N${i}`}
                  onClick={(e) => this.props.selected(e, `N${i}`)}
                  className={
                    'game-square ' +
                    (this.props.selectedCards.includes(`N${i}`)
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
