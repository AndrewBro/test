import React, { Component } from 'react';
import './burger.scss';

class Burger extends Component {
  render() {
    return (
      <nav role='navigation'>
        <ul className='navigation'>
          <li><a href='https://www.google.com.ua'>About Us</a></li>
          <li><a href='https://www.google.com.ua'>Company</a></li>
          <li><a href='https://www.google.com.ua'>Careers</a></li>
          <li><a href='https://www.google.com.ua'>Contacts</a></li>
        </ul>
      </nav>
    );
  }
}

export default Burger;