import React, { Component } from 'react';
import settings from "./../../images/settings.svg";
import like from "./../../images/like.svg";
import phoneCall from "./../../images/phone-call.svg";
import envelope from "./../../images/envelope.svg";
import placeholder from "./../../images/placeholder.svg";
import shoppingCart from "./../../images/shopping-cart.svg";
import './vacancy.scss';

class Vacancy extends Component {
  render() {
    let images = [settings, like, phoneCall, envelope, placeholder, shoppingCart];

    return (
      <section className='vacancy'>
        <h2 className='vacancy-title section-title'>Hot vacancies</h2>
        <ul>
          <li>
            <a href="https://www.google.com.ua">
              <img src={settings} alt='' />
              <div className="vacancy-desc">
                <span>Lorem, ipsum dolor.</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing </h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.google.com.ua">
              <img src={shoppingCart} alt="" />
              <div className="vacancy-desc">
                <span>Lorem, ipsum dolor.</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing </h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.google.com.ua">
              <img src={placeholder} alt="" />
              <div className="vacancy-desc">
                <span>Lorem, ipsum dolor.</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing </h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.google.com.ua">
              <img src={like} alt="" />
              <div className="vacancy-desc">
                <span>Lorem, ipsum dolor.</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing </h5>
                <p>Lorem ipsum dolor sit.</p>
              </div></a>
          </li>
          <li>
            <a href="https://www.google.com.ua">
              <img src={phoneCall} alt="" />
              <div className="vacancy-desc">
                <span>Lorem, ipsum dolor.</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing </h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.google.com.ua">
              <img src={envelope} alt="" />
              <div className="vacancy-desc">
                <span>Lorem, ipsum dolor.</span>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing </h5>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
        </ul>

        <div className="more-vacancy more">
          <button onClick={this.morePosts}
            className="button">
            More Vacancies</button>
        </div>
      </section>
    );
  }
}

export default Vacancy;