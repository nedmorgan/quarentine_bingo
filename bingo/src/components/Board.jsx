import React, { Component } from 'react'
import { BoardContainer } from '../styles/BoardStyles'
import BCard from './BCard'
import ICard from './ICard'
import NCard from './NCard'
import GCard from './GCard'
import OCard from './OCard'
import Reset from './Reset'

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
    displayNumbers: false,
    selectedCards: []
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

  isSelected = (e, item) => {
    e.preventDefault()
    let selectedCards = [...this.state.selectedCards]
    selectedCards.push(item)
    this.setState({ selectedCards })
  }

  resetGameBoard = e => {
    e.preventDefault()
    let resetNumbers = [...this.state.selectedCards]
    resetNumbers = []
    this.setState({ selectedCards: resetNumbers, displayNumbers: false })
    this.componentDidMount()
  }

  render() {
    return (
      <div>
        <Reset resetGame={this.resetGameBoard} />
        <BoardContainer>
          <BCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.B} selected={this.isSelected} selectedCards={this.state.selectedCards} />
          <ICard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.I} selected={this.isSelected} selectedCards={this.state.selectedCards} />
          <NCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.N} selected={this.isSelected} selectedCards={this.state.selectedCards} />
          <GCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.G} selected={this.isSelected} selectedCards={this.state.selectedCards} />
          <OCard displayNumbers={this.state.displayNumbers} gameNumbers={this.state.gameCards.O} selected={this.isSelected} selectedCards={this.state.selectedCards} />
        </BoardContainer>
      </div>
    )
  }
}
