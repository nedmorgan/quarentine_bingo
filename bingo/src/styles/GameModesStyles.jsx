import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const GameModesContainer = styled.div`
  width: 300px;
  margin-top: 5em;

  .game-modes-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .game-modes-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0.5em;
    font-size: 1.75em;
    color: #484848;
  }

  .bingo-jefe-container {
    margin-top: 2em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  .bingo-ball {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0.5em;
    font-size: 1.75em;
    color: #484848;
    animation: 1s ${fade};
  }

  .shuffle-btn {
    width: 125px;
  }

  .shuffle-btn:nth-child(2) {
    margin-left: 0.2em;
  }

  .button {
    font-family: 'Montserrat', sans-serif;
    float: left;
    height: 42px;
    border: 1px solid #ff5a5f;
    margin: 0 0 3px 0;
    font-weight: bold;
    font-size: 14px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-bottom: 0.25em;
    background-color: #ff5a5f;
    color: #fff;
  }

  .game-modes-btn {
    width: 150px;
  }

  .game-modes-btn:hover,
  .shuffle-btn:hover {
    background-color: #ff7e82;
    cursor: pointer;
  }

  .game-modes-btn:active,
  .five-mode,
  .x-mode,
  .blackout-mode,
  .four-mode {
    background-color: #fff;
    color: #ff5a5f;
  }

  @media only screen and (max-width: 600px) {
    background-color: #dedddd;
    margin-top: 0.5em;
    width: 100%;

    .bingo-jefe-container {
      margin-top: 0.5em;
    }
    .game-modes-title {
      padding-bottom: 0.2em;
    }

    .game-modes-div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .game-modes-btn:nth-child(1),
    .game-modes-btn:nth-child(3) {
      margin-right: 0.2em;
    }
  }
`
