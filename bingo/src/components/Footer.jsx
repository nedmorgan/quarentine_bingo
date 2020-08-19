import React, { Component } from 'react'
import { FooterContainer } from '../styles/FooterStyles'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {this.props.haveYouWon ? (
          <div></div>
        ) : (
          <FooterContainer>
            <footer className='footer'>
              <div>
                <div className='text-container'>
                  Designed By:
                  <a href='https://nedmorgan.me/' target='_blank' rel='noopener noreferrer'>
                    {' '}
                    Ned Morgan
                  </a>
                </div>
              </div>
            </footer>
          </FooterContainer>
        )}
      </div>
    )
  }
}
