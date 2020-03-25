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
    border: 0.25rem solid #0d355a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    border-radius: 50%;
    margin-bottom: 5px;
    color: firebrick;
  }

  h1 {
    margin-top: 0;
  }

  .cover-square {
    background-color: black;
    color: white;
  }
`
