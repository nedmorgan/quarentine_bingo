import styled from 'styled-components'

export const RulesContainer = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  font-family: 'Roboto', sans-serif;
  margin-left: 2em;

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
    margin-bottom: 4em;

    ol {
      padding-left: 2em;
      padding-right: 2em;
    }

    li {
      font-size: 0.75em;
    }
  }
`
