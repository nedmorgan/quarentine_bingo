import styled from 'styled-components'

export const GameModesContainer = styled.div`
  width: 300px;
  margin-top: 7em;

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

  .button {
    font-family: 'Montserrat', sans-serif;
    float: left;
    width: 150px;
    height: 42px;
    border: 1px solid #ff5a5f;
    margin: 0 0 3px 0;
    font-weight: bold;
    font-size: 14px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    margin-bottom: 0.25em;
  }

  .game-modes-btn {
    background-color: #ff5a5f;
    color: #fff;
  }

  .game-modes-btn:hover {
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
    margin-top: 0.5em;
    width: 100%;

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
