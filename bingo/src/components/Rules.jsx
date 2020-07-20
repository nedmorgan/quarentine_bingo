import React, { Component } from 'react'
import { RulesContainer } from '../styles/RulesStyles'

export default class Rules extends Component {
  render() {
    return (
      <div>
        {' '}
        {this.props.haveYouWon ? (
          <div></div>
        ) : (
          <RulesContainer>
            <h1>Rules of BINGO:</h1>
            <ol>
              <li>
                When you start the game select the square in the middle of the N
                column. You get that for free!
              </li>
              <li>
                Rules of the game are dictated by the BINGO Jefe. For example,
                Blackout, Five in a Row, X, or 4 Corners. Select the{' '}
                <b>Game Mode</b> as dictated by the BINGO Jefe.
              </li>
              <li>
                Once a number is called by the BINGO Jefe, click on the circle.
                Duh!
              </li>
              <li>
                Once you have all of the numbers in the row SCREAM OUT for all
                to know you are the WINNER and everyone else is a LOSER!
              </li>
              <li>
                When you want to restart the game select the RESET button. If
                you select the RESET button while the game is currently in play
                it will reset the board and that ain't the BINGO Jefe's fault.
                Don't be a fool.
              </li>
            </ol>
          </RulesContainer>
        )}
      </div>
    )
  }
}
