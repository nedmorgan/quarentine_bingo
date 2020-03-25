import React, { Component } from 'react'
import { CardContainer } from '../styles/CardStyles'
import Loader from 'react-loader-spinner'

export default class BCard extends Component {
  state = {}

  render() {
    return (
      <CardContainer>
        <div>
          <h1>B</h1>
        </div>
        <div className='card'>
          {this.props.displayNumbers ? (
            this.props.gameNumbers.map((num, i) => {
              return (
                <div key={`B${i}`} onClick={e => this.props.selected(e, `B${i}`)} className={'game-square ' + (this.props.selectedCards.includes(`B${i}`) ? 'cover-square' : null)}>
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
