import styled, { keyframes } from 'styled-components'
import { zoomIn } from 'react-animations'

export const zoom = keyframes`${zoomIn}`

export const WinnerContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  width: 100%;
  animation: 1s ${zoom};

  .bingo-title {
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0.25em;
    font-size: 10em;
    color: #ff5a5f;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    .bingo-title {
      font-size: 5em;
    }
  }
`
