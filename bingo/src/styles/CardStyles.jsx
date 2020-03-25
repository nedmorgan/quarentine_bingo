import styled, { keyframes } from 'styled-components'
import { swing, fadeIn } from 'react-animations'

export const swingIn = keyframes`${swing}`
export const fade = keyframes`${fadeIn}`

export const CardContainer = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 500px;
  }

  .game-square {
    width: 100px;
    height: 100px;
    border: 0.25rem solid #0d355a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    border-radius: 50%;
    margin-bottom: 5px;
    color: firebrick;
    animation: 1s ${swingIn};
  }

  h1 {
    margin-top: 0;
  }

  .cover-square {
    background-color: black;
    color: white;
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
      font-size: 25px;
    }
  }
`
