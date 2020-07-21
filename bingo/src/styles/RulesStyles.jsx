import styled from 'styled-components'

export const RulesContainer = styled.div`
  width: 300px;
  height: auto;
  font-family: 'Montserrat', sans-serif;
  margin-top: 5em;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    font-size: 1.75em;
    color: #484848;
  }

  li {
    text-align: left;
    margin-top: 0.2em;
  }

  @media only screen and (max-width: 600px) {
    background-color: #dedddd;
    bottom: 0;
    width: auto;
    margin-left: 0;
    position: inherit;
    margin-top: 0;

    h1 {
      padding-bottom: 0;
    }

    ol {
      padding-left: 2em;
      padding-right: 2em;
      padding-bottom: 1em;
      margin-top: 0;
      margin-bottom: 0;
      background-color: #dedddd;
    }

    li {
      font-size: 0.75em;
    }
  }
`
