import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Banner from "./components/banner/Banner";
import News from "./components/news/News";
import Collage from "./components/collage/Collage";
import Vacancy from "./components/vacancy/Vacancy";
import Footer from "./components/footer/Footer";
import './css/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName='appLoad'
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}>
          <Banner/>
          <News/>
          <Collage/>
          <Vacancy/>
          <Footer/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;