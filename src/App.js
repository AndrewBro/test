import React, { Component } from 'react';
import Banner from "./components/banner/Banner";
import Gallery from "./components/gallery/Gallery";
import './css/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <Gallery/>
      </div>
    );
  }
}

export default App;
