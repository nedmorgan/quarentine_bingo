import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #dedddd;
  bottom: 0;
  width: 100%;
  position: relative;

  footer {
    margin-top: 0.75vw;
    padding-bottom: 0.5em;
  }

  .text-container {
    color: #484848;
    font-weight: bold;
  }

  div,
  a {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: #ff5a5f;
  }

  a:hover {
    cursor: pointer;
  }
`
