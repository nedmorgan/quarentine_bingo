import styled from 'styled-components'

export const BoardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 600px;
  height: 600px;
  margin-bottom: 4em;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    height: auto;
    width: auto;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
`
