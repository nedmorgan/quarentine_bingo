import React, { Component } from 'react'
import { BoardContainer } from '../styles/BoardStyles'
import BCard from './BCard'
import ICard from './ICard'
import NCard from './NCard'
import GCard from './GCard'
import OCard from './OCard'

const bNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
const iNumbers = ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
const nNumbers = ['31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
const gNumbers = ['46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60']
const oNumbers = ['61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75']

export default class Board extends Component {
  state = {
    bGroup: bNumbers,
    iGroup: iNumbers,
    nGroup: nNumbers,
    gGroup: gNumbers,
    oGroup: oNumbers,
    gameCards: {},
    displayNumbers: false
  }

  async componentDidMount() {
    let bResponse = await this.getRandomNumber(bNumbers, 'B')
    let iResponse = await this.getRandomNumber(iNumbers, 'I')
    let nResponse = await this.getRandomNumber(nNumbers, 'N')
    let gResponse = await this.getRandomNumber(gNumbers, 'G')
    let oResponse = await this.getRandomNumber(oNumbers, 'O')
    this.setState({ displayNumbers: true })
  }

  getRandomNumber = (arr, group) => {
    let gameNumbers = []
    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * 15)
      gameNumbers.push(arr[randomNumber])
    }
    const distinctNumbers = [...new Set(gameNumbers)]
    if (distinctNumbers.length === 5) {
      let gamePlay = { ...this.state.gameCards }
      gamePlay[group] = gameNumbers
      this.setState({ gameCards: gamePlay })
    } else {
      this.getRandomNumber(arr, group)
    }
  }

  render() {
    return (
      <BoardContainer>
        <BCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.B} />
        <ICard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.I} />
        <NCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.N} />
        <GCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.G} />
        <OCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.O} />
      </BoardContainer>
    )
  }
}
