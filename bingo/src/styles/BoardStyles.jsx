import styled from 'styled-components'

export const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 475px;
  margin-bottom: 4em;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    height: auto;
    width: auto;
    margin-top: 0.5em;
    margin-bottom: 1em;
  }
`
