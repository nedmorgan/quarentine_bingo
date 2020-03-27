import styled from 'styled-components'

export const ResetContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 1em;
  padding-top: 0.5em;

  .myButton {
    box-shadow: 0px 2px 0px 2px #9fb4f2;
    background: linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
    background-color: #7892c2;
    border-radius: 17px;
    border: 1px solid #4e6096;
    display: inline-block;
    cursor: pointer;
    color: whitesmoke;
    font-family: Arial;
    font-size: 20px;
    padding: 12px 37px;
    text-decoration: none;
    text-shadow: 0px 0px 0px #283966;
    font-weight: bold;
  }
  .myButton:hover {
    background: linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
    background-color: #476e9e;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-bottom: 1em;
    position: inherit;
    padding-top: 0;
  }
`
