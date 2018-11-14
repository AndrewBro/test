import React, { Component } from 'react';
import Banner from "./components/banner/Banner";
import './css/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
      </div>
    );
  }
}

export default App;
