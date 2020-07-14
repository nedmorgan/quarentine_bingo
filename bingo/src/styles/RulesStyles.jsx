import styled from 'styled-components'

export const RulesContainer = styled.div`
  width: 300px;
  height: auto;
  font-family: 'Montserrat', sans-serif;
  margin-top: 7em;

  h2 {
    margin: 0;
    text-decoration: underline;
  }

  li {
    text-align: left;
    margin-top: 0.2em;
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: auto;
    margin-left: 0;
    position: inherit;
    margin-top: 0;

    ol {
      padding-left: 2em;
      padding-right: 2em;
      padding-bottom: 1em;
      margin-bottom: 0;
      background-color: #dedddd;
    }

    li {
      font-size: 0.75em;
    }
  }
`
