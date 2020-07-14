import styled, { keyframes } from 'styled-components'
import { swing, fadeIn } from 'react-animations'

export const swingIn = keyframes`${swing}`
export const fade = keyframes`${fadeIn}`

export const CardContainer = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    width: 90px;
    height: 500px;
  }

  .game-square {
    width: 80px;
    height: 80px;
    border: 0.25rem solid #484848;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5em;
    border-radius: 50%;
    margin-bottom: 5px;
    color: #ff5a5f;
    animation: 1s ${swingIn};
    font-weight: 700;
  }

  .game-square:hover {
    cursor: pointer;
  }

  h1 {
    margin-top: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 0;
    color: #484848;
  }

  .cover-square {
    background-color: #484848;
    color: #ff5a5f;
    animation: 0.6s ${fade};
  }

  @media only screen and (max-width: 600px) {
    .card {
      height: auto;
      width: auto;
    }

    .game-square {
      width: 50px;
      height: 50px;
      font-size: 15px;
    }
  }
`
