import styled from 'styled-components'

export const ResetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .reset-btn {
    font-family: 'Montserrat', sans-serif;
    float: left;
    width: 150px;
    height: 42px;
    border: 1px solid #ff5a5f;
    margin: 0 0 3px 0;
    background-color: #ff5a5f;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  .reset-btn:hover {
    background-color: #ff7e82;
    cursor: pointer;
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
