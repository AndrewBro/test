import React, { Component } from 'react';
import Banner from "./components/banner/Banner";
import News from "./components/news/News";
import Colage from "./components/colage/Colage";
import Vacancy from "./components/vacancy/Vacancy";
import './css/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
        <News/>
        <Colage/>
        <Vacancy/>
      </div>
    );
  }
}

export default App;
