import React, { Component } from 'react';
// import footerBg from './../../images/footer.png';
import './footer.scss';


class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      email : '',
      isValid: false,
      touched: false
    }
  };

  onChange = (e) => {
    let mail = e.target.value;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(mail)) {
      this.setState({
        email: mail,
        isValid: true
      });
    } else {
      this.setState({
        email: mail,
        isValid: false
      });
    }
  };

  onBlur = (e) => {
    this.setState({
      touched: true
    });
  };

  render() {
    return (
      <section className='footer'>
        <div className='footer-wrap'>
          <h2 className='footer-title'>Sign up for newsletter!</h2>
          <p className='footer-description'>Stay informed of the last company news</p>
          <form className='form'>
            <span className='validation-error'>
              {
                (!this.state.isValid && this.state.touched) ?
                  `Yo! Invalid email` : ``
              }
            </span>
            <input type='text'
                   placeholder='Your email'
                   className='form-email'
                   onChange={this.onChange}
                   onBlur={this.onBlur}
                   id='input-email'/>
            <input type='submit' value='Subscribe' className='form-submit'/>
          </form>
        </div>
      </section>
    );
  }
}

export default Footer;