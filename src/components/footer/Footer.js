import React, { Component } from 'react';
// import footerBg from './../../images/footer.png';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <section className='footer'>
        <div className='footer-wrap'>
          <h2 className='footer-title'>Sign up for newsleter!</h2>
          <p className='footer-description'>Stay informed of the last company news</p>
          <form className='form'>
            <input type='text' placeholder='Your email' className='form-email'/>
            <input type='submit' value='Subscribe' className='form-submit'/>
          </form>
        </div>
      </section>
    );
  }
}

export default Footer;