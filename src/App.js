import React, { Component } from 'react';
import Banner from './components/banner/Banner';
import News from './components/news/News';
import Collage from './components/collage/Collage';
import Vacancy from './components/vacancy/Vacancy';
import Footer from './components/footer/Footer';
import './css/main.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Banner/>
        <News/>
        <Collage/>
        <Vacancy/>
        <Footer/>
      </div>
    );
  }
}

export default App;
