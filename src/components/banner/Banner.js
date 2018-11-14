import React, { Component } from 'react';
import './banner.scss';
import layers from "./../../images/layers.svg";
import clock from "./../../images/clock.svg";
import star from "./../../images/star.svg";
import musicPlayer from "./../../images/music-player.svg";
import house from "./../../images/house.svg";
import banner from "./../../images/banner.png";

class Banner extends Component {
  render() {
    return (
      <section className="banner">
        <img src={banner} alt="banner" className='banner-img'/>
        <div className="banner-content">

          <div className="banner-header">
            <div className="banner-nav">
              <a href="#" className="banner-logo">
                <img src={layers} alt="logo"/>
              </a>
              <nav className="navigation">
                <a href="#">About Us</a>
                <a href="#">Company</a>
                <a href="#">Careers</a>
                <a href="#">Contacts</a>
              </nav>
            </div>
            <div className="banner-auth">
              <button className="banner-auth-button">Log in</button>
              <button className="banner-auth-button">sing up</button>
            </div>  
          </div>

          <div className="banner-title">
            <h1>Stu Unger Rise And Fall Of A Poker Genius</h1>
            <h3>V7 Digital Photo Printing</h3>
          </div>

          <div className="banner-options">
            <ul className="banner-options-list">
              <li>
                <img src={clock} alt=""/>
                <span>The Skinny On Lcd Monitors</span>
              </li>
              <li>
                <img src={star} alt=""/>
                <span>Guidelines For Inkjet Cartridge Refill</span>
              </li>
              <li>
                <img src={musicPlayer} alt=""/>
                <span>Do A Sporting Stag Do In Birmingham</span>
              </li>
              <li>
                <img src={house} alt=""/>
                <span>Your Computer Usage </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;