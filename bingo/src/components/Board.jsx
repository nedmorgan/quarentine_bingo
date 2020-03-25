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
    oGroup: oNumbers
  }

  render() {
    return (
      <BoardContainer>
        <BCard numbers={this.state.bGroup} />
        <ICard numbers={this.state.iGroup} />
        <NCard numbers={this.state.nGroup} />
        <GCard numbers={this.state.gGroup} />
        <OCard numbers={this.state.oGroup} />
      </BoardContainer>
    )
  }
}
