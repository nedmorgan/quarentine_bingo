import styled from 'styled-components'

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
    border: 0.25rem solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
  }

  h1 {
    margin-top: 0;
  }

  .cover-square {
    background-color: black;
    color: white;
  }
`
