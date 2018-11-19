import React, { Component } from 'react';
import './menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav role='navigation'>
        <div id='menuToggle'>
          <input type='checkbox' />
          <span></span>
          <span></span>
          <span></span>
          <ul id='menu' className='navigation'>
            <li><a href='https://www.google.com.ua'>About Us</a></li>
            <li><a href='https://www.google.com.ua'>Company</a></li>
            <li><a href='https://www.google.com.ua'>Careers</a></li>
            <li><a href='https://www.google.com.ua'>Contacts</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;